import { motion } from 'framer-motion';
import { FaShoppingCart, FaCreditCard, FaTruck } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaShoppingCart className="text-4xl text-primary" />,
      title: 'Choose Meal',
      description: 'Browse through our extensive menu and select your favorite dishes.'
    },
    {
      icon: <FaCreditCard className="text-4xl text-primary" />,
      title: 'Place Order',
      description: 'Securely pay for your order with multiple payment options.'
    },
    {
      icon: <FaTruck className="text-4xl text-primary" />,
      title: 'Get Fast Delivery',
      description: 'Enjoy your hot and fresh meal delivered right to your doorstep.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">Simple steps to get your delicious meal</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-support rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
