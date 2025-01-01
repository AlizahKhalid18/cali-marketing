import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isAboutPage = location.pathname === "/about";

  return (
    <header
      className={`flex justify-between items-center p-6 fixed top-0 left-0 w-full z-50 transition-colors duration-300
         ${
           isAboutPage
             ? "bg-transparent"
             : isScrolled
             ? "bg-[#0d3880]"
             : "bg-blue"
         } text-[#ccaa0d]`}
    >
      <div>
        <img src={logo} alt="Cali Marketing Logo" className="h-10 w-auto" />
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
        <div
          className="relative"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition cursor-pointer">
            Services
          </span>
          {isDropdownOpen && (
            <div className="absolute bg-[#0d3880] text-[#ccaa0d] shadow-md rounded-md mt-2 w-48">
              <ul className="py-2">
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/web-development"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/app-development"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/ui-ux-design"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/cloud-computing"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    Cloud Computing
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/cyber-security"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    Cybersecurity
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/services/it-consulting"
                    className="block px-4 py-2 hover:text-[#ccaa0d] transition"
                  >
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link
          to="/pricing"
          className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
        >
          Pricing
        </Link>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <span className="text-[#ccaa0d] font-medium">+1 (424) 522-4854</span>
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
          <Link
            to="/services"
            className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/pricing"
            className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
