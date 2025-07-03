import React, { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-8 px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Elfsight All-in-One Reviews | All Guard */}
        <div className="elfsight-app-640d81b0-2ecb-4abc-aef5-df60503a4550" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default Reviews;
