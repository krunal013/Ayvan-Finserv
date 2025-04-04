import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRupeeSign } from "react-icons/fa"; // Using a Rupee icon, replace with an image if needed

const InvestmentHighlight = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div
      className="flex justify-center items-center py-8 px-4"
      data-aos="fade-up"
    >
      <div
        className="bg-[#ff6b00] text-white text-xs lg:text-lg font-semibold flex items-center gap-3 sm:gap-5 px-6 py-4 sm:px-8 sm:py-5 rounded-full shadow-lg w-full max-w-2xl transition-transform duration-300 hover:scale-105"
        data-aos="zoom-in"
      >
        {/* Icon on the Left */}
        {/* <FaRupeeSign className="text-white text-4xl lg:text-3xl" /> */}

        {/* Text Content */}
        <p className="text-center tracking-tight">
          Our customer base is spread all over India. They have invested over
          ₹40+ crores on our platform in Mutual Funds and other investment
          products.
        </p>
      </div>
    </div>
  );
};

export default InvestmentHighlight;
