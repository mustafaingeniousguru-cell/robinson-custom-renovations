'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEstimateModal } from './EstimateModalContext';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function ServiceCard3D({
  service,
  showDescription = true,
}: {
  service: ServiceItem;
  showDescription?: boolean;
}) {
  const { openEstimateModal } = useEstimateModal();
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  // Mouse tilt physics
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, { stiffness: 260, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 260, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // Subtle 3D tilt angles
    rotateX.set((-offsetY / (rect.height / 2)) * 8);
    rotateY.set((offsetX / (rect.width / 2)) * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full h-full"
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        className="group relative flex flex-col justify-between h-full bg-white rounded-2xl sm:rounded-3xl border border-[#EAAEBA]/40 shadow-sm hover:shadow-xl hover:border-[#F03620]/30 transition-shadow duration-300 overflow-hidden"
      >
        {/* Top: Image container */}
        <div className="relative w-full aspect-[4/3] bg-neutral-100 overflow-hidden">
          {!imageError ? (
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#330306]/10 to-[#EAAEBA]/30 p-2 text-center">
              <span className="text-[10px] sm:text-xs font-semibold text-[#330306]">
                {service.name}
              </span>
            </div>
          )}
          {/* Subtle top glare reflection */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </div>

        {/* Content: Service name & very little sub text */}
        <div className="p-2.5 sm:p-4 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="font-bold text-[#330306] text-xs sm:text-sm lg:text-base leading-tight group-hover:text-[#F03620] transition-colors">
              {service.name}
            </h3>
            {showDescription && (
              <p className="mt-1 text-[10px] sm:text-xs text-[#330306]/70 line-clamp-2 leading-relaxed">
                {service.description}
              </p>
            )}
          </div>

          {/* Action button */}
          <div className="mt-3 pt-1">
            <button
              onClick={() => openEstimateModal(service.name)}
              className="w-full py-1.5 sm:py-2 px-2 sm:px-3 rounded-full bg-[#F03620] hover:bg-[#d02c18] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-sm shadow-[#F03620]/20 hover:scale-102 cursor-pointer whitespace-nowrap"
            >
              Get Estimate
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
