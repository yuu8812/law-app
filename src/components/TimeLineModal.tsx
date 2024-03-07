import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";

import AnimateModal from "@/components/AnimatedModal";
import { useTimelineModal } from "@/hooks/useTimelineModal";

const TimeLineModal = memo(() => {
  const { state, removeModal } = useTimelineModal();

  return (
    <>
      <AnimatePresence>
        {state.state === "open" && state.timeline[0] && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ width: "content-fit", height: "content-fit" }}
          >
            <AnimateModal handleClose={removeModal}>{state.timeline[0].child}</AnimateModal>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

TimeLineModal.displayName = "TimeLineModal";

export default TimeLineModal;
