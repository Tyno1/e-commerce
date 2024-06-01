import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../images/banner.png";

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <div className="call-to-action no-wrap h-72">
      <div className="h-[100%] bg-teal-950 flex flex-col items-center justify-center rounded-lg">
        <img
          className="object-cover object-center h-[100%] w-full relative"
          src={banner}
          alt=""
        />
        <div className="absolute mx-auto flex flex-col items-center w-[50%] text-center">
          <h3 className="font-bold text-xl text-teal-50">
            Up t0 70% off <span className="text-orange-300">Analgesics </span> &{" "}
            <span className="text-orange-300">Anti depressants</span>
          </h3>
          <button
            onClick={() => navigate("/shop")}
            className="font-medium w-72 h-16 border border-2 border-orange-300 bg-teal-900 shadow-xl focus:outline-none text-orange-300 mt-5 rounded-2xl active:bg-teal-900/90 active:text-orange-200"
          >
            Explore Catalogue
          </button>
        </div>
      </div>
    </div>
  );
}
