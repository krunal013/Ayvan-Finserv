import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { MdHealthAndSafety } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { IoCashOutline } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";

const SliderCard = () => {
  useEffect(() => {
    const swiperInstance = new Swiper(".mySwiper", {
      slidesPerView: 1.5,
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1.2, spaceBetween: 2 },
        768: { slidesPerView: 1.5, spaceBetween: 2 },
        1024: { slidesPerView: 1.5, spaceBetween: 2 },
      },
    });

    let direction = 1;
    const intervalId = setInterval(() => {
      const currentIndex = swiperInstance.activeIndex;
      const totalSlides = swiperInstance.slides.length;

      if (currentIndex === totalSlides - 1) {
        direction = -1;
      } else if (currentIndex === 0) {
        direction = 1;
      }

      direction === 1 ? swiperInstance.slideNext() : swiperInstance.slidePrev();
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const iconMap = {
    1: <MdHealthAndSafety className="h-10 w-10 text-[#ff6b00]" />,
    2: <HiDocumentText className="h-10 w-10 text-[#ff6b00]" />,
    3: <FaChild className="h-10 w-10 text-[#ff6b00]" />,
    4: <IoCashOutline className="h-10 w-10 text-[#ff6b00]" />,
  };

  const testimonials = [
    {
      id: 1,
      name: "Term Plan",
      role: "CEO",
      review: [
        "Provides coverage for a specific period (e.g., 10, 20, or 30 years).",
        "Pays a death benefit to beneficiaries if the insured passes away during the term.",
        "Lower premiums compared to permanent life insurance.",
        "No cash value—only provides protection.",
      ],
    },
    {
      id: 2,
      name: "Endowment Policy",
      role: "Product Designer",
      review: [
        "Provides both insurance coverage and savings benefits.",
        "Pays out a lump sum either on policy maturity or in case of the policyholder’s death.",
        "Helps in wealth accumulation for future financial goals.",
        "Suitable for long-term financial planning and disciplined savings.",
      ],
    },
    {
      id: 3,
      name: "Child Insurance Plan",
      role: "Developer",
      review: [
        "A combination of investment and insurance to secure a child’s future.",
        "Provides financial support for education, marriage, and other milestones.",
        "Offers flexible payout options at key stages of a child's life.",
        "Provides tax benefits under applicable laws.",
      ],
    },
    {
      id: 4,
      name: "Unit Linked Insurance Plans",
      role: "Developer",
      review: [
        "Dual benefits of life insurance coverage and investment.",
        "Market-linked returns with the flexibility to invest in equity, debt, or balanced funds.",
        "Lock-in period of 5 years, promoting long-term savings.",
        "Partial withdrawal option after the lock-in period for financial needs.",
      ],
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-block bg-[#ff6b00] text-white text-xs font-bold px-2 py-1 rounded-md mb-4">
            CUSTOMIZED INVESTMENT OPTIONS
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Types of Life Insurance</h2>
        </div>
        <div className="relative">
          <div
            className="absolute top-0 left-0 h-full w-20 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to right, white, rgba(255,255,255,0))",
            }}
          ></div>
          <div
            className="absolute top-0 right-0 h-full w-20 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to left, white, rgba(255,255,255,0))",
            }}
          ></div>

          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="swiper-slide">
                  <div
                    className="group bg-white border-2 border-dotted border-gray-500 rounded-xl 
                    p-6 h-auto md:h-72 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
                    overflow-hidden transition-all duration-500 mx-auto 
                    hover:border-orange-600 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-5 border-b border-gray-200 mb-3">
                      {iconMap[testimonial.id]}
                      <div>
                        <h5 className="text-gray-900 text-xl font-medium transition-all duration-500 mb-1">
                          {testimonial.name}
                        </h5>
                        <span className="text-sm leading-4 text-gray-500">{testimonial.role}</span>
                      </div>
                    </div>
                    <div className="h-full flex flex-col justify-between">
                      {Array.isArray(testimonial.review) ? (
                        <ul className="list-disc pl-5 text-gray-600 space-y-2 transition-all duration-500 pt-5 pb-3 group-hover:text-gray-800">
                          {testimonial.review.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-base text-gray-600 leading-6 transition-all duration-500 pt-5 pb-3 group-hover:text-gray-800">
                          {testimonial.review}
                        </p>
                      )}

                      <div className="flex items-center mb-3 gap-2 transition-all duration-500">
                        <span className="text-base font-semibold underline text-orange-600">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .swiper-slide-active .group {
          border-color: #ff6b00 !important;
        }
      `}</style>
    </section>
  );
};

export default SliderCard;
