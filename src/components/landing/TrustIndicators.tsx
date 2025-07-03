import React from 'react';

const TrustIndicators = () => {
  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Trusted in Melbourne - Check Out Our Reviews</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-8 items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center min-h-[96px]">
            <img
              src="/lovable-uploads/ndis logo.webp"
              alt="NDIS Registered Provider"
              className="h-20 max-h-28 w-auto object-contain mx-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center min-h-[96px]">
            <img
              src="/lovable-uploads/hi pages logo.webp"
              alt="hipages.com.au"
              className="h-20 max-h-28 w-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
