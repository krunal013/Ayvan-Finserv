import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiHome, FiLifeBuoy, FiGrid } from "react-icons/fi";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: "What is Claim Advisory?",
      answer:
        "Claim Advisory is a service that helps individuals and businesses navigate the claim process, ensuring they receive fair and timely compensation.",
    },
    {
      question: "Why is Claim Advisory important?",
      answer:
        "Claim Advisory ensures that claims are properly documented, negotiated, and settled efficiently, reducing the chances of claim denials or underpayments.",
    },
    {
      question: "What types of claims can be handled?",
      answer:
        "Claim Advisory services can assist with insurance claims, legal claims, business loss claims, medical claims, and other financial recoveries.",
    },
  ],
  Support: [
    {
      question: "How can a Claim Advisor help me?",
      answer:
        "A Claim Advisor provides expert guidance, handles negotiations, ensures compliance with documentation requirements, and maximizes your claim settlement.",
    },
    {
      question: "What documents are required for a claim?",
      answer:
        "Required documents vary depending on the claim type but may include identity proof, policy details, invoices, medical records, and supporting evidence.",
    },
  ],
  Others: [
    {
      question: "How long does it take to settle a claim?",
      answer:
        "The claim settlement timeline depends on the complexity and type of claim. A Claim Advisor helps expedite the process by ensuring proper documentation and follow-ups.",
    },
  ],
};

const tabIcons = {
  General: <FiHome className="inline-block mr-2" />,
  Support: <FiLifeBuoy className="inline-block mr-2" />,
  Others: <FiGrid className="inline-block mr-2" />,
};

export default function ClaimAdvisoryFaq() {
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
