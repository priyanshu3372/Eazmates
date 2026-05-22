import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ShieldCheck, MessageSquare, ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../config/constants';

// Zod validation schema matching strict India mobile phone pattern and field requirements
const quotationSchema = z.object({
  clinicName: z.string().min(2, { message: 'Clinic or Hospital name must be at least 2 characters' }),
  contactPerson: z.string().min(2, { message: 'Contact person name must be at least 2 characters' }),
  whatsappNumber: z.string().regex(/^[5-9]\d{9}$/, { 
    message: 'Please enter a valid 10-digit mobile number (e.g. 9876543210)' 
  }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  city: z.string().min(2, { message: 'Please enter your city' }),
  clinicSize: z.string().min(1, { message: 'Please select your clinic operations size' }),
  servicesNeeded: z.array(z.string()).min(1, { message: 'Select at least one service to proceed' }),
  message: z.string().optional()
});

type QuotationFormData = z.infer<typeof quotationSchema>;

export const QuotationPage: React.FC = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formDataCache, setFormDataCache] = useState<QuotationFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      clinicName: '',
      contactPerson: '',
      whatsappNumber: '',
      email: '',
      city: '',
      clinicSize: '',
      servicesNeeded: [],
      message: ''
    }
  });

  const buildWhatsAppUrl = (data: QuotationFormData) => {
    const text = `Hello Eazmate! I want to request a custom quotation.\n\n` +
      `*Clinic Name:* ${data.clinicName}\n` +
      `*Contact:* ${data.contactPerson}\n` +
      `*WhatsApp:* +91 ${data.whatsappNumber}\n` +
      `*Email:* ${data.email}\n` +
      `*City:* ${data.city}\n` +
      `*Size:* ${data.clinicSize}\n` +
      `*Services:* ${data.servicesNeeded.join(', ')}` +
      (data.message ? `\n*Notes:* ${data.message}` : '') +
      `\n\nPlease provide my custom quotation PDF.`;
    return CONTACT_INFO.whatsapp.getLink(text);
  };

  const onSubmit = (data: QuotationFormData) => {
    setFormDataCache(data);
    setSubmitSuccess(true);
    reset();
    window.open(buildWhatsAppUrl(data), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-brand-alt min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-brand-dark hover:text-brand-teal font-semibold text-base transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Homepage
          </Link>
        </div>

        {/* Success Screen Card */}
        {submitSuccess ? (
          <div className="bg-white border border-brand-light/40 rounded-3xl p-8 sm:p-12 shadow-premium text-center space-y-8 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center mx-auto border border-brand-primary/20 text-brand-dark shadow-sm">
              <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-teal">
                Quotation Request Received!
              </h1>
              <p className="text-brand-text-secondary text-lg max-w-lg mx-auto">
                Thank you, <b>{formDataCache?.contactPerson}</b>. We are analyzing your requirements for <b>{formDataCache?.clinicName}</b>.
              </p>
            </div>

            {/* Quick Action WhatsApp Integration */}
            <div className="bg-brand-alt border border-brand-light/50 rounded-2xl p-6 max-w-xl mx-auto space-y-4">
              <h3 className="font-sans font-bold text-base text-brand-teal uppercase tracking-wide">
                Want immediate pricing?
              </h3>
              <p className="text-sm text-brand-text-secondary">
                Click below to send your details directly to our onboarding manager on WhatsApp for an instant response.
              </p>
              <a
                href={formDataCache ? buildWhatsAppUrl(formDataCache) : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-brand-teal font-bold text-base px-6 py-3.5 rounded-xl shadow-whatsapp w-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-dark"
              >
                <MessageSquare className="w-5 h-5 fill-brand-teal text-brand-primary" />
                Connect Instantly on WhatsApp
              </a>
            </div>

            <div className="text-sm text-brand-text-light">
              <p>An official price quote PDF will be sent to <b>{formDataCache?.email}</b> within 4 hours.</p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="mt-4 text-brand-dark hover:underline font-semibold"
              >
                Submit another request
              </button>
            </div>
          </div>
        ) : (
          /* Form Card */
          <div className="bg-white border border-brand-light/40 rounded-3xl shadow-premium overflow-hidden">
            
            {/* Form Header */}
            <div className="bg-brand-teal text-white p-8 sm:px-10 text-center sm:text-left relative">
              <div className="absolute right-6 top-6 hidden sm:flex items-center gap-1.5 bg-brand-dark/50 border border-brand-primary/10 px-3 py-1 rounded-full text-brand-primary text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" /> HIPAA Encrypted
              </div>
              <h1 className="font-serif text-3xl font-bold text-white mb-2">
                Request Custom Quotation
              </h1>
              <p className="text-brand-light/95 text-sm sm:text-base">
                Provide basic details about your healthcare practice. We will build a customized automation proposal for you.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 sm:p-10 space-y-6">
              
              {/* Grid 1: Clinic Name & Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="clinicName" className="block text-sm font-bold text-brand-teal">
                    Clinic / Hospital Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="clinicName"
                    aria-invalid={errors.clinicName ? "true" : "false"}
                    className={`w-full font-sans text-base px-4 py-3 rounded-xl border ${
                      errors.clinicName ? 'border-rose-500 focus:ring-rose-200' : 'border-brand-light focus:border-brand-dark focus:ring-brand-light'
                    } focus:outline-none focus:ring-4 transition-all`}
                    placeholder="e.g. City Dental Clinic"
                    {...register('clinicName')}
                  />
                  {errors.clinicName && (
                    <p className="text-xs font-semibold text-rose-600" role="alert">{errors.clinicName.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contactPerson" className="block text-sm font-bold text-brand-teal">
                    Contact Person Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    aria-invalid={errors.contactPerson ? "true" : "false"}
                    className={`w-full font-sans text-base px-4 py-3 rounded-xl border ${
                      errors.contactPerson ? 'border-rose-500 focus:ring-rose-200' : 'border-brand-light focus:border-brand-dark focus:ring-brand-light'
                    } focus:outline-none focus:ring-4 transition-all`}
                    placeholder="e.g. Dr. Rajesh Sharma"
                    {...register('contactPerson')}
                  />
                  {errors.contactPerson && (
                    <p className="text-xs font-semibold text-rose-600" role="alert">{errors.contactPerson.message}</p>
                  )}
                </div>
              </div>

              {/* Grid 2: WhatsApp Number & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="whatsappNumber" className="block text-sm font-bold text-brand-teal">
                    WhatsApp Mobile Number <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-brand-text-light font-bold text-base select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      aria-invalid={errors.whatsappNumber ? "true" : "false"}
                      className={`w-full font-sans text-base pl-14 pr-4 py-3 rounded-xl border ${
                        errors.whatsappNumber ? 'border-rose-500 focus:ring-rose-200' : 'border-brand-light focus:border-brand-dark focus:ring-brand-light'
                      } focus:outline-none focus:ring-4 transition-all`}
                      placeholder="e.g. 98765 43210"
                      {...register('whatsappNumber')}
                    />
                  </div>
                  {errors.whatsappNumber ? (
                    <p className="text-xs font-semibold text-rose-600" role="alert">{errors.whatsappNumber.message}</p>
                  ) : (
                    <p className="text-[11px] text-brand-text-light font-medium">For sending quotation details & PDF</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-bold text-brand-teal">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    className={`w-full font-sans text-base px-4 py-3 rounded-xl border ${
                      errors.email ? 'border-rose-500 focus:ring-rose-200' : 'border-brand-light focus:border-brand-dark focus:ring-brand-light'
                    } focus:outline-none focus:ring-4 transition-all`}
                    placeholder="doctor@hospital.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-xs font-semibold text-rose-600" role="alert">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Grid 3: City & Clinic Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="city" className="block text-sm font-bold text-brand-teal">
                    City <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    aria-invalid={errors.city ? "true" : "false"}
                    className={`w-full font-sans text-base px-4 py-3 rounded-xl border ${
                      errors.city ? 'border-rose-500 focus:ring-rose-200' : 'border-brand-light focus:border-brand-dark focus:ring-brand-light'
                    } focus:outline-none focus:ring-4 transition-all`}
                    placeholder="e.g. New Delhi"
                    {...register('city')}
                  />
                  {errors.city && (
                    <p className="text-xs font-semibold text-rose-600" role="alert">{errors.city.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="clinicSize" className="block text-sm font-bold text-brand-teal">
                    Clinic Size (Operations Scale) <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="clinicSize"
                    aria-invalid={errors.clinicSize ? "true" : "false"}
                    className={`w-full font-sans text-base px-4 py-3.5 rounded-xl border ${
                      errors.clinicSize ? 'border-rose-500 focus:ring-rose-200' : 'border-brand-light focus:border-brand-dark focus:ring-brand-light'
                    } focus:outline-none focus:ring-4 transition-all bg-white`}
                    {...register('clinicSize')}
                  >
                    <option value="">-- Select Option --</option>
                    <option value="1-5 Doctors">Single practitioner (1-5 Doctors)</option>
                    <option value="6-15 Doctors">Medium Clinic Group (6-15 Doctors)</option>
                    <option value="15+ Doctors">Large Clinic Network / Hospital (15+ Doctors)</option>
                    <option value="Diagnostics Lab">Diagnostics Center / Laboratory</option>
                  </select>
                  {errors.clinicSize && (
                    <p className="text-xs font-semibold text-rose-600" role="alert">{errors.clinicSize.message}</p>
                  )}
                </div>
              </div>

              {/* Checkbox Group: Services Needed */}
              <div className="space-y-3">
                <span className="block text-sm font-bold text-brand-teal">
                  Services Needed <span className="text-rose-600">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'booking-bot', label: 'Appointment Booking Bot' },
                    { id: 'reminders', label: 'Automated Reminders & Alerts' },
                    { id: 'med-tracking', label: 'Patient Medication Schedules' },
                    { id: 'custom-messaging', label: 'Custom Camp Announcements & Broadcasts' }
                  ].map((service) => (
                    <label 
                      key={service.id} 
                      className="flex items-start gap-3 p-3.5 bg-brand-alt border border-brand-light/60 rounded-xl cursor-pointer hover:border-brand-primary transition-all focus-within:ring-2 focus-within:ring-brand-light"
                    >
                      <input
                        type="checkbox"
                        value={service.label}
                        className="mt-1 h-5 w-5 rounded border-brand-light text-brand-dark focus:ring-brand-dark"
                        {...register('servicesNeeded')}
                      />
                      <span className="text-sm font-semibold text-brand-text-secondary select-none">
                        {service.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.servicesNeeded && (
                  <p className="text-xs font-semibold text-rose-600" role="alert">{errors.servicesNeeded.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-sm font-bold text-brand-teal">
                  Special Notes or Requirements (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full font-sans text-base px-4 py-3 rounded-xl border border-brand-light focus:border-brand-dark focus:ring-brand-light focus:outline-none focus:ring-4 transition-all"
                  placeholder="Tell us if you use a specific software register or have special needs..."
                  {...register('message')}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-brand-dark hover:bg-brand-teal text-white font-bold text-lg py-4 rounded-xl shadow-premium hover:shadow-soft transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  Submit & Open WhatsApp
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Security/Trust Note */}
              <div className="text-center text-xs text-brand-text-light pt-2 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                <span>Your contact data is encrypted and will never be shared.</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
