
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-green-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Why Choose All Guard Pest Control?
        </h3>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-start space-x-3">
              <div className="bg-red-500 text-white p-2 rounded-full flex-shrink-0">
                👨‍👩‍👧‍👦
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Family Owned Business</h4>
                <p className="text-gray-600 text-sm">
                  We're a local Melbourne family business with over 15 years of experience serving our community.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-full flex-shrink-0">
                🏛️
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Government Health Guidelines</h4>
                <p className="text-gray-600 text-sm">
                  All our treatments follow strict government health and safety guidelines for your peace of mind.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-start space-x-3">
              <div className="bg-green-600 text-white p-2 rounded-full flex-shrink-0">
                ✅
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">100% Satisfaction Guarantee</h4>
                <p className="text-gray-600 text-sm">
                  We stand behind our work with a complete satisfaction guarantee on all services.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-600 text-white p-2 rounded-full flex-shrink-0">
                🛡️
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">6-Month Warranty</h4>
                <p className="text-gray-600 text-sm">
                  Every service comes with our comprehensive 6-month warranty for complete protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
