import "../styles/globals.css";
import type React from "react";
import { Inter } from "next/font/google";

import { GlobalStoreProvider } from "@/components/provider/global-store.provider";
import { AppStoreProvider } from "@/components/nano";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Company Name - Digital Solutions",
  description:
    "We create innovative digital solutions for businesses worldwide.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppStoreProvider>
          <GlobalStoreProvider>{children}</GlobalStoreProvider>
        </AppStoreProvider>
      </body>
    </html>
  );
}
