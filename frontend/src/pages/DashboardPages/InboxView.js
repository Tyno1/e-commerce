import React from "react";
import { HiInboxArrowDown } from "react-icons/hi2";

const InboxView = () => {
  return (
    <div className="w-full h-full p-20 flex flex-col items-center gap-4">
      <p>
        <HiInboxArrowDown size={60} />
      </p>
      <p className="text-lg">No inbox available</p>
    </div>
  );
};

export default InboxView;
