import React from "react";
import life from '../public/images/life.png'

const GeneralBanner = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 min-h-[164px] py-8 p-16 bg-gradient-to-b from-[#f1484828] to-white font-sans overflow-hidden">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold text-red-600">Life Insurance</h1>
        <p className="text-base text-red-600 mt-4">
        "A small step today, a lifetime of security for tomorrow."
        </p>
        <button
          type="button"
          className="py-3 px-6 text-sm font-semibold bg-white text-red-600 hover:bg-slate-100 rounded-md mt-8"
        >
          Get Started
        </button>
      </div>
      <div className="relative max-md:hidden">
        <img
          src={life}
          alt="Banner Image"
          className="w-66 h-60 -mt-7 right-4  md:absolute  object-cover"
        />
      </div>
    </div>
  );
};

export default GeneralBanner;
