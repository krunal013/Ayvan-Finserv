import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <h1 className="text-center text-4xl font-bold text-gray-900 mb-12">About Us</h1>
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div
              className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
              data-aos="fade-up"
            >
              <img
                className="rounded-xl object-cover transform transition-transform duration-500 hover:scale-105"
                src="https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW52ZXN0bWVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="about Us image"
              />
            </div>
            <div
              className="sm:ml-0 ml-auto"
              data-aos="fade-up"
            >
              <img
                className="rounded-xl object-cover transform transition-transform duration-500 hover:scale-105"
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpbmFuY2lhbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="about Us image"
              />
            </div>
          </div>
          <div
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
            data-aos="fade-left"
          >
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-[#ff6b00] text-4xl font-bold leading-normal lg:text-start text-center">
                Planning your finances for a secured and planned future
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                We strongly aim to align our client’s savings and investments to create long-term wealth with our range of financial products that offer investment solutions. We have years of experience, which helps us to suggest a range of products that suits client's risk appetite, need, and goal.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-[#ff6b00] text-4xl font-bold">330+</h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Retail Investors</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-[#ff6b00]  text-4xl font-bold">125+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Corporate Investors</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-[#ff6b00]  text-4xl font-bold">52+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">NRI Investors</h6>
                </div>
              </div>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-[#ff6b00] hover:scale-105 transition-all duration-700 ease-in-out rounded-lg shadow-md justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;