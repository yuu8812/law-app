import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center bg-secondary flex-1 relative">
      <Link href="/login">push</Link>
    </main>
  );
}
