import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col">
      <div className="animate sticky right-2 top-2 self-end  bg-white px-4 py-2">総政治</div>
      {children}
    </div>
  );
}
