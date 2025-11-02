import React from 'react';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-secondary text-accent py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">MealMate</h3>
            <p className="text-accent/80 mb-4">
              Your favorite Nigerian meals, delivered fresh and fast. Experience the authentic taste of Nigeria right at your doorstep.
            </p>
            <p className="text-accent/60">🇳🇬 Proudly Nigerian</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-accent/80 hover:text-primary transition-colors duration-200">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-accent/80 hover:text-primary transition-colors duration-200">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-accent/80 hover:text-primary transition-colors duration-200">
                <FaTiktok className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center">
          <p className="text-accent/60">
            &copy; 2024 MealMate. All rights reserved. Made with ❤️ for Nigerian cuisine lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
