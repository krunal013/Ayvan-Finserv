import { useState } from "react";
import analysis from "../../../public/images/analysis.png"
import Whytoinvest from "../../../public/images/managment.png"
import Calctoinvest from "../../../public/images/mitigation.png"

const WhyRiskManagement = () => {
  const [activeTab, setActiveTab] = useState("Identifying Risks");

  const content = {
    "Identifying Risks": {
      title: "How to Identify Risks in Business?",
      description:
        "Effective risk management starts with identifying potential risks that could impact business operations:",
      points: [
        "Analyze internal and external business environments",
        "Conduct risk assessments and SWOT analysis",
        "Identify financial, operational, and strategic risks",
        "Consult stakeholders for risk insights",
        "Use historical data to predict potential threats",
        "Monitor industry trends and regulatory changes",
      ],
      color: "bg-orange-50",
      image: analysis, // ✅ Fixed Image Path
    },
    "Why Risk Management": {
      title: "Why is Risk Management Important?",
      description:
        "Risk management ensures business continuity and helps organizations make informed decisions. Key benefits:",
      points: [
        "Prevents financial losses and disruptions",
        "Improves decision-making and strategic planning",
        "Enhances compliance with regulations",
        "Protects reputation and stakeholder confidence",
        "Optimizes resource allocation for better efficiency",
        "Increases resilience against uncertainties",
      ],
      color: "bg-green-50",
      image: Whytoinvest, // ✅ Fixed Image Path
    },
    "Mitigating Risks": {
      title: "How to Mitigate Risks Effectively?",
      description:
        "Risk mitigation involves proactive strategies to minimize threats and their impact on business operations:",
      points: [
        "Develop a risk management framework and policies",
        "Diversify investments and revenue streams",
        "Implement robust cybersecurity measures",
        "Train employees on risk awareness and response",
        "Use insurance and financial hedging tools",
        "Continuously monitor and update risk strategies",
      ],
      color: "bg-blue-50",
      image: Calctoinvest, // ✅ Fixed Image Path
    },
  };

  return (
    <div className="flex flex-col items-center px-6 py-10">
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">
        How, Why & When You Should Manage Risks?
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
          alt="Risk Management"
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

export default WhyRiskManagement;
