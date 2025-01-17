import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center text-center space-y-4 mb-20 mt-4">
          <img
            src={logo}
            alt="Company Logo"
            className="w-30 h-10 hover:scale-105 transition-transform duration-300"
          />
          <p className="text-sm opacity-80">
            Empowering businesses with Cali Digital marketing strategies and digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              {["Website Design", "SEO", "Google Ads", "Social Media", "Email Marketing", "Branding", "Marketing Consulting"].map((service) => (
                <li key={service} className="hover:underline cursor-pointer text-sm">{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              {["About Us", "Careers", "Our Team", "Contact"].map((item) => (
                <li key={item} className="hover:underline cursor-pointer text-sm">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              {["Blog", "Case Studies", "White Papers", "FAQ"].map((resource) => (
                <li key={resource} className="hover:underline cursor-pointer text-sm">{resource}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center space-x-6">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white hover:text-gray-300 transition duration-300"
                  aria-label={Icon.displayName}
                >
                  <Icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-sm opacity-75">
          © {new Date().getFullYear()} CALI DIGITAL MARKETING. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
