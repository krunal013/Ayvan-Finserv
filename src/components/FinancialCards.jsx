import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import the AOS CSS
import EMICalculator from './SIPCalculator';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can set the duration of the animation
      once: false, // Animation happens only once
    });
  }, []);

  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Financial goals and milestones</h2>
      <p className="mb-12 text-lg text-gray-500">A structured and disciplined advisory approach to meet your desired</p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div
            className="w-full mb-10 sm:mb-0 sm:w-1/2"
            data-aos="fade-up" // AOS animation added here
          >
            <div className="relative h-full ml-0 mr-0 sm:mr-10 hover:scale-105 transition-transform">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Mutual Fund</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">
                  Professionally managed funds by asset management companies and fund houses that pool investments from several individuals with the same investment objective.
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2"
            data-aos="fade-up" // AOS animation added here
          >
            <div className="relative h-full ml-0 md:mr-10 hover:scale-105 transition-transform">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">General Insurance</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">
                  Secure yourself financially from any type of unforeseeable events regarding motor vehicle, houses, health, and travel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div
            className="w-full mb-10 sm:mb-0 sm:w-1/2"
            data-aos="fade-up" // AOS animation added here
          >
            <div className="relative h-full ml-0 mr-0 sm:mr-10 hover:scale-105 transition-transform">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Life Insurance</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                <p className="mb-2 text-gray-600">
                  Range of life insurance solutions for your family’s financial security and keeping you financially prepared for life's uncertainties.
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2"
            data-aos="fade-up" // AOS animation added here
          >
            <div className="relative h-full ml-0 mr-0 sm:mr-10 hover:scale-105 transition-transform">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-red-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Fixed Deposits</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                <p className="mb-2 text-gray-600">
                  Earn greater return than a regular saving account by investing in an investment scheme provided by post offices, banks, and financial companies.
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 mt-8"
            data-aos="fade-up" // AOS animation added here
          >
            <div className="relative h-full ml-0 md:mr-10 hover:scale-105 transition-transform">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Health Insurance</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">
                  Medical emergencies are unpredictable and expensive, hence having health insurance is not a luxury but a necessity.
                </p>
             
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <EMICalculator/>
    </div>

  );
};

export default Services;
