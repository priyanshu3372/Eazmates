import React from 'react';
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';
import { CONTACT_INFO, OFFICE_ADDRESS } from '../../config/constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact-section" className="py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-dark font-bold text-sm tracking-wider uppercase bg-brand-light/50 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal">
            Speak to a Healthcare Automation Expert
          </h2>
          <p className="text-brand-text-secondary text-base sm:text-lg">
            Have questions about how Eazmate connects with your current reception setup? Call us, email us, or send a quick WhatsApp message.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contact & Visuals */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-teal">
                Direct Contact Channels
              </h3>
              <p className="text-brand-text-secondary text-base leading-relaxed">
                We respond to calls and messages within 10 minutes during standard business hours (9:00 AM - 7:00 PM).
              </p>
            </div>

            {/* Visual Action Grid for Seniors */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={CONTACT_INFO.whatsapp.getLink('Hello Eazmate, I want to know more about your WhatsApp booking system.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#E8F8EE] hover:bg-[#D4F3DE] border border-brand-primary/30 p-5 rounded-2xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/30 flex items-center justify-center text-brand-dark shrink-0">
                  <MessageSquare className="w-6 h-6 fill-brand-dark text-brand-dark" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider">Fastest Reply</span>
                  <span className="block font-sans font-bold text-lg text-brand-teal">Chat on WhatsApp</span>
                  <span className="block text-sm text-brand-text-secondary">Message us directly at {CONTACT_INFO.whatsapp.number}</span>
                </div>
              </a>

              {/* Phone Card */}
              <div
                className="flex items-center gap-4 bg-brand-alt border border-brand-light p-5 rounded-2xl transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-dark/20 flex items-center justify-center text-brand-dark shrink-0">
                  <Phone className="w-6 h-6 text-brand-dark" />
                </div>
                <div className="flex-grow">
                  <span className="block text-xs font-semibold text-brand-text-light uppercase tracking-wider">Support Line</span>
                  <span className="block font-sans font-bold text-lg text-brand-teal">Call Our Team</span>
                  <div className="flex flex-col gap-1 text-sm text-brand-text-secondary mt-1">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a
                        key={phone.value}
                        href={phone.telLink}
                        className="hover:text-brand-teal hover:underline font-semibold transition-colors"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div
                className="flex items-center gap-4 bg-brand-alt border border-brand-light p-5 rounded-2xl transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-dark/20 flex items-center justify-center text-brand-dark shrink-0">
                  <Mail className="w-6 h-6 text-brand-dark" />
                </div>
                <div className="flex-grow">
                  <span className="block text-xs font-semibold text-brand-text-light uppercase tracking-wider">Official Query</span>
                  <span className="block font-sans font-bold text-lg text-brand-teal">Email Support</span>
                  <div className="flex flex-col gap-1 text-sm text-brand-text-secondary mt-1">
                    {CONTACT_INFO.emails.map((email) => (
                      <a
                        key={email.display}
                        href={email.mailtoLink}
                        className="hover:text-brand-teal hover:underline font-semibold transition-colors"
                      >
                        {email.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Office visual placeholder text */}
            <div className="flex items-start gap-2.5 text-brand-text-secondary text-sm pt-4">
              <MapPin className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" />
              <span>
                <b>Headquarters:</b>{' '}
                <a
                  href={OFFICE_ADDRESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-teal hover:underline transition-colors"
                >
                  {OFFICE_ADDRESS.full}
                </a>
                {'. '}Visitor hours: {OFFICE_ADDRESS.visitorHours}.
              </span>
            </div>
          </div>

          {/* Right Column: Office Location Map / Trust Card */}
          <div className="lg:col-span-7 bg-brand-alt border border-brand-light/40 rounded-3xl p-8 flex flex-col justify-center space-y-6">
            <h3 className="font-serif text-2xl font-bold text-brand-teal">
              Onboarding & Implementation Support
            </h3>
            <p className="text-brand-text-secondary text-base leading-relaxed">
              We make transition simple. Unlike standard SaaS platforms that leave you to read pages of manuals, we handle the integration for you.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-brand-primary text-xl select-none">✓</span>
                <div>
                  <h4 className="font-bold text-brand-teal text-base">Custom Setup Mapping</h4>
                  <p className="text-sm text-brand-text-secondary">We configure doctors' profiles, custom OPD slots, clinic timing buffers, and languages.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary text-xl select-none">✓</span>
                <div>
                  <h4 className="font-bold text-brand-teal text-base">Reception Training</h4>
                  <p className="text-sm text-brand-text-secondary">We train clinic staff on how to view bookings, cancel slots, or send custom patient reminders.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary text-xl select-none">✓</span>
                <div>
                  <h4 className="font-bold text-brand-teal text-base">QR Prints Pack</h4>
                  <p className="text-sm text-brand-text-secondary">We ship physical customized table tents and wall posters with QR codes for your clinic counters.</p>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-brand-light/60 text-center">
              <p className="text-sm text-brand-text-light font-medium">
                Want to configure Eazmate for your hospital? 
              </p>
              <p className="text-brand-dark font-bold text-base mt-1">
                We do free clinic audits to estimate your load savings.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
