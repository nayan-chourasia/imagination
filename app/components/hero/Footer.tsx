import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section: Company Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">ImaginationPenguin</h3>
            <p className="mt-2 text-blue-300">
              Freelancing | Event Planning | Stock Advisory | Consultancy
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-blue-300">Contact Us:</p>
            <p className="mt-1">123 Penguin Lane, Creativity City</p>
            <p>Email: contact@imaginationpenguin.com</p>
            <p>Phone: +1 800-555-1234</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-8"></div>

        {/* Bottom Section: Social Media and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>

          {/* Footer Links */}
          <div className="text-blue-300 text-center">
            <p>&copy; {new Date().getFullYear()} ImaginationPenguin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
