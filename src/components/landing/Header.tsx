
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on load
    setIsVisible(true);
    
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
    <header className="bg-gradient-to-b from-red-500 to-red-600 text-white px-4 py-8 text-center overflow-hidden">
      <div className="max-w-md mx-auto">
        {/* Special Offer Badge - More Subtle */}
        <div className={`mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <span className="bg-yellow-400 text-red-800 text-xs font-semibold px-4 py-2 rounded-full shadow-md">
            ✨ Special Offer Available
          </span>
        </div>

        {/* Logo */}
        <div className={`mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <img 
            src="/lovable-uploads/9bd2f8bb-8933-426d-9dca-6d20754a5413.png" 
            alt="All Guard Pest Control" 
            className="mx-auto h-20 w-auto mb-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Main Headline */}
        <h1 className={`text-3xl font-bold mb-3 leading-tight transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Melbourne Pest Control
        </h1>
        
        {/* Subheadline - Less Aggressive */}
        <h2 className={`text-xl mb-4 text-red-100 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Save 20% on Professional Pest Services
        </h2>

        {/* Countdown Timer - More Elegant */}
        <div className={`bg-white/10 backdrop-blur-sm text-white rounded-lg p-4 mb-6 shadow-lg border border-white/20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-sm font-medium mb-2 text-red-100">Today's special pricing ends in:</div>
          <div className="flex justify-center space-x-4 text-xl font-bold">
            <div className="text-center">
              <div className="bg-red-600/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-md">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs mt-1 text-red-100">Hours</div>
            </div>
            <div className="text-center">
              <div className="bg-red-600/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-md">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs mt-1 text-red-100">Mins</div>
            </div>
            <div className="text-center">
              <div className="bg-red-600/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-md">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs mt-1 text-red-100">Secs</div>
            </div>
          </div>
        </div>
        
        {/* Phone Number */}
        <div className={`mb-6 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <a 
            href="tel:0403616327" 
            className="text-2xl font-bold text-white hover:text-red-100 transition-all duration-300 block mb-2 hover:scale-105"
          >
            📞 0403 616 327
          </a>
          <p className="text-sm text-red-100">Free quotes available today</p>
        </div>
        
        {/* CTA Button - Less Aggressive */}
        <button 
          onClick={handleQuoteRequest}
          className={`bg-yellow-400 text-red-800 font-bold py-4 px-8 rounded-lg text-lg w-full max-w-xs hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} delay-700`}
        >
          Get Your Free Quote
        </button>
        
        {/* Subtle Urgency Text */}
        <p className={`text-xs text-red-100 mt-3 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Limited time pricing - Book today
        </p>
      </div>
    </header>
  );
};

export default Header;
