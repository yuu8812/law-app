import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const { deltaY } = event;

      if (deltaY > 0) {
        setScrollDirection("down");
      } else if (deltaY < 0) {
        setScrollDirection("up");
      }
    };
    window.addEventListener("wheel", handleScroll);

    // コンポーネントがアンマウントされたときにイベントリスナーをクリーンアップ
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  <div className="" onScroll={(e) => console.log(e)}></div>;

  return scrollDirection;
};

export default useScrollDirection;
