import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import { navLinks } from "../../utils/navLinks";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm z-50"
    >
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          className="flex items-center gap-1 cursor-pointer"
          aria-label="Logo"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          ></motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-4 h-4 -ml-2 bg-red-500 rounded-full opacity-100 hover:opacity-75 transition-opacity"
          ></motion.div>
        </motion.div>

        <motion.button
          variants={fadeIn("left", 0.3)}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </motion.button>

        <motion.nav variants={fadeIn("down", 0.3)} className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                variants={fadeIn("down", 0.1 * (index + 1))}
              >
                <Link
                  to={link.href}
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                    location.pathname === link.href
                      ? "text-blue-600 after:w-full"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        <motion.button
          variants={fadeIn("left", 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
        >
          <Link to="/#newsletter">Get in touch</Link>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <HeaderMobile
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
        location={location}
      />
    </motion.header>
  );
};

export default Header;
