import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../../../public/images/claim4.png";

export default () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div>
        <section className="pt-12 bg-gradient-to-b from-white via-white to-gray-50">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
              {/* Left Side - Title & Description */}
              <div className="self-center lg:col-span-4" data-aos="fade-up">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                  What is Claim Advisory?
                </h1>
                <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                Claim Advisory is a service that provides expert guidance and assistance in handling various types of claims, such as insurance claims, financial claims, legal claims, or business-related compensation claims. The primary goal is to help individuals or businesses maximize their claim benefits, reduce processing time, and ensure a fair settlement.
                </p>
              </div>

              {/* Right Side - Benefits List */}
              <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
                <p
                  className="text-xs font-bold tracking-widest text-gray-500 uppercase"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  ⚡️ Why Claim Advisory
                </p>

                <div className="mt-6 space-y-6 lg:space-y-8">
                  <div className="relative overflow-hidden" data-aos="zoom-in" data-aos-delay="300">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-12 h-12 rounded-lg shrink-0"
                        src="https://img.freepik.com/free-vector/interest-deposit-profitable-investment-fixed-income-regular-payments-recurring-cash-receipts-money-recipient-with-calendar-cartoon-character_335657-2980.jpg?uid=R46050617&ga=GA1.1.475042653.1738300675&semt=ais_hybrid"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <a href="#" title="">
                        ✅ Maximizes Compensation
                          <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden" data-aos="zoom-in" data-aos-delay="500">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-12 h-12 rounded-lg shrink-0"
                        src="https://img.freepik.com/free-vector/mortgage-concept-illustration_114360-16754.jpg?uid=R46050617&ga=GA1.1.475042653.1738300675&semt=ais_hybrid"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <a href="#" title="">
                        ⚖️ Fair Settlements

                          <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden" data-aos="zoom-in" data-aos-delay="700">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-12 h-12 rounded-lg shrink-0"
                        src="https://img.freepik.com/premium-vector/businessman-pushing-huge-clock-with-burning-arrows_1016-5915.jpg?uid=R46050617&ga=GA1.1.475042653.1738300675&semt=ais_hybrid"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <a href="#" title="">
                        ⏳ Saves Time & Effort
                          <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="self-end lg:col-span-5">
                <img className=" mx-auto h-78" src={hero} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
