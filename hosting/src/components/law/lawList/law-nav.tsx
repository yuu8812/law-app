import { ComboboxDemo } from "../../ui/comboBox";
import { TableDemo } from "./law-table";
import { FC } from "react";

interface Props {}

const LawListNav: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex flex-col flex-1 border-r bg-background">
      <div className="flex flex-col mini-scroll h-full relative">
        <div className="z-20 sticky top-16 border-b p-2 flex items-center justify-between text-foreground bg-background text-sm font-bold shadow">
          <div className="pl-4">法令</div>
          <ComboboxDemo />
        </div>
        <div className="flex-1 sticky top-0 overflow-scroll max-h-[100vh]">
          <TableDemo />
        </div>
      </div>
    </div>
  );
};

export default LawListNav;
