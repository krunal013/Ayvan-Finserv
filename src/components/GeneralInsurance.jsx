import React from "react";
import GeneralBanner from "./GeneralBanner";
import HowWeDoIt from "./HowWeDoIt";
import umbrella from "../public/images/general.png";
import Slider from "./SliderCards"
import State from './States'
import CTA from './CTA'
import Plans from './Plans'
import CoveredAndNotCovered from "./CoveredAndNotCovered";

const GeneralInsurance = () => {
  return (
    <>
      <div className="mt-20"></div>
      <GeneralBanner />

      <section className="py-12 px-6 md:px-5 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What is General Insurance ?
            </h2>
            <p className="text-gray-600 mb-6">
              Secure yourself financially for any type of unforeseeable events
              regarding the assets owned, like motor vehicle, house, health, and
              travel. There is a range of general insurance solutions for
              unforeseeable contingencies, damages, and loss of the assets
              owned.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { id: "1", title: "Protection" },
                { id: "2", title: "Security" },
                { id: "3", title: "Coverage" },
                { id: "4", title: "Peace of mind" },
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
                src={umbrella}
                alt="General Insurance"
                className="w-full h-auto"
              />

              {/* Labels */}
              {/* {[
              { title: "Motor Insurance", top: "12%", left: "65%" },
              { title: "Property Insurance", top: "30%", left: "80%" },
              { title: "Health Insurance", top: "50%", left: "85%" },
              { title: "Commercial Insurance", bottom: "10%", left: "80%" },
              { title: "Travel Insurance", bottom: "5%", left: "40%" },
              { title: "Marine Insurance", top: "30%", left: "10%" },
            ].map((item, index) => (
              <span
                key={index}
                className="absolute bg-orange-400 text-black text-sm font-medium px-3 py-1 rounded-full shadow-md"
                style={{
                  top: item.top,
                  bottom: item.bottom,
                  left: item.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {item.title}
              </span>
            ))} */}
            </div>
          </div>
        </div>
          </section>
          
      <HowWeDoIt />
      <Slider />
      <Plans />
      <CoveredAndNotCovered />
      <State />
      {/* <CTA/> */}
    </>
  );
};

export default GeneralInsurance;
