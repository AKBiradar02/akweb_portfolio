import { useEffect } from "react";
import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgb(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo on the Left */}
                    <a href="#home" className="absolute left-25 font-mono text-xl font-bold text-white">
                        Tech<span className="text-blue-500">.Bytes</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    {/* Centered Navbar Links */}
                    <div className="hidden md:flex items-center space-x-10 justify-center w-full">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Social Media Icons on the Right */}
                    <div className="hidden absolute right-25 md:flex items-center space-x-8 ml-auto">
                        <a href="https://www.instagram.com/abhay.kb.02/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-gray-300 hover:text-white text-2xl" />
                        </a>
                        <a href="https://x.com/abhaybiradar02" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="text-gray-300 hover:text-white text-2xl" />
                        </a>
                        <a href="https://github.com/AKBiradar02" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-gray-300 hover:text-white text-2xl" />
                        </a>
                        <a href="https://www.hackerrank.com/profile/h1032211780" target="_blank" rel="noopener noreferrer">
                            <SiHackerrank className="text-gray-300 hover:text-white text-2xl" />
                        </a>
                        <a href="https://leetcode.com/u/AKBiradar02/" target="_blank" rel="noopener noreferrer">
                            <SiLeetcode className="text-gray-300 hover:text-white text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};