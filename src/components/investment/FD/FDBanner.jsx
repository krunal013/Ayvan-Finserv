import React from "react";
import hbanner from "../../../public/images/fd2.png"; // Adjust path as needed

const GeneralBanner = () => {
  return (
    <div className="flex flex-row items-center justify-between mt-20 lg:mt-20 gap-6 min-h-[164px] py-8 px-8 md:px-16 bg-gradient-to-b from-[#528ade7a] to-white font-sans overflow-hidden">
      <div className=" text-left">
        <h1 className="text-xl lg:text-4xl font-bold text-blue-800">Fixed Deposit</h1>
        <p className="text-xs lg:text-xl text-blue-800 mt-4">
        "Let your money grow while you rest."
        </p>
        <button
          type="button"
          className="px-2 py-2 lg:py-3 lg:px-6 text-sm font-semibold bg-white text-blue-800 hover:bg-slate-100 rounded-md mt-8"
        >
          Get Started
        </button>
      </div>
      <div className="flex justify-end">
        <img
          src={hbanner}
          alt="Banner Image"
          className="w-38 h-28 ml-20 md:w-60 md:h-52 object-cover"
        />
      </div>
    </div>
  );
};

export default GeneralBanner;
