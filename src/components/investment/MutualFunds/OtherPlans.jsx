import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";
import {
  FaPiggyBank,
  FaChartLine,
  FaBriefcase,
  FaShieldAlt,
  FaHandsHelping,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // or use <a> if not using react-router

const OtherPlans = () => {
  // Array of card contents with associated react icons and redirect links
  const cards = [
    {
      title: "Fixed Deposit",
      description:
        "Secure and predictable returns with our fixed deposit plans designed for stability.",
      icon: <FaPiggyBank className="text-green-500" size={40} />,
      role: "Investment Specialist",
      link: "/Fixed", // update your route
    },
    {
      title: "Equity",
      description:
        "Dive into the dynamic world of equity markets with strategies tailored to maximize growth.",
      icon: <FaChartLine className="text-blue-500" size={40} />,
      role: "Market Analyst",
      link: "/Eq", // update your route
    },
    {
      title: "Portfolio Management",
      description:
        "Personalized portfolio management services to diversify and balance your investments.",
      icon: <FaBriefcase className="text-orange-500" size={40} />,
      role: "Portfolio Manager",
      link: "/PM", // update your route
    },
    {
      title: "Risk Management",
      description:
        "Mitigate potential losses with our comprehensive risk management strategies.",
      icon: <FaShieldAlt className="text-red-500" size={40} />,
      role: "Risk Advisor",
      link: "/RM", // update your route
    },
    {
      title: "Claim Advisory",
      description:
        "Expert advisory to help you navigate claims and secure your financial interests.",
      icon: <FaHandsHelping className="text-purple-500" size={40} />,
      role: "Claims Expert",
      link: "/CM", // update your route
    },
  ];

  return (
    <>
      <div className="w-full p-10">
        <span className="text-sm text-gray-500 font-medium mb-4 block lg:text-xl">
          Explore
        </span>
        <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-4">
          More Investment{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-500">
            Options
          </span>
        </h2>
        <Swiper
          className="mySwiper"
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={28}
          loop={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Link to={card.link} className="block">
                <div className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-indigo-600">
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <div className="rounded-full p-2 bg-gray-100">
                      {card.icon}
                    </div>
                    <div className="grid gap-1">
                      <h5 className="text-gray-900 text-xl font-bold transition-all duration-500">
                        {card.title}
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">
                        {card.role}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
                    {card.description}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom pagination container for extra styling */}
        <div className="custom-pagination mt-6"></div>
      </div>
    </>
  );
};

export default OtherPlans;
