import { useState } from "react";
import Howtoinvest from "../../../public/images/how to invest.png"
import Whytoinvest from "../../../public/images/whyinvestment.png"
import Calctoinvest from "../../../public/images/time-during-calculator.png"

const WhyMutual = () => {
  const [activeTab, setActiveTab] = useState("How to Invest in FD");

  const content = {
    "How to Invest in FD": {
      title: "How to Invest in a Fixed Deposit?",
      description:
        "Investing in a Fixed Deposit (FD) is a safe and reliable way to grow your savings. Follow these steps to start your FD investment:",
      points: [
        "Choose a bank or NBFC with competitive FD interest rates",
        "Decide the tenure based on your financial goals",
        "Select the FD type (Cumulative or Non-Cumulative)",
        "Fill out the application form (online or offline)",
        "Submit the required KYC documents",
        "Deposit the investment amount",
        "Start earning interest as per the chosen tenure",
      ],
      color: "bg-orange-50",
      image: Howtoinvest,
    },
    "Why Invest in FD": {
      title: "Why Should You Invest in Fixed Deposits?",
      description:
        "Fixed Deposits provide stable returns and financial security. Here’s why FDs are a smart investment choice:",
      points: [
        "Guaranteed returns with zero market risk",
        "Flexible tenure options (7 days to 10 years)",
        "Higher interest rates for senior citizens",
        "Premature withdrawal facility (with conditions)",
        "Option to take a loan against FD",
        "Easy online booking & renewal options",
      ],
      color: "bg-green-50",
      image: Whytoinvest,
    },
    "Calculate FD Returns": {
      title: "How to Calculate Fixed Deposit Returns?",
      description:
        "Knowing how FD interest is calculated helps in choosing the best FD plan. Key calculations include:",
      points: [
        "Simple Interest (SI) Formula: SI = (P × R × T) / 100",
        "Compound Interest (CI) Formula: A = P(1 + R/100)^T",
        "Use an FD calculator to compare returns",
        "Understand cumulative vs. non-cumulative FD interest",
        "Factor in tax deductions on FD interest (TDS)",
      ],
      color: "bg-blue-50",
      image: Calctoinvest,
    },
  };

  return (
    <div className="flex flex-col items-center px-6 py-10">
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">
        How, Why & When You Should Invest in Fixed Deposits?
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
          alt="Fixed Deposit Investment"
          className="w-44 h-44 mb-4 lg:mb-0 lg:ml-4 lg:order-2"
        />

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {content[activeTab].title}
          </h3>
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
