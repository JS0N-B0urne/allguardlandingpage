
import React, { useState } from 'react';

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
    <section id="contact" className="bg-red-500 text-white py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today!</h3>
          <p className="text-red-100 mb-6">
            Don't let pests take over your home. Contact us now for immediate assistance.
          </p>
          
          {/* Phone Number */}
          <div className="mb-6">
            <a 
              href="tel:0403616327" 
              className="text-2xl font-bold text-white hover:text-red-100 transition-colors duration-200 block mb-2"
            >
              📞 0403 616 327
            </a>
            <p className="text-sm text-red-100">Call now or fill out the form below</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number *"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
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
          
          <div>
            <textarea
              name="message"
              placeholder="Tell us about your pest problem..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 ${
              isFormValid && !isSubmitting
                ? 'bg-white text-red-600 hover:bg-red-50 shadow-lg'
                : 'bg-red-300 text-red-100 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Request Free Quote'}
          </button>
        </form>

        {/* Success Message */}
        {showSuccess && (
          <div className="mt-4 p-4 bg-green-600 text-white rounded-lg">
            <p className="text-center font-semibold">
              ✅ Thank you! We'll contact you within 30 minutes.
            </p>
          </div>
        )}

        {/* Additional Info */}
        <div className="text-center mt-8 space-y-2 text-red-100 text-sm">
          <p>📧 Available for live chat support</p>
          <p>⏰ Same-day service available</p>
          <p>🛡️ Fully licensed and insured</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
