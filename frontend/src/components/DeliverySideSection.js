import React from "react";
import { GiCardPickup } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturnLight } from "react-icons/pi";

export default function DeliverySideSection() {
  return (
    <div className="ads-section w-[20%] hidden md:flex flex-col gap-6">
      <div className="delivery bg-teal-900 p-3 h-full w-full flex rounded-2xl flex-col">
        <div className="border-b w-full pb-2">
          <p>DELIVERY & RETURNS</p>
        </div>
        <div className="border-b w-full py-2">
          <p className="font-bold italic text-orange-300">FREE DELIVERY!</p>
          <p className="text-sm">
            Free delivery all around the United Kingdom for orders above £600
          </p>
        </div>
        <div className="w-full py-2 flex flex-col gap-3">
          <p>Choose your location</p>

          <select
            className="bg-teal-950 w-full p-3 rounded"
            name="country"
            id=""
          >
            <option value="united kingdom">United Kingdom</option>
            <option value="nigeria">Nigeria</option>
            <option value="germany">Germany</option>
            <option value="france">France</option>
          </select>

          <select className="bg-teal-950 w-full p-3 rounded" name="city" id="">
            <option value="london">London</option>
            <option value="cardiff">Cardiff</option>
            <option value="manchester">Manchester</option>
            <option value="leads">Leads</option>
          </select>
          <div className=" pick-up flex items-start gap-2">
            <div className="icon">
              <GiCardPickup size={40} />
            </div>
            <div>
              <p className="title">Pickup Station</p>
              <p className="text-[12px]">Delivery Fee 40</p>
              <p className="text-[12px]">
                Arriving at pickup stationn between22 April & 24 April if you
                order now
              </p>
            </div>
          </div>

          <div className="door-devoivery flex items-start gap-2">
            <div className="icon">
              <TbTruckDelivery size={40} />
            </div>
            <div>
              <p className="title">Door Delivery</p>
              <p className="text-[12px]">Delivery Fee 40</p>
              <p className="text-[12px]">
                Arriving at pickup stationn between22 April & 24 April if you
                order now
              </p>
            </div>
          </div>

          <div className="return flex items-start gap-2">
            <div className="icon">
              <PiKeyReturnLight size={40} />
            </div>
            <div>
              <p className="title">Return Policy</p>
              <p className="text-[12px]">
                Free return within 7 days for all eligible items
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery bg-teal-900 p-3 h-full w-full flex rounded-2xl flex-col gap-2git">
        <div className="border-b w-full pb-2">
          <p>SELLER INFORMATON</p>
        </div>
        <p className="font-bold text-orange-300">MediKart</p>
        <p>100% Seller Score</p>
      </div>
    </div>
  );
}
