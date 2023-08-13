"use client";
import Div100vh from "react-div-100vh";

interface Props {
  children: JSX.Element;
}

const VHClient = ({ children }: Props): React.ReactNode => {
  return <Div100vh className="flex flex-1 w-screen min-h-full">{children}</Div100vh>;
};

export default VHClient;
