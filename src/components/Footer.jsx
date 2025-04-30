import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold">Abhay Biradar</h2>
                    <p className="text-sm text-gray-400">© 2025 All Rights Reserved.</p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href="mailto:your.email@example.com"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abhaybiradar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/abhaybiradar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://affliate-ecom.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Portfolio
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
