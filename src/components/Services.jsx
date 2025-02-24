import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import life from "../public/images/life2.png";
import general from "../public/images/general2.png";
import Health from "../public/images/health2.png";

const Services = () => {
  const [isInsurance, setIsInsurance] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  const insurance = [
    {
      title: "General Insurance",
      description:
        "General insurance covers a wide range of non-life insurance policies like property, vehicle, and personal accident insurance. It helps protect against financial losses in case of unforeseen events like accidents, theft, or natural disasters.",
      img: general,
      bgcolor: "bg-blue-100",
    },
    {
      title: "Life Insurance",
      description:
        "Life insurance is designed to provide financial protection to your loved ones in the event of your passing. It ensures that your family is financially secure and can maintain their lifestyle by providing a lump sum payout or a series of payments after your death.",
      img: life,
      bgcolor: "bg-red-100",
    },
    {
      title: "Health Insurance",
      description:
        "Health insurance offers coverage for medical expenses, ensuring that you receive the necessary care without facing significant financial burdens. It can cover doctor visits, surgeries, hospital stays, and more, depending on the plan.",
      img: Health,
      bgcolor: "bg-green-100",
    },
  ];

  const investment = [
    {
      title: "Mutual Funds",
      description:
        "Mutual funds pool money from many investors to invest in a diversified portfolio of stocks, bonds, or other assets. This allows individual investors to access a wide variety of investment options while being professionally managed, reducing risk through diversification.",
      img: "/images/investment1.png",
    },
    {
      title: "SIP",
      description:
        "Systematic Investment Plans (SIPs) are a disciplined approach to investing in mutual funds, where you invest a fixed amount at regular intervals. This strategy helps average out the cost of investment over time and potentially maximizes returns through the power of compounding.",
      img: "/images/investment2.png",
    },
  ];

  return (
    <>
      <div className="sticky top-[80px] bg-white mb-10 z-20 flex justify-center py-3">
        <button
          onClick={() => setIsInsurance(true)}
          className={`px-4 py-2 text-sm font-medium active:scale-110 duration-300 border rounded-l-xl ${
            isInsurance ? "bg-[#ff6b00] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Insurance
        </button>
        <button
          onClick={() => setIsInsurance(false)}
          className={`px-4 py-2 text-sm font-medium active:scale-110 duration-300 border rounded-r-xl ${
            !isInsurance ? "bg-[#ff6b00] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Investments
        </button>
      </div>

      <div>
        {(isInsurance ? insurance : investment).map((item, index) => (
          <article
            key={index}
            className={`mx-2 my-10 ${item.bgcolor || "bg-gray-200"} max-w-screen-lg rounded-xl border border-gray-100 text-gray-700 shadow-md md:mx-auto`}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-up"} // AOS effect
          >
            <div className="flex flex-row items-center">
              {index % 2 === 0 ? (
                <>
                  <div className="p-5 w-2/3 order-1">
                    <p className="mt-2 text-2xl font-black md:text-4xl">
                      {(() => {
                        const words = item.title.split(" ");
                        if (words.length >= 2) {
                          return (
                            <>
                              {words[0]}{" "}
                              <span className="block md:inline">{words.slice(1).join(" ")}</span>
                            </>
                          );
                        }
                        return item.title;
                      })()}
                    </p>

                    <p className="mt-3 text-gray-600 text-sm md:text-base hidden md:block">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-center w-1/3 p-5 order-2">
                    <img className="w-20 md:w-96 object-cover" src={item.img} alt={item.title} />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-center w-1/3 p-5 order-1">
                    <img className="w-20 md:w-96 object-cover" src={item.img} alt={item.title} />
                  </div>
                  <div className="p-5 w-2/3 order-2">
                    <p className="mt-2 text-lg font-black md:text-4xl">
                      {(() => {
                        const words = item.title.split(" ");
                        if (words.length >= 2) {
                          return (
                            <>
                              {words[0]}{" "}
                              <span className="block md:inline">{words.slice(1).join(" ")}</span>
                            </>
                          );
                        }
                        return item.title;
                      })()}
                    </p>
                    <p className="mt-3 text-gray-600 text-sm md:text-base hidden md:block">
                      {item.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Services;
