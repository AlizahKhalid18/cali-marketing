import React from "react";
import logo from "../assets/logo.png";
import backgroundImg from "../assets/header-bg.gif";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-[#0d3880] text-white py-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center text-center space-y-4 mb-20 mt-4">
          <img
            src={logo}
            alt="Company Logo"
            className="w-30 h-10 hover:scale-105 transition-transform duration-300"
          />
          {/* <h1 className="text-2xl font-bold">Your Digital Growth Partner</h1> */}
          <p className="text-sm opacity-80">
            Empowering businesses with cali marketing strategies and digital
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer text-sm">
                Website Design
              </li>
              <li className="hover:underline cursor-pointer text-sm">SEO</li>
              <li className="hover:underline cursor-pointe text-smr">
                Google Ads
              </li>
              <li className="hover:underline cursor-pointer text-sm">
                Social Media
              </li>
              <li className="hover:underline cursor-pointer text-sm">
                Email Marketing
              </li>
              <li className="hover:underline cursor-pointer text-sm">
                Branding
              </li>
              <li className="hover:underline cursor-pointer text-sm">
                Marketing Consulting
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Industries</h2>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointe text-smr">
                Healthcare
              </li>
              <li className="hover:underline cursor-pointer text-sm">
                Finance
              </li>
              <li className="hover:underline cursor-pointer text-sm">Retail</li>
              <li className="hover:underline cursor-pointer text-sm">
                Education
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer text-sm">
                About Us
              </li>
              <li className="hover:underline cursor-pointer text-sm">
                Careers
              </li>
              <li className="hover:underline cursor-pointer text-sm">
                Our Team
              </li>
              <li className="hover:underline cursor-pointer text-sm">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer text-sm">Blog</li>
              <li className="hover:underline cursor-pointer text-sm">
                Case Studies
              </li>
              <li className="hover:underline cursor-pointer text-sm">
                White Papers
              </li>
              <li className="hover:underline cursor-pointer text-sm">FAQ</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-2xl" />
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="text-center text-sm opacity-75">
          © {new Date().getFullYear()} CALI DIGITAL MARKETING. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
