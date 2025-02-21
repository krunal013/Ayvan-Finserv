import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserTie, FaChartPie, FaHandshake, FaBalanceScale } from "react-icons/fa";


const WealthManagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Make animations trigger every time the user scrolls
    });
  }, []);

  return (
    <section className="bg-white mt-1 lg:mt-20 py-16 p-5 lg:p-5 gap-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2" data-aos="fade-right">
        <div className="flex items-center space-x-3">
        <span className="bg-[#ff6b00] text-white lg:text-xs font-bold px-3 lg:px-3 py-1 rounded-md text-xs">
            WHO ARE WE
          </span>
        </div>
        <h1 className="text-xl text-[#ff6b00] md:text-4xl font-bold mt-4">
          An Integrated Wealth Management Hub for all your financial goals
        </h1>
        <div  data-aos="fade-up">
        <p className="text-gray-600 mt-4 text-base md:text-lg" >
          Youwin investment services is the best hub for all your wealth management solutions. At Youwin, we strongly believe in planning your financial life as the key to achieving your life goals in a structured and disciplined manner.
        </p>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Youwin investment aims to balance the client's financial needs and goals with their risk profile. Our wealth management expertise ensures you are in the best position to create wealth through customized financial planning.
        </p>
        </div>
        <button className="mt-6 bg-[#ff6b00] text-white font-bold py-3 px-6 rounded-md shadow-lg active:scale-105 transition duration-300" data-aos="fade-up">
          ABOUT COMPANY
        </button>
      </div>

      {/* Right Side - Features (2x2 Grid) */}
      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-0">
        {/* Card 1 */}
        <div className="p-6 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl" data-aos="fade-up">
          <FaUserTie className="text-4xl text-[#ff6b00] mb-4" />
          <h3 className="text-xl font-bold text-black">Diversified Products</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            A wide range of products are available to meet your suitability, risk appetite, protection needs, and financial goals. Our basket includes various products to keep you financially secure.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="200">
          <FaChartPie className="text-4xl text-[#ff6b00] mb-4" />
          <h3 className="text-xl font-bold text-black">Holistic and Process-Centric Analysis</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Our financial advisors research products thoroughly before suggesting them to clients based on their banking, investment, and financial goals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="400">
          <FaHandshake className="text-4xl text-[#ff6b00] mb-4" />
          <h3 className="text-xl font-bold text-black">Transparent & Trustworthy</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            We ensure unbiased recommendations that align with the client’s financial needs, irrespective of any commission or fees.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="600">
          <FaBalanceScale className="text-4xl text-[#ff6b00] mb-4" />
          <h3 className="text-xl font-bold text-black">Review, Re-evaluate and Rebalancing</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Regular reviews are performed to ensure clients' capital is protected, and returns are maximized by rebalancing portfolios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WealthManagement;
