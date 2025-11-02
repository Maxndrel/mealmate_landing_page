import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';

const PopularMeals = () => {
  const meals = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Fresh tomatoes, mozzarella, basil',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Chicken Burger',
      description: 'Grilled chicken, lettuce, tomato, mayo',
      price: '$9.99',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Pasta Carbonara',
      description: 'Creamy sauce with bacon and parmesan',
      price: '$14.99',
      image: 'https://images.unsplash.com/photo-1551892376-c73a4e34b7e4?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Sushi Roll',
      description: 'Fresh salmon, avocado, cucumber',
      price: '$16.99',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Chocolate Cake',
      description: 'Rich chocolate with vanilla frosting',
      price: '$6.99',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="popular-meals" className="py-20 bg-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Popular Meals</h2>
          <p className="text-lg text-gray-600">Discover our most loved dishes</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal, index) => (
            <motion.div
              key={meal.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <LazyImage
                src={meal.image}
                alt={meal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">{meal.name}</h3>
                <p className="text-gray-600 mb-4">{meal.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{meal.price}</span>
                  <button className="bg-primary text-accent px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Order Now
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
