import { useState } from "react";
import Howtoinvest from "../../../public/images/how to invest.png"
import Whytoinvest from "../../../public/images/whyinvestment.png"
import Calctoinvest from "../../../public/images/time-during-calculator.png"

const WhyMutual = () => {
  const [activeTab, setActiveTab] = useState("How to Invest");

  const content = {
    "How to Invest": {
      title: "How to Start Investing in Mutual Funds?",
      description:
        "Investing in mutual funds is simple and accessible. Follow these steps to begin your investment journey:",
      points: [
        "Set your financial goals and investment horizon",
        "Choose between SIP (Systematic Investment Plan) or Lump Sum investment",
        "Select a mutual fund type (Equity, Debt, Hybrid, etc.)",
        "Analyze the fund’s past performance and risk factors",
        "Open an investment account with a broker or AMC",
        "Start investing and monitor your portfolio regularly",
      ],
      color: "bg-orange-50",
      image: Howtoinvest, // ✅ Fixed Image Path
    },
    "Why to Invest": {
      title: "Why Should You Invest in Mutual Funds?",
      description:
        "Mutual funds offer diversification, professional management, and better returns over time. Key benefits:",
      points: [
        "Diversification reduces risk",
        "Professional fund management",
        "Affordable investment options",
        "Compounding benefits over time",
        "Higher returns than traditional savings",
        "Liquidity and ease of withdrawal",
      ],
      color: "bg-green-50",
      image:Whytoinvest, // ✅ Fixed Image Path
    },
    "Calculate Returns": {
      title: "How to Calculate Mutual Fund Returns?",
      description:
        "Understanding return calculations helps in making informed decisions. Here’s how to calculate returns:",
      points: [
        "Calculate Absolute Return: [(Selling Price - Purchase Price) / Purchase Price] × 100",
        "Use CAGR (Compound Annual Growth Rate) for long-term investments",
        "Understand risk-adjusted returns using Sharpe Ratio",
        "Check XIRR for SIP investments",
        "Factor in taxes and expense ratios",
      ],
      color: "bg-blue-50",
      image: Calctoinvest, // ✅ Fixed Image Path
    },
  };

  return (
    <div className="flex flex-col items-center px-6 py-10">
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">
        How, Why & When You Should Invest in Mutual Funds?
      </h2>

      {/* Tab Buttons */}
      <div className="flex space-x-2 mb-6">
        {Object.keys(content).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 border rounded-lg transition-all ${
              activeTab === tab
                ? "bg-orange-500 text-white border-orange-500"
                : "border-gray-300 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card Section */}
      <div
        className={`p-6 rounded-xl shadow-md max-w-5xl w-full flex flex-col lg:flex-row items-center lg:items-start ${content[activeTab].color}`}
      >
        {/* Image on top for small screens, right for large screens */}
        <img
          src={content[activeTab].image}
          alt="Investment"
          className="w-44 h-44 mb-4 lg:mb-0 lg:ml-4 lg:order-2"
        />

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{content[activeTab].title}</h3>
          <p className="text-gray-700 mb-4 font-semibold">{content[activeTab].description}</p>
          <ul className="list-disc list-inside text-gray-800">
            {content[activeTab].points.map((point, index) => (
              <li key={index} className="mb-1">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyMutual;
