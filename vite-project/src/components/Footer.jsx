import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaUtensils } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-accent py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaUtensils className="text-primary text-2xl" />
              <span className="font-bold text-xl">MealMate</span>
            </div>
            <p className="text-accent/80 mb-4">
              Your favorite Nigerian meals delivered fresh and fast. Order authentic Nigerian cuisine from the comfort of your home.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="text-accent/60 hover:text-primary cursor-pointer transition-colors" />
              <FaTwitter className="text-accent/60 hover:text-primary cursor-pointer transition-colors" />
              <FaInstagram className="text-accent/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors">Browse Meals</a></li>
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-accent/80 hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center">
          <p className="text-accent/60">
            © 2024 MealMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
