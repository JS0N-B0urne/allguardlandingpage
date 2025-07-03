import React, { useState, useEffect } from 'react';

const RodentStickyBanner = () => {
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
          🐀 Rodents multiply fast! Don't let them take over - call us for immediate control!
        </p>
      </div>
    </div>
  );
};

export default RodentStickyBanner; 