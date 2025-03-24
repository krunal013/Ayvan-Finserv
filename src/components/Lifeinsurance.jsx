import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lifebanner from "./Lifebanner";
import Wedoitlife from "./Wedoitlife";
import Typesoflife from "./Typesoflife";
import State from "./States";
import CTA from "./CTA";
import round2 from "../public/images/round2.png";
import Plans from "./Plans";
import CoverNotlife from "./CoverNotlife";
import List from './List';

const GeneralInsurance = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  },);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  },);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <>
      <div className="mt-20"></div>
      <Lifebanner />

      <section className="py-12 px-6 md:px-5 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side Content */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              What is Life Insurance ?
            </h2>
            <p className="text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="200">
              Life insurance is a financial product that provides a lump sum payment (also known as a death benefit) to the policyholder’s beneficiaries in the event of their passing. It is designed to offer financial security and peace of mind, ensuring that loved ones are financially protected even in the absence of the insured person.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { id: "1", title: "Illness protection" },
                { id: "2", title: "Family Support" },
                { id: "3", title: "Savings" },
                { id: "4", title: "Tax advantage" },
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
              Insurance plans are beneficial as they cover for the financial
              losses one suffers and provide you financial security in case of
              contingencies.
            </p>

            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md shadow-md flex items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span className="text-lg">📩</span> CONTACT US
            </button>
          </div>

          {/* Right Side Image */}
          <div className="relative lg:w-1/2 flex justify-center">
            <div className="relative w-72 md:w-96">
              <img src={round2} alt="Life Insurance" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <Wedoitlife />
      <Typesoflife />
      <Plans />
      <CoverNotlife />
      <State />
      {/* <List/> */}
      {/* <CTA/> */}
    </>
  );
};

export default GeneralInsurance;