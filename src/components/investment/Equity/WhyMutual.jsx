import Howtoinvest from "../../../public/images/how to invest.png"
import Whytoinvest from "../../../public/images/whyinvestment.png"
import Calctoinvest from "../../../public/images/time-during-calculator.png"
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyMutual = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [activeTab, setActiveTab] = useState("How to Start");

  const content = {
    "How to Start": {
      title: "How to Start Investing in Equity?",
      description: "Investing in equity requires careful planning and understanding. Follow these steps to get started:",
      points: [
        "Open a Demat and Trading Account",
        "Choose a reliable stockbroker",
        "Understand different types of stocks",
        "Analyze market trends and stock fundamentals",
        "Start with index funds or blue-chip stocks",
        "Diversify your portfolio to manage risk",
        "Stay updated with financial news and reports",
      ],
      color: "bg-orange-50",
      image:Howtoinvest  // ✅ Corrected Image Path
    },
    "Why Invest in Equity": {
      title: "Why Should You Invest in Equity?",
      description: "Equity investments provide higher returns and long-term growth. Here’s why equity is a great choice:",
      points: [
        "Higher potential returns compared to fixed-income options",
        "Protection against inflation",
        "Compounding benefits over time",
        "Ownership in companies and dividend income",
        "Opportunity to beat market inflation",
        "Liquidity and ease of buying/selling",
      ],
      color: "bg-green-50",
      image: Whytoinvest,  // ✅ Corrected Image Path
    },
    "Calculate Returns": {
      title: "How to Calculate Equity Investment Returns?",
      description: "Knowing how to calculate returns helps in making better investment decisions. Key steps include:",
      points: [
        "Calculate absolute return: [(Selling Price - Purchase Price) / Purchase Price] × 100",
        "Understand CAGR (Compound Annual Growth Rate)",
        "Analyze risk-adjusted returns using Sharpe Ratio",
        "Factor in dividends and stock splits",
        "Use online stock return calculators",
      ],
      color: "bg-blue-50",
      image:Calctoinvest,  // ✅ Corrected Image Path
    },
  };

  return (
    <div className="flex flex-col items-center px-6 py-10" data-aos="fade-up">
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-4" data-aos="zoom-in">
        How, Why & When You Should Start Investing in Equity?
      </h2>

      {/* Tab Buttons */}
      <div className="flex space-x-2 mb-6" data-aos="fade-up">
        {Object.keys(content).map((tab, index) => (
          <button
            key={tab}
            className={`px-4 py-2 border rounded-lg transition-all ${
              activeTab === tab
                ? "bg-orange-500 text-white border-orange-500"
                : "border-gray-300 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
            data-aos="flip-up"
            data-aos-delay={index * 100}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card Section */}
      <div
        className={`p-6 rounded-xl shadow-md max-w-5xl w-full flex flex-col lg:flex-row items-center lg:items-start ${content[activeTab].color}`}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Image on top for small screens, right for large screens */}
        <img
          src={content[activeTab].image}
          alt="Investment"
          className="w-44 h-44 mb-4 lg:mb-0 lg:ml-4 lg:order-2"
          data-aos="fade-left"
        />

        {/* Content */}
        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{content[activeTab].title}</h3>
          <p className="text-gray-700 mb-4 font-semibold">{content[activeTab].description}</p>
          <ul className="list-disc list-inside text-gray-800">
            {content[activeTab].points.map((point, index) => (
              <li key={index} className="mb-1" data-aos="fade-up" data-aos-delay={index * 100}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyMutual;
