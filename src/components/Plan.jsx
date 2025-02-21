import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoSchool } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { MdFlightTakeoff } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
      easing: "ease-in-out",
    });
  }, []);

  const features = [
    {
      title: "Child Education",
      description: "Education costs are increasing significantly; it’s an unavoidable expense and can become burdensome if not planned properly. Secure your child’s education by investing in mutual funds.",
      icon: <IoSchool className="text-9xl text-orange-500" />,
    },
    {
      title: "Dream Home",
      description: "Buying a dream house needs a lifetime of savings. Through proper planning and investing in mutual funds, and reaping the benefits of compounding one can fulfil this goal.",
      icon: <FaHome className="text-9xl text-orange-500" />,
    },
    {
      title: "Child Marriage",
      description: "Plan your child’s wedding and be prepared for the future. Start investing in mutual funds and build your corpus for it.",
      icon: <GiLovers className="text-8xl text-orange-500" />,
    },
    {
      title: "Dream Vacation",
      description: "Plan your dream vacation by monthly allocating your savings in mutual funds and take the advantage of compounding.",
      icon: <MdFlightTakeoff className="text-9xl text-orange-500" />,
    },
    {
      title: "Retirement Planning",
      description: "Make sure you and your nest egg are ready for later years. We help you to plan you a stress-free retirement plan for your hard-earned money.",
      icon: <FaHandHoldingUsd className="text-9xl text-orange-500" />,
    },
    {
      title: "Wealth Creation",
      description: "With diversification benefits, inflation beating returns and compounding effect, mutual funds are considered as one of the best avenues to park in your funds. One can invest in lump-sum or through SIP.",
      icon: <GiTakeMyMoney className="text-9xl text-orange-500" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto font-[sans-serif]">
      <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-16" data-aos="fade-up">
        PLAN WITH CONFIDENCE
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 bg-orange-100"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Adds a staggered effect
          >
            {feature.icon}
            <div>
              <h3 className="text-gray-800 text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
