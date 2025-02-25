import { useState } from "react";
import { FiHome, FiLifeBuoy, FiGrid } from "react-icons/fi";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: "What are mutual funds?",
      answer:
        "Mutual funds are investment vehicles that pool money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities.",
    },
    {
      question: "How do mutual funds work?",
      answer:
        "They are managed by professionals who allocate the fund's assets and attempt to produce capital gains or income for the investors.",
    },
    {
      question: "What are the benefits of investing in mutual funds?",
      answer:
        "Benefits include diversification, professional management, liquidity, and a relatively low cost compared to other investment vehicles.",
    },
  ],
  Support: [
    {
      question: "How do I choose the right mutual fund?",
      answer:
        "Research the fund's performance history, management team, fees, and investment strategy to find one that aligns with your financial goals.",
    },
    {
      question: "Are mutual funds risky?",
      answer:
        "All investments carry risk. However, mutual funds diversify your investment, which can lower overall risk compared to individual securities.",
    },
  ],
  Others: [
    {
      question: "What fees are associated with mutual funds?",
      answer:
        "Common fees include management fees, expense ratios, and sometimes load fees when buying or selling the fund.",
    },
  ],
};

const tabIcons = {
  General: <FiHome className="inline-block mr-2" />,
  Support: <FiLifeBuoy className="inline-block mr-2" />,
  Others: <FiGrid className="inline-block mr-2" />,
};

export default function MutualFaq() {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl text-[#ff6b00] font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>

      {/* Mobile Tabs (Horizontal) */}
      <div className="flex md:hidden w-full overflow-x-auto space-x-4 p-2">
        {Object.keys(faqData).map((tab) => (
          <button
            key={tab}
            className={`flex items-center whitespace-nowrap px-4 py-2 rounded-lg transition ${
              activeTab === tab
                ? "bg-orange-100 text-orange-600 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tabIcons[tab]} {tab}
          </button>
        ))}
      </div>

      <div className="max-w-5xl w-full lg:h-[450px] p-6 text-black bg-white rounded-lg shadow-sm flex flex-col md:flex-row">
        {/* Desktop Sidebar Tabs */}
        <div className="hidden md:flex md:w-1/4 pr-4 mb-4 md:mb-0 flex-col space-y-3">
          <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
            HOW TO GET STARTED
          </h2>
          {Object.keys(faqData).map((tab) => (
            <button
              key={tab}
              className={`flex items-center py-2 px-4 rounded-lg transition ${
                activeTab === tab
                  ? "bg-orange-100 text-orange-600 font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tabIcons[tab]} {tab}
            </button>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="md:w-3/4 pl-0 md:pl-6 overflow-auto hide-scrollbar">
          {faqData[activeTab].map((item, index) => (
            <div key={index} className="border-b py-6 last:mb-0">
              <button
                className={`w-full text-left font-semibold flex justify-between items-center transition-colors ${
                  openIndex === index ? "text-orange-600" : "text-black"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.question}
                <span>
                  {openIndex === index ? (
                    <FaChevronUp className="ml-2" />
                  ) : (
                    <FaChevronDown className="ml-2" />
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
