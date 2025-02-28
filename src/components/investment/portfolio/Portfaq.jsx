import { useState } from "react";
import { FiHome, FiLifeBuoy, FiGrid } from "react-icons/fi";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqData = {
  "Investment Basics": [
    {
      question: "What is Portfolio Management?",
      answer:
        "Portfolio Management is the art and science of selecting and overseeing a group of investments that meet a client's long-term financial objectives and risk tolerance.",
    },
    {
      question: "Why is Portfolio Diversification Important?",
      answer:
        "Diversification helps reduce risk by spreading investments across various asset classes, industries, and geographies to minimize the impact of market fluctuations.",
    },
    {
      question: "How often should I review my portfolio?",
      answer:
        "It is recommended to review your portfolio at least once a year or whenever there is a significant change in your financial situation or market conditions.",
    },
  ],
  "Investment Strategies": [
    {
      question: "What are the different types of portfolio management?",
      answer:
        "Portfolio management can be classified into active, passive, discretionary, and non-discretionary management, each with different strategies and approaches.",
    },
    {
      question: "What is Asset Allocation?",
      answer:
        "Asset allocation is the strategy of distributing investments among different asset classes like stocks, bonds, and real estate to optimize returns while managing risk.",
    },
  ],
  "Performance & Fees": [
    {
      question: "How is portfolio performance measured?",
      answer:
        "Portfolio performance is typically measured using metrics like return on investment (ROI), Sharpe ratio, and benchmark comparisons.",
    },
    {
      question: "Are there fees associated with portfolio management?",
      answer:
        "Yes, portfolio management services often charge fees, including management fees, performance fees, and transaction costs, which vary by service provider.",
    },
  ],
};

const tabIcons = {
  "Investment Basics": <FiHome className="inline-block mr-2" />, 
  "Investment Strategies": <FiLifeBuoy className="inline-block mr-2" />, 
  "Performance & Fees": <FiGrid className="inline-block mr-2" />, 
};

export default function PortfolioFaq() {
  const [activeTab, setActiveTab] = useState("Investment Basics");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl text-[#ff6b00] font-bold mb-6 text-center">
      Frequently Asked Questions
      </h2>
      <div className="max-w-5xl w-full lg:h-[450px] p-6 text-black bg-white rounded-lg shadow-sm flex flex-col md:flex-row">
        {/* Sidebar Tabs */}
        <div className="md:w-1/4 pr-4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
            INVESTMENT GUIDE
          </h2>
          <div className="flex flex-col space-y-3">
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
        </div>

        {/* FAQ Section with hidden scrollbar */}
        <div className="md:w-3/4 pl-0 md:pl-6 overflow-auto hide-scrollbar">
          <div>
            {faqData[activeTab].map((item, index) => (
              <div key={index} className="border-b py-6 last:mb-0">
                <button
                  className={`w-full text-left font-semibold flex justify-between items-center transition-colors ${
                    openIndex === index ? "text-orange-600" : "text-black"
                  }`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
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
                {/* Smooth transition container */}
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
    </div>
  );
}