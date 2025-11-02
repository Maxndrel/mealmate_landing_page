import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaUtensils } from 'react-icons/fa';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-primary flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="text-6xl text-accent mb-4"
        >
          <FaUtensils />
        </motion.div>
        <h1 className="text-4xl font-bold text-accent">MealMate</h1>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
