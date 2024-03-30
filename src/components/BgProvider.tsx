import React, { ReactNode } from "react";
import Wave from "react-wavify";

const BgProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1">
      <Wave
        fill="#eccb8a"
        paused={false}
        options={{
          height: 200,
          amplitude: 100,
          speed: 0.1,
          points: 2,
        }}
        className="fixed h-full w-full"
      />
      <Wave
        fill="#d99e29"
        paused={false}
        options={{
          height: 300,
          amplitude: 150,
          speed: 0.1,
          points: 3,
        }}
        className="fixed z-10 h-full w-full origin-top-left rotate-12"
      />
      <Wave
        fill="#a9946b"
        paused={false}
        options={{
          height: 200,
          amplitude: 150,
          speed: 0.1,
          points: 4,
        }}
        className="fixed z-20 h-full w-full origin-top-right -rotate-45"
      />
      <div className="relative z-20 flex flex-1">{children}</div>
    </div>
  );
};

export default BgProvider;
