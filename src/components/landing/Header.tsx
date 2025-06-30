
import React from 'react';

const Header = () => {
  const handleQuoteRequest = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-b from-red-500 to-red-600 text-white px-4 py-8 text-center">
      <div className="max-w-md mx-auto">
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
        
        {/* Subheadline */}
        <h2 className="text-xl mb-6 text-red-100">
          Get 20% Off Your Service Today
        </h2>
        
        {/* Phone Number */}
        <div className="mb-6">
          <a 
            href="tel:0403616327" 
            className="text-2xl font-bold text-white hover:text-red-100 transition-colors duration-200 block mb-2"
          >
            📞 0403 616 327
          </a>
          <p className="text-sm text-red-100">Call Now for Immediate Service</p>
        </div>
        
        {/* CTA Button */}
        <button 
          onClick={handleQuoteRequest}
          className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg text-lg w-full max-w-xs hover:bg-red-50 transition-colors duration-200 shadow-lg"
        >
          Request Free Quote
        </button>
      </div>
    </header>
  );
};

export default Header;
