import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiHome, FiLifeBuoy, FiGrid } from "react-icons/fi";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: "What are Equity?",
      answer:
        "Equity represents ownership in an asset after deducting liabilities. It gives you a stake in a business, property, or investment.",
    },
    {
      question: "How do Equity work?",
      answer:
        "Equity works by representing ownership in an asset (a company, real estate, or investment). It shows the value left after deducting liabilities and determines your stake in the asset.",
    },
    {
      question: "What are the benefits of investing in Equity?",
      answer:
        "Investing in equity offers several benefits, primarily the potential for high returns compared to other asset classes. It helps in long-term wealth creation as stocks tend to grow in value over time.",
    },
  ],
  Support: [
    {
      question: "How do I choose the right Equity?",
      answer:
        "Choosing the right equity (stocks) requires careful research and a strategic approach. Start by analyzing the company's fundamentals, including revenue, profit margins, debt levels, and overall financial health.",
    },
    {
      question: "Are Equity risky?",
      answer:
        "Yes, equity investments carry risks, as stock prices fluctuate due to market conditions, economic factors, and company performance.",
    },
  ],
  Others: [
    {
      question: "What fees are associated with Equity?",
      answer:
        "Investing in equity involves several fees and charges that can impact your overall returns.",
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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Heading */}
      <h2
        className="text-4xl text-[#ff6b00] font-bold mb-6 text-center"
        data-aos="fade-up"
      >
        Frequently Asked Questions
      </h2>

      {/* Mobile Tabs */}
      <div className="flex md:hidden justify-center space-x-3 mb-4">
        {Object.keys(faqData).map((tab) => (
          <button
            key={tab}
            className={`flex items-center py-2 px-4 rounded-lg transition ${
              activeTab === tab
                ? "bg-orange-100 text-orange-600 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {tabIcons[tab]} {tab}
          </button>
        ))}
      </div>

      <div
        className="max-w-5xl w-full lg:h-[450px] p-6 text-black bg-white rounded-lg shadow-sm flex flex-col md:flex-row"
        data-aos="fade-up"
      >
        {/* Sidebar Tabs */}
        <div
          className="hidden md:flex md:w-1/4 pr-4 mb-4 md:mb-0 flex-col"
          data-aos="fade-left"
        >
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

        {/* FAQ Section */}
        <div
          className="md:w-3/4 pl-0 md:pl-6 overflow-auto hide-scrollbar"
          data-aos="fade-right"
        >
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
                  data-aos="fade-up"
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
                  data-aos={openIndex === index ? "zoom-in" : ""}
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
