"use client";

export default function Modal({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 flex-col p-2">{children}</div>;
}
