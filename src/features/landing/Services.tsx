import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BellRing, Pill, MessageCircleCode, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Bot className="w-7 h-7 text-brand-dark" />,
      title: "Appointment Booking Bot",
      description: "Automate scheduling through smart text prompts. Saves hours of administrative phone calls each day."
    },
    {
      icon: <BellRing className="w-7 h-7 text-brand-dark" />,
      title: "Automated Reminders",
      description: "Send patient notification alerts 24 hours & 2 hours before appointments to minimize clinic no-shows."
    },
    {
      icon: <Pill className="w-7 h-7 text-brand-dark" />,
      title: "Medication Tracking",
      description: "Send WhatsApp schedules for medicine dosages. Helps patients stay compliant and healthy."
    },
    {
      icon: <MessageCircleCode className="w-7 h-7 text-brand-dark" />,
      title: "Custom Clinic Messaging",
      description: "Broadcast patient health camps, checkup packages, holiday alerts, and seasonal announcements instantly."
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl space-y-4">
            <span className="text-brand-dark font-bold text-sm tracking-wider uppercase bg-brand-light/50 px-3 py-1 rounded-full inline-block">
              Our Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal">
              Automate Doctor Bookings & Boost Patient Care
            </h2>
          </div>
          <div>
            <Link
              to="/get-quotation"
              className="inline-flex items-center gap-1 text-brand-dark hover:text-brand-teal font-bold text-base md:text-lg border-b-2 border-brand-dark hover:border-brand-teal transition-all pb-1 focus:outline-none focus:ring-2 focus:ring-brand-dark rounded"
            >
              Get Custom Solution <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-brand-light/40 rounded-2xl p-7 shadow-soft hover:shadow-premium transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-brand-light/55 flex items-center justify-center border border-brand-primary/10">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-brand-teal">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-brand-text-secondary text-base leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Read More button placeholder to invite hover click */}
              <div className="pt-6">
                <span className="text-sm font-semibold text-brand-dark flex items-center gap-1 group cursor-pointer hover:underline">
                  Learn more <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
