'use client';

import FlipFadeText from '@/components/FlipFadeText';
import StaggerText from '@/components/StaggerText';
import ServiceCard3D from '@/components/ServiceCard3D';
import CostCalculator from '@/components/CostCalculator';
import { serviceCategories } from '@/lib/services';

export default function ServicesPage() {
  return (
    <div className="bg-white text-[#330306]">
      {/* Services Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Header: heading “Our professional services” + subheading. NO subsections and NO eyebrow label */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <FlipFadeText
              as="h1"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#330306]"
            >
              Our professional services
            </FlipFadeText>
            <StaggerText
              className="text-sm sm:text-base text-[#330306]/80 mt-3"
              delay={0.15}
            >
              From custom kitchens to structural additions, explore our comprehensive remodeling and home improvement services designed for homes across East Alton and the Riverbend area.
            </StaggerText>
          </div>

          {/* Each main service category heading followed by its sub-service cards */}
          <div className="space-y-14 sm:space-y-20">
            {serviceCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                <div className="mb-6 sm:mb-8">
                  <FlipFadeText
                    as="h2"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#330306]"
                  >
                    {category.name}
                  </FlipFadeText>
                  <p className="text-xs sm:text-sm text-[#330306]/70 mt-2">
                    {category.description}
                  </p>
                </div>

                {/* 5 service cards in one row on desktop, 3 in one row on mobile view */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-5 items-stretch">
                  {category.services.map((service) => (
                    <div key={service.id} className="h-full">
                      <ServiceCard3D service={service} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator Section on Service Page after services section */}
      <CostCalculator />
    </div>
  );
}
