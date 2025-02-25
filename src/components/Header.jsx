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
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/images/aa.png" alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 relative">
          <Link to="/about" className="hover:text-orange-600 text-black">
            About Us
          </Link>

          {/* Services Dropdown for Desktop */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("Services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="flex items-center text-black hover:text-orange-600"
              onClick={() => toggleDropdown("Services")}
            >
              <span>Services</span> &nbsp; <FaChevronDown size={12} />
            </button>
            <div
              className={`absolute left-0 top-full border-t-2 border-[#ff6b00] mt-7 w-[800px] bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-700 ease-in-out ${
                openDropdown === "Services"
                  ? "max-h-[500px]"
                  : "max-h-0 border-t-[#ff6a0000]"
              }`}
            >
              <div className="flex p-4">
                {/* Insurance Section */}
                <div className="w-1/2 border-r pr-4">
                  <h3 className="font-semibold tracking-wider text-black mb-2">
                    INSURANCES
                  </h3>
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

                {/* Investments Section */}
                <div className="w-1/2 pl-4 border-r">
                  <h3 className="font-semibold tracking-wider text-black mb-2">
                    INVESTMENTS
                  </h3>
                  <ul className="p-2 space-y-4">
                    <Link to="/MutualFund" className="flex text-gray-900 gap-2 hover:text-amber-600">
                      <GrMoney className="text-xl text-[#ff6b00]" /> Mutual Funds
                    </Link>
                    <Link to="/Fixed" className="flex text-gray-900 gap-2 hover:text-orange-600">
                      <BsBank2 className="text-xl text-teal-500" /> Fixed Deposit
                    </Link>
                    
                    <Link to="/Eq" className="flex text-gray-900 gap-2 hover:text-orange-600">
                      <FaMoneyBillTrendUp className="text-xl text-green-700" /> Equity
                    </Link>
                  </ul>
                </div>

                {/* Other Section */}
                <div className="w-1/2 pl-4">
                  <h3 className="font-semibold tracking-wider text-black mb-2">
                    OTHER
                  </h3>
                  <ul className="p-2 space-y-4">
                    <Link to="/MutualFund" className="flex text-gray-900 gap-2 hover:text-amber-600">
                      <GrMoney className="text-xl text-[#ff6b00]" /> Risk Management
                    </Link>
                    <Link to="/bonds" className="flex text-gray-900 gap-2 hover:text-orange-600">
                      <FaMoneyBillTrendUp className="text-xl text-green-700" /> Portfolio Management
                    </Link>
                    <Link to="/bonds" className="flex text-gray-900 gap-2 hover:text-orange-600">
                      <BsBank2 className="text-xl text-teal-500" /> Claim Advisory
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

        <Link
          to="/hire"
          className="hidden md:block bg-[#ff6b00] text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          Book A 30 Min Call →
        </Link>
      </div>

      {/* Mobile Menu (Drawer) */}
      {isDrawerOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-4 space-y-4 text-black">
          <Link to="/about" onClick={() => setIsDrawerOpen(false)}>About Us</Link>

          {/* Services Menu */}
          <div>
            <button className="flex items-center justify-between w-full text-left py-2"
              onClick={() => toggleDropdown("Services")}>
              <span>Services</span>
              <FaChevronDown className={`transition-transform duration-300 ${openDropdown === "Services" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "Services" && (
             
                <ul className="pl-4 space-y-2 list-disc list-inside">
                  <li>
                    <h4 className="font-semibold mt-2">Insurances</h4>
                    <ul className="pl-4 space-y-1 list-disc list-inside">
                      <li><Link to="/Generalinsurance" onClick={() => setIsDrawerOpen(false)}>General Insurance</Link></li>
                      <li><Link to="/Lifeinsurance" onClick={() => setIsDrawerOpen(false)}>Life Insurance</Link></li>
                      <li><Link to="/Healthinsurance" onClick={() => setIsDrawerOpen(false)}>Health Insurance</Link></li>
                    </ul>
                  </li>
              
                  <li>
                    <h4 className="font-semibold mt-2">Investments</h4>
                    <ul className="pl-4 space-y-1 list-disc list-inside">
                      <li><Link to="/MutualFund" onClick={() => setIsDrawerOpen(false)}>Mutual Funds</Link></li>
                      <li><Link to="/Fixed" onClick={() => setIsDrawerOpen(false)}>Fixed Deposit</Link></li>

                      <li><Link to="/Eq" onClick={() => setIsDrawerOpen(false)}>Equity</Link></li>
                    </ul>
                  </li>
              
                  <li>
                    <h4 className="font-semibold mt-2">Other</h4>
                    <ul className="pl-4 space-y-1 list-disc list-inside">
                      <li><Link to="/MutualFund" onClick={() => setIsDrawerOpen(false)}>Risk Management</Link></li>
                      <li><Link to="/bonds" onClick={() => setIsDrawerOpen(false)}>Portfolio Management</Link></li>
                      <li><Link to="/bonds" onClick={() => setIsDrawerOpen(false)}>Claim Advisory</Link></li>
                    </ul>
                  </li>
                </ul>
              )}
              
            
          </div>

          <Link to="/portfolio" onClick={() => setIsDrawerOpen(false)}>Portfolio</Link>
          <Link to="/contact" onClick={() => setIsDrawerOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
