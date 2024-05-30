import React from "react";
import { RiCoupon3Fill } from "react-icons/ri";

const VoucherView = () => {
  return (
    <div className="w-full h-full p-20 flex flex-col items-center gap-4">
      <p>
        <RiCoupon3Fill size={60} />
      </p>
      <p className="text-lg">No Voucher available</p>
    </div>
  );
};

export default VoucherView;
