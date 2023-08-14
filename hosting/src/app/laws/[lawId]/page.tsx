import LawDescription from "@/components/combineUi/laws/id/LawDescription";
import LawsReactionList from "@/components/combineUi/laws/id/LawsReactionList";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col flex-1">
      <div className="w-8/12 h-full">
        <LawDescription />
      </div>
      <div className="w-4/12 fixed right-0 h-full">
        <LawsReactionList />
      </div>
    </main>
  );
}
