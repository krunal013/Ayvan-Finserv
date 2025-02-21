import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Plan your finances and",
    highlight: "Manage your money",
    description: "We're consultants that strive to give you a rich and holistic investment experience.",
    buttonText: "GO TO SERVICES",
    image: "/images/banner-1.jpg",
  },
  {
    title: "Secure your future with",
    highlight: "Smart Investments",
    description: "Our expert advice helps you make informed financial decisions for long-term growth.",
    buttonText: "EXPLORE PLANS",
    image: "/images/banner-1.jpg",
  },
  {
    title: "Achieve financial freedom",
    highlight: "With our guidance",
    description: "Get personalized strategies that align with your financial goals.",
    buttonText: "LEARN MORE",
    image: "/images/banner-1.jpg",
  },
];

const Slider = () => {
  return (
    <div className="relative w-full  mt-20">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      
        className="w-full"
      >
        {slides.map((slide, index) => (
         <SwiperSlide key={index}>
         <div
           className="relative w-full h-[150px] sm:h-[150px] md:h-[500px] lg:h-[600px] flex items-center text-left text-white"
           style={{
             backgroundImage: `linear-gradient(to right, rgba(255, 107, 0, 0.9), rgba(255, 193, 7, 0.4)), url(${slide.image})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
           }}
         >
           <div className="ml-2  md:ml-14 max-w-3xl px-4 sm:px-6 ">
            
             <h2 className="text-sm sm:text-4xl font-bold mt-3 text-left">
               {slide.title} <br />
               <span className="text-yellow-400">{slide.highlight}</span>
             </h2>
             <p className="mt-3 text-base sm:text-lg text-left hidden sm:block">
              {slide.description}
            </p>

             <button className="mt-5 bg-white text-orange-600 text-[10px] lg:text-md px-2 sm:px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
               {slide.buttonText}
             </button>
           </div>
         </div>
       </SwiperSlide>
       
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button className="swiper-button-prev absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 text-white p-1 sm:p-3 rounded-full opacity-75 hover:opacity-100 hidden sm:block">
      <FaChevronLeft className="hidden sm:block" />
    </button>

      <button className="swiper-button-next absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full opacity-75 hover:opacity-100 hidden sm:block">
        <FaChevronRight className="hidden sm:block" />
      </button>

    </div>
  );
};

export default Slider;
