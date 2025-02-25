import React from "react";
import startsmall from "../../../public/images/startsmall.jpg";
import tax from "../../../public/images/tax-benifits.jpg";
import safe from "../../../public/images/safe-transparant.jpg";
import grow from "../../../public/images/moneygrow.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MutualBenifits = () => {
  const cards = [
    {
      title: "High Return Potential",
      image: startsmall,
      description:
        "💡 You don’t need a lot of money; you can start investing with just a small amount. With Systematic Investment Plans (SIPs), you can start investing in mutual funds with as little as ₹500 per month. This makes it accessible for everyone, even beginners.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: " Tax Benefits",
      image: tax,
      description:
        "💡Long-term Capital Gains (LTCG) on equities (held for more than a year) are taxed at 10% (for gains exceeding ₹1 lakh in India), which is lower than many other forms of income.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "Hedge Against Inflation",
      image: safe,
      description:
        "💡Unlike fixed-income investments, equities tend to grow over time, helping you beat inflation and maintain purchasing power.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "Liquidity",
      image: grow,
      description:
        "💡Stocks are traded on stock exchanges and can be bought or sold easily, making equity investments highly liquid compared to real estate or other fixed assets.",
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
                Benefits of Equity
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-900">
              Equity investing can be a great tool for wealth creation, but it comes with risks. A long-term, diversified, and well-researched approach helps maximize benefits while managing risk.
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
