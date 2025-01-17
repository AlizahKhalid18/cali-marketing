import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);

    if (isResourcesDropdownOpen) setIsResourcesDropdownOpen(false);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);

    if (isServicesDropdownOpen) setIsServicesDropdownOpen(false);
  };

  const closeDropdown = () => {
    setIsServicesDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      
      setIsScrolled(window.scrollY > 10);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const isAboutPage = location.pathname === "/about";
  const isFAQSection = location.pathname === "/faq";

  return (
    <header
      className={`flex justify-between items-center p-6 fixed top-0 left-0 w-full z-50 transition-colors duration-300 hover:bg-[#0d3880]
        
        ${
        isFAQSection || isScrolled || isAboutPage ? "bg-[#0d3880]" : "bg-transparent"
      } text-[#ccaa0d]`}
    >
      <div>
        <img src={logo} alt="Cali Marketing Logo" className="h-[45px] w-auto" />
      </div>

      <nav className="hidden md:flex space-x-8">
        <Link
          to="/"
          className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
        >
          About
        </Link>
        <Link
          to="/work"
          className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
        >
          Work
        </Link>
        <div className="relative" onClick={toggleServicesDropdown}>
          <span className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition cursor-pointer">
            Services
          </span>
          {isServicesDropdownOpen && (
            <div className="absolute bg-[#0d3880] text-[#ccaa0d] shadow-md rounded-md mt-2 w-48">
              <ul className="py-2">
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/website-design"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    Website Design
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/seo"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    SEO
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/google-ads"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    Google Ads
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/social-media"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    Social Media
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/email-marketing"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    Email Marketing
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/branding"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    Branding
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/1v1-marketing-consulting"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    1v1 Marketing Consulting
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative" onClick={toggleResourcesDropdown}>
          <span className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition cursor-pointer">
            Resources
          </span>
          {isResourcesDropdownOpen && (
            <div className="absolute bg-[#0d3880] text-[#ccaa0d] shadow-md rounded-md mt-2 w-48">
              <ul className="py-2">
                <li className="hover:bg-gray-100">
                  <Link
                    to="/faq"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    onClick={closeDropdown}
                  >
                    FAQ
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/pricing"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    onClick={closeDropdown}
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <span className="text-[#ccaa0d] font-medium">+1 (714) 386-9805</span>
        <Link
          to="/contact"
          className="border-2 border-[#ccaa0d] px-4 py-1 rounded-full hover:bg-[#ccaa0d] hover:text-[#0d3880] transition text-center"
        >
          CONTACT US →
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#ccaa0d] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-[#0d3880] text-[#ccaa0d]`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/work"
            className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
            onClick={toggleMenu}
          >
            Work
          </Link>
          <div className="relative">
            <span
              className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition cursor-pointer"
              onClick={toggleServicesDropdown}
            >
              Services
            </span>
            {isServicesDropdownOpen && (
              <div className="absolute bg-[#0d3880] text-[#ccaa0d] shadow-md rounded-md mt-2 w-48 z-50">
                <ul className="py-2">
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/services/website-design"
                      className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    >
                      Website Design
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/services/seo"
                      className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    >
                      SEO
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/services/google-ads"
                      className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    >
                      Google Ads
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/services/social-media"
                      className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    >
                      Social Media
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/services/email-marketing"
                      className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    >
                      Email Marketing
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/services/branding"
                      className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    >
                      Branding
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/services/1v1-marketing-consulting"
                      className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    >
                      1v1 Marketing Consulting
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <span
              className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition cursor-pointer"
              onClick={toggleResourcesDropdown}
            >
              Resources
            </span>
            {isResourcesDropdownOpen && (
              <div className="absolute bg-[#0d3880] text-[#ccaa0d] shadow-md rounded-md mt-2 w-48 z-50">
                <ul className="py-2">
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/faq"
                      className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/pricing"
                      className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="font-bold px-4 py-2 border-b-2 border-transparent hover:border-[#ccaa0d] transition"
            onClick={toggleMenu}
          >
            CONTACT US 
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
