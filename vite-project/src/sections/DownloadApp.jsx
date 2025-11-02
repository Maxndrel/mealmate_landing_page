import React from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import LazyImage from '../components/LazyImage';

const DownloadApp = () => {
  return (
    <section className="py-20 bg-secondary text-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get the MealMate App
            </h2>
            <p className="text-lg text-accent/80 mb-8">
              Order on the go with our mobile app. Browse menus, track deliveries, and enjoy exclusive deals right from your phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200 flex items-center justify-center gap-3">
                <FaGooglePlay className="text-xl" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
              <button className="bg-accent text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200 flex items-center justify-center gap-3">
                <FaApple className="text-xl" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              <LazyImage
                src="/src/assets/images/app-mockup.png"
                alt="MealMate mobile app mockup"
                className="w-full h-auto"
              />
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
