
import React, { useState, useEffect } from 'react';

const ThankYouContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on load
    setIsVisible(true);
  }, []);

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const handleCallNow = () => {
    window.location.href = 'tel:0403616327';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-red-600 text-white px-4 py-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-md mx-auto text-center">
        {/* Success Icon */}
        <div className={`mb-6 transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="bg-green-500 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Main Message */}
        <h1 className={`text-3xl font-bold mb-4 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Thank You!
        </h1>

        <h2 className={`text-xl mb-6 text-red-100 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Your Quote Request Has Been Received
        </h2>

        {/* Confirmation Details */}
        <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg border border-white/20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-sm font-medium mb-4 text-red-100">What happens next:</div>
          <div className="space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <div className="bg-yellow-400 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
              <p className="text-sm">We'll review your request within 30 minutes</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-yellow-400 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
              <p className="text-sm">A pest control specialist will call you today</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-yellow-400 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
              <p className="text-sm">You'll receive your personalised quote</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`mb-6 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-red-100 mb-2">Need it quicker? Tap below to call us now</p>
          <button
            onClick={handleCallNow}
            className="text-2xl font-bold text-white hover:text-red-100 transition-all duration-300 mx-auto block mb-2 hover:scale-105 cursor-pointer"
          >
            📞 0403 616 327
          </button>
          <p className="text-sm text-red-100">We're standing by to help</p>
        </div>


        {/* Additional Benefits */}
        <div className={`text-center mt-6 space-y-2 text-red-100 text-sm transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p>⚡ Limited Same-day service available</p>
          <p>🛡️ Fully licensed and insured</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouContent;
