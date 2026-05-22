import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MessageSquare, Shield } from 'lucide-react';
import { CONTACT_INFO, OFFICE_ADDRESS } from '../config/constants';

export const MainLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    // If not on landing page, navigate to landing page first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isQuotationPage = location.pathname === '/get-quotation';

  return (
    <div className="min-h-screen flex flex-col bg-brand-surface text-brand-text-primary">
      {/* Top Banner for Urgent Reassurance */}
      <div className="bg-brand-teal text-white py-2 px-4 text-center text-xs md:text-sm font-medium">
        <span className="inline-flex items-center gap-1.5 justify-center">
          <Shield className="w-4 h-4 text-brand-primary" />
          HIPAA Compliant & Fully Secure WhatsApp Booking for Healthcare Providers
        </span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-brand-surface border-b border-brand-light/50 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center shadow-whatsapp">
                  <MessageSquare className="w-6 h-6 text-brand-primary fill-brand-primary" />
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold tracking-tight text-brand-teal block leading-none">Eazmate</span>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-brand-dark block mt-0.5">Healthcare Bot</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            {!isQuotationPage && (
              <nav className="hidden md:flex space-x-8">
                <button
                  onClick={() => handleNavClick('problem-section')}
                  className="text-brand-text-secondary hover:text-brand-teal font-medium text-base transition-colors py-2 px-1 focus:outline-none focus:ring-2 focus:ring-brand-dark rounded"
                >
                  Challenges
                </button>
                <button
                  onClick={() => handleNavClick('how-it-works')}
                  className="text-brand-text-secondary hover:text-brand-teal font-medium text-base transition-colors py-2 px-1 focus:outline-none focus:ring-2 focus:ring-brand-dark rounded"
                >
                  How It Works
                </button>
                <button
                  onClick={() => handleNavClick('services-section')}
                  className="text-brand-text-secondary hover:text-brand-teal font-medium text-base transition-colors py-2 px-1 focus:outline-none focus:ring-2 focus:ring-brand-dark rounded"
                >
                  Solutions
                </button>
                <button
                  onClick={() => handleNavClick('about-section')}
                  className="text-brand-text-secondary hover:text-brand-teal font-medium text-base transition-colors py-2 px-1 focus:outline-none focus:ring-2 focus:ring-brand-dark rounded"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavClick('contact-section')}
                  className="text-brand-text-secondary hover:text-brand-teal font-medium text-base transition-colors py-2 px-1 focus:outline-none focus:ring-2 focus:ring-brand-dark rounded"
                >
                  Contact
                </button>
              </nav>
            )}

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href={CONTACT_INFO.whatsapp.getLink('Hello Eazmate, I want to book a free demo for my clinic.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal hover:text-brand-dark font-semibold text-base py-2.5 px-4 rounded-xl border border-brand-teal/30 hover:border-brand-teal transition-all focus:outline-none focus:ring-2 focus:ring-brand-dark"
              >
                Book Free Demo
              </a>
              <Link
                to="/get-quotation"
                className="bg-brand-dark hover:bg-brand-teal text-white font-bold text-base py-2.5 px-5 rounded-xl shadow-whatsapp hover:shadow-premium transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary"
              >
                Get Custom Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="inline-flex items-center justify-center p-3 rounded-xl text-brand-teal hover:bg-brand-alt focus:outline-none focus:ring-2 focus:ring-brand-dark"
              >
                {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-surface border-t border-brand-light/40 py-4 px-4 shadow-inner">
            <div className="space-y-3 pb-4">
              {!isQuotationPage ? (
                <>
                  <button
                    onClick={() => handleNavClick('problem-section')}
                    className="block w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-brand-text-secondary hover:bg-brand-alt hover:text-brand-teal"
                  >
                    Challenges
                  </button>
                  <button
                    onClick={() => handleNavClick('how-it-works')}
                    className="block w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-brand-text-secondary hover:bg-brand-alt hover:text-brand-teal"
                  >
                    How It Works
                  </button>
                  <button
                    onClick={() => handleNavClick('services-section')}
                    className="block w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-brand-text-secondary hover:bg-brand-alt hover:text-brand-teal"
                  >
                    Solutions
                  </button>
                  <button
                    onClick={() => handleNavClick('about-section')}
                    className="block w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-brand-text-secondary hover:bg-brand-alt hover:text-brand-teal"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handleNavClick('contact-section')}
                    className="block w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-brand-text-secondary hover:bg-brand-alt hover:text-brand-teal"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <Link
                  to="/"
                  className="block w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-brand-text-secondary hover:bg-brand-alt hover:text-brand-teal"
                >
                  Back to Home
                </Link>
              )}
            </div>
            
            {/* Actions for Mobile */}
            <div className="pt-4 border-t border-brand-light/60 flex flex-col gap-3">
              <a 
                href={CONTACT_INFO.whatsapp.getLink('Hello Eazmate, I want to book a free demo for my clinic.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-brand-teal hover:bg-brand-alt font-bold text-lg py-3 rounded-xl border border-brand-teal transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Free Demo
              </a>
              <Link
                to="/get-quotation"
                className="w-full text-center bg-brand-dark hover:bg-brand-teal text-white font-bold text-lg py-3 rounded-xl shadow-whatsapp transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-teal text-white pt-16 pb-8 border-t border-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-brand-dark/50">
            {/* Logo and Tagline */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center shadow-whatsapp">
                  <MessageSquare className="w-6 h-6 text-brand-teal fill-brand-teal" />
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">Eazmate</span>
              </div>
              <p className="text-brand-light/85 text-base leading-relaxed">
                Simple, automated patient appointment booking and reminders via WhatsApp. Engineered for doctor-patient trust.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-wide text-brand-light mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => handleNavClick('problem-section')} className="text-white/80 hover:text-brand-primary text-base transition-colors">
                    Clinic Challenges
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('how-it-works')} className="text-white/80 hover:text-brand-primary text-base transition-colors">
                    How it Works
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('services-section')} className="text-white/80 hover:text-brand-primary text-base transition-colors">
                    Our Solutions
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('about-section')} className="text-white/80 hover:text-brand-primary text-base transition-colors">
                    About Eazmate
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-wide text-brand-light mb-4">Contact</h3>
              <ul className="space-y-3 text-base text-white/80">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a
                        key={phone.value}
                        href={phone.telLink}
                        className="hover:text-brand-primary transition-colors"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    {CONTACT_INFO.emails.map((email) => (
                      <a
                        key={email.display}
                        href={email.mailtoLink}
                        className="hover:text-brand-primary transition-colors"
                      >
                        {email.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-primary text-sm font-bold mt-1">📍</span>
                  <a
                    href={OFFICE_ADDRESS.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors"
                  >
                    {OFFICE_ADDRESS.full}
                  </a>
                </li>
              </ul>
            </div>

            {/* Trust and Compliance */}
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-wide text-brand-light mb-4">Trust & Safety</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2 bg-brand-dark/45 p-3 rounded-lg border border-brand-dark">
                  <Shield className="w-6 h-6 text-brand-primary shrink-0" />
                  <span className="text-xs text-white/90 leading-tight">
                    All patient data is encrypted and HIPAA compliant.
                  </span>
                </div>
                <div className="text-xs text-white/60">
                  Eazmate is an independent software solution. WhatsApp and its logo are registered trademarks of Meta Platforms, Inc.
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/65">
            <p>© {new Date().getFullYear()} Eazmate Technologies Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-brand-primary transition-colors">Terms of Service</a>
              <a href="#security" className="hover:text-brand-primary transition-colors">Security Standards</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
