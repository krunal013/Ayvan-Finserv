import { useState } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaHandHoldingHeart, FaHandHoldingMedical } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { BsBank2 } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md border-b-2 border-gray-200 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Link to="/">
            <img src="/images/aa.png" alt="Logo" className="h-12" />
          </Link>
        </div>

        <button className="md:hidden text-black focus:outline-none" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          <FaBars size={24} />
        </button>

        <nav className="hidden md:flex space-x-8 relative">
          <Link to="/about" className="hover:text-orange-600 text-black">
            About Us
          </Link>

          <div className="relative" onMouseEnter={() => setOpenDropdown("Services")} onMouseLeave={() => setOpenDropdown(null)}>
            <button className="flex items-center text-black hover:text-orange-600" onClick={() => toggleDropdown("Services")}>
              <span>Services</span> &nbsp; <FaChevronDown size={12} />
            </button>
            <div
              className={`absolute left-0 top-full border-t-2 border-[#ff6b00] mt-7 w-[600px] bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-700 ease-in-out ${openDropdown === "Services" ? "max-h-[500px] " : "max-h-0 border-t-[#ff6a0000]"}`}
            >
              <div className="flex p-4">
                <div className="w-1/2 border-r pr-4">
                  <h3 className="font-semibold tracking-wider text-black mb-2">INSURANCES</h3>
                  <ul className="p-2 space-y-4">
                    <Link to="/Generalinsurance" className="flex text-gray-900 gap-2 hover:text-orange-600">
                      <IoNewspaperOutline className="text-xl text-[#ff6b00]" /> General Insurance
                    </Link>
                    <Link to="/Lifeinsurance" className="flex text-gray-900 gap-2 hover:text-orange-600">
                      <FaHandHoldingHeart className="text-xl text-rose-500" /> Life Insurance
                    </Link>
                    <Link to="/Healthinsurance" className="flex text-gray-900 gap-2 hover:text-orange-600">
                      <FaHandHoldingMedical className="text-xl text-teal-500" /> Health Insurance
                    </Link>
                  </ul>
                </div>
                <div className="w-1/2 pl-4">
                  <h3 className="font-semibold tracking-wider text-black mb-2">INVESTMENTS</h3>
                  <ul className="p-2 space-y-4">
                    <Link to="/mutualfunds" className="flex text-gray-900 gap-2 hover:text-amber-600">
                      <GrMoney className="text-xl text-[#ff6b00]" /> Mutual Funds
                    </Link>
                    <Link to="/stocks" className="flex text-gray-900 gap-2 hover:text-orange-600">
                      <FaChartLine className="text-xl text-red-500" /> SIP
                    </Link>
                    <Link to="/bonds" className="flex text-gray-900 gap-2 hover:text-orange-600">
                      <BsBank2 className="text-xl text-teal-500" /> Fixed Deposite
                    </Link>
                    <Link to="/bonds" className="flex text-gray-900 gap-2 hover:text-orange-600">
                      <FaMoneyBillTrendUp className="text-xl text-green-700" /> Portfolio Management
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link to="/portfolio" className="hover:text-orange-600 text-black">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-orange-600 text-black">
            Contact Us
          </Link>
        </nav>

        <Link to="/hire" className="hidden md:block bg-[#ff6b00] text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Book A 30 Min Call →
        </Link>
      </div>
    </header>
  );
};

export default Header;