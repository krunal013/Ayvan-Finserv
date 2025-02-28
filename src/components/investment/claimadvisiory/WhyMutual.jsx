import { useState } from "react";
import Howtoinvest from "../../../public/images/portwhy1.png";
import Whytoinvest from "../../../public/images/portwhy2.png";
import Calctoinvest from "../../../public/images/portwhy3.png";


const WhyClaimAdvisory = () => {
  const [activeTab, setActiveTab] = useState("How to File a Claim");

  const content = {
    "How to File a Claim": {
      title: "How to File a Claim?",
      description:
        "Filing a claim can be complex, but following the right steps ensures a smooth process. Here’s how you can do it:",
      points: [
        "Understand your policy coverage and claim eligibility",
        "Gather all necessary documents (bills, reports, proof of loss, etc.)",
        "Fill out the claim application form accurately",
        "Submit the claim to the insurance provider or concerned authority",
        "Follow up on claim status regularly",
        "Respond to any queries or additional document requests promptly",
        "Receive your approved claim amount",
      ],
      color: "bg-orange-50",
      image: Howtoinvest,
    },
    "Why Choose Claim Advisory": {
      title: "Why Should You Choose Claim Advisory?",
      description:
        "Claim advisory services help you get the best possible settlement with expert guidance. Here’s why you need it:",
      points: [
        "Expert assistance in claim filing and documentation",
        "Higher chances of claim approval and maximum payout",
        "Time-saving process with professional support",
        "Negotiation with insurance companies for a fair settlement",
        "Legal guidance in case of claim disputes",
        "Avoiding claim rejections due to minor errors",
      ],
      color: "bg-green-50",
      image: Whytoinvest,
    },
    "Claim Settlement Calculation": {
      title: "How to Calculate Your Claim Settlement?",
      description:
        "Understanding how claims are calculated helps in estimating the amount you might receive. Here’s what you need to know:",
      points: [
        "Check policy terms for coverage limits and deductibles",
        "Calculate the total loss amount with valid supporting documents",
        "Understand depreciation value for applicable assets",
        "Use online claim calculators for estimation",
        "Factor in any legal or processing fees",
        "Consult a claim advisor for a detailed evaluation",
      ],
      color: "bg-blue-50",
      image: Calctoinvest,
    },
  };

  return (
    <div className="flex flex-col items-center px-6 py-10">
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">
        How, Why & When You Should Use Claim Advisory Services?
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
          alt="Claim Advisory Guide"
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

export default WhyClaimAdvisory;