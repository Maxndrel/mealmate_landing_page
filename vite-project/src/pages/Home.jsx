import { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

// Lazy load sections
const Hero = lazy(() => import('../sections/Hero'));
const HowItWorks = lazy(() => import('../sections/HowItWorks'));
const PopularMeals = lazy(() => import('../sections/PopularMeals'));
const Testimonials = lazy(() => import('../sections/Testimonials'));
const DownloadApp = lazy(() => import('../sections/DownloadApp'));

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Prevent body scroll when splash screen is showing
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div></div>}>
        <Hero />
        <HowItWorks />
        <PopularMeals />
        <Testimonials />
        <DownloadApp />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Home;
