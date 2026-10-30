'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { useEstimateModal } from './EstimateModalContext';
import { serviceOptions } from '@/lib/services';

export default function EstimateModal() {
  const { isOpen, selectedService, closeEstimateModal } = useEstimateModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '62024',
    service: selectedService || 'Kitchen Remodeling',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync service if context changed
  if (selectedService && formData.service !== selectedService && !submitted) {
    setFormData((prev) => ({ ...prev, service: selectedService }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeEstimateModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#330306]/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-[#EAAEBA]/30 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#330306]/60 hover:text-[#330306] hover:bg-[#EAAEBA]/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#EAAEBA]/30 flex items-center justify-center text-[#F03620]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#330306]">Estimate Request Received!</h3>
                <p className="text-[#330306]/80 text-sm max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-[#F03620]">{formData.name}</span>. The Robinson Custom Renovations team in East Alton will review your project details and contact you shortly.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+16188300808"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F03620] text-white font-medium text-sm hover:bg-[#d02c18] transition-colors shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Call Directly: (618) 830-0808
                  </a>
                </div>
                <div className="pt-3">
                  <button
                    onClick={handleClose}
                    className="text-xs text-[#330306]/60 hover:text-[#330306] underline"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#330306]">Get Your Free Estimate</h3>
                  <p className="text-sm text-[#330306]/70 mt-1">
                    Tell us about your project in East Alton or the surrounding Riverbend area.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#330306] mb-1">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F03620] text-sm text-[#330306]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#330306] mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(618) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F03620] text-sm text-[#330306]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#330306] mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F03620] text-sm text-[#330306]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#330306] mb-1">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        placeholder="62024"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F03620] text-sm text-[#330306]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#330306] mb-1">
                      Service Selected
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F03620] text-sm text-[#330306] bg-white"
                    >
                      {serviceOptions.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#330306] mb-1">
                      Project Details / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you would like done or your preferred timing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F03620] text-sm text-[#330306] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-[#F03620] hover:bg-[#d42d17] text-white font-semibold text-sm transition-all shadow-lg shadow-[#F03620]/25 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Submit Estimate Request</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
