import { AuthGuard } from "@/components/store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App",
  description: "by create next app",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard>{children}</AuthGuard>;
}
