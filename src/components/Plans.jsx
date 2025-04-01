import React, { useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Form from "../components/Form";

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
];

const Plans = () => {
  const [activeTab, setActiveTab] = useState("Recommended");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setTimeout(() => setIsVisible(true), 10); // Delay to trigger animation smoothly
  };

  const handleCloseSidebar = () => {
    setIsVisible(false);
    setTimeout(() => setSelectedPlan(null), 500); // Wait for animation to finish before unmounting
  };

  // Helper function to render cards for a given plan array
  const renderCards = (plansArray) => (
    <div className="w-full overflow-x-auto no-scrollbar">
      <ScrollMenu>
        {plansArray.map((plan, index) => (
          <div
            key={index}
            className="w-[320px] min-w-[320px] border border-[#00000025] bg-white shadow-md rounded-lg p-4 mx-2 my-4 flex flex-col justify-between h-[400px]"
          >
            <div>
              <div className="pb-3 border-b border-dashed">
                <span className="text-xs border border-dashed text-white p-1 rounded-md bg-[#ff6b00] font-semibold">
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
            <div className="mt-4">
              {plan.button2 && (
                <button
                  className="mt-4 w-full border border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-500 hover:text-white"
                  onClick={() => handleSelectPlan(plan)}
                >
                  Learn More
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
        <h2 className="text-4xl font-bold text-gray-900">Our Plans</h2>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="w-full max-w-6xl">
          <div className="sticky top-[80px] z-20 bg-gray-50 py-3">
            <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
              <ul className="flex w-max mx-auto space-x-4 px-4">
                {["Recommended", "Term", "Savings", "Retirement"].map((tab) => (
                  <li
                    key={tab}
                    className={`tab text-[15px] min-w-[160px] text-center py-2.5 px-5 border-b-2 cursor-pointer ${
                      activeTab === tab
                        ? "text-orange-600 font-bold border-orange-600"
                        : "text-gray-600 font-semibold border-transparent"
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {activeTab === "Recommended" && renderCards(Recommended)}
          {activeTab === "Term" && renderCards(termPlans)}
          {activeTab === "Savings" && renderCards(savingsPlans)}
          {activeTab === "Retirement" && renderCards(retirementPlans)}
        </div>
      </div>

      {!isMobile && selectedPlan && (
        <>
          {/* Overlay to prevent scrolling (Only when sidebar is open) */}
          {selectedPlan && (
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={handleCloseSidebar} // Clicking outside closes sidebar
            />
          )}

          {/* Sidebar (Always in DOM, uses translate-x for smooth transitions) */}
          <div
            className={`fixed top-[82px] right-0 h-[calc(100vh-82px)] w-[500px] bg-gray-50 shadow-lg z-50 p-6 overflow-y-auto transform transition-all duration-500 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            style={{ visibility: selectedPlan ? "visible" : "hidden" }} // Hides only after animation completes
          >
            <button
              className="absolute top-4 right-4 text-gray-600 text-xl"
              onClick={handleCloseSidebar}
            >
              ✖
            </button>
            {selectedPlan && (
              <>
                <h2 className="text-2xl text-black font-bold">
                  {selectedPlan.title}
                </h2>
                <p className="text-gray-600 mt-2">{selectedPlan.subtitle}</p>
                <ul className="mt-4 mb-0 text-black space-y-2">
                  {selectedPlan.features.map((feature, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <Form />
              </>
            )}
          </div>

          {/* Disable body scrolling when sidebar is open */}
          {selectedPlan && (
            <style>
              {`
          body {
            overflow: hidden;
          }
        `}
            </style>
          )}
        </>
      )}

      {/* Modal for Mobile */}
      {isMobile && selectedPlan && (
        <>
          <div className="fixed inset-0 bg-black text-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300">
            <div className="bg-white rounded-lg w-[90%] max-w-md p-6 shadow-lg relative  overflow-y-auto max-h-[80vh]">
              <button
                className="absolute top-4 right-4 text-gray-600 text-xl"
                onClick={handleCloseSidebar}
              >
                ✖
              </button>
              <h2 className="text-xl lg:text-2xl font-bold">
                {selectedPlan.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                {selectedPlan.subtitle}
              </p>
              <ul className="mt-4 mb-4 text-sm space-y-2">
                {selectedPlan.features.map((feature, i) => (
                  <li key={i} className="text-sm flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <div className="">
                <Form />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Plans;
