import React, { useEffect } from 'react';
import RodentHeader from './landing/RodentHeader';
import TrustIndicators from './landing/TrustIndicators';
import RodentAboutUs from './landing/RodentAboutUs';
import Reviews from './landing/Reviews';
import Contact from './landing/Contact';
import RodentStickyBanner from './landing/RodentStickyBanner';

const RodentControlLanding = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Add event listeners for smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Phone number click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
      link.addEventListener('click', () => {
        console.log('Phone number clicked:', link.getAttribute('href'));
      });
    });

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <RodentStickyBanner />
      <RodentHeader />
      <TrustIndicators />
      <Reviews />
      <RodentAboutUs />
      <Contact />
    </div>
  );
};

export default RodentControlLanding; 