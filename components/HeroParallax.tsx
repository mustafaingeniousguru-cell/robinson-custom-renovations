'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Wrench } from 'lucide-react';
import FlipFadeText from './FlipFadeText';
import { useEstimateModal } from './EstimateModalContext';

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openEstimateModal } = useEstimateModal();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transform values
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[92vh] min-h-[620px] max-h-[920px] overflow-hidden flex items-center justify-center bg-[#330306]"
    >
      {/* Background Video with Parallax - NO FADE OVERLAY */}
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source
            src="https://res.cloudinary.com/xntykrc8/video/upload/v1790006560/dwu93785.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Hero Content - Centered */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center space-y-6 pt-16 sm:pt-20"
      >
        {/* Headline with Flip-Fade Animation (Not too large, center aligned, high contrast drop shadow) */}
        <div className="text-center">
          <FlipFadeText
            as="h1"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            READY TO TRANSFORM YOUR HOME?
          </FlipFadeText>
        </div>

        {/* Call to action buttons - Strictly one line on mobile */}
        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 pt-2 w-full max-w-md mx-auto">
          <button
            onClick={() => openEstimateModal()}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#F03620] hover:bg-[#d02c18] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xl shadow-black/40 hover:scale-102 cursor-pointer whitespace-nowrap"
          >
            <span>Get Estimate</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </button>

          <Link
            href="/services"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-black/40 hover:bg-white text-white hover:text-[#330306] backdrop-blur-md border border-white/50 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-102 cursor-pointer whitespace-nowrap shadow-xl shadow-black/40"
          >
            <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Explore Services</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
