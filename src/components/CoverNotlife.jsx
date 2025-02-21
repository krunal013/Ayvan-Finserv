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
            title: "Accidental Death",
            desc: "Provides financial protection in case of accidental demise.",
        },
        {
            icon: <FaHospital />,
            title: "Terminal Illnesses",
            desc: " Some policies cover life-threatening diseases like cancer.",
        },
        {
            icon: <FaBriefcaseMedical />,
            title: "Disability Benefits",
            desc: "Some policies provide payouts in case of permanent or total disability.",
        },
        {
            icon: <FaHouseDamage />,
            title: "Loan Protection",
            desc: "Helps pay off outstanding loans in case of policyholder’s death.",
        },
        {
            icon: <FaHeartbeat />,
            title: "Maturity Benefit",
            desc: "Certain life insurance plans (like endowment or ULIPs) offer payouts if the policyholder survives the term.",
        },
    ];

    const notCoveredItems = [
        {
            icon: <FaBan />,
            title: "Suicide (Within the Initial Period)",
            desc: "Usually not covered in the first year.",
        },
        {
            icon: <FaUserLock />,
            title: "Death Due to Criminal Activities ",
            desc: "If the policyholder dies while committing a crime, the claim may be rejected.",
        },
        {
            icon: <FaBan />,
            title: "War or Terrorist Activities",
            desc: "Death during war-like situations or terrorist attacks is usually excluded.",
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Natural Disaster or Acts of God",
            desc: " Some policies may not cover deaths due to earthquakes, tsunamis, or other large-scale natural disasters.",
        },
    ];

    return (
        <div className="relative p-6 max-w-5xl mx-auto text-center bg-white">
            <h2 className="text-3xl text-[#ff6b00] font-semibold mb-4">
                Life Insurance Coverage
            </h2>

            {/* Sticky Button Section */}
            <div className="sticky top-[80px] bg-white z-20 flex justify-center py-3">
                <button
                    onClick={() => setIsCovered(true)}
                    className={`px-4 py-2 text-sm font-medium active:scale-110 duration-300 border rounded-l-md ${isCovered
                            ? "bg-[#ff6b00] text-white"
                            : "bg-gray-200 text-gray-700 transition duration-500 ease-in-out"
                        }`}
                >
                    What is covered?
                </button>
                <button
                    onClick={() => setIsCovered(false)}
                    className={`px-4 py-2 text-sm font-medium active:scale-110 duration-300 border rounded-r-md ${!isCovered
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
