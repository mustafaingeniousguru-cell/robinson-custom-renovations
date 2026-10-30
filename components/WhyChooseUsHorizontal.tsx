'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import FlipFadeText from './FlipFadeText';
import StaggerText from './StaggerText';
import { ShieldCheck, Award, Clock, DollarSign, Sparkles } from 'lucide-react';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: typeof ShieldCheck;
  image: string;
  metric: string;
}

const features: FeatureCard[] = [
  {
    id: 'f1',
    title: '5-Star Riverbend Reputation',
    description:
      'Backed by 42+ five-star reviews from satisfied homeowners across East Alton, Alton, Wood River, and Madison County.',
    icon: Award,
    image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1789398948/805665945_1406438664922592_1170397082400950198_n.jpg',
    metric: '42 Five-Star Reviews',
  },
  {
    id: 'f2',
    title: 'Precision Craftsmanship & Detail',
    description:
      'Every miter cut, tile alignment, and cabinet fixture is installed to architectural standards with zero shortcuts.',
    icon: Sparkles,
    image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1789398943/512170452_1052340383665757_3626179142262041026_n.jpg',
    metric: 'Custom Wood & Tile Finish',
  },
  {
    id: 'f3',
    title: 'Licensed, Bonded & Insured',
    description:
      'Complete contractor insurance and local compliance so you can renovate your home with absolute confidence.',
    icon: ShieldCheck,
    image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1790007033/deck_service.jpg',
    metric: '100% Insured Protection',
  },
  {
    id: 'f4',
    title: 'Transparent, Upfront Estimates',
    description:
      'No surprise change orders or hidden labor rates. We provide detailed estimates so you know exactly what to expect.',
    icon: DollarSign,
    image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1789399643/interior_remodeling_ser.webp',
    metric: 'Clear Itemized Bids',
  },
  {
    id: 'f5',
    title: 'Dependable On-Schedule Completion',
    description:
      'We respect your home and your time with clean worksites, daily progress communication, and punctual execution.',
    icon: Clock,
    image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1789399487/basement_remodel.jpg',
    metric: 'Punctual & Clean Worksites',
  },
];

export default function WhyChooseUsHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [horizontalDistance, setHorizontalDistance] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const updateDistance = () => {
      setHorizontalDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };

    const resizeObserver = new ResizeObserver(updateDistance);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);
    updateDistance();

    return () => resizeObserver.disconnect();
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -horizontalDistance]);
  return (
    <section
      ref={targetRef}
      style={{ height: `calc(100vh + ${horizontalDistance}px)` }}
      className="relative bg-[#330306] text-white"
    >
      {/* Sticky viewport frame that locks during horizontal scroll */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto w-full mb-6 sm:mb-8 shrink-0">
          <FlipFadeText
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            Why Choose Robinson Custom Renovations
          </FlipFadeText>
          <StaggerText
            className="text-xs sm:text-sm text-[#EAAEBA] mt-2 max-w-xl"
            delay={0.1}
          >
            Scroll to discover the standards, care, and dedication that set our construction team apart.
          </StaggerText>
        </div>

        {/* Horizontal Track with extra right end-padding to guarantee the 5th card is 100% visible */}
        <div ref={viewportRef} className="relative w-full overflow-hidden flex items-center">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 sm:gap-6 lg:gap-8 will-change-transform"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="w-[280px] sm:w-[380px] lg:w-[440px] shrink-0 bg-[#240204] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#F03620] transition-colors"
                >
                  {/* Card Image - FADE REMOVED COMPLETELY */}
                  <div className="relative w-full h-48 sm:h-56 bg-neutral-900 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Badge and Number indicator */}
                    <div className="absolute top-4 left-4 p-2.5 rounded-full bg-[#330306]/90 text-[#F03620] backdrop-blur-md border border-white/20 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-3 right-4 px-2 py-0.5 rounded-full bg-black/60 text-[11px] font-bold tracking-wider uppercase text-[#EAAEBA] backdrop-blur-sm">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-7 space-y-2.5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#F03620]">
                      {feature.metric}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#EAAEBA] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
