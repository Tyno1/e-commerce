import React from "react";
import appleStore from "../images/logos/Apple_logo.jpeg";
import googleStore from "../images/logos/Google-Play.jpg";
import iphone from "../images/1576.jpg";

const AppDownload = () => {
  return (
    <div className="download-app bg-white min-h-[70vh] w-[100%] px-4 pt-10 flex flex-col md:flex-row items-center relative">
      <div className="left-section h-full w-full md:w-[40%] text-teal-950 flex flex-col gap-4">
        <h3 className="text-3xl md:text-5xl font-bold leading-tight ">
          Download Our App to get the most out of it
        </h3>
        <p className="text-xs md:text-sm">
          Experience the convenience of managing your health on the go with the
          MediKart mobile app. Whether you need to refill a prescription, browse
          our extensive range of medications, or read customer reviews, the
          MediKart app puts everything you need right at your fingertips.
        </p>
        <div className="app-stores flex items-center justify-center ">
          <button className="w-[40%]">
            <img src={appleStore} alt="" />
          </button>
          <button className="w-[40%]">
            <img src={googleStore} alt="" />
          </button>
        </div>
        <h3></h3>
      </div>
      <div className="right-section w-full md:w-[40%] h-full ml-auto md:absolute bottom-0 right-10">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-contain object-bottom"
            src={iphone}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
