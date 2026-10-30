'use client';

import { Star } from 'lucide-react';
import FlipFadeText from './FlipFadeText';

interface Review {
  id: string;
  author: string;
  location: string;
  project: string;
  text: string;
}

const reviewsData: Review[] = [
  {
    id: 'r1',
    author: 'Mark & Sarah T.',
    location: 'East Alton, IL',
    project: 'Full Kitchen Remodel',
    text: 'Robinson Custom Renovations completely transformed our kitchen. The craftsmanship on the cabinets and subway tile backsplash is top notch. Finished right on time!',
  },
  {
    id: 'r2',
    author: 'Jennifer P.',
    location: 'Alton, IL',
    project: 'Master Bath Renovation',
    text: 'Outstanding bathroom renovation! Timely, clean, professional, and kept us updated every single day. The custom tile shower is like a 5-star hotel spa.',
  },
  {
    id: 'r3',
    author: 'David L.',
    location: 'Wood River, IL',
    project: 'Custom Deck Construction',
    text: 'Built an incredible custom deck that has survived Illinois weather flawlessly. Solid framing, beautiful railings, and true pride of workmanship.',
  },
  {
    id: 'r4',
    author: 'Brian & Brenda K.',
    location: 'Edwardsville, IL',
    project: 'LVP Flooring & Interior Trim',
    text: 'They remodeled our entire first floor and installed LVP throughout. Flawless transitions, neat cleanup, and honest pricing. 5 stars all the way!',
  },
  {
    id: 'r5',
    author: 'Michael R.',
    location: 'Godfrey, IL',
    project: 'Roofing & Siding Repair',
    text: 'Prompt, honest, and highly skilled. Repaired our storm-damaged siding and re-shingled the roof with great care. Truly dependable contractor.',
  },
  {
    id: 'r6',
    author: 'Amanda G.',
    location: 'East Alton, IL',
    project: 'Basement Remodeling',
    text: 'Turned our unfinished basement into our family’s favorite room in the house. Great communication from start to finish. Highly recommend Robinson Custom Renovations!',
  },
];

export default function ReviewsMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeReviews = [...reviewsData, ...reviewsData];

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/xntykrc8/image/upload/v1792779872/760x470xc.webp")',
      }}
    >
      {/* NO FADE OVERLAY as requested: 'Remove fade from the review seciton in all device views' */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly heading: "Read what our client says". No sub heading and no sub sections. */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-white/90 backdrop-blur-md px-6 sm:px-8 py-3 rounded-full shadow-lg border border-[#EAAEBA]/50 mb-3">
            <FlipFadeText
              as="h2"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#330306]"
            >
              Read what our client says
            </FlipFadeText>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="inline-flex items-center gap-2 bg-[#330306]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-white shadow-md">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-white">
                5.0 Star Rating · 42 Client Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Marquee in a single line */}
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div className="animate-marquee flex gap-6 items-stretch py-3">
            {marqueeReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#EAAEBA]/60 flex flex-col justify-between hover:border-[#F03620] transition-colors"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#330306] leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Author & Meta */}
                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#330306]">
                      {review.author}
                    </h4>
                    <p className="text-[11px] text-[#330306]/70">{review.location}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-[#F03620] bg-[#EAAEBA]/20 px-2.5 py-1 rounded-full">
                    {review.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
