import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import startsmall from "../../../public/images/7732656_5283.jpg";
import tax from "../../../public/images/pro.jpg";
import safe from "../../../public/images/business.jpg";
import grow from "../../../public/images/security.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MutualBenifits = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true
     });
  }, []);

  const cards = [
    {
      title: "🚀 Improved Decision-Making",
      image: startsmall,
      description:
        "💡 Helps businesses make informed choices by identifying potential risks in advance.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "💰 Financial Protection",
      image: tax,
      description:
        "💡Reduces financial losses by proactively managing uncertainties.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "⚠️ Minimized Business Disruptions ",
      image: safe,
      description:
        "💡Prevents operational downtime and ensures smooth workflow.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "🛡️ Enhanced Compliance & Security",
      image: grow,
      description:
        "💡Ensures adherence to industry regulations and legal requirements.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
  ];

  return (
    <div>
      <section className="relative bg-gray-50">
        <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h1
                className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
                data-aos="fade-up"
              >
                Benefits of Claim Advisory
              </h1>
              <p
                className="mt-6 text-base font-normal leading-7 text-gray-900"
                data-aos="fade-up"
                data-aos-delay="200"
              >
             A Claim Advisory service provides expert guidance to individuals and businesses in handling their claims efficiently, ensuring a smooth and hassle-free process. One of the biggest advantages is maximized compensation, as professionals help you secure the full amount you are entitled to. 
              </p>
              <p
                className="mt-8 text-base font-bold text-gray-900"
                data-aos="fade-up"
                data-aos-delay="400"
              >
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
              slidesPerView={1.5}
              breakpoints={{
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
              }}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
              className="w-full px-4"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden"
                    data-aos="zoom-in"
                    data-aos-delay={index * 200}
                  >
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
            <div className="swiper-pagination mt-6" data-aos="fade-up" data-aos-delay="600"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MutualBenifits;
