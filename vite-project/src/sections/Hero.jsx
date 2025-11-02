import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import LazyImage from '../components/LazyImage';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-linear-to-br from-support to-accent pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              Your Favorite Nigerian Meals,
              <span className="text-primary block">Delivered Fresh and Fast</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary/80 mb-8 max-w-2xl">
              Order delicious Nigerian dishes like Jollof Rice, Pounded Yam, and Suya — anytime, anywhere. Experience authentic Nigerian cuisine at your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="popular-meals" smooth={true} duration={500}>
                <button className="bg-primary text-accent px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 w-full sm:w-auto">
                  Order Now
                </button>
              </Link>
              <Link to="popular-meals" smooth={true} duration={500}>
                <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-accent transition-colors duration-200 w-full sm:w-auto">
                  View Menu
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <LazyImage
                src="/src/assets/images/nigerian-dishes.jpg"
                alt="Delicious Nigerian dishes on a tray"
                className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
