import { useEffect } from "react";
import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-16 left-0 w-full bg-[rgba(10,10,10,0.9)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Items */}
      <div className="flex flex-col items-center space-y-6 mt-10">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white transition-transform duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white transition-transform duration-300"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white transition-transform duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white transition-transform duration-300"
        >
          Contact
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-6 mt-10">
        <a href="https://www.instagram.com/abhay.kb.02/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-300 hover:text-white text-3xl" />
        </a>
        <a href="https://x.com/abhaybiradar02" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-gray-300 hover:text-white text-3xl" />
        </a>
        <a href="https://github.com/AKBiradar02" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-300 hover:text-white text-3xl" />
        </a>
        <a href="https://www.hackerrank.com/profile/h1032211780" target="_blank" rel="noopener noreferrer">
          <SiHackerrank className="text-gray-300 hover:text-white text-3xl" />
        </a>
        <a href="https://leetcode.com/u/AKBiradar02/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="text-gray-300 hover:text-white text-3xl" />
        </a>
      </div>
    </div>
  );
};
