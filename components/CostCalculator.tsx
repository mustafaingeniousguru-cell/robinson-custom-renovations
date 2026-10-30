'use client';

import { useState, useId } from 'react';
import { Calculator, ArrowRight, Check, Sparkles } from 'lucide-react';
import FlipFadeText from './FlipFadeText';
import StaggerText from './StaggerText';
import { useEstimateModal } from './EstimateModalContext';

interface ServiceRate {
  basePerSqFt: number;
  minPrice: number;
}

const serviceRates: Record<string, ServiceRate> = {
  'Kitchen Remodeling': { basePerSqFt: 110, minPrice: 12000 },
  'Bathroom Remodeling': { basePerSqFt: 125, minPrice: 8500 },
  'Deck Construction': { basePerSqFt: 45, minPrice: 6500 },
  'Painting': { basePerSqFt: 18, minPrice: 2200 },
  'Roofing': { basePerSqFt: 35, minPrice: 7000 },
  'Siding Repair & Installation': { basePerSqFt: 38, minPrice: 5500 },
  'Floor Tile': { basePerSqFt: 22, minPrice: 2800 },
  'LVP Flooring': { basePerSqFt: 16, minPrice: 2400 },
  'Basement Remodeling': { basePerSqFt: 65, minPrice: 15000 },
  'Cabinet Work': { basePerSqFt: 75, minPrice: 4500 },
  'Door Work': { basePerSqFt: 40, minPrice: 1500 },
  'Window Work': { basePerSqFt: 55, minPrice: 2500 },
};

export default function CostCalculator() {
  const serviceId = useId();
  const sqftId = useId();
  const { openEstimateModal } = useEstimateModal();
  const [selectedService, setSelectedService] = useState('Kitchen Remodeling');
  const [sqft, setSqft] = useState(250);
  const [tier, setTier] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [includeDemo, setIncludeDemo] = useState(true);
  const [includePermits, setIncludePermits] = useState(true);
  const [customTrim, setCustomTrim] = useState(false);

  // Compute estimate range
  const rateInfo = serviceRates[selectedService] || { basePerSqFt: 60, minPrice: 5000 };
  const tierMultiplier = tier === 'standard' ? 1.0 : tier === 'premium' ? 1.35 : 1.75;
  const demoCost = includeDemo ? 800 : 0;
  const permitCost = includePermits ? 450 : 0;
  const trimCost = customTrim ? 1200 : 0;

  const rawEstimate = sqft * rateInfo.basePerSqFt * tierMultiplier + demoCost + permitCost + trimCost;
  const lowEstimate = Math.max(rateInfo.minPrice, Math.round(rawEstimate * 0.92));
  const highEstimate = Math.max(rateInfo.minPrice * 1.15, Math.round(rawEstimate * 1.12));

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden bg-fixed bg-cover bg-center text-[#330306]"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/xntykrc8/image/upload/v1789660118/A-Luxe-Modern-Living-Room-with-a-High-End-Media-Wall.jpg")',
      }}
    >
      {/* Light frosted wash without dark fade as requested: 'do not add dark fade' */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <FlipFadeText
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#330306]"
          >
            Remodeling Cost Estimator
          </FlipFadeText>
          <StaggerText
            className="text-sm sm:text-base text-[#330306]/80 mt-2"
            delay={0.1}
          >
            Select your project type, room size, and desired material grade for an instant ballpark estimate.
          </StaggerText>
        </div>

        <div className="bg-white/95 rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#EAAEBA]/50 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Service Selection */}
              <div>
                <label htmlFor={serviceId} className="block text-xs font-bold text-[#330306] uppercase tracking-wider mb-2">
                  1. Select Remodel Service
                </label>
                <select
                  id={serviceId}
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm font-semibold text-[#330306] bg-neutral-50/70 focus:outline-none focus:border-[#F03620]"
                >
                  {Object.keys(serviceRates).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Square Footage Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={sqftId} className="text-xs font-bold text-[#330306] uppercase tracking-wider">
                    2. Approximate Area (Sq Ft)
                  </label>
                  <span className="text-sm font-extrabold text-[#F03620] tabular-nums">
                    {sqft} sq ft
                  </span>
                </div>
                <input
                  id={sqftId}
                  type="range"
                  min="60"
                  max="2000"
                  step="10"
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#F03620]"
                />
                <div className="flex justify-between text-[11px] text-[#330306]/50 mt-1">
                  <span>60 sq ft</span>
                  <span>1,000 sq ft</span>
                  <span>2,000+ sq ft</span>
                </div>
              </div>

              {/* Finish Tier */}
              <div>
                <label className="block text-xs font-bold text-[#330306] uppercase tracking-wider mb-2">
                  3. Material &amp; Finish Tier
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setTier('standard')}
                    className={`py-3 px-2 sm:px-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                      tier === 'standard'
                        ? 'bg-[#330306] text-white border-[#330306] shadow-sm'
                        : 'bg-neutral-50 text-[#330306] border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    Standard
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier('premium')}
                    className={`py-3 px-2 sm:px-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                      tier === 'premium'
                        ? 'bg-[#F03620] text-white border-[#F03620] shadow-sm'
                        : 'bg-neutral-50 text-[#330306] border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    Premium Custom
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier('luxury')}
                    className={`py-3 px-2 sm:px-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                      tier === 'luxury'
                        ? 'bg-[#330306] text-[#EAAEBA] border-[#330306] shadow-sm'
                        : 'bg-neutral-50 text-[#330306] border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    Luxury Bespoke
                  </button>
                </div>
              </div>

              {/* Add-on scopes */}
              <div>
                <label className="block text-xs font-bold text-[#330306] uppercase tracking-wider mb-2">
                  4. Scope Add-ons
                </label>
                <div className="flex flex-wrap gap-2">
                  <label className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeDemo}
                      onChange={(e) => setIncludeDemo(e.target.checked)}
                      className="accent-[#F03620] rounded"
                    />
                    <span>Demolition &amp; Haul Away</span>
                  </label>
                  <label className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includePermits}
                      onChange={(e) => setIncludePermits(e.target.checked)}
                      className="accent-[#F03620] rounded"
                    />
                    <span>Local Permits &amp; Inspections</span>
                  </label>
                  <label className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      checked={customTrim}
                      onChange={(e) => setCustomTrim(e.target.checked)}
                      className="accent-[#F03620] rounded"
                    />
                    <span>Architectural Millwork / Trim</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Calculated Output Display */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#330306] to-[#240204] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#EAAEBA] text-xs font-bold uppercase tracking-wider mb-3">
                  <Calculator className="w-4 h-4 text-[#F03620]" />
                  <span>Estimated Investment Range</span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums">
                  ${lowEstimate.toLocaleString()} – ${highEstimate.toLocaleString()}
                </div>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Calculated based on {sqft} sq ft {selectedService} with {tier} finishes in the East Alton / Riverbend area.
                </p>

                <div className="space-y-2 mt-5 pt-4 border-t border-white/10 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#F03620]" />
                    <span>Includes skilled licensed labor &amp; materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#F03620]" />
                    <span>On-site consultation to confirm exact scope</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#EAAEBA]" />
                    <span>Fixed written contract before work begins</span>
                  </div>
                </div>
              </div>

              {/* Lock in estimate CTA */}
              <button
                onClick={() =>
                  openEstimateModal(
                    `${selectedService} (Est: $${lowEstimate.toLocaleString()}-$${highEstimate.toLocaleString()})`
                  )
                }
                className="w-full py-3.5 px-6 rounded-full bg-[#F03620] hover:bg-[#d02c18] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#F03620]/30 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Lock in this Estimate</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
