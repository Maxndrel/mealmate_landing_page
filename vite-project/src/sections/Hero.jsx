import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import LazyImage from '../components/LazyImage';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-linear-to-br from-support to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              Delicious Food,<br />
              <span className="text-primary">Delivered Fast</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience the convenience of fresh, hot meals from top restaurants delivered right to your doorstep. Order now and satisfy your cravings!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="popular-meals" smooth={true}>
                <button className="bg-primary text-accent px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Order Now
                </button>
              </Link>
              <Link to="how-it-works" smooth={true}>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-accent transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <LazyImage
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=500&fit=crop&crop=center"
              alt="Fresh and delicious food delivery"
              className="rounded-2xl shadow-2xl max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
