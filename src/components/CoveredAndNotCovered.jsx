import { useState } from "react";
import {
  FaUserInjured,
  FaHospital,
  FaBriefcaseMedical,
  FaHouseDamage,
  FaHeartbeat,
  FaBan,
  FaUserLock,
  FaMoneyBillWave,
} from "react-icons/fa";

const CoveredAndNotCovered = () => {
  const [isCovered, setIsCovered] = useState(true);

  const coveredItems = [
    {
      icon: <FaUserInjured />,
      title: "Personal Accident Cover",
      desc: "Covers medical expenses and compensation for disability or death due to accidents.",
    },
    {
      icon: <FaHospital />,
      title: "Hospitalization Expenses",
      desc: "Covers hospitalization costs, including room rent, surgery, and doctor fees.",
    },
    {
      icon: <FaBriefcaseMedical />,
      title: "Critical Illness",
      desc: "Coverage for critical illnesses like cancer, heart attack, and stroke.",
    },
    {
      icon: <FaHouseDamage />,
      title: "Property Damage",
      desc: "Protection against damages to insured property due to fire, floods, or other disasters.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Health Insurance",
      desc: "Covers medical expenses for illnesses, surgeries, and preventive healthcare.",
    },
  ];

  const notCoveredItems = [
    {
      icon: <FaBan />,
      title: "Pre-existing Conditions",
      desc: "Diseases or conditions diagnosed before policy issuance are not covered initially.",
    },
    {
      icon: <FaUserLock />,
      title: "Intentional Self-injury",
      desc: "Any injury or harm caused intentionally is not covered.",
    },
    {
      icon: <FaBan />,
      title: "War and Nuclear Risks",
      desc: "Damages due to war, nuclear hazards, or terrorism are not covered.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Non-disclosure of Facts",
      desc: "False information or omission of crucial details can lead to claim rejection.",
    },
  ];

  return (
    <div className="relative p-6 max-w-5xl mx-auto text-center bg-white">
      <h2 className="text-3xl text-[#ff6b00] font-semibold mb-4">
        General Insurance Coverage
      </h2>

      {/* Sticky Button Section */}
      <div className="sticky top-[80px] bg-white z-20 flex justify-center py-3">
        <button
          onClick={() => setIsCovered(true)}
          className={`px-4 py-2 text-sm font-medium active:scale-110 duration-300 border rounded-l-md ${
            isCovered
              ? "bg-[#ff6b00] text-white"
              : "bg-gray-200 text-gray-700 transition duration-500 ease-in-out"
          }`}
        >
          What is covered?
        </button>
        <button
          onClick={() => setIsCovered(false)}
          className={`px-4 py-2 text-sm font-medium active:scale-110 duration-300 border rounded-r-md ${
            !isCovered
              ? "bg-[#ff6b00] text-white"
              : "bg-gray-200 text-gray-700 transition duration-300 ease-in-out"
          }`}
        >
          What is not covered?
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {(isCovered ? coveredItems : notCoveredItems).map((item, index) => (
          <div
            key={index}
            className="p-4 items-start rounded-lg hover:scale-105 duration-300 bg-white border border-dashed border-[#ff6b00] text-left"
          >
            <div className="flex items-center">
              <div className="p-4 rounded-full bg-gray-100">
                <div className="text-[#ff6b00] text-2xl">{item.icon}</div>
              </div>
              <h3 className="text-lg ml-3 font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
            </div>
            <div className="p-3">
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoveredAndNotCovered;
