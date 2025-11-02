import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaUtensils } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <FaUtensils className="text-primary text-2xl" />
            <span className="text-accent font-bold text-xl">MealMate</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="hero" smooth={true} duration={500} className="text-accent hover:text-primary transition-colors cursor-pointer">
              Home
            </Link>
            <Link to="how-it-works" smooth={true} duration={500} className="text-accent hover:text-primary transition-colors cursor-pointer">
              How It Works
            </Link>
            <Link to="popular-meals" smooth={true} duration={500} className="text-accent hover:text-primary transition-colors cursor-pointer">
              Browse Meals
            </Link>
            <Link to="testimonials" smooth={true} duration={500} className="text-accent hover:text-primary transition-colors cursor-pointer">
              About
            </Link>
            <Link to="download-app" smooth={true} duration={500} className="text-accent hover:text-primary transition-colors cursor-pointer">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-accent hover:text-primary transition-colors">
              Sign In
            </button>
            <button className="bg-primary text-accent px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
