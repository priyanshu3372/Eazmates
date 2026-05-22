import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../features/landing/Hero';
import { Problem } from '../features/landing/Problem';
import { HowItWorks } from '../features/landing/HowItWorks';
import { Services } from '../features/landing/Services';
import { About } from '../features/landing/About';
import { Contact } from '../features/landing/Contact';
import { QuotationBanner } from '../features/landing/QuotationBanner';

export const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // If not redirecting to a section, default scroll to top
    const state = location.state as { scrollTo?: string } | null;
    if (!state?.scrollTo) {
      window.scrollTo(0, 0);
    } else {
      const timer = setTimeout(() => {
        const element = document.getElementById(state.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150); // Small delay to let page mount and lay out correctly
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="relative">
      <Hero />
      <Problem />
      <HowItWorks />
      <Services />
      <About />
      <Contact />
      <QuotationBanner />
    </div>
  );
};
