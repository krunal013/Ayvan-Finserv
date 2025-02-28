import { useState } from "react";
import hero from "../../../public/images/piggybank.png";
import { GrUserExpert } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineCelebration } from "react-icons/md";


export default () => {
  return (
    <>
      <div className="">
        <section className="pt-12 bg-gradient-to-b from-white via-white to-gray-50">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
              <div className="self-center lg:col-span-4">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                  What is <br /> Mutual Fund ?
                </h1>
                <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                  A mutual fund is a type of investment vehicle consisting of a
                  portfolio of stocks, bonds, or other securities, which is
                  managed by a professional investment manager.
                </p>
                {/* <div className="relative inline-flex mt-9 group"> */}
                  {/* <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#02ce35] to-[#FF6b00] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div> */}

                  {/* <a
                    href="#"
                    title=""
                    className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600"
                    role="button"
                  >
                    Read Exclusive Blog
                  </a> */}
                {/* </div> */}
              </div>

              <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                  ⚡️ Why invest in mutual-funds
                </p>

                <div className="mt-6 space-y-6 lg:space-y-8">
                  <div className="relative overflow-hidden">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-12 h-12 rounded-lg shrink-0"
                        src="https://img.freepik.com/free-photo/front-view-two-stacks-coins-with-jar-plants_23-2148803919.jpg?uid=R188284410&ga=GA1.1.475042653.1738300675&semt=ais_hybrid"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <a href="#" title="">
                          Grow Your wealth with market experts
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-12 h-12 rounded-lg shrink-0"
                        src="https://img.freepik.com/premium-vector/gold-rupee-coins-indian-money-stacked-golden-coins_53562-8908.jpg?uid=R188284410&ga=GA1.1.475042653.1738300675&semt=ais_hybrid"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <a href="#" title="">
                          Start small earn big
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-12 h-12 rounded-lg shrink-0"
                        src="https://img.freepik.com/premium-photo/tax-concept-with-wooden-cubes-with-word-tax-stacked-coins_38391-1257.jpg?uid=R188284410&ga=GA1.1.475042653.1738300675&semt=ais_hybrid"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <a href="#" title="">
                          Tax Benifits & Wealth Creation
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-end lg:col-span-5">
                <img className="w-full mx-auto" src={hero} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
