import React from "react";

const CTA = () => {
  return (
    <>
      <div className="w-full mx-auto flex md:items-center max-md:flex-col  px-8 py-4 min-h-[100px] rounded-xl  font-[sans-serif]">
        <p className="text-[#ff6b00] font-bold font-sans text-3xl flex-1">
        Not Finding, what you are looking for ?
        </p>
        <div className="max-md:mt-6">
          <button
            type="button"
            className="bg-white text-orange-500 font-semibold py-3 px-6 rounded text-sm hover:bg-orange-100 md:ml-6"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default CTA;
