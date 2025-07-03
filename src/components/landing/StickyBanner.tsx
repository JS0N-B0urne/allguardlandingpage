import React, { useState, useEffect } from 'react';

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after 5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Hide banner 5 seconds after it appears (10 seconds total)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-red-800 px-4 py-3 text-center shadow-lg transform transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-md mx-auto">
        <p className="text-sm font-semibold">
          ⚡ Remember, the best and cheapest way to get your pests under control, is to deal with it ASAP!
        </p>
      </div>
    </div>
  );
};

export default StickyBanner; 