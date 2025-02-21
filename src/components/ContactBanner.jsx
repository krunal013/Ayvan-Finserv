import React from "react";

const ContactBanner = () => {
  return (
    <section className="bg-[#FF6B00] py-12 px-6 md:px-20 mb-0 relative flex items">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side Content */}
        <div className="text-white max-w-lg">
          <span className="mt-5 bg-black text-white-600 px-1  py-1 rounded-md font-semibold hover:bg-gray-200 transition">
            CONTACT US
          </span>
          <h1 className="text md:text-2xl font-bold mt-4">
            A Complete one stop solution for all your finances
          </h1>
          <div className="mt-4 w-100 h-[2px] bg-white"></div>
          <p className="text-lg text-white mt-4">
            We are consultants, supporting the global FinTech community in generating great wealth for our clients.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="mt-4 mb-0 md:mt-0">
        <img 
            src="/images/contact.png" 
            alt="Support Agent" 
            className="w-[300px] md:w-[400px] object-contain"
          /> 
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
