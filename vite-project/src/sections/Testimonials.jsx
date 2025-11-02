import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import LazyImage from '../components/LazyImage';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adanna Okoye',
      location: 'Lagos',
      rating: 5,
      text: 'MealMate has transformed my lunch breaks! The Jollof Rice is exactly like my grandmother used to make. Fast delivery and amazing taste.',
      image: '/src/assets/images/testimonial-1.jpg'
    },
    {
      name: 'Chike Nwosu',
      location: 'Abuja',
      rating: 5,
      text: 'As a busy professional, MealMate saves me time. Their Egusi Soup is authentic and the portions are generous. Highly recommended!',
      image: '/src/assets/images/testimonial-2.jpg'
    },
    {
      name: 'Ngozi Adebayo',
      location: 'Port Harcourt',
      rating: 5,
      text: 'The Suya is perfectly spiced and always fresh. MealMate delivers on time every single time. My new go-to food app!',
      image: '/src/assets/images/testimonial-3.jpg'
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Nigerians across the country are saying about MealMate.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-accent rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <LazyImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-secondary/60">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-secondary/80 italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
