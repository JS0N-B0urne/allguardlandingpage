import React from 'react';
import PestControlLanding from '../components/PestControlLanding';

// Template for creating new landing pages
// Copy this file and rename it for each pest type
const TemplateLanding = () => {
  return (
    <PestControlLanding 
      pestType="template"
      title="Template Pest Control Melbourne"
      description="Professional pest control services in Melbourne"
      // Add other props as needed
    />
  );
};

export default TemplateLanding; 