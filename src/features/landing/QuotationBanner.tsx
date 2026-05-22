import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../../config/constants';

export const QuotationBanner: React.FC = () => {
  return (
    <section className="py-16 bg-brand-teal text-white relative overflow-hidden">
      {/* Curved background graphics for premium styling */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-dark/25 skew-x-12 transform origin-top-right pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Core Reassurance */}
        <div className="inline-flex items-center gap-1.5 bg-brand-dark/45 border border-brand-primary/20 px-3 py-1 rounded-full text-brand-primary font-bold text-xs md:text-sm tracking-wider uppercase mx-auto">
          <ShieldCheck className="w-4.5 h-4.5" />
          No Credit Card Required • Try Free for 14 Days
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Every Clinic is Different. <br className="hidden sm:inline" />
            Get a Personalized Price Quote.
          </h2>
          <p className="text-brand-light/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Pricing depends on your monthly appointment volume, number of doctor configurations, and customized message broadcast requirements.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/get-quotation"
            className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-brand-teal font-bold text-lg px-8 py-4 rounded-xl shadow-premium transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Calculate Clinic Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={CONTACT_INFO.whatsapp.getLink('Hello Eazmate, I want to get a pricing quote for my clinic.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-dark/65 hover:bg-brand-dark border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-soft transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <MessageSquare className="w-5 h-5 fill-white text-brand-dark" />
            Discuss on WhatsApp
          </a>
        </div>

        {/* Bottom Trust Note */}
        <p className="text-xs text-brand-light/75 pt-2">
          We respect your time. Expect a detailed custom quotation PDF delivered to your email/WhatsApp within 4 hours.
        </p>

      </div>
    </section>
  );
};
