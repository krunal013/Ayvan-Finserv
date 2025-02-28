import React from "react";
import hbanner from "../../../public/images/portb.png"; // Adjust path as needed

const GeneralBanner = () => {
  return (
    <div className="flex flex-row items-center justify-between mt-20 lg:mt-20 gap-6 min-h-[164px] py-8 px-8 md:px-16 bg-gradient-to-b from-[#dcf1417a] to-white font-sans overflow-hidden">
      <div className=" text-left">
        <h1 className="text-2xl lg:text-4xl font-bold text-orange-500">Portfolio Managment</h1>
        <p className="text-md lg:text-xl text-orange-500 mt-4">
        "The key to making money in stocks is not to get scared out of them."<br/> – Peter Lynch
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
