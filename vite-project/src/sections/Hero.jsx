import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import LazyImage from '../components/LazyImage';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              Your next meal is just a <span className="text-primary">tap away</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover delicious meals from your favorite restaurants, delivered fresh to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="popular-meals" smooth={true}>
                <button className="bg-primary text-accent px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Order Now
                </button>
              </Link>
              <Link to="how-it-works" smooth={true}>
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
            className="flex justify-center"
          >
            <LazyImage
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop"
              alt="Delicious food delivery"
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
