"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useAuthState } from "./auth.hook";
import { useLoading } from "../common";
import { usePopup } from "../messaging";

export function AuthGuard({ children }: React.ComponentProps<"div">) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, authError } = useAuthState();
  const { isLoading } = useLoading();
  const { showError, closePopup } = usePopup();

  useEffect(() => {
    console.log('isAuthenticated: ', isAuthenticated, isAuthenticated === false);
    if (isAuthenticated === false) {
      // Redirect to login if not authenticated
      showError("401 Unauthorized", "Please sign in to access this page", {
        text: "Sign in",
        onClick: () =>
          router.push(
            `/auth/sign-in?returnUrl=${encodeURIComponent(pathname)}`
          ),
      });
    } else {
      closePopup();
    }
  }, [isAuthenticated, isLoading, authError, router, pathname, showError]);

  // Show loading state while checking authentication and permissions
  if (isLoading === true || isAuthenticated === false) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="sr-only">Loading</span>
      </div>
    );
  }

  // Render children only if authorized
  return <>{children}</>;
}

export function AuthRedirector({ children }: React.ComponentProps<"div">) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, authError } = useAuthState();
  const { isLoading } = useLoading();

  useEffect(() => {
    if (isAuthenticated) {
      const queryParams = new URLSearchParams(window.location.search ?? "");
      const targetUrl = queryParams.get("returnUrl") ?? "/blogs";
      router.push(targetUrl);
    }
  }, [isAuthenticated, isLoading, authError, router, pathname]);

  // Show loading state while checking authentication and permissions
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="sr-only">Loading</span>
      </div>
    );
  }

  // Render children only if authorized
  return <>{children}</>;
}
