import React from "react";
import startsmall from "../../../public/images/startsmall.jpg";
import tax from "../../../public/images/tax-benifits.jpg";
import safe from "../../../public/images/safe-transparant.jpg";
import grow from "../../../public/images/moneygrow.jpg";

const MutualBenifits = () => {
  const cards = [
    {
      title: "Start Small",
      image:  startsmall ,
      description:
        "💡 You don’t need a lot of money; you can start investing with just a small amount. With Systematic Investment Plans (SIPs), you can start investing in mutual funds with as little as ₹500 per month. This makes it accessible for everyone, even beginners.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "Tax Benifits",
      image:  tax ,
      description:
        "💡 Some mutual funds help you save on taxes. Tax-saving mutual funds like Equity Linked Savings Schemes (ELSS) offer deductions under Section 80C of the Income Tax Act. This means you can reduce your taxable income while growing your wealth.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "Safe & Transparent",
      image:  safe ,
      description:
        "💡 Mutual funds are regulated by the government, so they are safe and trustworthy. All mutual funds in India are regulated by SEBI (Securities and Exchange Board of India). This ensures transparency, investor protection, and proper fund management.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
    {
      title: "Money Grows Faster",
      image: grow ,
      description:
        "💡 Thanks to the power of compounding, your money keeps growing if you stay invested for the long term. Mutual funds reinvest your earnings, allowing your money to multiply over time. The longer you stay invested, the more your wealth grows.",
      category: "Growth",
      readTime: "7 Mins Read",
    },
  ];

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Mutual Benifits</h1>
      <div className="">
        <section className="relative bg-gray-50">
          <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                  Benifits of Mutual Funds{" "}
                  {/* <span className="inline">
                    <img
                      className="inline w-auto h-8 sm:h-10 lg:h-12"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg"
                      alt="shape-1"
                    />
                  </span>{" "} */}
                  {/* by Ayvan Finserv
                  <span className="inline">
                    <img
                      className="inline w-auto h-8 sm:h-10 lg:h-11"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg"
                      alt="shape-2"
                    />
                  </span> */}
                </h1>
                <p className="mt-6 text-base font-normal leading-7 text-gray-900">
                  Mutual funds are one of the best ways to grow your money
                  safely and efficiently. They allow you to invest in different
                  assets like stocks, bonds, and other securities without
                  needing expert knowledge.
                </p>
                <svg
                  className="w-auto h-4 mt-8 text-gray-300"
                  viewbox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                  ></line>
                </svg>
                <p className="mt-8 text-base font-bold text-gray-900">
                  Join to get free updates every week
                </p>
              </div>
            </div>
          </div>
          <div className="pb-8 lg:absolute lg:inset-0 lg:pb-0">
            <div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="flex justify-start w-full gap-6 pb-8 overflow-x-auto snap-x">
                {cards.map((card, index) => (
                <div
                key={index}
                className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6 overflow-hidden"  
              >
                <div className="relative flex flex-col h-full overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                  <a href="#" title="" className="flex shrink-0">
                    <div className="w-full h-48 relative">  {/* Fixed image container height */}
                      <img
                        className="absolute inset-0 object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                        src={card.image}
                        alt={card.title}
                      />
                    </div>
                  </a>
                  <div className="flex-1 px-4 py-5 sm:p-6">
                    <a href="#" title="" className="">
                      <p className="text-lg font-bold text-gray-900">{card.title}</p>
                      <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                        {card.description}
                      </p>
                    </a>
                  </div>
                  {/* Footer sticks to bottom */}
                  <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" title="" className="">
                            {card.category}
                          </a>
                        </p>
                        <span className="text-sm font-medium text-gray-900">•</span>
                        <p className="text-sm font-medium text-gray-900">{card.readTime}</p>
                      </div>
                      <a href="#" title="" className="" role="button">
                        <svg
                          className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <line x1="17" y1="7" x2="7" y2="17"></line>
                          <polyline points="8 7 17 7 17 16"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
               
                ))}
              </div>
              <div className="flex items-center justify-end mt-2 space-x-5">
                <div className="w-16 h-[3px] rounded-full bg-gray-900"></div>
                <div className="w-16 h-[3px] rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MutualBenifits;
