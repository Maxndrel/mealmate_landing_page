import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">MealMate</h3>
            <p className="text-gray-300 mb-4">
              Your next meal is just a tap away. Experience delicious food delivery
              with our fast and reliable service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Popular Meals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Testimonials</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 MealMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
