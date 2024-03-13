"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import DefaultLoading from "@/components/DefaultLoading";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/world");
  }, [router]);

  return <DefaultLoading />;
}
