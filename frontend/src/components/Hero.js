import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../images/nat122.jpg";

export default function Hero() {
  return (
    <div className="hero w-full h-[95vh] px-10 overflow-hidden pt-40 md:pt-32 mb:20 sm:mb-40 flex items-center justify-between">
      <div className="hero-text w-[100%] md:w-[60%] flex flex-col items-left">
        <p>LONAX & CO brings to you</p>
        <div className="h-0.5 mt-2 w-[30%] dark:bg-orange-400 bg-teal-700"></div>
        <h1 className="text-4xl sm:text-6xl font-bold text-left leading-tight text-teal-950 dark:text-teal-50">
          The World's <br />
          Largest Medication <br /> Catalogue
        </h1>
        <p className="text-justify w-full mt-5">
          Discover a Comprehensive Range of Medications, from Prescription
          Essentials to Over-the-Counter Solutions. Benefit from Expert
          Guidance, Personalized Care, and the Convenience of Seamless Online
          Ordering. Elevate Your Health Journey with Confidence, Backed by the
          Widest Selection and Unrivaled Service.
        </p>
        <button className="font-medium w-52 shadow-lg border border-2 bg-teal-900 dark:bg-teal-950 border-orange-300 text-orange-300 mt-5 rounded-2xl py-3 px-10 focus:outline-none active:bg-teal-800 active:text-orange-300">
          <Link to="/shop"> Start Shopping</Link>
        </button>
      </div>
      <div className="hidden md:block img-container ml-10 w-[40%] h-[100%]">
        <div className="p-2 border rounded-xl h-full border-teal-900 dark:border-orange-300">
          <img
            className="object-cover object-center w-full h-[100%] rounded-lg"
            src={HeroImg}
            alt="hero-img"
          />
        </div>
      </div>
    </div>
  );
}
