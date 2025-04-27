import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Next App",
  description: "Blog by create next app",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
