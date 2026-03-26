import { Link } from "react-router-dom";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";


function HeaderMobile({ isMenuOpen, setIsMenuOpen, navLinks, location }) {
  return (
    <>
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <motion.div
            variants={fadeIn("down", 0.3)}
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={fadeIn("right", 0.1 * (index + 1))}
              >
                <Link
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium py-2 ${
                    location.pathname === link.href
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              variants={fadeIn("up", 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/#newsletter" className="text-white no-underline">
                Get in touch
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default HeaderMobile;
