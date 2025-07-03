import React from 'react';

const RodentAboutUs = () => {
  return (
    <section className="bg-green-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Why Choose All Guard for Rodent Control?
        </h3>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex flex-col sm:flex-row items-start sm:space-x-3">
              <img
                src="/lovable-uploads/allguard-vehicle.webp"
                alt="All Guard Pest Control Vehicle"
                className="w-full sm:w-40 h-auto rounded-lg shadow mb-4 sm:mb-0"
                style={{ objectFit: 'cover' }}
              />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Rodent Control Specialists</h4>
                <p className="text-gray-600 text-sm">
                  We specialize in rat and mouse control with proven methods to eliminate infestations completely.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-full flex-shrink-0">
                🔍
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Comprehensive Inspection</h4>
                <p className="text-gray-600 text-sm">
                  Our experts conduct thorough inspections to identify entry points, nesting areas, and infestation levels.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-600 text-white p-2 rounded-full flex-shrink-0">
                ⏰
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Same Day Service Available</h4>
                <p className="text-gray-600 text-sm">
                  Emergency rodent control services available for urgent situations. Don't wait - call us now.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-start space-x-3">
              <div className="bg-red-600 text-white p-2 rounded-full flex-shrink-0">
                ✅
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">6-Month Warranty</h4>
                <p className="text-gray-600 text-sm">
                  We offer a 6 month warranty on almost all of our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RodentAboutUs; 