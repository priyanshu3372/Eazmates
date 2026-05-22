import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Award, Users } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-dark" />,
      title: "Data Safety First",
      desc: "All health records, patient info, and schedules are secured using hospital-grade encryption. We strictly follow HIPAA & Indian digital healthcare data norms."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-dark" />,
      title: "Built for Accessibility",
      desc: "Our booking interface requires zero downloads. Designed especially for older patients (45-65) who are comfortable using WhatsApp but struggle with complex apps."
    },
    {
      icon: <Award className="w-6 h-6 text-brand-dark" />,
      title: "99.9% Booking Uptime",
      desc: "Backed by reliable WhatsApp Business APIs, our bots run uninterrupted 24/7. Even if your clinic is closed, patient requests are booked automatically."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-dark" />,
      title: "Dedicated Local Support",
      desc: "We provide clinic onboarding, staff training, and ongoing technical support in Hindi and English. We configure the system matching your exact needs."
    }
  ];

  return (
    <section id="about-section" className="py-20 bg-brand-alt border-t border-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column: Mission & Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-dark font-bold text-sm tracking-wider uppercase bg-brand-light/50 px-3 py-1 rounded-full inline-block">
              About Eazmate
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal leading-tight">
              Bridging the Digital Gap Between Doctors & Patients
            </h2>
            <p className="text-brand-text-secondary text-lg leading-relaxed">
              Founded in Gurugram by a team of healthcare tech engineers and clinical administrators, Eazmate's mission is simple: to make digital clinic reception accessible to everyone.
            </p>
            <p className="text-brand-text-secondary text-base leading-relaxed">
              We realized that while standard clinic management software works for clinics, it fails patients. Patients don't want to download bulky apps, reset passwords, or navigate complex portals just to book a 10-minute checkup. By putting the receptionist inside India's favorite communication app—WhatsApp—we make digital health easy and trustworthy.
            </p>

            {/* Sub-grid for Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {values.map((val, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-brand-primary/20 text-brand-dark shrink-0">
                      {val.icon}
                    </div>
                    <h4 className="font-serif text-lg font-bold text-brand-teal">{val.title}</h4>
                  </div>
                  <p className="text-brand-text-secondary text-sm leading-relaxed pl-9">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Founder Info / Trust Badges Card */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-brand-light/40 rounded-3xl p-8 shadow-premium space-y-6 relative overflow-hidden"
            >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full filter blur-2xl"></div>
              
              <h3 className="font-serif text-2xl font-bold text-brand-teal pb-4 border-b border-brand-light/50">
                Clinic Trust Matrix
              </h3>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="block font-serif text-4xl font-bold text-brand-dark">120+</span>
                  <span className="text-xs font-semibold text-brand-text-light uppercase tracking-wider">Clinics Onboarded</span>
                </div>
                <div>
                  <span className="block font-serif text-4xl font-bold text-brand-dark">45k+</span>
                  <span className="text-xs font-semibold text-brand-text-light uppercase tracking-wider">Bookings Completed</span>
                </div>
                <div>
                  <span className="block font-serif text-4xl font-bold text-brand-dark">85%</span>
                  <span className="text-xs font-semibold text-brand-text-light uppercase tracking-wider">Call Load Reduced</span>
                </div>
                <div>
                  <span className="block font-serif text-4xl font-bold text-brand-dark">4.9★</span>
                  <span className="text-xs font-semibold text-brand-text-light uppercase tracking-wider">Doctor Satisfaction</span>
                </div>
              </div>

              {/* Founders Box */}
              <div className="bg-brand-alt p-4 rounded-xl border border-brand-light/40 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold shadow">
                  EZ
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-brand-teal">Eazmate Founders</h4>
                  <p className="text-xs text-brand-text-secondary">Ex-Hospital Admins & Healthcare Tech Engineers</p>
                </div>
              </div>

              <div className="text-xs text-center text-brand-text-light font-medium italic">
                “Reliability is our baseline. Healthcare doesn't sleep, nor do our booking systems.”
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
