import React from "react";
import { FaCheck } from "react-icons/fa";

const RequiredBadge = ({ error, subMessage }: { error: boolean; subMessage?: string }) => {
  return (
    <div>
      {error ? (
        <div className={`text-red`}>
          必須{subMessage && <span className="pl-2 text-sm">{subMessage}</span>}
        </div>
      ) : (
        <FaCheck color="green" />
      )}
    </div>
  );
};

export default RequiredBadge;
