'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEstimateModal } from './EstimateModalContext';

export default function Navbar() {
  const pathname = usePathname();
  const { openEstimateModal } = useEstimateModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-[#EAAEBA]/40 shadow-sm py-1.5 sm:py-2'
          : 'bg-transparent border-b border-transparent py-4 sm:py-6 shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Bigger in glassmorphic header without increasing header height */}
        <Link href="/" className="flex items-center shrink-0 transition-transform duration-300">
          <div
            className={`relative transition-all duration-300 ease-in-out ${
              isScrolled
                ? 'h-16 sm:h-18 md:h-20 w-60 sm:w-72 md:w-80' /* Bigger in glassmorphism header */
                : 'h-20 sm:h-24 md:h-28 w-64 sm:w-80 md:w-96' /* 2x large in transparent header */
            }`}
          >
            <Image
              src="https://res.cloudinary.com/xntykrc8/image/upload/v1793298132/sfrhe4ihm.png"
              alt="Robinson Custom Renovations"
              fill
              className="object-contain object-left"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                  isScrolled
                    ? isActive
                      ? 'text-[#F03620] border-b-2 border-[#F03620] pb-0.5'
                      : 'text-[#330306] hover:text-[#F03620]'
                    : isHome
                    ? isActive
                      ? 'text-[#F03620] border-b-2 border-[#F03620] pb-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                      : 'text-white hover:text-[#EAAEBA] drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]'
                    : isActive
                    ? 'text-[#F03620] border-b-2 border-[#F03620] pb-0.5'
                    : 'text-[#330306] hover:text-[#F03620]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Action Button */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => openEstimateModal()}
            className="px-6 py-2.5 sm:py-3 rounded-full bg-[#F03620] hover:bg-[#d02c18] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-md shadow-[#F03620]/25 hover:scale-102 cursor-pointer"
          >
            Get Estimate
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2.5 rounded-full transition-colors ${
            isScrolled || !isHome
              ? 'text-[#330306] bg-neutral-100/80 hover:bg-[#EAAEBA]/30'
              : 'text-white bg-black/40 backdrop-blur-md hover:bg-black/60 drop-shadow-md'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-[#EAAEBA]/40 px-6 py-6 shadow-2xl mt-2 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold py-1.5 transition-colors ${
                    isActive ? 'text-[#F03620]' : 'text-[#330306] hover:text-[#F03620]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEstimateModal();
                }}
                className="w-full py-3.5 rounded-full bg-[#F03620] text-white text-xs font-bold uppercase tracking-wider shadow-md text-center cursor-pointer"
              >
                Get Estimate
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
