import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import contact from "../public/images/contact2.jpg";

const ContactSection = () => {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  },);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <section className="py-16 ">
      <h1 className="text-orange-500 text-4xl lg:text-5xl sm:text-4xl font-bold text-center p-16   drop-shadow-md">
        Get in Touch With Us
      </h1>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {/* Left Section (Image) */}
          <div className="relative w-full h-80 lg:h-auto">
            <img
              src={contact}
              alt="Contact Us"
              className="w-full h-full object-cover lg:rounded-l-2xl rounded-2xl"
            />
            <div className="absolute inset-0 lg:bg-transparent flex   lg:text-center justify-center">

            </div>
            {/* Contact Info (Hidden on Mobile) */}
            <div className="absolute bottom-0 w-full p-5 sm:p-8 hidden lg:block">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <ContactInfo icon={<FaPhoneAlt size={24} color="#eb7734" />} text=" 470-601-1911" />
                <ContactInfo icon={<MdEmail size={24} color="#eb7734" />} text=" Pagedone1234@gmail.com" />
                <ContactInfo icon={<MdLocationOn size={30} color="#eb7734" />} text="654 Sycamore Avenue, Meadowville, WA 76543" />
              </div>
            </div>
          </div>

          {/* Right Section (Contact Form) */}
          <div className="bg-gray-50 p-6 sm:p-10 rounded-2xl">
            <h2 className="text-orange-500 text-3xl sm:text-4xl font-semibold mb-6">
              Send Us A Message
            </h2>
            <FormInput placeholder="Name" />
            <FormInput placeholder="Email" />
            <FormInput placeholder="Phone" />

            {/* Preferred method of communication */}
            <div className="mb-6">
              <h4 className="text-gray-500 text-lg font-normal mb-2">
                Preferred method of communication
              </h4>
              <div className="flex space-x-4">
                <RadioOption id="email" label="Email" selected={selectedMethod} onChange={() => setSelectedMethod("email")} />
                <RadioOption id="phone" label="Phone" selected={selectedMethod} onChange={() => setSelectedMethod("phone")} />
              </div>
            </div>

            <FormInput placeholder="Message" />
            <button className="w-full h-12 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-orange-700 bg-orange-500 shadow-sm">
              Send
            </button>

            {/* Contact Info (Only on Mobile) */}
            <div className="block lg:hidden mt-6 bg-white rounded-lg p-6 shadow-md">
              <ContactInfo icon={<FaPhoneAlt size={24} color="#eb7734" />} text="470-601-1911" />
              <ContactInfo icon={<MdEmail size={24} color="#eb7734" />} text="Pagedone1234@gmail.com" />
              <ContactInfo icon={<MdLocationOn size={40} color="#eb7734" />} text="654 Sycamore Avenue, Meadowville, WA 76543" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Info Component
const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center mb-4">
    {icon}
    <h5 className="text-black text-base font-medium ml-4">{text}</h5>
  </div>
);

// Form Input Component
const FormInput = ({ placeholder }) => (
  <input
    type="text"
    className="w-full h-12 text-gray-600 placeholder-gray-400 bg-white text-lg border border-gray-200 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
    placeholder={placeholder}
  />
);

// Radio Button Component
const RadioOption = ({ id, label, selected, onChange }) => (
  <label htmlFor={id} className="flex items-center cursor-pointer text-gray-500 text-base">
    <input
      id={id}
      type="radio"
      name="radio-group"
      checked={selected === id}
      onChange={onChange}
      className="hidden peer"
    />
    <span className="border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center mr-2">
      <span className={`w-2.5 h-2.5 rounded-full transition-transform ${selected === id ? 'bg-orange-500 scale-100' : 'scale-0'}`}></span>
    </span>
    {label}
  </label>
);

export default ContactSection;