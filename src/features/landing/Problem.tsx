import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMissed, BookOpen, CalendarOff, ArrowDownRight } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: <PhoneMissed className="w-8 h-8 text-rose-600" />,
      title: "85% Missed Patient Calls",
      badge: "High Frontdesk Workload",
      description: "When the frontdesk is busy billing or handling patients, incoming booking calls go unanswered. Patients quickly call another clinic instead.",
      stat: "1 in 5 bookings lost"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-amber-600" />,
      title: "Manual Register Mistakes",
      badge: "Inaccurate Records",
      description: "Paper registers are prone to double-bookings, messy handwriting, and lost records. Finding a patient's historical visit takes minutes of searching.",
      stat: "100% manual overhead"
    },
    {
      icon: <CalendarOff className="w-8 h-8 text-red-600" />,
      title: "High No-Show Rates",
      badge: "Idle Doctors & Lost Revenue",
      description: "Patients forget their appointments because clinics lack the staff to send manual SMS or WhatsApp reminders. Doctor slots remain empty.",
      stat: "Up to 30% slot wastage"
    }
  ];

  return (
    <section id="problem-section" className="py-20 bg-brand-surface border-y border-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-dark font-bold text-sm tracking-wider uppercase bg-brand-light/50 px-3 py-1 rounded-full">
            The Clinic Dilemma
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal">
            Why Traditional Clinic Operations Struggle to Keep Up
          </h2>
          <p className="text-brand-text-secondary text-base sm:text-lg leading-relaxed">
            Running a busy OPD means managing patients inside the clinic while answering endless calls. Manual processes slow down your staff and frustrate patients.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-brand-alt border border-brand-light/40 rounded-2xl p-8 shadow-soft flex flex-col justify-between hover:shadow-premium transition-all group"
            >
              <div className="space-y-6">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-white border border-brand-light/60 flex items-center justify-center shadow-sm">
                  {prob.icon}
                </div>
                
                {/* Badge & Title */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-brand-text-light uppercase tracking-wider block">
                    {prob.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-teal leading-snug">
                    {prob.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-brand-text-secondary text-base leading-relaxed">
                  {prob.description}
                </p>
              </div>

              {/* Statistical indicator */}
              <div className="mt-8 pt-6 border-t border-brand-light/60 flex justify-between items-center text-sm font-semibold text-brand-dark/95">
                <span>{prob.stat}</span>
                <ArrowDownRight className="w-4 h-4 text-brand-dark opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
