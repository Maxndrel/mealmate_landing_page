import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import HowItWorks from '../sections/HowItWorks';
import DownloadApp from '../sections/DownloadApp';

// Lazy load non-critical sections
const PopularMeals = lazy(() => import('../sections/PopularMeals'));
const Testimonials = lazy(() => import('../sections/Testimonials'));

const Home = () => {
  return (
    <div className="min-h-screen bg-support">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <PopularMeals />
      </Suspense>
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <Testimonials />
      </Suspense>
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default Home;
