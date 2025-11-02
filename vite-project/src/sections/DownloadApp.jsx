import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import LazyImage from '../components/LazyImage';

const DownloadApp = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Get the MealMate App
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Download our app for the best food delivery experience. Order faster, track your delivery, and enjoy exclusive deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-accent px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <FaGooglePlay className="mr-2" />
                Google Play
              </button>
              <button className="bg-secondary text-accent px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <FaApple className="mr-2" />
                App Store
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <LazyImage
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
              alt="Mobile app mockup"
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
