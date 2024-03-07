import { useCallback } from "react";
import { useRecoilState } from "recoil";

import { modalTimeLineStore } from "@/store/modalTimelineStore";

export const useTimelineModal = () => {
  const [state, set] = useRecoilState(modalTimeLineStore);

  const removeModal = useCallback(() => {
    set((prev) => ({ timeline: [...prev.timeline.slice(1)], state: "close" }));
    setTimeout(() => {
      set((prev) => ({
        timeline: [...prev.timeline],
        state: prev.timeline.length > 0 ? "open" : "close",
      }));
    }, 500);
  }, [set]);

  const addTimeline = useCallback(
    (timeline: { child: React.ReactNode; key: string }) => {
      set((prev) =>
        !prev.timeline.find((t) => t.key === timeline.key)
          ? {
              timeline: [...prev.timeline, timeline],
              state: "open",
            }
          : prev,
      );
    },
    [set],
  );

  return { state, addTimeline, removeModal };
};
