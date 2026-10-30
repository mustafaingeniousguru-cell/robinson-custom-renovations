'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <div
      className="relative w-full h-[520px] sm:h-[440px] lg:h-[400px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <footer className="fixed bottom-0 left-0 w-full h-[520px] sm:h-[440px] lg:h-[400px] bg-[#330306] text-white border-t border-[#EAAEBA]/20 z-0 flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 w-full flex-grow flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-start">
            {/* Col 1: Logo (2x LARGER) & Subtext */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative h-24 sm:h-28 md:h-32 w-72 sm:w-88 md:w-[420px] transition-all">
                <Image
                  src="https://res.cloudinary.com/xntykrc8/image/upload/v1793300363/Robinson_Custom_Renovations_Logo.png"
                  alt="Robinson Custom Renovations"
                  fill
                  className="object-contain object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#EAAEBA] leading-relaxed max-w-sm">
                we combine skilled craftsmanship, attention to detail, and dependable service to bring your vision to life.
              </p>
            </div>

            {/* Col 2: Direct Contact Details */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#EAAEBA]">
                Contact
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F03620] shrink-0 mt-0.5" />
                  <span>East Alton, IL, United States, 62024</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#F03620] shrink-0" />
                  <a
                    href="tel:+16188300808"
                    className="hover:text-[#EAAEBA] transition-colors font-semibold"
                  >
                    +1 618-830-0808
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#F03620] shrink-0" />
                  <a
                    href="mailto:robinsoncustomrenovations@gmail.com"
                    className="hover:text-[#EAAEBA] transition-colors break-all"
                  >
                    robinsoncustomrenovations@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Social Connection */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#EAAEBA]">
                Connect
              </h4>
              <p className="text-xs text-white/70">
                Follow our ongoing residential projects and craft updates.
              </p>
              <div className="pt-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61595908805144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-[#330306] font-bold text-xs tracking-wider uppercase hover:bg-[#EAAEBA] transition-all shadow-md group"
                >
                  <svg
                    className="w-4 h-4 fill-[#F03620] group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom copyright line ONLY */}
          <div className="pt-6 border-t border-[#EAAEBA]/15 text-center sm:text-left text-xs text-white/60">
            <p>© {new Date().getFullYear()} Robinson Custom Renovations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
