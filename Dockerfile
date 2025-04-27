# Dockerfile for Next.js 15.3 Application

# ---- Base Stage ----
# Use a specific Node.js version (e.g., Node 20 LTS) on Alpine for smaller images.
# Adjust the Node version if your project requires a different one.
FROM node:20-alpine AS base
WORKDIR /app

# ---- Dependencies Stage ----
# Install dependencies first to leverage Docker cache.
FROM base AS deps
# Copy package.json and lock file
COPY package.json package-lock.json* ./
# Install dependencies using 'npm ci' for faster, reproducible builds based on lock file
RUN npm ci

# ---- Builder Stage ----
# Build the Next.js application.
FROM base AS builder
WORKDIR /app
# Copy dependencies from the 'deps' stage
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the application source code
COPY . .

# Set NEXT_TELEMETRY_DISABLED to 1 to disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js application
# Ensure your `next.config.js` has `output: 'standalone'` for this setup.
RUN npm run build

# ---- Runner Stage ----
# Create the final, minimal image to run the application.
FROM base AS runner
WORKDIR /app

# Set environment variables for production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
# Set the port the app will run on (default is 3000)
ENV PORT 3000

# Create a non-root user and group for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone output from the builder stage.
# This includes only the necessary files to run the app.
# Ensure you have `output: 'standalone'` in your next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
# The standalone output generates a server.js file.
CMD ["node", "server.js"]

# --- Notes ---
# 1. Next.js Version: This Dockerfile is generic, but assumes your package.json specifies Next.js 15.3.
# 2. Package Manager: If using Yarn or pnpm, replace 'npm ci' with 'yarn install --frozen-lockfile' or 'pnpm install --frozen-lockfile', and 'npm run build' with 'yarn build' or 'pnpm build'. Adjust package-lock.json copy accordingly (yarn.lock, pnpm-lock.yaml).
# 3. `output: 'standalone'`: This configuration in `next.config.js` is crucial for this Dockerfile to work correctly and produce minimal images.
#    Example `next.config.js`:
#    /** @type {import('next').NextConfig} */
#    const nextConfig = {
#      output: 'standalone',
#      // other configs...
#    };
#    module.exports = nextConfig;
# 4. .dockerignore: Make sure you have a .dockerignore file (see example below) to prevent unnecessary files from being copied into the build context.
