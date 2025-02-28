import { useState } from "react";
import Howtoinvest from "../../../public/images/portwhy1.png";
import Whytoinvest from "../../../public/images/portwhy2.png";
import Calctoinvest from "../../../public/images/portwhy3.png";

const WhyPortfolio = () => {
  const [activeTab, setActiveTab] = useState("How to Invest");

  const content = {
    "How to Invest": {
      title: "How to Start Portfolio Management?",
      description:
        "Managing a portfolio effectively requires strategic planning and informed decision-making. Follow these steps:",
      points: [
        "Define your financial goals and risk appetite",
        "Choose asset classes (Stocks, Bonds, Real Estate, etc.)",
        "Diversify your investments to reduce risk",
        "Regularly review and rebalance your portfolio",
        "Stay informed about market trends and economic factors",
        "Consider professional portfolio management services",
      ],
      color: "bg-orange-50",
      image: Howtoinvest,
    },
    "Why to Invest": {
      title: "Why Should You Opt for Portfolio Management?",
      description:
        "Portfolio management ensures long-term financial growth and stability. Key benefits include:",
      points: [
        "Optimized asset allocation",
        "Risk management through diversification",
        "Consistent monitoring and adjustments",
        "Potential for higher returns",
        "Tax efficiency and strategic financial planning",
        "Professional expertise in investment decisions",
      ],
      color: "bg-green-50",
      image: Whytoinvest,
    },
    "Calculate Returns": {
      title: "How to Evaluate Portfolio Performance?",
      description:
        "Understanding portfolio performance helps in making informed financial decisions. Key evaluation methods:",
      points: [
        "Calculate ROI (Return on Investment) for each asset",
        "Use CAGR (Compound Annual Growth Rate) for long-term evaluation",
        "Assess risk-adjusted returns using Sharpe Ratio",
        "Analyze portfolio diversification benefits",
        "Track expense ratios and tax implications",
      ],
      color: "bg-blue-50",
      image: Calctoinvest,
    },
  };

  return (
    <div className="flex flex-col items-center px-6 py-10">
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">
        How, Why & When You Should Manage Your Portfolio?
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

export default WhyPortfolio;