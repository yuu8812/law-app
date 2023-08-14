import LawsList from "@/components/combineUi/laws/LawsList";
import LawsSort from "@/components/combineUi/laws/LawsSort";
import LawsSortMobile from "@/components/combineUi/laws/LawsSortMobile";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="w-1/6 fixed h-full border-gray-100 lg:flex hidden">
        <LawsSort />
      </div>
      <div className="block lg:hidden">
        <LawsSortMobile />
      </div>
      <div className="lg:w-5/6 w-full absolute flex-1 right-0 lg:top-0 top-10">
        <LawsList />
      </div>
    </main>
  );
}
