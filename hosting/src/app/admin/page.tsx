import React from "react";

import { createRawRevision } from "@/admin";

const page = () => {
  return (
    <div className="flex flex-1 items-center justify-center bg-gray-200">
      <form action={createRawRevision} className="h-80 w-80">
        <button type="submit">click here to insert raw revision</button>
      </form>
    </div>
  );
};

export default page;
