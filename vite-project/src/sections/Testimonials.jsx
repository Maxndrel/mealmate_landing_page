import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// Lazy load the LazyImage component
const LazyImage = lazy(() => import('../components/LazyImage'));

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Adanna Okoye',
      role: 'Food Blogger',
      content: 'MealMate has completely changed how I enjoy Nigerian food. The jollof rice is authentic and delivery is always on time. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 2,
      name: 'Chike Nwosu',
      role: 'Software Engineer',
      content: 'As someone who works long hours, MealMate saves me so much time. The pounded yam arrives hot and the app is super easy to use.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 3,
      name: 'Ngozi Adebayo',
      role: 'Designer',
      content: 'The variety of Nigerian restaurants available is incredible. I\'ve discovered so many new authentic dishes thanks to MealMate!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 4,
      name: 'Emeka Okafor',
      role: 'Business Owner',
      content: 'Reliable service and great customer support. MealMate has become our go-to for office lunches and team dinners with Nigerian cuisine.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Nigerian Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their authentic Nigerian food experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 left-4 text-orange-200">
                <FaQuoteLeft className="text-2xl" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <Suspense fallback={
                  <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                }>
                  <LazyImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                </Suspense>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">25K+</div>
            <div className="text-gray-600">Happy Nigerian Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-600">Nigerian Restaurants</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
