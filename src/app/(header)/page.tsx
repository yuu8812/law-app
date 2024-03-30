"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import DefaultLoading from "@/components/DefaultLoading";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/world");
  }, [router]);

  return <DefaultLoading />;
}

// "use client";
// import BgProvider from "@/components/BgProvider";

// export default function Home() {
//   return (
//     <div className="flex h-full w-full flex-1">
//       <BgProvider>
//         <div className="flex flex-1 flex-col items-center justify-center"></div>
//       </BgProvider>
//     </div>
//   );
// }
