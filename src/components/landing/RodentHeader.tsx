import React, { useState, useEffect } from 'react';

const getAustralianDay = () => {
  // Australia/Sydney is a good default for AEST/AEDT
  const now = new Date();
  // Convert to Australia/Sydney timezone
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', timeZone: 'Australia/Sydney' };
  return now.toLocaleDateString('en-AU', options);
};

const RodentHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [australianDay, setAustralianDay] = useState(getAustralianDay());

  useEffect(() => {
    // Trigger animations on load
    setIsVisible(true);
    setAustralianDay(getAustralianDay());
    const timer = setInterval(() => {
      setAustralianDay(getAustralianDay());
    }, 1000 * 60 * 60); // update every hour

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
            {australianDay} Special Available
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
          Melbourne Rodent Control
        </h1>
        
        {/* Subheadline - Less Aggressive */}
        <h2 className={`text-xl mb-4 text-red-100 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Professional Rat & Mouse Extermination Services
        </h2>

        {/* Introductory Text */}
        <div className={`mb-6 transform transition-all duration-1000 delay-450 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-base text-white bg-red-600/40 rounded-lg px-4 py-3 shadow-sm leading-relaxed">
            Rats or mice in your home or business?<br /><br />
            We understand how distressing and unsanitary rodent infestations can be. Our expert team has been successfully eliminating rats and mice from Melbourne properties for years.<br /><br />
            Using proven methods and effective treatments, we'll rid your property of rodents completely.<br /><br />
                         Don't let rodents damage your property. Get professional help today.
          </p>
        </div>

        {/* Phone Number */}
        <div className={`mb-6 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <a 
            href="tel:0403616327" 
            className="text-2xl font-bold text-white hover:text-red-100 transition-all duration-300 block mb-2 hover:scale-105"
          >
            📞 0403 616 327
          </a>
        </div>
        
        {/* CTA Button - Less Aggressive */}
        <button 
          onClick={handleQuoteRequest}
          className={`bg-yellow-400 text-red-800 font-bold py-4 px-8 rounded-lg text-lg w-full max-w-xs hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} delay-700`}
        >
          Get Free Rodent Quote
        </button>
      </div>
    </header>
  );
};

export default RodentHeader; 