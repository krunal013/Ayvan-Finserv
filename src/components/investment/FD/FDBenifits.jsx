import React from "react";
import startsmall from "../../../public/images/return.jpg";
import tax from "../../../public/images/safety.jpg";
import safe from "../../../public/images/tenure.jpg";
import grow from "../../../public/images/loan2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MutualBenifits = () => {
  const cards = [
    {
      title: "Guaranteed Returns",
      image: startsmall,
      description:
        "💡 FDs offer a fixed interest rate, ensuring stable and predictable returns without market fluctuations.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "Capital Safety",
      image: tax,
      description:
        "💡 Since FDs are not linked to the stock market, they provide a risk-free investment option, making them ideal for conservative investors.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "Flexible Tenure",
      image: safe,
      description:
        "💡 You can choose an FD tenure ranging from a few days to several years based on your financial goals.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "Loan Against FD",
      image: grow,
      description:
        "💡 You can avail a loan against your FD (usually up to 90% of the deposit amount) at a lower interest rate than personal loans.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
  ];

  return (
    <div>
      {/* <h1 className="text-center font-bold text-3xl">Mutual Benefits</h1> */}
      <section className="relative bg-gray-50">
        <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Benefits of Fixed Deposit
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-900">
              A Fixed Deposit (FD) is a secure investment option offered by banks and financial institutions, where you deposit a lump sum for a fixed tenure at a predetermined interest rate. Here are the key benefits of investing in an FD:
              </p>
              <p className="mt-8 text-base font-bold text-gray-900">
                Join to get free updates every week
              </p>
            </div>
          </div>
        </div>
        <div className="pb-8 lg:absolute lg:inset-0 lg:pb-0">
          <div className="flex flex-col items-center justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.5} // Default: Show 1.5 cards on small screens
              breakpoints={{
                640: { slidesPerView: 1.5, spaceBetween: 20 }, // Small screens (partially show the next card)
                1024: { slidesPerView: 2, spaceBetween: 30 }, // Large screens (show 2 cards fully)
              }}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
              className="w-full px-4"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="relative flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden">
                    <div className="w-full h-48">
                      <img
                        className="object-cover w-full h-full"
                        src={card.image}
                        alt={card.title}
                      />
                    </div>
                    <div className="flex-1 px-4 py-5">
                      <p className="text-lg font-bold text-gray-900">
                        {card.title}
                      </p>
                      <p className="mt-3 text-sm text-gray-500 line-clamp-3">
                        {card.description}
                      </p>
                    </div>
                    <div className="px-4 py-5 mt-auto border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">
                          {card.category} • {card.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Pagination placed below the Swiper */}
            <div className="swiper-pagination mt-6"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MutualBenifits;
