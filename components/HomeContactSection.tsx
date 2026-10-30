'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import FlipFadeText from './FlipFadeText';
import StaggerText from './StaggerText';

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '62024',
    service: 'Kitchen Remodeling',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden bg-fixed bg-cover bg-center text-[#330306]"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/xntykrc8/image/upload/v1792774983/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg")',
      }}
    >
      {/* Light glass wash without dark fade as requested: 'do not add a dark fade' */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <FlipFadeText
              as="h2"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#330306]"
            >
              Start Your Project with Robinson Custom Renovations
            </FlipFadeText>
            <StaggerText
              className="text-base text-[#330306]/80 leading-relaxed"
              delay={0.1}
            >
              Ready to remodel your kitchen, build a custom deck, or renovate your entire home? Reach out directly to discuss your ideas, schedule an on-site visit, or receive a fast estimate.
            </StaggerText>

            <div className="space-y-4 pt-2">
              <a
                href="tel:+16188300808"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-[#EAAEBA]/50 shadow-sm hover:border-[#F03620] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#F03620] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#330306]/60 font-medium">Direct Phone Call</div>
                  <div className="text-base font-bold text-[#330306] group-hover:text-[#F03620] transition-colors">
                    +1 618-830-0808
                  </div>
                </div>
              </a>

              <a
                href="mailto:robinsoncustomrenovations@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-[#EAAEBA]/50 shadow-sm hover:border-[#F03620] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#330306] text-[#EAAEBA] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#330306]/60 font-medium">Email Inquiries</div>
                  <div className="text-sm font-bold text-[#330306] group-hover:text-[#F03620] transition-colors break-all">
                    robinsoncustomrenovations@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-[#EAAEBA]/50 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#EAAEBA]/40 text-[#330306] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#330306]/60 font-medium">Office & Workshop</div>
                  <div className="text-sm font-bold text-[#330306]">
                    East Alton, IL, United States, 62024
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white/95 rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#EAAEBA]/60 backdrop-blur-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#EAAEBA]/30 flex items-center justify-center text-[#F03620]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#330306]">Message Received!</h3>
                <p className="text-sm text-[#330306]/80 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#F03620]">{formData.name}</span>. We will review your project details and get in touch shortly to schedule an estimate.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-[#330306]/30 text-xs font-bold uppercase tracking-wider text-[#330306] hover:bg-neutral-100"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#330306] mb-2">
                  Request a Free Consultation & Estimate
                </h3>
                <p className="text-xs sm:text-sm text-[#330306]/70 mb-6">
                  Fill out the form below and we will respond within 24 business hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#330306] mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-neutral-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#330306] mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(618) 830-0808"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-neutral-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#330306] mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-neutral-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#330306] mb-1">
                        Project Zip Code
                      </label>
                      <input
                        type="text"
                        placeholder="62024"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-neutral-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#330306] mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-white text-[#330306]"
                    >
                      <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                      <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                      <option value="Deck Construction">Deck Construction</option>
                      <option value="Painting">Painting</option>
                      <option value="Roofing">Roofing</option>
                      <option value="Interior Remodeling">Interior Remodeling</option>
                      <option value="Exterior Remodeling">Exterior Remodeling</option>
                      <option value="Siding Repair & Installation">Siding Repair & Installation</option>
                      <option value="Floor Tile / LVP Flooring">Floor Tile / LVP Flooring</option>
                      <option value="Basement Remodeling">Basement Remodeling</option>
                      <option value="Custom Woodwork / Trim">Custom Woodwork / Trim</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#330306] mb-1">
                      Describe Your Project Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about room sizes, preferred finishes, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-neutral-50/50 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#F03620] hover:bg-[#d02c18] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#F03620]/25 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Submit Estimate Request</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
