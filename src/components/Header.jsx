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
  const [openParentDropdown, setOpenParentDropdown] = useState(null);
  const [openChildDropdown, setOpenChildDropdown] = useState(null);

  const toggleParentDropdown = (section) => {
    setOpenParentDropdown((prev) => (prev === section ? null : section));
  };

  const toggleChildDropdown = (subSection) => {
    setOpenChildDropdown((prev) => (prev === subSection ? null : subSection));
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white  shadow-md border-b-2 border-gray-200 z-50">
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
          <Link
            to="/about"
            className="hover:text-orange-600 text-black uppercase tracking-wider font-semibold text-sm"
          >
            About Us
          </Link>

          {/* Services Dropdown for Desktop */}
          <div
            className="relative md:block hidden"
            onMouseEnter={() => setOpenDropdown("Services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="flex items-center text-black hover:text-orange-600"
              onClick={() => toggleDropdown("Services")}
            >
              <Link to="/services">
                <span className="uppercase tracking-wider font-semibold text-sm">
                  Services
                </span>
              </Link>
              &nbsp; <FaChevronDown size={12} />
            </button>
            <div
              className={`absolute left-0 top-full border-t-2 border-[#ff6b00] mt-7 w-[800px] bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-700 ease-in-out ${
                openDropdown === "Services"
                  ? "max-h-[500px]"
                  : "max-h-0 opacity-25 border-t-[#ff6a0000]"
              }`}
            >
              <div className="flex p-4">
                {/* Insurance Section */}
                <div className="w-1/2 border-r pr-4">
                  <h3 className="font-semibold tracking-wider text-black mb-2">
                    INSURANCES
                  </h3>
                  <ul className="p-2 space-y-4">
                    <Link
                      to="/Generalinsurance"
                      className="flex text-gray-900 gap-2 hover:text-orange-600"
                    >
                      <IoNewspaperOutline className="text-xl text-[#ff6b00]" />{" "}
                      General Insurance
                    </Link>
                    <Link
                      to="/Lifeinsurance"
                      className="flex text-gray-900 gap-2 hover:text-orange-600"
                    >
                      <FaHandHoldingHeart className="text-xl text-rose-500" />{" "}
                      Life Insurance
                    </Link>
                    <Link
                      to="/Healthinsurance"
                      className="flex text-gray-900 gap-2 hover:text-orange-600"
                    >
                      <FaHandHoldingMedical className="text-xl text-teal-500" />{" "}
                      Health Insurance
                    </Link>
                  </ul>
                </div>

                {/* Investments Section */}
                <div className="w-1/2 pl-4 border-r">
                  <h3 className="font-semibold tracking-wider text-black mb-2">
                    INVESTMENTS
                  </h3>
                  <ul className="p-2 space-y-4">
                    <Link
                      to="/MutualFund"
                      className="flex text-gray-900 gap-2 hover:text-amber-600"
                    >
                      <GrMoney className="text-xl text-[#ff6b00]" /> Mutual
                      Funds
                    </Link>
                    <Link
                      to="/Fixed"
                      className="flex text-gray-900 gap-2 hover:text-orange-600"
                    >
                      <BsBank2 className="text-xl text-teal-500" /> Fixed
                      Deposit
                    </Link>

                    <Link
                      to="/Eq"
                      className="flex text-gray-900 gap-2 hover:text-orange-600"
                    >
                      <FaMoneyBillTrendUp className="text-xl text-green-700" />{" "}
                      Equity
                    </Link>
                  </ul>
                </div>

                {/* Other Section */}
                <div className="w-1/2 pl-4">
                  <h3 className="font-semibold tracking-wider text-black mb-2">
                    OTHER
                  </h3>
                  <ul className="p-2 space-y-4">
                    <Link
                      to="/Risk"
                      className="flex text-gray-900 gap-2 hover:text-amber-600"
                    >
                      <GrMoney className="text-xl text-[#ff6b00]" /> Risk
                      Management
                    </Link>
                    <Link
                      to="/Port"
                      className="flex text-gray-900 gap-2 hover:text-orange-600"
                    >
                      <FaMoneyBillTrendUp className="text-xl text-green-700" />{" "}
                      Portfolio Management
                    </Link>
                    <Link
                      to="/Claim"
                      className="flex text-gray-900 gap-2 hover:text-orange-600"
                    >
                      <BsBank2 className="text-xl text-teal-500" /> Claim
                      Advisory
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/portfolio"
            className="hover:text-orange-600 text-black uppercase tracking-wider font-semibold text-sm"
          >
            Portfolio
          </Link>
          <Link
            to="/Calculators"
            className="hover:text-orange-600 text-black uppercase tracking-wider font-semibold text-sm"
          >
            Calculators
          </Link>
          <Link
            to="/contact"
            className="hover:text-orange-600 text-black uppercase tracking-wider font-semibold text-sm"
          >
            Contact Us
          </Link>
        </nav>

        <Link
          to="/hire"
          className="hidden md:block bg-[#ff6b00] text-white px-4 py-2 rounded-md hover:bg-gray-800 uppercase tracking-wider font-semibold text-sm"
        >
          Book A 30 Min Call →
        </Link>
      </div>

      {/* Mobile Menu (Drawer) */}
      {isDrawerOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-4 space-y-4 text-black z-50">
          <Link
            to="/about"
            className="py-2 px-3 hover:bg-gray-100 rounded"
            onClick={() => setIsDrawerOpen(false)}
          >
            About Us
          </Link>

          {/* Services Parent Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full text-left py-3 px-3 font-semibold hover:bg-gray-100 rounded transition"
              onClick={() => toggleParentDropdown("Services")}
            >
              <span>Services</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openParentDropdown === "Services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openParentDropdown === "Services" && (
              <div className="ml-4 mt-2 border-l-2 border-gray-300 pl-4 space-y-3 transition-all duration-300">
                {/* Insurances Dropdown */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-left py-2 font-semibold hover:bg-gray-100 rounded transition"
                    onClick={() => toggleChildDropdown("Insurances")}
                  >
                    <span>Insurances</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openChildDropdown === "Insurances" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openChildDropdown === "Insurances" && (
                    <ul className="mt-1 space-y-1 pl-4 border-l border-gray-300">
                      <li>
                        <Link
                          to="/Generalinsurance"
                          className="block py-1 px-2 hover:bg-gray-100 rounded"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          General Insurance
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Lifeinsurance"
                          className="block py-1 px-2 hover:bg-gray-100 rounded"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Life Insurance
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Healthinsurance"
                          className="block py-1 px-2 hover:bg-gray-100 rounded"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Health Insurance
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Investments Dropdown */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-left py-2 font-semibold hover:bg-gray-100 rounded transition"
                    onClick={() => toggleChildDropdown("Investments")}
                  >
                    <span>Investments</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openChildDropdown === "Investments" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openChildDropdown === "Investments" && (
                    <ul className="mt-1 space-y-1 pl-4 border-l border-gray-300">
                      <li>
                        <Link
                          to="/MutualFund"
                          className="block py-1 px-2 hover:bg-gray-100 rounded"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Mutual Funds
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Fixed"
                          className="block py-1 px-2 hover:bg-gray-100 rounded"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Fixed Deposit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Eq"
                          className="block py-1 px-2 hover:bg-gray-100 rounded"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Equity
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Other Services Dropdown */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-left py-2 font-semibold hover:bg-gray-100 rounded transition"
                    onClick={() => toggleChildDropdown("Other")}
                  >
                    <span>Other</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openChildDropdown === "Other" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openChildDropdown === "Other" && (
                    <ul className="mt-1 space-y-1 pl-4 border-l border-gray-300">
                      <li>
                        <Link
                          to="/Risk"
                          className="block py-1 px-2 hover:bg-gray-100 rounded"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Risk Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/port"
                          className="block py-1 px-2 hover:bg-gray-100 rounded"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Portfolio Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Claim"
                          className="block py-1 px-2 hover:bg-gray-100 rounded"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Claim Advisory
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/portfolio"
            className="py-2 px-3 hover:bg-gray-100 rounded"
            onClick={() => setIsDrawerOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/Calculators"
            className="py-2 px-3 hover:bg-gray-100 rounded"
            onClick={() => setIsDrawerOpen(false)}
          >
            Calculators
          </Link>
          <Link
            to="/contact"
            className="py-2 px-3 hover:bg-gray-100 rounded"
            onClick={() => setIsDrawerOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
