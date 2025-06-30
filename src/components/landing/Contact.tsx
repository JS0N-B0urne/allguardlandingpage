
import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  const isFormValid = formData.name && formData.phone && formData.service;

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
          <p className={`text-red-100 mb-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            Professional pest control services with today's special pricing
          </p>
          
          {/* More Elegant Availability Indicator */}
          <div className={`bg-red-600/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <div className="text-sm font-medium mb-2">Today's Availability:</div>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-700 rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-red-700 rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-red-700 rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-red-700 rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-red-700 rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-30"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-30"></div>
              </div>
            </div>
            <p className="text-xs text-red-100 mt-2">Several appointments still available</p>
          </div>
          
          {/* Phone Number */}
          <div className={`mb-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <a 
              href="tel:0403616327" 
              className="text-2xl font-bold text-white hover:text-red-100 transition-all duration-300 block mb-2 hover:scale-105"
            >
              📞 0403 616 327
            </a>
            <p className="text-sm text-red-100">Call now or fill out the form below</p>
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
              placeholder="Your Phone Number *"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 focus:scale-105"
            />
          </div>
          
          <div className={`transform transition-all duration-700 delay-800 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 focus:scale-105"
            />
          </div>
          
          <div className={`transform transition-all duration-700 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 focus:scale-105"
            >
              <option value="">Select Service Type *</option>
              <option value="general">General Pest Control</option>
              <option value="ants">Ant Control</option>
              <option value="spiders">Spider Control</option>
              <option value="cockroaches">Cockroach Control</option>
              <option value="termites">Termite Inspection</option>
              <option value="rodents">Rodent Control</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className={`transform transition-all duration-700 delay-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <textarea
              name="message"
              placeholder="Tell us about your pest problem..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none transition-all duration-300 focus:scale-105"
            />
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
              ✅ Thank you! We'll contact you shortly with your personalized quote.
            </p>
          </div>
        )}

        {/* Service Benefits - More Professional */}
        <div className={`text-center mt-8 space-y-2 text-red-100 text-sm transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <p>⚡ Same-day service available</p>
          <p>🔒 All quotes valid for 48 hours</p>
          <p>🛡️ Fully licensed and insured</p>
          <p className="font-medium text-yellow-300 mt-4">
            💰 Special pricing available until midnight
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
