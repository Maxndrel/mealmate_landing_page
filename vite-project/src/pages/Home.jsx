import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';
import Hero from '../sections/Hero';
import HowItWorks from '../sections/HowItWorks';
import DownloadApp from '../sections/DownloadApp';

// Lazy load heavy sections
const PopularMeals = lazy(() => import('../sections/PopularMeals'));
const Testimonials = lazy(() => import('../sections/Testimonials'));

const Home = () => {
  return (
    <div className="min-h-screen bg-accent">
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
          <PopularMeals />
        </Suspense>
        <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
          <Testimonials />
        </Suspense>
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
