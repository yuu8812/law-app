import LawDetailNav from "@/components/law/lawDetail/law-detail-nav";
import LawListNav from "@/components/law/lawList/law-nav";
import { ComboboxDemo } from "@/components/ui/comboBox";

interface RootLayoutProps {
  children: React.ReactNode;
  lawList: React.ReactNode;
  lawDetail: React.ReactNode;
}

const RootLayout = ({ children, lawList, lawDetail }: RootLayoutProps) => {
  return (
    <div className="flex">
      <div className="relative left-0 w-[500px]">
        <LawListNav />
      </div>
      <div className="flex-1">
        <LawDetailNav />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
