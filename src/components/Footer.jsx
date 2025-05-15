const Footer = () => {
    return (
        <footer className="backdrop-blur-sm text-white py-8 px-4 border border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold">Abhay Biradar</h2>
                    <p className="text-sm text-gray-400">© 2025 All Rights Reserved.</p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href="mailto:abhay.biradar@example.com" // Update with real email
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
                        href="https://affiliate-ecom.vercel.app/" // Fixed typo
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