import React from "react";
import hbanner from "../public/images/hbanner.png"; // Adjust path as needed

const GeneralBanner = () => {
  return (
    <div className="flex flex-row items-center justify-between lg: gap-6 min-h-[164px] py-8 px-8 md:px-16 bg-gradient-to-b from-[#3feb3f89] to-white font-sans overflow-hidden">
      <div className=" text-left">
        <h1 className="text-2xl lg:text-4xl font-bold text-green-700">Health insurance</h1>
        <p className="text-md lg:text-xl text-green-700 mt-4">
        "Your health is your wealth. Protect it with the right insurance."
        </p>
        <button
          type="button"
          className="px-2 py-2 lg:py-3 lg:px-6 text-sm font-semibold bg-white text-green-600 hover:bg-slate-100 rounded-md mt-8"
        >
          Get Started
        </button>
      </div>
      <div className="flex justify-end">
        <img
          src={hbanner}
          alt="Banner Image"
          className="w-38 h-28 ml-20 md:w-60 md:h-52 object-cover mb-10"
        />
      </div>
    </div>
  );
};

export default GeneralBanner;
