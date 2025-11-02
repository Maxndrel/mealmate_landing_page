import React from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import LazyImage from '../components/LazyImage';

const DownloadApp = () => {
  return (
    <section id="download-app" className="py-20 bg-linear-to-r from-primary to-primary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-accent"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get the MealMate App
            </h2>
            <p className="text-lg mb-8 text-accent/90">
              Download our mobile app for a seamless food ordering experience. Get exclusive deals, track your orders in real-time, and reorder your favorites with just one tap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-accent px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors flex items-center justify-center space-x-2">
                <FaGooglePlay className="text-xl" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>

              <button className="bg-secondary text-accent px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors flex items-center justify-center space-x-2">
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
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <LazyImage
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="MealMate mobile app mockup"
              className="rounded-2xl shadow-2xl max-w-sm mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
