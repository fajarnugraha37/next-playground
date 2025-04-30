import "../styles/globals.css";
import type React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TransitionMain } from "@/components/custom";
import { GlobalStoreProvider } from "@/components/provider/global-store.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Company Name - Digital Solutions",
  description:
    "We create innovative digital solutions for businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalStoreProvider>
            <TransitionMain className="flex-1">
              <div className="flex min-h-screen flex-col">
                <Header />
                {children}
              </div>
            </TransitionMain>
          </GlobalStoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              className="dark:invert ml-6"
              src="/next.svg"
              alt="Next.js logo"
              width={90}
              height={30}
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-6 ml-auto">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center ml-auto md:ml-0">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetHeader hidden={true}>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium p-4 py-12">
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                  <Link href="/about" className="hover:text-primary">
                    About
                  </Link>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
