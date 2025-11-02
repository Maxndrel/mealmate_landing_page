import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';

const PopularMeals = () => {
  const meals = [
    {
      name: 'Jollof Rice',
      price: '₦2,500',
      description: 'Spicy, flavorful rice cooked with tomatoes, peppers, and aromatic spices.',
      image: '/src/assets/images/jollof-rice.jpg'
    },
    {
      name: 'Egusi Soup',
      price: '₦3,000',
      description: 'Rich melon seed soup with vegetables, served with pounded yam.',
      image: '/src/assets/images/egusi-soup.jpg'
    },
    {
      name: 'Suya',
      price: '₦1,800',
      description: 'Grilled spiced meat skewers, a Nigerian street food favorite.',
      image: '/src/assets/images/suya.jpg'
    },
    {
      name: 'Pounded Yam',
      price: '₦1,200',
      description: 'Smooth, stretchy yam dough, perfect with soups and stews.',
      image: '/src/assets/images/pounded-yam.jpg'
    },
    {
      name: 'Moi Moi',
      price: '₦800',
      description: 'Steamed bean pudding wrapped in banana leaves, nutritious and delicious.',
      image: '/src/assets/images/moi-moi.jpg'
    },
    {
      name: 'Ofada Rice',
      price: '₦2,200',
      description: 'Local rice with spicy stew, a Lagos specialty.',
      image: '/src/assets/images/ofada-rice.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="popular-meals" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Popular Nigerian Meals
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Discover the rich flavors of Nigeria with our most loved dishes, prepared fresh and delivered hot.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {meals.map((meal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <LazyImage
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  {meal.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {meal.name}
                </h3>
                <p className="text-secondary/70 mb-4">
                  {meal.description}
                </p>
                <button className="w-full bg-primary text-accent py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularMeals;
