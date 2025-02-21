import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lifebanner from "./Lifebanner";
import Wedoitlife from "./Wedoitlife";
import Typesofhealth from "./Typesofhealth";
import State from "./States";
import CTA from "./CTA";
import Plans from "./Plans";
import HealthBanner from "./Healthbanner";
import pngegg from "../public/images/pngegg.png";
import CoverNotHealth from "./CoverNotHealth"
import List from './List'

const GeneralInsurance = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS
  }, []);

  return (
    <>
      <div className="mt-20"></div>
      <HealthBanner />

      <section className="py-12 px-6 md:px-5 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side Content */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4"  data-aos="fade-up">
              What is Health Insurance?
            </h2>
            <p className="text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="200">
              Health Insurance is a type of insurance policy that covers medical expenses incurred due to illnesses, injuries, or other health-related conditions. It helps individuals or families manage healthcare costs by covering hospitalization, doctor visits, prescription medications, and other medical treatments.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { id: "1", title: "Cashless Treatment" },
                { id: "2", title: "Tax Benefits" },
                { id: "3", title: "Covers Medical Expenses" },
                { id: "4", title: "Daycare Procedures" },
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-3" data-aos="zoom-in" data-aos-delay={item.id * 200}>
                  <div className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full">
                    {item.id}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-4" data-aos="fade-up" data-aos-delay="400">
              Insurance plans are beneficial as they cover for the financial losses one suffers and provide you financial security in case of contingencies.
            </p>

            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md shadow-md flex items-center gap-2"
              data-aos="zoom-in"
            >
              <span className="text-lg">📩</span> CONTACT US
            </button>
          </div>

          {/* Right Side Image with Labels */}
          <div className="relative lg:w-1/2 flex justify-center">
            <div className="relative w-72 md:w-96">
              <img src={pngegg} alt="General Insurance" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <Wedoitlife />
      <Typesofhealth />
      <Plans />
      <CoverNotHealth/>
      <State />
      {/* <List/> */}
    </>
  );
};

export default GeneralInsurance;
