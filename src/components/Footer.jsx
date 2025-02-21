import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import footerimage from "../public/images/Investing 3.png";
import footerimage2 from "../public/images/Investing 4.png";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="bg-white mt-10">
        {/* Footer Top Curve */}
        <div className="bg-white relative ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ff6b00"
              fillOpacity="1"
              d="M0,288L120,272C240,256,480,224,720,224C960,224,1200,256,1320,272L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>

          {/* Footer Image Positioned in Center */}
        </div>

        {/* Footer Content */}
        <div className="bg-[#ff6b00] text-white py-10 relative">
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[170px]  lg:-translate-y-[340px] w-44 sm:w-72">
            <img src={footerimage} alt="Footer Icon" className="w-full" />
          </div>

          <div className="container mx-auto px-8">
            {/* Help Section */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold">
                Not Finding, what you are looking for?
              </h2>
              <button className="mt-4 px-6 py-3 bg-white text-[#ff6b00] font-semibold rounded-md shadow-md">
                LET US HELP YOU
              </button>
            </div>

            {/* Footer Content Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-2 sm:col-span-1 mx-auto text-center">
                <h3 className="text-xl font-semibold">
                  <span className="text-white font-bold">Ayvan</span> Finserv
                  Management
                </h3>
                <p className="mt-4 text-sm">
                  We offer you a complete range of solutions that complement our
                  advisory services...
                </p>
                <p className="mt-4 text-sm font-semibold">CORPORATE OFFICE</p>
                <p className="text-sm">
                  A-507, Infinity Tower Corporate Road, Cross Road, Prahlad
                  Nagar, Ahmedabad, Gujarat 380015
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">About AYVAN</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Our Services</li>
                  <li>Contact Us</li>
                  <li>Blogs</li>
                </ul>
              </div>

              {/* Our Offerings - Right side */}
              <div>
                <h3 className="text-lg font-semibold">Our Offerings</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>Mutual Funds</li>
                  <li>General Insurance</li>
                  <li>Life Insurance</li>
                  <li>Fixed Deposit</li>
                </ul>
              </div>

              {/* Get in Touch & Yes, We Are Social - Centered on mobile */}
              <div className="col-span-2 sm:col-span-1 mx-auto text-center">
                <h3 className="text-lg font-semibold">Get in Touch</h3>
                <div className="mt-4 flex justify-center items-center space-x-2">
                  <FaPhoneAlt />
                  <span className="text-sm">+91-90999 00106</span>
                </div>
                <div className="mt-2 flex justify-center items-center space-x-2">
                  <FaEnvelope />
                  <span className="text-sm">info@youwininvestment.com</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 mx-auto text-center">
                <h3 className="text-lg font-semibold mt-6">
                  Yes we are Social
                </h3>
                <div className="mt-4 flex justify-center space-x-4 text-xl">
                  <FaFacebookF className="cursor-pointer" />
                  <FaInstagram className="cursor-pointer" />
                  <FaLinkedin className="cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-center text-sm mt-8 border-t border-white pt-4">
              <p>Mutual fund investments are subject to market risks...</p>
              <p className="mt-2">
                YouWin Wealth Management Services makes no warranties or
                representations...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
