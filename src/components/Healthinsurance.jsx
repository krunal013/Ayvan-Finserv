import React from "react";
import Lifebanner from "./Lifebanner";
import Wedoitlife from "./Wedoitlife";
import umbrella from "../public/images/general.png";
import Typesoflife from "./Typesoflife"
import State from './States'
import CTA from './CTA'
import round2 from '../public/images/round2.png'
import Plans from "./Plans";
import HealthBanner from "./Healthbanner";
import himage from "../public/images/himage.jpg"

const GeneralInsurance = () => {
  return (
    <>
      <div className="mt-20"></div>
      <HealthBanner />

      <section className="py-12 px-6 md:px-5 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What is Health Insurance ?
            </h2>
            <p className="text-gray-600 mb-6">
            Life insurance is a financial product that provides a lump sum payment (also known as a death benefit) to the policyholder’s beneficiaries in the event of their passing. It is designed to offer financial security and peace of mind, ensuring that loved ones are financially protected even in the absence of the insured person.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { id: "1", title: "Illness protection" },
                { id: "2", title: "Family Support" },
                { id: "3", title: "Savings" },
                { id: "4", title: "Tax advantage" },
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full">
                    {item.id}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-4">
              Insurance plans are beneficial as they cover for the financial
              losses one suffers and provide you financial security in case of
              contingencies.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md shadow-md flex items-center gap-2">
              <span className="text-lg">📩</span> CONTACT US
            </button>
          </div>

          {/* Right Side Image with Labels */}
          <div className="relative lg:w-1/2 flex justify-center">
            <div className="relative w-72 md:w-96">
              {/* Umbrella Image Placeholder */}
              <img
                src={himage}
                alt="General Insurance"
                className="w-full h-auto"
              />

         
            </div>
          </div>
        </div>
          </section>
          
      <Wedoitlife />
      <Typesoflife />
      <Plans/>
      <State />
      

      {/* <CTA/> */}
    </>
  );
};

export default GeneralInsurance;
