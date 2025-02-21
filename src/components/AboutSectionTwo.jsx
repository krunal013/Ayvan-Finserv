import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ApplicationMetrics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animates only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-white px-4 py-12 font-sans">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        {/* Box Wrapper */}
        <div className="bg-gray-100 p-6 sm:p-10 rounded-xl shadow-lg border" data-aos="fade-up">
          <h2 className="text-gray-800 text-xl sm:text-2xl font-bold mb-8 text-center">
            A trustworthy wealth management group serving our clients for over a decade to multiply the wealth of investors.
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
            {[
              { label: "Years", value: "10+" },
              { label: "Customers", value: "500+" },
              { label: "Transaction", value: "13 Million" },
              { label: "Total AUM", value: "40+Cr" },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border px-7 py-8 transition-transform duration-300 hover:shadow-lg hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 200} // Staggered effect
              >
                <p className="text-gray-400 text-base font-semibold mb-1 text-center sm:text-left">
                  {metric.label}
                </p>
                <h3 className="text-orange-500 text-3xl font-bold text-center sm:text-left">
                  {metric.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationMetrics;
