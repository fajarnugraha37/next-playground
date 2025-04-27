import { ErrorPage } from "@/components/skeleton";

export default async function NotFoundPage() {
  return (
    <>
      <ErrorPage errorCode={404} />
    </>
  );
}
