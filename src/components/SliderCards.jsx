import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { MdHealthAndSafety } from "react-icons/md";
import { FaCarCrash, FaHome, FaPlaneDeparture } from "react-icons/fa";
import { IoBusinessOutline, IoBoatOutline, IoCash } from "react-icons/io5";

const SliderCard = () => {
  useEffect(() => {
    const swiperInstance = new Swiper(".mySwiper", {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1.5, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 2.5, spaceBetween: 20 },
      },
    });

    let direction = 1;
    const intervalId = setInterval(() => {
      const currentIndex = swiperInstance.activeIndex;
      const totalSlides = swiperInstance.slides.length;

      if (currentIndex === totalSlides - 1) direction = -1;
      else if (currentIndex === 0) direction = 1;

      direction === 1 ? swiperInstance.slideNext() : swiperInstance.slidePrev();
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const iconMap = {
    1: <MdHealthAndSafety className="h-10 w-10 text-[#ff6b00]" />,
    2: <FaCarCrash className="h-10 w-10 text-[#ff6b00]" />,
    3: <FaHome className="h-10 w-10 text-[#ff6b00]" />,
    4: <FaPlaneDeparture className="h-10 w-10 text-[#ff6b00]" />,
    5: <IoBusinessOutline className="h-10 w-10 text-[#ff6b00]" />,
    6: <IoBoatOutline className="h-10 w-10 text-[#ff6b00]" />,
    7: <IoCash className="h-10 w-10 text-[#ff6b00]" />,
  };

  const testimonials = [
    { id: 1, name: "Health Insurance", role: "CEO", review: "Medical emergencies are unpredictable and very expensive; henceforth having a health insurance is not a luxury but a necessity." },
    { id: 2, name: "Motor Insurance", role: "Product Designer", review: "It is mandatory to have vehicle insurance to drive legally. A good policy covers any perceivable damage or loss." },
    { id: 3, name: "Property Insurance", role: "Developer", review: "Protect the structure and contents of your house. Risks include fire, theft and weather changes." },
    { id: 4, name: "Travel Insurance", role: "Developer", review: "Travel insurance covers risks such as loss of passport, checked baggage and flight disruptions." },
    { id: 5, name: "Commercial Insurance", role: "Developer", review: "Protects businesses from financial losses due to unforeseen risks." },
    { id: 6, name: "Marine Insurance", role: "Developer", review: "Covers damage or destruction of shipments during import and export." },
    { id: 7, name: "Liability Insurance", role: "Developer", review: "Protects against claims for injuries or damage to people or property." },
  ];

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-block bg-[#ff6b00] text-white text-xs font-bold px-2 py-1 rounded-md mb-4">
            CUSTOMIZED INVESTMENT OPTIONS
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Types of Insurance</h2>
        </div>
        <div className="relative">
          {/* Gradient Fade on Sides */}
          <div className="absolute top-0 left-0 h-full w-20 pointer-events-none z-10" style={{ background: "linear-gradient(to right, white, rgba(255,255,255,0))" }}></div>
          <div className="absolute top-0 right-0 h-full w-20 pointer-events-none z-10" style={{ background: "linear-gradient(to left, white, rgba(255,255,255,0))" }}></div>

          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="swiper-slide">
                  <div className="group bg-white border-2 border-dotted border-gray-500 rounded-xl p-6
                    h-72 w-full md:w-80 lg:w-96 mx-auto
                    overflow-hidden transition-all duration-500
                    hover:border-orange-600 hover:shadow-sm">
                    <div className="flex items-center gap-5 border-b border-gray-200 pb-5">
                      {iconMap[testimonial.id]}
                      <div>
                        <h5 className="text-gray-900 text-xl font-medium transition-all duration-500 mb-1">
                          {testimonial.name}
                        </h5>
                        <span className="text-sm leading-4 text-gray-500">{testimonial.role}</span>
                      </div>
                    </div>
                    <div className="h-full flex flex-col justify-between">
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pt-5 pb-3 group-hover:text-gray-800">
                        {testimonial.review}
                      </p>
                      <div className="flex items-center mb-3 gap-2 transition-all duration-500">
                        <span className="text-base font-semibold underline text-orange-600">Learn More</span>
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
