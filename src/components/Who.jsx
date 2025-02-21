import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OnlinePresence = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans bg-white p-4">
      <div className="md:max-w-5xl max-w-xl mx-auto">
        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-left" data-aos="fade-up">
            <h2 className="text-orange-500 text-2xl font-bold mb-4">WHO ARE WE</h2>
            <p className="mb-4 text-sm text-gray-500">
              Ayvan Finserv is your trusted partner in wealth management, offering strategic financial planning to help you achieve your life goals. With a diverse range of investment products, we provide tailored, unbiased solutions backed by in-depth analysis and expertise.
            </p>
            <p className="text-sm text-gray-500">
              We believe that structured and disciplined financial planning is the key to long-term success. Our comprehensive investment solutions, including both proprietary and non-proprietary products, are designed to align with your unique financial goals, ensuring stability and growth for your future.
            </p>
          </div>
          <div className="max-h-72">
            <img
              src="https://img.freepik.com/free-vector/family-protection-concept-illustration_114360-21637.jpg?t=st=1739960472~exp=1739964072~hmac=65c93b6af12d1e6e5eb77ce7d489759b6d349b3ffd5a0b3c1346e39ac9aae65f&w=740"
              alt="Management Analysis"
              data-aos="zoom-in"
              className="rounded-lg object-contain w-full h-full transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 active:scale-95"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-12" />

        {/* Second Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="max-h-72 max-md:order-1">
            <img
              src="https://img.freepik.com/free-vector/pension-plan-concept-illustration_114360-26541.jpg?ga=GA1.1.475042653.1738300675&semt=ais_hybrid"
              alt="Analytics Overview"
              data-aos="zoom-in"
              className="rounded-lg object-contain w-full h-full transition-all duration-500 ease-in-out transform hover:scale-110 hover:-rotate-6 active:scale-95"
            />
          </div>
          <div className="text-left" data-aos="fade-up">
            <h2 className="text-orange-500 text-2xl font-bold mb-4">OUR VISION</h2>
            <p className="mb-4 text-sm text-gray-500">
              To provide every individual world-class investment platform and the best suggestions regarding their financial decisions.
            </p>
            <p className="text-sm text-gray-500">
              Our vision is to be a leading financial planner and plan your investments in the best way possible. We strive to recommend products that deliver consistent performance in alignment with your time horizon, risk, need, and goal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinePresence;
