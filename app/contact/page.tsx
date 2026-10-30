'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, Clock, Star } from 'lucide-react';
import FlipFadeText from '@/components/FlipFadeText';
import StaggerText from '@/components/StaggerText';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    zip: '62024',
    service: 'Kitchen Remodeling',
    timeline: 'Within 1-3 months',
    budget: '$15,000 - $30,000',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#330306] min-h-screen pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading & Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <FlipFadeText
            as="h1"
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#330306]"
          >
            Get an instant quote
          </FlipFadeText>
          <StaggerText
            className="text-sm sm:text-base text-[#330306]/80 mt-3"
            delay={0.15}
          >
            Tell us about your upcoming remodel in East Alton, IL or the Greater Riverbend area. We will provide an upfront, transparent estimate tailored to your home.
          </StaggerText>
        </div>

        {/* 2-Column Layout: Form + Details & Live Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-neutral-50/70 rounded-3xl p-6 sm:p-10 border border-[#EAAEBA]/50 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#EAAEBA]/30 flex items-center justify-center text-[#F03620]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#330306]">Quote Request Received!</h3>
                <p className="text-sm text-[#330306]/80 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#F03620]">{formData.name}</span>. A project manager from Robinson Custom Renovations will review your specifications and contact you right away.
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
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#330306]/60 underline hover:text-[#330306]"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#330306] mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Michael Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-white text-[#330306]"
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
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-white text-[#330306]"
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
                      placeholder="michael@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-white text-[#330306]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#330306] mb-1">
                      Zip Code *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="62024"
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-white text-[#330306]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#330306] mb-1">
                    Street Address / City
                  </label>
                  <input
                    type="text"
                    placeholder="123 Main St, East Alton, IL"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-white text-[#330306]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#330306] mb-1">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-white text-[#330306]"
                    >
                      <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                      <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                      <option value="Interior Remodeling">Interior Remodeling</option>
                      <option value="Exterior Remodeling">Exterior Remodeling</option>
                      <option value="Siding Repair & Installation">Siding Repair & Installation</option>
                      <option value="Deck Construction">Deck Construction</option>
                      <option value="Painting">Painting</option>
                      <option value="Floor Tile">Floor Tile</option>
                      <option value="LVP Flooring">LVP Flooring</option>
                      <option value="Basement Remodeling">Basement Remodeling</option>
                      <option value="Roofing">Roofing</option>
                      <option value="Cabinet Work">Cabinet Work</option>
                      <option value="Door Work">Door Work</option>
                      <option value="Window Work">Window Work</option>
                      <option value="Staircase Construction">Staircase Construction</option>
                      <option value="Fencing">Fencing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#330306] mb-1">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-white text-[#330306]"
                    >
                      <option value="Under $10,000">Under $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                      <option value="$100,000+">$100,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#330306] mb-1">
                    Project Description &amp; Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the space, your goals, materials you like, or any specific constraints..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#F03620] bg-white text-[#330306] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#F03620] hover:bg-[#d02c18] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#F03620]/25 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Request Instant Estimate</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Business Details & Live Google Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#330306] text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Direct Contact &amp; Riverbend Office
                </h3>
                <p className="text-xs text-[#EAAEBA] leading-relaxed">
                  Call or email us directly for prompt answers or to coordinate an on-site visit.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href="tel:+16188300808"
                  className="flex items-center gap-3 text-white/90 hover:text-[#EAAEBA] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#F03620] shrink-0" />
                  <span className="font-semibold">+1 618-830-0808</span>
                </a>

                <a
                  href="mailto:robinsoncustomrenovations@gmail.com"
                  className="flex items-center gap-3 text-white/90 hover:text-[#EAAEBA] transition-colors break-all"
                >
                  <Mail className="w-5 h-5 text-[#F03620] shrink-0" />
                  <span>robinsoncustomrenovations@gmail.com</span>
                </a>

                <div className="flex items-start gap-3 text-white/90">
                  <MapPin className="w-5 h-5 text-[#F03620] shrink-0 mt-0.5" />
                  <span>East Alton, IL, United States, 62024</span>
                </div>

                <div className="flex items-center gap-3 text-white/90">
                  <Clock className="w-5 h-5 text-[#F03620] shrink-0" />
                  <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#EAAEBA]">
                    5.0 Star Rated (42 Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Live Google Map */}
            <div className="rounded-3xl overflow-hidden border border-[#EAAEBA]/40 shadow-lg h-[320px] bg-neutral-100">
              <iframe
                title="Robinson Custom Renovations Location Map"
                src="https://maps.google.com/maps?q=East%20Alton%2C%20IL%2062024&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
