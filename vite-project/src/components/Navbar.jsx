import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaUtensils } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <FaUtensils className="text-primary text-2xl mr-2" />
            <span className="text-2xl font-bold text-primary">MealMate</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="hero" smooth={true} className="text-secondary hover:text-primary cursor-pointer">Home</Link>
            <Link to="how-it-works" smooth={true} className="text-secondary hover:text-primary cursor-pointer">Browse Meals</Link>
            <Link to="popular-meals" smooth={true} className="text-secondary hover:text-primary cursor-pointer">About</Link>
            <Link to="testimonials" smooth={true} className="text-secondary hover:text-primary cursor-pointer">Contact</Link>
          </div>
          <div className="flex space-x-4">
            <button className="text-secondary hover:text-primary">Sign In</button>
            <button className="bg-primary text-accent px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
