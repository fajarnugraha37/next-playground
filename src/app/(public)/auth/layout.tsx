import { AuthRedirector } from "@/components/store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App",
  description: "by create next app",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthRedirector>{children}</AuthRedirector>;
}
