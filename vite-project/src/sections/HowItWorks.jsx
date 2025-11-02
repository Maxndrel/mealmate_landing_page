import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaCreditCard, FaTruck } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaShoppingCart className="text-4xl text-primary" />,
      title: 'Choose Your Meal',
      description: 'Browse our menu of authentic Nigerian dishes and select your favorites.',
      emoji: '🍛'
    },
    {
      icon: <FaCreditCard className="text-4xl text-primary" />,
      title: 'Place Your Order',
      description: 'Secure payment and customize your order with special instructions.',
      emoji: '💳'
    },
    {
      icon: <FaTruck className="text-4xl text-primary" />,
      title: 'Enjoy Fast Delivery',
      description: 'Fresh, hot Nigerian meals delivered to your door in under 30 minutes.',
      emoji: '🚴🏾'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Ordering your favorite Nigerian meals has never been easier. Follow these simple steps to enjoy authentic cuisine.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-accent rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 flex justify-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                {step.title} {step.emoji}
              </h3>
              <p className="text-secondary/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
