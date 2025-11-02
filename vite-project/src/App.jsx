import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && <Home />}
    </>
  );
}

export default App;
