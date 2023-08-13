"use client";

import { FC } from "react";
import React from "react";
import { IoIosSettings } from "react-icons/io";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../../ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../../ui/sheet";

import { useStaticUserSWR } from "@/hooks/useStaticSwr";
import { cn } from "@/lib/utils";

interface Props {}

const LawType = {
  constitution: "憲法",
  law: "法律",
  ministriesOrdinance: "省令",
  localOrdinance: "条例",
};

const LawTypeArray = ["憲法", "法律", "省令", "条例"];

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";

const NavBar: FC<Props> = (props): JSX.Element => {
  const { user } = useStaticUserSWR();
  return (
    <div className="flex relative flex-1 items-center justify-between h-12 rounded-lg px-4 lg:shadow-md z-20">
      <div className="flex items-center gap-10">
        <div className="font-bold mx-2 text-sm">総政治 [β]</div>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <button className="text-md pr-5">ホーム</button>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal text-sm">法令</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[200px] ">
                  {LawTypeArray.map((component) => (
                    <ListItem key={component} title={component} href={component}>
                      {component}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal text-sm">議論</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {LawTypeArray.map((component) => (
                    <ListItem key={component} title={component} href={component}>
                      {component}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal text-sm">政治家</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Sheet>
        <SheetTrigger>
          <div className="relative top-1 flex gap-4 items-center">
            <div className="text-sm">
              {user.loaded
                ? user.userImpl?.displayName
                  ? user.userImpl?.displayName
                  : "ゲスト"
                : " "}
            </div>
            <IoIosSettings size={24} />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavBar;
