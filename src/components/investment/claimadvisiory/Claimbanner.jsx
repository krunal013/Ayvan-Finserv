import React from "react";
import hbanner from "../../../public/images/claim2.png"; // Adjust path as needed

const GeneralBanner = () => {
  return (
    <div className="flex flex-row items-center justify-between mt-20 lg:mt-20 gap-6 min-h-[164px] py-8 px-8 md:px-16 bg-gradient-to-b from-[#ee8a477a] to-white font-sans overflow-hidden">
      <div className=" text-left">
        <h1 className="text-2xl lg:text-4xl font-bold text-red-700">Claim Advisory</h1>
        <p className="text-md lg:text-xl text-red-700 mt-4">
        "Maximizing Your Claims, Minimizing Your Stress."
        </p>
       
      </div>
      <div className="flex justify-end">
        <img
          src={hbanner}
          alt="Banner Image"
          className="w-36 lg:w-38 h-28 ml-20 md:w-60 md:h-52 object-cover"
        />
      </div>
    </div>
  );
};

export default GeneralBanner;
