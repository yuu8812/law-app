"use client";
import LawDescription from "@/components/combineUi/laws/id/LawDescription";
import LawsReactionList from "@/components/combineUi/laws/id/LawsReactionList";
import useClient from "@/hooks/useClient";

export default function Page() {
  const { client } = useClient();
  return (
    <main className="flex flex-col flex-1">
      <div className="w-8/12 h-full">
        <LawDescription />
      </div>
      <div className="w-4/12 fixed right-0 h-full">
        <LawsReactionList />
      </div>
      <button
        className=""
        onClick={async () => {
          const { data } = await client({ method: "get", url: "" });
          console.log(JSON.stringify(data));
        }}
      >
        click
      </button>
    </main>
  );
}
