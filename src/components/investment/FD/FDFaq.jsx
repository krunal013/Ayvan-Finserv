import { useState } from "react";
import { FiHome, FiLifeBuoy, FiGrid } from "react-icons/fi";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: "What are Fixed Deposit?",
      answer:
        "A Fixed Deposit (FD) is a financial instrument offered by banks and non-banking financial companies (NBFCs) where you deposit a lump sum amount for a fixed tenure at a predetermined interest rate. It is considered a low-risk investment because the returns are guaranteed.",
    },
    {
      question: "How do Fixed Deposit work?",
      answer:
        "Fixed Deposits (FDs) work by allowing you to deposit a lump sum amount with a bank or financial institution for a predetermined period at a fixed interest rate. At the end of the tenure, you receive your principal amount along with the accrued interest.",
    },
    {
      question: "What are the benefits of investing in Fixed deposit?",
      answer:"Investing in a Fixed Deposit (FD) offers several benefits, making it a preferred choice for risk-averse investors. One of the biggest advantages is the guaranteed returns, as the interest rate remains fixed throughout the tenure, providing financial stability regardless of market fluctuations.",
    },
  ],
  Support: [
    {
      question: "How do I choose the right Fixed Deposit?",
      answer:
        "Choosing the right Fixed Deposit (FD) requires careful consideration of several factors to ensure it aligns with your financial goals. The first step is to determine the purpose of your FD investment—whether it is for short-term savings, regular income, tax benefits, or long-term wealth accumulation. Once your goal is clear, compare interest rates offered by different banks and financial institutions, as higher interest rates will maximize your returns.",
    },
    {
      question: "Are Fixed Deposit risky?",
      answer:
        "Fixed Deposits (FDs) are generally considered one of the safest investment options since they offer guaranteed returns and are not affected by market fluctuations. Unlike stocks or mutual funds, where returns depend on market performance, an FD provides a fixed interest rate for the chosen tenure, ensuring stability.",
    },
  ],
  Others: [
    {
      question: "What fees are associated with Fixed deposit?",
      answer:
        "Fixed Deposits (FDs) generally do not have upfront fees, but certain charges may apply in specific situations. If you withdraw your FD before maturity, banks typically impose a premature withdrawal penalty ranging from 0.5% to 1% on the applicable interest rate. Some banks also charge a cancellation fee for auto-renewed FDs if withdrawn within a few days.",
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
      <div className="max-w-5xl w-full lg:h-[450px] p-6 text-black bg-white rounded-lg shadow-sm flex flex-col md:flex-row">
        {/* Sidebar Tabs */}
        <div className="md:w-1/4 pr-4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
            HOW TO GET STARTED
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
