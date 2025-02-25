import { useState } from "react";
import { FaPiggyBank } from "react-icons/fa";
import { PiSealQuestionFill } from "react-icons/pi";
import { FaCalculator } from "react-icons/fa";
import Howtoinvest from "../../../public/images/how to invest.png"
import Whytoinvest from "../../../public/images/whyinvestment.png"
import Calctoinvest from "../../../public/images/time-during-calculator.png"

const WhyMutual = () => {
  const [activeTab, setActiveTab] = useState("How to Invest");

  const content = {
    "How to Invest": {
      title: "How to Choose the Best Investment Plan?",
      description:
        "When choosing the best investment plan in India, several factors must be considered. Here are some steps to help you make an informed decision:",
      points: [
        "Determine your financial requirements and goals",
        "Compute the timeline of your investment to achieve every goal",
        "Assess your risk tolerance",
        "Research different investment options",
        "Diversify your portfolio",
        "Consider professional advice and choose the best investment plan with high returns",
        "Monitor and review your investments periodically",
      ],
          color: "bg-orange-50",
      image : Howtoinvest
    },
    "Why to Invest": {
      title: "Why Should You Invest?",
      description:
        "Investing helps grow your wealth, beat inflation, and secure your future. Consider these reasons:",
      points: [
        "Create long-term financial stability",
        "Build wealth over time",
        "Take advantage of compounding interest",
        "Achieve financial independence",
        "Plan for retirement effectively",
        "Protect against inflation",
      ],
        color: "bg-green-50",
      image : Whytoinvest
    },
    "Calculate Returns": {
      title: "How to Calculate Investment Returns?",
      description:
        "Understanding return calculations can help in making informed investment decisions. Key steps:",
      points: [
        "Understand simple vs. compound interest",
        "Calculate annualized returns",
        "Assess risk-adjusted returns",
        "Use online return calculators",
        "Factor in taxes and inflation",
      ],
        color: "bg-blue-50",
        image : Calctoinvest
    },
  };

  return (
    <div className="flex flex-col items-center px-6 py-10">
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">
        How, Why & When You Should Start Investment?
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
      <div className={`p-6 rounded-xl shadow-md max-w-5xl w-full flex flex-col lg:flex-row items-center lg:items-start ${content[activeTab].color}`}>
        {/* Image on top for small screens, right for large screens */}
        <img 
          src={content[activeTab].image} 
          alt="Investment" 
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