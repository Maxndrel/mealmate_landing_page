import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';

const PopularMeals = () => {
  const meals = [
    {
      id: 1,
      name: 'Jollof Rice',
      description: 'Fragrant rice cooked in a rich tomato sauce with spices',
      price: '₦2,500',
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Egusi Soup',
      description: 'Melon seed soup with vegetables and meat, served with pounded yam',
      price: '₦3,200',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Suya',
      description: 'Spicy grilled beef skewers with peanut sauce',
      price: '₦1,800',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      name: 'Pounded Yam & Vegetable Soup',
      description: 'Smooth pounded yam with rich vegetable soup',
      price: '₦2,800',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      name: 'Moi Moi',
      description: 'Steamed bean pudding wrapped in banana leaves',
      price: '₦1,200',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      name: 'Fried Rice & Chicken',
      description: 'Vegetable fried rice with grilled chicken and plantain',
      price: '₦3,500',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <section id="popular-meals" className="py-20 bg-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Popular Meals
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with authentic Nigerian flavors and fresh ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal, index) => (
            <motion.div
              key={meal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-accent rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <LazyImage
                src={meal.image}
                alt={meal.name}
                className="h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {meal.name}
                </h3>
                <p className="text-secondary/70 mb-4">
                  {meal.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    {meal.price}
                  </span>
                  <button className="bg-primary text-accent px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMeals;
