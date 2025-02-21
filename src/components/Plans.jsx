import React, { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const hidescrollbar = {
  /* For Webkit browsers */
  "::webkit-scrollbar": {
    display: "none",
  },
  /* For Firefox */
  scrollbarWidth: "none",
  /* For IE and Edge */
  "-ms-overflow-style": "none",
};

const Recommended = [
  {
    title: "Recommended 1",
    subtitle: "A comprehensive term plan designed for modern financial needs.",
    badge: "Finserv Exclusive",
    features: [
      "Comprehensive Health Benefits",
      "High Sum Assured at affordable rates",
      "Customized income protection options",
      "Attractive tax benefits",
    ],
    button2: "Learn More",
  },
  {
    title: "Recommended 2",
    subtitle: "A comprehensive term plan designed for modern financial needs.",
    badge: "Finserv Exclusive",
    features: [
      "Comprehensive Health Benefits",
      "High Sum Assured at affordable rates",
    ],
    button2: "Learn More",
  },
];

const termPlans = [
  {
    title: "Ayvan Finserv eShield",
    subtitle: "A comprehensive term plan designed for modern financial needs.",
    badge: "Finserv Exclusive",
    features: [
      "Upto 20% discount on 1st Year Premium",
      "Comprehensive Health Benefits",
      "High Sum Assured at affordable rates",
      "Customized income protection options",
      "Attractive tax benefits",
    ],
    button2: "Learn More",
  },
  {
    title: "Ayvan Finserv SecureGuard",
    subtitle: "Robust term insurance for dependable future planning.",
    badge: "Term Plans",
    features: [
      "High coverage with low premium",
      "Quick and hassle-free issuance",
      "Online discount available",
      "Multiple plan options",
    ],
    button2: "Learn More",
  },
  {
    title: "Ayvan Finserv SecureGuard",
    subtitle: "Robust term insurance for dependable future planning.",
    badge: "Term Plans",
    features: [
      "High coverage with low premium",
      "Quick and hassle-free issuance",
      "Online discount available",
      "Multiple plan options",
    ],
    button2: "Learn More",
  },
];

const savingsPlans = [
  {
    title: "Ayvan Finserv SaveMax",
    subtitle:
      "A savings plan designed to maximize your returns with minimal risk.",
    badge: "Savings Plans",
    features: [
      "High interest rates",
      "Flexible deposit options",
      "Guaranteed returns",
      "No hidden charges",
    ],
    button2: "Learn More",
  },
  {
    title: "Ayvan Finserv WealthGrow",
    subtitle: "A plan focused on growing your wealth steadily over time.",
    badge: "Savings Plans",
    features: [
      "Regular contributions",
      "Attractive bonuses",
      "Long-term growth potential",
      "Tax-saving benefits",
    ],
    button2: "Learn More",
  },
];

const retirementPlans = [
  {
    title: "Ayvan Finserv GoldenNest",
    subtitle:
      "Plan your retirement with confidence and secure a steady income.",
    badge: "Retirement Plans",
    features: [
      "Pension benefits",
      "Tax advantages",
      "Flexible withdrawal options",
      "Guaranteed income post-retirement",
    ],
    button2: "Learn More",
  },
  {
    title: "Ayvan Finserv SecureRetire",
    subtitle:
      "A retirement plan that ensures you live your golden years comfortably.",
    badge: "Retirement Plans",
    features: [
      "Customized retirement solutions",
      "High payout ratios",
      "Low management fees",
      "Comprehensive support",
    ],
    button2: "Learn More",
  },
];

const Plans = () => {
  // Active tab state (Recommended, Term, Savings, Retirement)
  const [activeTab, setActiveTab] = useState("Recommended");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Helper function to render cards for a given plan array
  const renderCards = (plansArray) => (
    <div className="w-full overflow-x-auto no-scrollbar" style={hidescrollbar}>
      <ScrollMenu>
        {plansArray.map((plan, index) => (
          <div
            key={index}
            className="w-[320px] min-w-[320px] border border-[#00000025] bg-white shadow-md rounded-lg p-4 mx-2 my-4 flex flex-col justify-between h-[380px]"
          >
            <div>
              <div className="pb-3 border-b border-dashed">
                <span className="text-xs  border border-dashed text-white p-1 rounded-md bg-[#ff6b00] font-semibold">
                  {plan.badge}
                </span>
                <h3 className="text-lg text-[#252525] font-bold mt-2">
                  {plan.title}
                </h3>
              </div>
              <p className="text-sm mt-3 text-left text-gray-500">
                {plan.subtitle}
              </p>
              <ul className="mt-3 text-gray-800 space-y-2 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Button at the bottom */}
            <div className="mt-4">
              {plan.button2 && (
                <button className="w-full border border-orange-500 text-orange-500 py-2 px-4 rounded">
                  {plan.button2}
                </button>
              )}
            </div>
          </div>
        ))}
      </ScrollMenu>
    </div>
  );

  return (
    <>
      <div className="pt-10 text-center bg-gray-50">
        <div className="inline-block tracking-wider bg-[#ff6b00] text-white text-xs font-bold px-2 py-1 rounded-md mb-4">
          MOST PREFERRED
        </div>
        <h2 className="text-4xl font-bold text-gray-900">Our Plans</h2>
      </div>
      <div className="min-h-screen flex justify-center items-center  bg-gray-50">
        <div className="w-full max-w-6xl">
          {/* Tabs */}
          <div className="relative">
            {/* Sticky Tabs under Header */}
            <div className="sticky top-[80px] z-20 bg-gray-50 py-3">
              <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
                <ul className="flex w-max mx-auto space-x-4 px-4">
                  {[
                    { key: "Recommended", label: "Recommended" },
                    { key: "Term", label: "Term Insurance" },
                    { key: "Savings", label: "Savings Plans" },
                    { key: "Retirement", label: "Retirement Plans" },
                  ].map((tab) => (
                    <li
                      key={tab.key}
                      className={`tab text-[15px] min-w-[160px] text-center py-2.5 px-5 border-b-2 cursor-pointer 
            ${
              activeTab === tab.key
                ? "text-orange-600 font-bold border-orange-600"
                : "text-gray-600 font-semibold border-transparent"
            }
          `}
                      onClick={() => handleTabClick(tab.key)}
                    >
                      {tab.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "Recommended" && (
              <div className="tab-content mt-8 text-center">
                <h4 className="text-2xl font-bold text-[#232323] mb-4">
                  Ayvan Finserv Recommended Plans
                </h4>
                <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
                  Choose from our handpicked plans that cater to your unique
                  financial and protection needs.
                </p>
                {renderCards(Recommended)}
              </div>
            )}

            {activeTab === "Term" && (
              <div className="tab-content mt-8 text-center">
                <h4 className="text-2xl font-bold text-[#232323] mb-4">
                  Ayvan Finserv Term Insurance Plans
                </h4>
                <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
                  Our term insurance plans provide protection and peace of mind
                  for you and your family.
                </p>
                {renderCards(termPlans)}
              </div>
            )}

            {activeTab === "Savings" && (
              <div className="tab-content mt-8 text-center">
                <h4 className="text-2xl font-bold text-[#232323] mb-4">
                  Ayvan Finserv Savings Plans
                </h4>
                <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
                  Build a secure future with our specially curated savings plans
                  tailored to your financial goals.
                </p>
                {renderCards(savingsPlans)}
              </div>
            )}

            {activeTab === "Retirement" && (
              <div className="tab-content mt-8 text-center">
                <h4 className="text-2xl font-bold text-[#232323] mb-4">
                  Ayvan Finserv Retirement Plans
                </h4>
                <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
                  Secure your golden years with plans that offer financial
                  stability and a comfortable retirement.
                </p>
                {renderCards(retirementPlans)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
