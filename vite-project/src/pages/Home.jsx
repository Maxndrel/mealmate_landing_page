import { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import HowItWorks from '../sections/HowItWorks';

// Lazy load sections
const PopularMeals = lazy(() => import('../sections/PopularMeals'));
const Testimonials = lazy(() => import('../sections/Testimonials'));
const DownloadApp = lazy(() => import('../sections/DownloadApp'));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Suspense fallback={<LoadingSpinner />}>
        <PopularMeals />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <DownloadApp />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
