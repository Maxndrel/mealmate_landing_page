import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import LazyImage from '../components/LazyImage';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-linear-to-br from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              Your next meal is just a <span className="text-primary">tap</span> away
            </h1>
            <p className="text-lg text-secondary/80 mb-8">
              Discover authentic Nigerian cuisine delivered fresh to your doorstep. From Jollof Rice to Egusi Soup, satisfy your cravings with MealMate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="popular-meals" smooth={true} duration={500}>
                <button className="bg-primary text-accent px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition-colors">
                  Order Now
                </button>
              </Link>
              <Link to="how-it-works" smooth={true} duration={500}>
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-accent transition-colors">
                  Explore Menu
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
            <LazyImage
              src="https://pin.it/PGkCOq1T5"
              alt="Delicious Nigerian food delivery"
              className="rounded-2xl shadow-2xl h-96 lg:h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-secondary font-semibold">Fast Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
