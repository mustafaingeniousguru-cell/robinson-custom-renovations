'use client';

import HeroParallax from '@/components/HeroParallax';
import AboutSection from '@/components/AboutSection';
import HomeServicesSection from '@/components/HomeServicesSection';
import WhyChooseUsHorizontal from '@/components/WhyChooseUsHorizontal';
import ReviewsMarquee from '@/components/ReviewsMarquee';
import ServiceAreas from '@/components/ServiceAreas';
import HomeContactSection from '@/components/HomeContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white text-[#330306]">
      {/* 2: Hero Section */}
      <HeroParallax />

      {/* 3: About Us Section */}
      <AboutSection />

      {/* 4: Services Section (5 services desktop, 3 mobile, 3D cards) */}
      <HomeServicesSection />

      {/* 5: Why Choose Us (Horizontal scroll reveal effect) */}
      <WhyChooseUsHorizontal />

      {/* 6: Reviews (Single line marquee + sticky still background image) */}
      <ReviewsMarquee />

      {/* 7: Service Areas (East Alton, IL + Google Maps) */}
      <ServiceAreas />

      {/* 8: Contact Section (Sticky background image + lead form) */}
      <HomeContactSection />
    </div>
  );
}
