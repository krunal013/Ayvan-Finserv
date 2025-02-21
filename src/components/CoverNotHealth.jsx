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
            title: "Hospitalization Expenses",
            desc: " Covers room rent, nursing, ICU, and medical bills during hospital stays.",
        },
        {
            icon: <FaHospital />,
            title: "Pre & Post-Hospitalization",
            desc: "Medical expenses before and after hospitalization (usually 30-60 days pre and 60-90 days post).",
        },
        {
            icon: <FaBriefcaseMedical />,
            title: "Ambulance Charges ",
            desc: "Covers ambulance costs for emergency transportation to the hospital.",
        },
        {
            icon: <FaHouseDamage />,
            title: "Doctor’s Consultation Fees",
            desc: " Expenses for doctor visits, diagnosis, and follow-ups.",
        },
        {
            icon: <FaHeartbeat />,
            title: "Diagnostic Tests",
            desc: " Covers X-rays, MRIs, blood tests, and other necessary diagnostic procedures.",
        },
    ];

    const notCoveredItems = [
        {
            icon: <FaBan />,
            title: "Pre-Existing Diseases (Waiting Period)",
            desc: "Conditions like diabetes or hypertension may not be covered immediately (usually 2-4 years waiting period).",
        },
        {
            icon: <FaUserLock />,
            title: "Cosmetic & Plastic Surgery",
            desc:  "Procedures like Botox, liposuction, and cosmetic enhancements are not covered.",
        },
        {
            icon: <FaBan />,
            title: "Dental, Hearing, and Vision Care",
            desc: "Unless caused by an accident, most policies do not cover routine dental, hearing aids, or vision treatments.",
        },
        {
            icon: <FaMoneyBillWave />,
            title: "HIV/AIDS & Other STDs",
            desc: " Most insurance plans do not cover sexually transmitted diseases like HIV/AIDS.",
        },
    ];

    return (
        <div className="relative p-6 max-w-5xl mx-auto text-center bg-white">
            <h2 className="text-3xl text-[#ff6b00] font-semibold mb-4">
                Health Insurance Coverage
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
