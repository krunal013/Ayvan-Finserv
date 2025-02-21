import React, { useState } from "react";
import WealthManagement from "./WealthManagement";
import Slider from "./Slider";
import FinancialCards from "./FinancialCards";
import ContactBanner from "./ContactBanner";
import FinancialServices from "./FinancialServices";
import States from "./States";
import List from './List'

const LandingPage = () => {
  return (
    <div className="relative bg-white">
      <Slider />
      <WealthManagement />
      {/* <div className="flex w-full items-center">
        <div className="w-20 lg:w-32 border-b border-gray-300"></div>
        <button className="px-6 py-3 flex items-center bg-white rounded-full shadow-sm border border-gray-300">
          <span className="text-[#ff6b00] text-sm lg:text-2xl  font-semibold leading-relaxed px-2">
            Divider Text
          </span>
        </button>
        <div className="flex-1  border-b border-gray-300"></div>
      </div> */}

      {/* <FinancialCards/> */}
      <FinancialServices />
      <States />
      <List/>
    </div>
  );
};
export default LandingPage;
