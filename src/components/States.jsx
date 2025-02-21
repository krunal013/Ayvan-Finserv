import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFileContract,
} from "react-icons/fa";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbClock24 } from "react-icons/tb";

const States = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="font-sans py-4 pt-20 pb-20">
      <div className="grid grid-cols-2 gap-y-10 lg:gap-10 md:grid-cols-2 lg:grid-cols-4 items-center justify-center text-center lg:divide-x divide-gray-300">
        
        {/* Active Policies */}
        <div className="flex-1 px-6" data-aos="fade-up" data-aos-delay="100">
          <FaFileContract className="text-[#ff6b00] h-7 w-7 lg:w-10 lg:h-10 mx-auto" />
          <h3 className="text-xl lg:text-3xl font-extrabold text-[#ff6b00] mt-5">
            5,000+
          </h3>
          <p className="text-md lg:text-base text-gray-800 font-semibold mt-3">
            Active Policies
          </p>
        </div>

        {/* Claims Processed */}
        <div className="flex-1 px-6" data-aos="fade-up" data-aos-delay="200">
          <MdOutlineWifiProtectedSetup className="text-[#ff6b00] h-7 w-7 lg:w-10 lg:h-10 mx-auto" />
          <h3 className="text-xl lg:text-3xl font-extrabold text-[#ff6b00] mt-5">
            1,200
          </h3>
          <p className="text-md lg:text-base text-gray-800 font-semibold mt-3">
            Claims Processed
          </p>
        </div>

        {/* Trust Worthy */}
        <div className="flex-1 px-6" data-aos="fade-up" data-aos-delay="300">
          <VscWorkspaceTrusted className="text-[#ff6b00] h-8 w-8 lg:w-10 lg:h-10 mx-auto" />
          <h3 className="text-xl lg:text-3xl font-extrabold text-[#ff6b00] mt-5">
            50
          </h3>
          <p className="text-md lg:text-base text-gray-800 font-semibold mt-3">
            Trust Worthy
          </p>
        </div>

        {/* Customer Support */}
        <div className="flex-1 px-6" data-aos="fade-up" data-aos-delay="400">
          <TbClock24 className="text-[#ff6b00] h-8 w-8 lg:w-10 lg:h-10 mx-auto" />
          <h3 className="text-xl lg:text-3xl font-extrabold text-[#ff6b00] mt-5">
            24/7
          </h3>
          <p className="text-sm lg:text-base text-gray-800 font-semibold mt-3">
            Customer Support
          </p>
        </div>

      </div>
    </div>
  );
};

export default States;
