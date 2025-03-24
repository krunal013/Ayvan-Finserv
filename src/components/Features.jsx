import { IoSchool } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GiLovers, GiTakeMyMoney, GiCommercialAirplane } from "react-icons/gi";
import { MdOutlineAutoGraph } from "react-icons/md";

const Features = () => {
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Plan With Confidence
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
              Secure your future by planning for life's biggest milestones.
            </p>
          </div>

          <div className="grid grid-cols-2 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
              <IoSchool className="mx-auto text-5xl lg:text-6xl text-gray-800" />
              <h3 className="mt-12 text-sm lg:text-xl font-bold text-gray-900 font-pj">
                Child Education
              </h3>
              <p className="mt-5 text-sm hidden lg:block lg:text-base text-gray-600 font-pj">
                Ensure a bright future for your child with a well-planned education fund.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
              <FaHome className="mx-auto text-5xl lg:text-6xl text-[#BD6252]" />
              <h3 className="mt-12 text-sm lg:text-xl font-bold text-gray-900 font-pj">
                Dream Home
              </h3>
              <p className="mt-5 text-sm hidden lg:block lg:text-base text-gray-600 font-pj">
                Make your dream of owning a home a reality with strategic financial planning.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
              <GiLovers className="mx-auto text-5xl lg:text-6xl text-rose-500" />
              <h3 className="mt-12 text-sm lg:text-xl font-bold text-gray-900 font-pj">
                Child Marriage
              </h3>
              <p className="mt-5 text-sm hidden lg:block lg:text-base text-gray-600 font-pj">
                Prepare for your child's special day with thoughtful financial planning.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
              <GiCommercialAirplane className="mx-auto text-5xl lg:text-6xl text-blue-500" />
              <h3 className="mt-12 text-sm lg:text-xl font-bold text-gray-900 font-pj">
                Dream Vacation
              </h3>
              <p className="mt-5 text-sm hidden lg:block lg:text-base text-gray-600 font-pj">
                Explore the world without financial stress by planning ahead.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <GiTakeMyMoney className="mx-auto text-5xl lg:text-6xl text-green-500" />
              <h3 className="mt-12 text-sm lg:text-xl font-bold text-gray-900 font-pj">
                Retirement Planning
              </h3>
              <p className="mt-5 text-sm hidden lg:block lg:text-base text-gray-600 font-pj">
                Secure a comfortable and worry-free retirement with smart investments.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <MdOutlineAutoGraph className="mx-auto text-5xl lg:text-6xl text-amber-500" />
              <h3 className="mt-12 text-sm lg:text-xl font-bold text-gray-900 font-pj">
                Wealth Creation
              </h3>
              <p className="mt-5 text-sm hidden lg:block text-gray-600 font-pj">
                Build and grow your wealth strategically for a financially strong future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
