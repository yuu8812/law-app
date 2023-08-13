import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LawType = ["全法令", "憲法", "法律", "政令", "勅令", "府省令", "規則"];

export default function Page() {
  return (
    <main className="flex flex-col flex-1 w-full">
      <div className="w-full ">
        <Tabs defaultValue={LawType[0]} className="flex">
          <TabsList className="w-auto">
            {LawType.map((item) => {
              return (
                <TabsTrigger className="" value={item} key={item}>
                  {item}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </main>
  );
}
