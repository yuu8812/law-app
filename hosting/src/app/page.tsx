import { redirect } from "next/navigation";

export default function Home() {
  redirect("world");
  return null;
}
