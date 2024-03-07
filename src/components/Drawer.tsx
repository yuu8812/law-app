"use client";

import { Drawer } from "vaul";
const MyDrawer = ({
  children,
  button,
  width = "w-[600px]",
}: {
  button: JSX.Element;
  children: JSX.Element;
  width?: string;
}) => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className="w-fit">{button}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content
          className={`fixed bottom-0 right-0 z-20 mt-24 flex h-full ${width} flex-col overflow-y-scroll bg-white shadow-2xl`}
        >
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default MyDrawer;
