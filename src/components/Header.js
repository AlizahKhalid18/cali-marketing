import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      className={`flex justify-between items-center p-6 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isAboutPage
          ? "bg-[#0d3880]"
          : isScrolled
          ? "bg-[#0d3880]"
          : "bg-transparent"
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
        <Link
          to="/services"
          className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="font-bold border-b-2 border-transparent hover:border-[#ccaa0d] transition"
        >
          Contact Us
        </Link>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <span className="text-[#ccaa0d] font-medium">+1 (424) 522-4854</span>
        <button className="border-2 border-[#ccaa0d] px-4 py-1 rounded-full hover:bg-[#ccaa0d] hover:text-[#0d3880] transition">
          CONTACT US →
        </button>
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
