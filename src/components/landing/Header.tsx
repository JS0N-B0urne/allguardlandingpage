
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches 0
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleQuoteRequest = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-b from-red-500 to-red-600 text-white px-4 py-8 text-center">
      <div className="max-w-md mx-auto">
        {/* Limited Time Badge */}
        <div className="mb-4">
          <span className="bg-yellow-400 text-red-800 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
            🔥 LIMITED TIME OFFER
          </span>
        </div>

        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/lovable-uploads/9bd2f8bb-8933-426d-9dca-6d20754a5413.png" 
            alt="All Guard Pest Control" 
            className="mx-auto h-20 w-auto mb-4"
          />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-3xl font-bold mb-3 leading-tight">
          Melbourne Pest Control
        </h1>
        
        {/* Subheadline with Urgency */}
        <h2 className="text-xl mb-4 text-red-100">
          Get 20% Off Your Service Today
        </h2>

        {/* Countdown Timer */}
        <div className="bg-white text-red-600 rounded-lg p-4 mb-6 shadow-lg">
          <div className="text-sm font-semibold mb-2">Offer Expires In:</div>
          <div className="flex justify-center space-x-4 text-2xl font-bold">
            <div className="text-center">
              <div className="bg-red-600 text-white px-2 py-1 rounded">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs mt-1">Hours</div>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white px-2 py-1 rounded">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs mt-1">Mins</div>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white px-2 py-1 rounded">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs mt-1">Secs</div>
            </div>
          </div>
        </div>
        
        {/* Phone Number */}
        <div className="mb-6">
          <a 
            href="tel:0403616327" 
            className="text-2xl font-bold text-white hover:text-red-100 transition-colors duration-200 block mb-2"
          >
            📞 0403 616 327
          </a>
          <p className="text-sm text-red-100">Call Now - Only 3 Spots Left Today!</p>
        </div>
        
        {/* CTA Button with Urgency */}
        <button 
          onClick={handleQuoteRequest}
          className="bg-yellow-400 text-red-800 font-bold py-4 px-8 rounded-lg text-lg w-full max-w-xs hover:bg-yellow-300 transition-colors duration-200 shadow-lg animate-pulse"
        >
          Claim 20% OFF Now!
        </button>
        
        {/* Urgency Text */}
        <p className="text-xs text-red-100 mt-3">
          ⚡ Don't Wait - This Offer Won't Last!
        </p>
      </div>
    </header>
  );
};

export default Header;
