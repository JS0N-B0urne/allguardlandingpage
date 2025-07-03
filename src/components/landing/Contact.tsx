import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    try {
      const response = await fetch('https://formspree.io/f/xdkzbbal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          _subject: `New Pest Control Quote Request`,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
          name: '',
          phone: ''
        });
        
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = window.location.origin + '/thank-you';
        }, 2000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setIsSubmitting(false);
      setShowError(true);
    }
  };

  const isFormValid = formData.name && formData.phone;

  return (
    <section ref={sectionRef} id="contact" className="bg-red-500 text-white py-8 px-4 overflow-hidden">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          {/* More Subtle Badge */}
          <div className={`mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <span className="bg-yellow-400 text-red-800 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
              📋 Get Your Quote Today
            </span>
          </div>

          <h3 className={`text-2xl font-bold mb-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            Ready to Protect Your Home?
          </h3>
          {/* Subheadline - Less Aggressive */}
          <h2 className={`text-xl mb-4 text-red-100 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Professional pest control services with today's special pricing
          </h2>

          {/* Phone Number */}
          <div className={`mb-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <a 
              href="tel:0403616327" 
              className="text-2xl font-bold text-white hover:text-red-100 transition-all duration-300 block mb-2 hover:scale-105"
            >
              📞 0403 616 327
            </a>
            <p className="text-sm text-red-100">Call or fill out the form below, or use the live chat to speak to a pest controller.</p>
          </div>
        </div>

        {/* Contact Form with Staggered Animation */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 focus:scale-105"
            />
          </div>
          
          <div className={`transform transition-all duration-700 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <input
              type="tel"
              name="phone"
              placeholder="0400 000 000"
              value={formData.phone}
              onChange={handleInputChange}
              required
              pattern="^(\+?61|0)4\d{8}$"
              maxLength={12}
              className="w-full p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 focus:scale-105"
              inputMode="tel"
              autoComplete="tel"
            />
            <span className="block text-xs text-white mt-1">Enter a valid Australian mobile number</span>
          </div>
          
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} delay-1100 ${
              isFormValid && !isSubmitting
                ? 'bg-yellow-400 text-red-800 hover:bg-yellow-300 hover:scale-105 shadow-lg'
                : 'bg-red-300 text-red-100 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Processing Your Request...' : 'Get Your Free Quote'}
          </button>
        </form>

        {/* Success Message */}
        {showSuccess && (
          <div className="mt-4 p-4 bg-green-600 text-white rounded-lg animate-fade-in">
            <p className="text-center font-semibold">
              ✅ Submitting Request... Please Wait
            </p>
          </div>
        )}

        {/* Error Message */}
        {showError && (
          <div className="mt-4 p-4 bg-red-600 text-white rounded-lg animate-fade-in">
            <p className="text-center font-semibold">
              ❌ Sorry, there was an error submitting your request. Please try again or call us directly.
            </p>
          </div>
        )}

        {/* Service Benefits - More Professional */}
        <div className={`text-center mt-8 space-y-2 text-red-100 text-sm transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <p>⚡ Same-day service available</p>
          <p>🛡️ Fully licensed and insured</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
