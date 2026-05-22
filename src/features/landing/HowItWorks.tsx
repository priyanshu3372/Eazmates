import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, CalendarCheck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-brand-dark" />,
      title: "1. Patient Initiates",
      sub: "Patient sends a WhatsApp message or scans a QR code",
      description: "Patients can start the booking conversation instantly by sending a simple 'Hi' or scanning a QR code on clinic templates, Google Maps, or prescriptions. No app download is required."
    },
    {
      icon: <Bot className="w-8 h-8 text-brand-dark" />,
      title: "2. AI Bot Schedules",
      sub: "Interactive booking choices in under 30 seconds",
      description: "Our AI assistant answers in English or Hindi. It checks real-time doctor slots, asks for the patient's name, age, and phone, and suggests available appointment timings."
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-brand-dark" />,
      title: "3. Confirmed & Notified",
      sub: "Instant clinic update + automated patient reminders",
      description: "The appointment is locked inside your Eazmate dashboard. Both doctor and patient get instant booking receipt cards. Reminders are sent 24 hours and 2 hours before the visit."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-brand-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-dark font-bold text-sm tracking-wider uppercase bg-brand-light/50 px-3 py-1 rounded-full">
            Simple 3-Step Flow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal">
            How Eazmate Automates Bookings
          </h2>
          <p className="text-brand-text-secondary text-base sm:text-lg leading-relaxed">
            Eazmate sets up a secure virtual receptionist directly on your clinic's WhatsApp Business number. Here is how simple it is for your patients:
          </p>
        </div>

        {/* Timeline Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
          
          {/* Connecting arrow line helper for Desktop */}
          <div className="hidden lg:block absolute top-1/4 left-1/6 right-1/6 h-0.5 bg-brand-primary/30 -z-0" style={{ width: '60%', left: '20%' }}></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white border border-brand-light/40 rounded-2xl p-8 shadow-soft flex flex-col items-center text-center relative z-10 hover:shadow-premium transition-all"
            >
              {/* Arrow Indicator for Desktop */}
              {idx < 2 && (
                <div className="hidden lg:flex absolute -right-6 top-1/4 transform -translate-y-1/2 w-10 h-10 bg-brand-light rounded-full border border-brand-primary/20 items-center justify-center shadow-whatsapp">
                  <ArrowRight className="w-5 h-5 text-brand-dark" />
                </div>
              )}

              {/* Step Badge */}
              <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center shadow-sm mb-6 border border-brand-primary/10">
                {step.icon}
              </div>

              {/* Step Info */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-brand-teal">
                  {step.title}
                </h3>
                <p className="text-brand-dark text-sm font-semibold tracking-wide uppercase px-2.5 py-1 bg-brand-light/30 rounded inline-block">
                  {step.sub}
                </p>
                <p className="text-brand-text-secondary text-base leading-relaxed pt-2">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
