import React from "react";
import c1 from "../public/images/Checklist.png";
import c2 from "../public/images/Note Taking.png";
import c3 from "../public/images/Nurse.png";
import c4 from "../public/images/Chart 6.png";

const HowWeDoIt = () => {
  return (
    <section className="bg-[#ff6a00ec] text-white py-12 px-4 md:px-8 lg:px-16">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block bg-white text-[#ff6b00] text-sm font-bold px-2 py-1 rounded-md mb-4">
          HOW WE DO IT
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold mb-4">
          Our specialization lies in Health Insurance, we ensure that the health
          insurance policy recommended is aligned with the client’s suitability
          and risks involved.
        </h2>
      </div>

      {/* Cards Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="transition duration-300 hover:scale-110 flex flex-col items-center text-center">
          <img
            src={c1}
            alt="Affordable Plans Icon"
            className="w-44 h-44 mb-4 grayscale transition-all duration-300 hover:grayscale-0"
          />
          <h3 className="text-xl  text-white font-bold mb-2">
            Affordable plans to choose
          </h3>
          {/* <p className="text-sm text-white">
            Choose from a wide range of affordable plans tailored to your needs.
          </p> */}
        </div>

        {/* Card 2 */}
        <div className="transition duration-300 hover:scale-110 flex flex-col items-center text-center">
          <img
            src={c2}
            alt="Minimal Documentation Icon"
            className="w-44 h-44 mb-4 grayscale transition-all duration-300 hover:grayscale-0"
          />
          <h3 className="text-xl text-white font-bold mb-2">
            Minimal Documentation & easy claim
          </h3>
          {/* <p className="text-sm text-white">
            We streamline paperwork and simplify the claim process for a
            stress-free experience.
          </p> */}
        </div>

        {/* Card 3 */}
        <div className="transition duration-300 hover:scale-110 flex flex-col items-center text-center">
          <img
            src={c3}
            alt="Right Coverage Icon"
            className="w-44 h-44 mb-4 grayscale transition-all duration-300 hover:grayscale-0"
          />
          <h3 className="text-xl text-white font-bold mb-2">
            Right coverage of medical facilities
          </h3>
          {/* <p className="text-sm">
            Get access to comprehensive coverage across various medical
            facilities.
          </p> */}
        </div>

        {/* Card 4 */}
        <div className="transition duration-300 hover:scale-110 flex flex-col items-center text-center">
          <img
            src={c4}
            alt="High Claim Settlement Icon"
            className="w-44 h-44 mb-4 grayscale transition-all duration-300 hover:grayscale-0"
          />
          <h3 className="text-xl text-white font-bold mb-2">
            High claim settlement ratio
          </h3>
          {/* <p className="text-sm">
            Benefit from a proven track record of quick and successful claim
            settlements.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
