/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { FiSun, FiDownload, FiMenu, FiX, FiMoon } from "react-icons/fi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Let's Build", href: "#projects" },
  { name: "My Toolbox", href: "#toolbox" },
  { name: "Resume", href: "/Shivansh_Resume.pdf", download: true },
];

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("halloween");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "halloween";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "halloween" ? "dracula" : "halloween";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur bg-base-100/80 border-b border-base-content/10"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 text-sm md:text-base">
          {navLinks.map((link) =>
            link.name === "Resume" ? (
              <motion.a
                key={link.name}
                href={link.href}
                download
                target="_blank"
                whileHover={{ scale: 1.08 }}
                className="btn btn-sm bg-primary/80 text-white hover:bg-primary border-none gap-2 transition-all duration-300"
              >
                <FiDownload size={16} />
                Resume
              </motion.a>
            ) : (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.08 }}
                className="relative group font-medium whitespace-nowrap px-2 md:px-3"
              >
                <span className="text-base-content group-hover:text-primary transition duration-300">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}

          {/* Theme Selector */}
          <button
            onClick={toggleTheme}
            className="btn btn-circle btn-sm bg-base-200 border border-base-content/20 text-base-content hover:border-primary hover:text-primary"
            aria-label="Toggle Theme"
          >
            {theme === "halloween" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-base-content focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-base-100/90 px-6 pb-6 pt-4 shadow-lg space-y-4 border-t border-base-content/10">
          {/* Mobile nav links */}
          {navLinks.map((link) =>
            link.name === "Resume" ? (
              <a
                key={link.name}
                href={link.href}
                download
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white text-sm font-medium transition hover:bg-primary/90"
              >
                <FiDownload size={16} />
                Resume
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base-content font-medium hover:text-primary transition"
              >
                {link.name}
              </a>
            )
          )}

          {/* Theme toggle */}
          <div className="pt-2">
            <button
              onClick={toggleTheme}
              className="btn btn-circle btn-sm bg-base-200 border border-base-content/20 text-base-content hover:border-primary hover:text-primary"
            >
              {theme === "halloween" ? (
                <FiMoon size={18} />
              ) : (
                <FiSun size={18} />
              )}
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
