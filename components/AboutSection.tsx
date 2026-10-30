'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award, MapPin } from 'lucide-react';
import FlipFadeText from './FlipFadeText';
import StaggerText from './StaggerText';
import { useEstimateModal } from './EstimateModalContext';

export default function AboutSection() {
  const { openEstimateModal } = useEstimateModal();

  return (
    <section className="py-20 sm:py-28 bg-white text-[#330306] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Logo / Brand Image Column - NOT CROPPED FROM ANY SIDE, NO TEXT OR EYEBROW ON IT */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md p-6 sm:p-8 bg-gradient-to-br from-neutral-50 to-[#EAAEBA]/15 rounded-3xl border border-[#EAAEBA]/30 shadow-xl flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/xntykrc8/image/upload/v1793298132/sfrhe4ihm.png"
                  alt="Robinson Custom Renovations"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <FlipFadeText
              as="h2"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#330306]"
            >
              Building Excellence Across East Alton & Beyond
            </FlipFadeText>

            <StaggerText
              className="text-base sm:text-lg text-[#330306]/85 leading-relaxed font-normal"
              delay={0.15}
            >
              AT Robinson Custom Renovations, we specialize in construction, remodeling, and home improvement services tailored to each client&apos;s needs. From small renovations to complete transformations, we combine skilled craftsmanship, attention to detail, and dependable service to bring your vision to life.
            </StaggerText>

            {/* Value pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
                <div className="flex items-center gap-2 text-[#F03620] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed & Insured</span>
                </div>
                <p className="text-xs text-[#330306]/70">
                  Full coverage and peace of mind on every remodel.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
                <div className="flex items-center gap-2 text-[#F03620] font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>5-Star Rated</span>
                </div>
                <p className="text-xs text-[#330306]/70">
                  42 verified five-star community reviews.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
                <div className="flex items-center gap-2 text-[#F03620] font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>East Alton Local</span>
                </div>
                <p className="text-xs text-[#330306]/70">
                  Serving 62024 & the Greater Riverbend area.
                </p>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openEstimateModal('General Remodeling')}
                className="px-7 py-3.5 rounded-full bg-[#F03620] hover:bg-[#d02c18] text-white text-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-[#F03620]/25 hover:scale-102 flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="px-6 py-3.5 rounded-full border border-[#330306]/20 hover:border-[#330306] text-[#330306] text-sm font-bold uppercase tracking-wider transition-all hover:bg-neutral-50"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
