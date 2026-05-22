import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { CONTACT_INFO } from '../../config/constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-alt via-brand-alt/50 to-brand-surface pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Decorative subtle medical cross grid elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 20 40 M 0 20 L 40 20" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Trusted Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-light/60 border border-brand-primary/20 px-3.5 py-1.5 rounded-full text-brand-dark font-semibold text-sm sm:text-base mx-auto lg:mx-0"
            >
              <ShieldCheck className="w-5 h-5 text-brand-dark" />
              Verified WhatsApp Business Solution Partner
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-teal leading-tight tracking-tight"
            >
              Automate Hospital <br className="hidden sm:inline" />
              <span className="text-brand-dark relative inline-block">
                Appointments
                <span className="absolute left-0 bottom-1 w-full h-1.5 bg-brand-primary/30 rounded"></span>
              </span> on WhatsApp
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-text-secondary text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Reduce missed patient calls by 85% and no-shows by 40%. A simple, secure AI receptionist that books appointments in English & Hindi, 24/7.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/get-quotation"
                className="bg-brand-dark hover:bg-brand-teal text-white font-bold text-lg px-8 py-4 rounded-xl shadow-premium hover:shadow-soft transition-all text-center focus:outline-none focus:ring-2 focus:ring-brand-primary"
              >
                Get Free Quotation
              </Link>
              <a 
                href={CONTACT_INFO.whatsapp.getLink('Hello Eazmate, I want to book a free demo for my clinic.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-brand-dark/20 text-brand-teal hover:bg-brand-alt font-bold text-lg px-8 py-4 rounded-xl shadow-soft hover:border-brand-teal transition-all text-center flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-dark"
              >
                <MessageSquare className="w-5 h-5 fill-brand-teal" />
                Book Demo via WhatsApp
              </a>
            </motion.div>

            {/* Short Bullet Points for Reassurance */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 pt-4"
            >
              {[
                "Zero tech skills needed to start",
                "Works in Hindi & English",
                "Fully HIPAA compliant secure data",
                "Integrates with existing registers"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2 text-left">
                  <div className="mt-1 p-0.5 rounded-full bg-brand-primary/20 text-brand-dark">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-brand-text-secondary">{bullet}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Floating WhatsApp Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[380px] bg-[#ECE5DD] border-[8px] border-slate-800 rounded-[40px] shadow-premium overflow-hidden aspect-[9/18] relative"
            >
              {/* Phone Camera Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 flex justify-center items-center z-20">
                <div className="w-20 h-4 bg-black rounded-b-xl"></div>
              </div>

              {/* WhatsApp Header Mockup */}
              <div className="bg-brand-teal text-white pt-8 pb-3 px-4 flex items-center gap-3 relative z-10 shadow">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shadow-whatsapp">
                  <span className="text-xl font-bold text-brand-teal">E</span>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base leading-tight">Eazmate Assistant</h3>
                  <p className="text-[10px] text-brand-primary font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                    Online • Clinic Receptionist
                  </p>
                </div>
              </div>

              {/* Chat Area */}
              <div className="p-4 space-y-4 h-[calc(100%-110px)] overflow-y-auto bg-[#F4F1EB] text-sm">
                
                {/* Time Stamp */}
                <div className="text-center">
                  <span className="bg-white/80 text-[10px] text-brand-text-light font-semibold py-0.5 px-2.5 rounded shadow-sm">
                    TODAY
                  </span>
                </div>

                {/* Received Message 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="whatsapp-chat-bubble-received p-3 max-w-[85%] self-start"
                >
                  <p className="text-brand-text-primary leading-snug">
                    नमस्ते! Eazmate Clinic Bot में आपका स्वागत है। How can we help you today?
                  </p>
                  <p className="text-[9px] text-right text-brand-text-light mt-1">10:02 AM</p>
                </motion.div>

                {/* Sent Message 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2 }}
                  className="whatsapp-chat-bubble-sent p-3 max-w-[85%] ml-auto"
                >
                  <p className="text-brand-text-primary leading-snug">
                    Dr. Sharma के साथ कल सुबह का appointment बुक करना है।
                  </p>
                  <p className="text-[9px] text-right text-brand-dark/80 mt-1">10:03 AM ✓✓</p>
                </motion.div>

                {/* Received Message 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.5 }}
                  className="whatsapp-chat-bubble-received p-3 max-w-[85%] self-start"
                >
                  <p className="text-brand-text-primary leading-snug">
                    कल Dr. Sharma 2 slots में उपलब्ध हैं:
                  </p>
                  <div className="my-2 space-y-1.5">
                    <button className="block w-full bg-white hover:bg-brand-alt border border-brand-primary text-brand-teal font-semibold py-1 px-3 rounded-lg text-xs transition-colors">
                      Option A: 10:00 AM
                    </button>
                    <button className="block w-full bg-white hover:bg-brand-alt border border-brand-primary text-brand-teal font-semibold py-1 px-3 rounded-lg text-xs transition-colors">
                      Option B: 11:30 AM
                    </button>
                  </div>
                  <p className="text-xs text-brand-text-secondary">कृपया <b>A</b> या <b>B</b> टाइप करें।</p>
                  <p className="text-[9px] text-right text-brand-text-light mt-1">10:03 AM</p>
                </motion.div>

                {/* Sent Message 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 4.8 }}
                  className="whatsapp-chat-bubble-sent p-3 max-w-[85%] ml-auto font-semibold text-brand-text-primary"
                >
                  A
                  <p className="text-[9px] text-right text-brand-dark/80 mt-1 font-normal">10:04 AM ✓✓</p>
                </motion.div>

                {/* Received Message 3 (Confirmation) */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 5.8 }}
                  className="whatsapp-chat-bubble-received p-3 max-w-[85%] self-start border-l-4 border-brand-primary"
                >
                  <span className="text-[10px] text-brand-dark font-bold uppercase block mb-1">Appointment Confirmed!</span>
                  <div className="text-xs space-y-1 text-brand-text-primary">
                    <p><b>Doctor:</b> Dr. Sharma</p>
                    <p><b>Time:</b> Tomorrow, 10:00 AM</p>
                    <p><b>Clinic:</b> City Health Hospital</p>
                    <p><b>Booking ID:</b> CH-8891</p>
                  </div>
                  <p className="text-xs mt-2 text-brand-text-secondary leading-snug">
                    आपकी सहूलियत के लिए कल सुबह 9:00 बजे आपको reminder भेज दिया जाएगा।
                  </p>
                  <p className="text-[9px] text-right text-brand-text-light mt-1">10:04 AM</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Soft decorative blur behind phone mockup */}
            <div className="absolute inset-0 bg-brand-primary/10 rounded-full filter blur-3xl -z-10 scale-75 max-w-sm mx-auto"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
