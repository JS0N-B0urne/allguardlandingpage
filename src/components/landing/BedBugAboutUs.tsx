import React from 'react';

const BedBugAboutUs = () => {
  return (
    <section className="bg-green-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Why Choose All Guard for Bed Bug Control?
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
                <h4 className="font-semibold text-gray-800 mb-1">Bed Bug Specialists</h4>
                <p className="text-gray-600 text-sm">
                  We specialize in bed bug detection and elimination with proven treatment methods that work.
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
                <h4 className="font-semibold text-gray-800 mb-1">Thorough Inspection</h4>
                <p className="text-gray-600 text-sm">
                  Our experts conduct comprehensive inspections to identify all bed bug hiding spots and infestation levels.
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
                  Emergency bed bug treatments available for urgent situations. Don't wait - call us now.
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

export default BedBugAboutUs; 