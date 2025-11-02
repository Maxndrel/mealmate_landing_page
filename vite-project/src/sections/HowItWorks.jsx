import { motion } from 'framer-motion';
import { FaShoppingCart, FaCreditCard, FaTruck } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaShoppingCart className="text-4xl text-orange-500" />,
      title: 'Choose Meal',
      description: 'Browse through our extensive menu and select your favorite dishes from top restaurants.',
    },
    {
      icon: <FaCreditCard className="text-4xl text-orange-500" />,
      title: 'Place Order',
      description: 'Add items to your cart, apply any discounts, and complete your secure payment.',
    },
    {
      icon: <FaTruck className="text-4xl text-orange-500" />,
      title: 'Get Fast Delivery',
      description: 'Sit back and relax while our delivery partners bring your hot, fresh meal right to your door.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your favorite meal delivered has never been easier. Follow these simple steps.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="flex justify-center mb-6"
              >
                <div className="bg-orange-50 p-4 rounded-full">
                  {step.icon}
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                {step.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                {step.description}
              </motion.p>

              {/* Step number */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 inline-flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full font-bold"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connecting lines for desktop */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              <div className="w-1/3 h-0.5 bg-orange-300"></div>
              <div className="w-1/3 h-0.5 bg-orange-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
