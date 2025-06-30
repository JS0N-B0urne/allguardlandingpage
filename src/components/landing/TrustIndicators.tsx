
import React from 'react';

const TrustIndicators = () => {
  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">As Seen On...</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="h-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
              ABC NEWS
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="h-12 bg-red-600 rounded flex items-center justify-center text-white font-bold">
              CHANNEL 7
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="h-12 bg-green-600 rounded flex items-center justify-center text-white font-bold">
              THE AGE
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="h-12 bg-purple-600 rounded flex items-center justify-center text-white font-bold">
              HERALD SUN
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border text-left">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              "Fantastic service! They arrived on time and completely eliminated our ant problem. Very professional team."
            </p>
            <p className="text-gray-500 text-xs">- Sarah M., Melbourne</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border text-left">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              "Quick response and excellent results. No more cockroaches in our kitchen. Highly recommend!"
            </p>
            <p className="text-gray-500 text-xs">- Michael T., Richmond</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
