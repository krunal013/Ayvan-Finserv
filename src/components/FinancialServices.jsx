import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import AOS from "aos";
import "aos/dist/aos.css";

const FinancialServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
    return () => enableBodyScroll(document.body);
  }, [selectedService]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const services = [
    { title: "Mutual fund", shortDescription: "Professionally managed investment funds.", description: "Professionally managed funds by asset management companies and fund houses that pool investments from several individuals with the same investment objective and in line with the fund’s investment mandate.", bgColor: "bg-white", icon: "💳" },
    { title: "General Insurance", shortDescription: "Financial security for unforeseen events.", description: "Secure yourself financially from any type of unforeseeable events regarding the motor vehicle, houses, health, and travel.", bgColor: "bg-white", icon: "🏢" },
    { title: "Life Insurance", shortDescription: "Ensure your family's financial security.", description: "Range of life insurance solutions for your family’s financial security and keeping you financially prepared for life’s uncertainties and emergencies.", bgColor: "bg-white", icon: "👶" },
    { title: "Fixed Deposits", shortDescription: "Higher returns than savings accounts.", description: "Earn greater return than generated from a regular saving account by investing in an investment scheme provided by post office, banks, and non-banking financing companies.", bgColor: "bg-white", icon: "💰" },
    { title: "Health Insurance", shortDescription: "Essential protection for medical emergencies.", description: "Medical emergencies are unpredictable and very expensive, henceforth having a health insurance is not a luxury but a necessity.", bgColor: "bg-white", icon: "🏥" },
    { title: "Mediclaim", shortDescription: "Essential protection for medical emergencies.", description: "Medical emergencies are unpredictable and very expensive, henceforth having a health insurance is not a luxury but a necessity.", bgColor: "bg-white", icon: "🏥" },
  ];

  return (
    <>
      <div className="text-center mt-10" data-aos="fade-up">
        <span className="text-[#ff6b00] font-bold font-sans text-5xl">
          Financial Services
        </span>
        <p className="text-gray-800 font-semibold p-3">
          <i>
            This section offers a variety of financial products designed to
            safeguard your wealth and well-being.
          </i>
        </p>
      </div>
      <div className="flex justify-center py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 w-full max-w-4xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.bgColor} p-6 rounded-lg border border-[#ff6a0027] shadow-lg text-center cursor-pointer transition-transform hover:scale-105`}
              layoutId={`card-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedService({ ...service, index })}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-4">{service.shortDescription}</p>
              <span className="text-5xl">{service.icon}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-2xl max-w-md"
              layoutId={`card-${selectedService.index}`}
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              exit={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              data-aos="fade-up"
            >
              <h2 className="text-3xl font-bold text-gray-700 mb-4">
                {selectedService.title}
              </h2>
              <p className="text-gray-700">{selectedService.description}</p>
              <button
                className="mt-4 text-red-500 font-semibold"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FinancialServices;
