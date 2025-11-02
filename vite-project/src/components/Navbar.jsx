import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Menu', to: 'popular-meals' },
    { name: 'How It Works', to: 'how-it-works' },
    { name: 'About Us', to: 'testimonials' },
    { name: 'Contact', to: 'footer' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-accent shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <h1 className="text-2xl font-bold text-primary">MealMate</h1>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Sign In
              </button>
              <button className="bg-primary text-accent px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-accent hover:text-primary hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-accent border-t border-support"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-support">
                <button className="text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200">
                  Sign In
                </button>
                <button className="bg-primary text-accent px-3 py-2 rounded-md text-base font-medium w-full mt-2 hover:bg-primary/90 transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
