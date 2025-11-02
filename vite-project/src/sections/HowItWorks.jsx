import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingCart, FaTruck } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: FaSearch,
      title: 'Choose Meal',
      description: 'Browse our extensive menu of authentic Nigerian dishes and select your favorites.'
    },
    {
      icon: FaShoppingCart,
      title: 'Place Order',
      description: 'Add items to your cart, customize your order, and checkout securely online.'
    },
    {
      icon: FaTruck,
      title: 'Get Fast Delivery',
      description: 'Sit back and relax as we deliver your hot, fresh meal right to your doorstep.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Getting your favorite Nigerian meal has never been easier. Follow these simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-support p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="text-2xl text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                {step.title}
              </h3>
              <p className="text-secondary/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
