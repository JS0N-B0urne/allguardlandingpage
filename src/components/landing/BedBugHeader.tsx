import React, { useState, useEffect } from 'react';

const getAustralianDay = () => {
  // Australia/Sydney is a good default for AEST/AEDT
  const now = new Date();
  // Convert to Australia/Sydney timezone
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', timeZone: 'Australia/Sydney' };
  return now.toLocaleDateString('en-AU', options);
};

const BedBugHeader = () => {
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

  const handleReviewsScroll = () => {
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
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
          Melbourne Bed Bug Control
        </h1>
        
        {/* Subheadline - More Prominent */}
        <h2 className={`text-2xl font-bold mb-4 text-yellow-300 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Get 20% Off Your Service Today
        </h2>

        {/* Introductory Text */}
        <div className={`mb-6 transform transition-all duration-1000 delay-450 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-base text-white bg-red-600/40 rounded-lg px-4 py-3 shadow-sm leading-relaxed">
            Bed bugs keeping you up at night?<br /><br />
            You're not alone. We've helped hundreds of Melbourne residents eliminate bed bugs quickly and safely. <span className="text-yellow-300 font-semibold cursor-pointer hover:text-yellow-200 transition-colors duration-300" onClick={handleReviewsScroll}>You can read many of their reviews below!</span><br /><br />
            Bites and sleepless nights... we've seen (and solved) it all.<br /><br />
            Let us help you next. Book now and save 20% with our limited-time offer.
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
          Get 20% Off Now
        </button>
      </div>
    </header>
  );
};

export default BedBugHeader; 