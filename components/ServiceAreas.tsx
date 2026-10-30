'use client';

import { MapPin, CheckCircle, Navigation } from 'lucide-react';
import FlipFadeText from './FlipFadeText';
import StaggerText from './StaggerText';

const serviceTowns = [
  'East Alton, IL (62024)',
  'Alton, IL',
  'Wood River, IL',
  'Bethalto, IL',
  'Godfrey, IL',
  'Edwardsville, IL',
  'Glen Carbon, IL',
  'Roxana, IL',
  'Rosewood Heights, IL',
  'Hartford, IL',
  'Granite City, IL',
  'Collinsville, IL',
];

export default function ServiceAreas() {
  return (
    <section className="py-20 sm:py-24 bg-white text-[#330306]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <FlipFadeText
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#330306]"
          >
            Service Areas Across the Riverbend
          </FlipFadeText>
          <StaggerText
            className="text-sm sm:text-base text-[#330306]/75 mt-3"
            delay={0.1}
          >
            Headquartered in East Alton, IL 62024, Robinson Custom Renovations proudly serves homeowners and businesses throughout Madison County and the Greater St. Louis Metro East.
          </StaggerText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Towns Coverage List */}
          <div className="lg:col-span-5 bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#F03620] mb-4">
                <MapPin className="w-6 h-6 shrink-0" />
                <h3 className="text-lg font-bold text-[#330306]">
                  Primary Communities Served
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#330306]/70 leading-relaxed mb-6">
                Whether you need a kitchen remodel in Alton or a custom deck build in Edwardsville, our team arrives on time with full licensing and equipment.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {serviceTowns.map((town) => (
                  <div
                    key={town}
                    className="flex items-center gap-2 p-2 rounded-xl bg-white border border-neutral-100 text-xs font-medium text-[#330306]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#F03620] shrink-0" />
                    <span className="truncate">{town}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-neutral-200 flex items-center justify-between text-xs text-[#330306]/70">
              <span className="flex items-center gap-1.5 font-semibold text-[#330306]">
                <Navigation className="w-3.5 h-3.5 text-[#F03620]" />
                HQ: East Alton, IL 62024
              </span>
              <a
                href="tel:+16188300808"
                className="font-bold text-[#F03620] hover:underline"
              >
                +1 (618) 830-0808
              </a>
            </div>
          </div>

          {/* Live Google Map Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#EAAEBA]/50 shadow-md min-h-[360px] relative bg-neutral-100">
            <iframe
              title="Robinson Custom Renovations Service Area Map"
              src="https://maps.google.com/maps?q=East%20Alton%2C%20IL%2062024&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
