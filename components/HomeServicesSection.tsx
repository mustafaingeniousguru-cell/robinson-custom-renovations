'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FlipFadeText from './FlipFadeText';
import ServiceCard3D from './ServiceCard3D';
import { serviceCategories } from '@/lib/services';

const homeServiceIds = [
  'deck-construction-repairs-replacements',
  'kitchen-remodeling',
  'bathroom-remodeling',
  'basement-finishing',
  'residential-wood-framing',
];

const homeServices = serviceCategories
  .flatMap((category) => category.services)
  .filter((service) => homeServiceIds.includes(service.id));

export default function HomeServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-neutral-50/70 text-[#330306]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <FlipFadeText
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#330306]"
          >
            Our professional services
          </FlipFadeText>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 lg:gap-5 items-stretch">
          {homeServices.map((service) => (
            <div key={service.id} className="h-full">
              <ServiceCard3D service={service} showDescription={false} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#330306] hover:bg-[#F03620] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-102 cursor-pointer"
          >
            <span>See All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
