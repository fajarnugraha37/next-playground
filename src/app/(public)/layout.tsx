import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App",
  description: "by create next app",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
