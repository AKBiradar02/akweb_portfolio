import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center 
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
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

      {/* Menu Links */}
      <nav className="flex flex-col items-center space-y-6">
        {[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ].map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white transition-all duration-300 transform 
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                      `}
            style={{ transitionDelay: `${index * 100}ms` }} // Staggered effect
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
