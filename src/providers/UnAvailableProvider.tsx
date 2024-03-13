import { headers } from "next/headers";
import { ReactNode } from "react";

import { MobileUnavailable } from "@/components/MobileUnavailable";

const UnAvailableProvider = ({ children }: { children: ReactNode }) => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  const isMobileView = userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
  );

  if (isMobileView) return <MobileUnavailable />;

  return <>{children}</>;
};

export default UnAvailableProvider;
