import React from "react";
import { CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination"; // Removed navigation CSS

const WhatMakesUsDifferent = () => {
  return (
    <section className="py-12 bg-[#dff0f8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left: "What Makes Us Different" Section */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <button className="bg-orange-500 text-black font-bold px-4 py-2 rounded-md">
                WHAT MAKES US DIFFERENT
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
                Check what we offer so different to our customers
              </h2>
            </div>
            <div className="space-y-4">
              {[
                "Tailor-made plans",
                "Wide range of products",
                "One-stop financial hub",
                "Experienced financial consultants",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-teal-500 w-6 h-6" />
                  <span className="text-lg font-medium text-gray-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonial Slider */}
          <div className="w-full lg:w-1/2">
            <span className="text-sm text-gray-500 font-medium mb-4 block text-xl">
              Testimonial
            </span>
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-4">
              23k+ Customers gave their{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-500">
                Feedback
              </span>
            </h2>
            <Swiper
              className="mySwiper"
              modules={[Pagination]} // Removed Navigation
              slidesPerView={2}
              spaceBetween={28}
              loop={true}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 28 },
                1024: { slidesPerView: 2, spaceBetween: 32 },
              }}
            >
              {[1, 2, 3, 4].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-indigo-600">
                    <div className="flex items-center gap-5 mb-5 sm:mb-9">
                      <img
                        className="rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1696229969.png"
                        alt="avatar"
                      />
                      <div className="grid gap-1">
                        <h5 className="text-gray-900 font-medium transition-all duration-500">
                          Jane D
                        </h5>
                        <span className="text-sm leading-6 text-gray-500">
                          CEO
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                            fill="currentColor"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
                      The user interface of this pagedone is so intuitive, I was
                      able to start using it without any guidance.
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
