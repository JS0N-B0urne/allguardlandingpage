import React, { useEffect } from 'react';
import Header from './landing/Header';
import TrustIndicators from './landing/TrustIndicators';
import AboutUs from './landing/AboutUs';
import Reviews from './landing/Reviews';
import Contact from './landing/Contact';
import StickyBanner from './landing/StickyBanner';

const PestControlLanding = () => {
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
      <StickyBanner />
      <Header />
      <TrustIndicators />
      <Reviews />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default PestControlLanding;
