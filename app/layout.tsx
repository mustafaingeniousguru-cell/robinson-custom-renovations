import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import EstimateModal from '@/components/EstimateModal';
import { EstimateModalProvider } from '@/components/EstimateModalContext';

export const metadata: Metadata = {
  title: 'Robinson Custom Renovations | East Alton, IL',
  description:
    'Premier remodeling, construction, and home improvement services in East Alton, IL and the Greater Riverbend area. Kitchens, bathrooms, decks, roofing, and whole-home renovations.',
  openGraph: {
    title: 'Robinson Custom Renovations | East Alton, IL',
    description:
      'Premier remodeling, construction, and home improvement services in East Alton, IL. 5-star rated contractor with 42 verified client reviews.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robinson Custom Renovations | East Alton, IL',
    description:
      'Craftsmanship, attention to detail, and dependable remodeling service in East Alton, IL.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-white text-[#330306] antialiased selection:bg-[#EAAEBA] selection:text-[#330306]">
        <EstimateModalProvider>
          {/* Custom interactive cursor follower */}
          <CustomCursor />

          <div className="min-h-screen flex flex-col justify-between">
            {/* Header / Navbar */}
            <Navbar />

            {/* Main content */}
            <main className="flex-grow relative z-10 bg-white">
              {children}
            </main>

            {/* Consistent Footer across all pages */}
            <Footer />
          </div>

          {/* Global Estimate Request Modal */}
          <EstimateModal />
        </EstimateModalProvider>
      </body>
    </html>
  );
}
