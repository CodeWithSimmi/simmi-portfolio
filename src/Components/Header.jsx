import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/project", label: "Project" },
    { path: "/workexp", label: "Work Experience" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-[#111] text-white fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="text-[1.3rem] font-cagliostro hover:text-[#2e86c1]">
          DesignWithSimmi
        </NavLink>

        {/* Hamburger Menu Button (mobile) */}
        <div className="lg:hidden z-50" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-8 text-base">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className="hover:text-[#2e86c1]">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Nav Links - Mobile */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-[#222] px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className="block text-base hover:text-[#2e86c1]"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
