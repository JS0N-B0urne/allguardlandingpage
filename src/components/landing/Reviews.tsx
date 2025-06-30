
import React from 'react';

const Reviews = () => {
  return (
    <section className="bg-pink-50 py-8 px-4">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          What Our Customers Say
        </h3>
        
        {/* Review Summary */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-red-500 mb-1">80+</div>
            <div className="flex justify-center text-yellow-400 mb-1">
              ★★★★★
            </div>
            <p className="text-sm text-gray-600">Google Reviews</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
            <div className="flex justify-center text-yellow-400 mb-1">
              ★★★★★
            </div>
            <p className="text-sm text-gray-600">Facebook Reviews</p>
          </div>
        </div>
        
        {/* Individual Reviews */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border text-left">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 text-sm mr-2">
                ★★★★★
              </div>
              <span className="text-xs text-gray-500">Google Review</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              "Amazing service! They came out the same day I called and completely solved our spider problem. The technician was knowledgeable and friendly."
            </p>
            <p className="text-gray-500 text-xs">- Emma L.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border text-left">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 text-sm mr-2">
                ★★★★★
              </div>
              <span className="text-xs text-gray-500">Facebook Review</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              "Professional, reliable, and effective. Haven't seen a single pest since their treatment 3 months ago. Worth every penny!"
            </p>
            <p className="text-gray-500 text-xs">- David K.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border text-left">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 text-sm mr-2">
                ★★★★★
              </div>
              <span className="text-xs text-gray-500">Google Review</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              "Fast, efficient, and reasonably priced. The team explained everything they were doing and gave great advice for prevention."
            </p>
            <p className="text-gray-500 text-xs">- Lisa R.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
