'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import FlipFadeText from '@/components/FlipFadeText';
import StaggerText from '@/components/StaggerText';

// All project images served from the local public/robinson-gallery-images folder
const galleryImages = [
  '/robinson-gallery-images/865098571_1802984764249953_2417096970787829485_n.jpg',
  '/robinson-gallery-images/865304569_2598060070679873_1745638449034874329_n.jpg',
  '/robinson-gallery-images/865496492_1634021161603265_707364980611378103_n.jpg',
  '/robinson-gallery-images/865698957_1442344088004838_4925337788325010612_n.jpg',
  '/robinson-gallery-images/865698957_4384072251805509_8189681623477594997_n.jpg',
  '/robinson-gallery-images/865809344_1323811113114781_1846431618523773388_n.jpg',
  '/robinson-gallery-images/866203906_1397509699127533_7450247189949671399_n.jpg',
  '/robinson-gallery-images/866357937_2031441437542342_3480572183427163209_n.jpg',
  '/robinson-gallery-images/866452686_2475277829547674_5616914372634205773_n.jpg',
  '/robinson-gallery-images/866549416_2028023318601005_6828430242073565714_n.jpg',
  '/robinson-gallery-images/866941056_2072125813449758_7179521222531302224_n.jpg',
  '/robinson-gallery-images/867402199_2182387113162625_7820515009578981994_n.jpg',
  '/robinson-gallery-images/867521615_1649356676897735_215391525836507447_n.jpg',
  '/robinson-gallery-images/867678767_1603016935173320_8327688967537826516_n.jpg',
  '/robinson-gallery-images/867678767_972485702075821_6210393873532329957_n.jpg',
  '/robinson-gallery-images/867699431_1446480254256793_2553173104951262820_n.jpg',
  '/robinson-gallery-images/867791556_2316740992456898_3278226045853904887_n.jpg',
  '/robinson-gallery-images/867804480_2683658472091711_3862486647922658996_n.jpg',
  '/robinson-gallery-images/867923793_1099427752875101_7418884620472560825_n.jpg',
  '/robinson-gallery-images/868729298_1448508714096791_7884668674827129118_n.jpg',
  '/robinson-gallery-images/869207418_1382378967060032_4151001274257850565_n.jpg',
  '/robinson-gallery-images/869218380_1127969709773392_3140430130777810285_n.jpg',
  '/robinson-gallery-images/869268817_983804844781349_7873646970986073822_n.jpg',
  '/robinson-gallery-images/869422336_29063005773336660_2902763168513402217_n.jpg',
  '/robinson-gallery-images/869442151_2619112061865890_2150017736156851583_n.jpg',
  '/robinson-gallery-images/869527807_1790721561981855_4526100198764726073_n.jpg',
  '/robinson-gallery-images/869571753_1963221878396530_6170571483674732914_n.jpg',
  '/robinson-gallery-images/869616510_1144067254656844_5291048828429398148_n.jpg',
  '/robinson-gallery-images/869827700_1572380061593183_4943356645321110111_n.jpg',
  '/robinson-gallery-images/869827782_28837743345876469_5386644711072349729_n.jpg',
  '/robinson-gallery-images/870035363_1446261887484015_2867868466920373821_n.jpg',
  '/robinson-gallery-images/870343835_2987652724915711_6470718159938492075_n.jpg',
  '/robinson-gallery-images/870524882_2444958646249966_5980143509273190088_n.jpg',
  '/robinson-gallery-images/870597052_1823567905347633_8937089355336828661_n.jpg',
  '/robinson-gallery-images/870797444_2079875772718217_1124401336289788166_n.jpg',
  '/robinson-gallery-images/870862931_953076917524399_6374303537412435179_n.jpg',
  '/robinson-gallery-images/872486599_2185282579093687_3330697747113512981_n.jpg',
  '/robinson-gallery-images/872730671_4441896072693400_2464959620284516857_n.jpg',
  '/robinson-gallery-images/873598158_4743659725956284_340269820089607107_n.jpg',
  '/robinson-gallery-images/874589010_1173667621761764_9038788289868024386_n.jpg',
  '/robinson-gallery-images/874768908_1115022681433866_5152122237587461760_n.jpg',
  '/robinson-gallery-images/874768908_3060566724283524_4127717611947785097_n.jpg',
  '/robinson-gallery-images/875245872_1120469163686708_2378513121636450918_n.jpg',
  '/robinson-gallery-images/877026284_1058877483872106_8413686397344611221_n.jpg',
  '/robinson-gallery-images/877083942_1741631053585131_5390020780560340107_n.jpg',
  '/robinson-gallery-images/877778345_1416045550250871_1188920725605016759_n.jpg',
  '/robinson-gallery-images/878237459_2205269736730904_6867309817848497265_n.jpg',
  '/robinson-gallery-images/878255389_2357405528131675_9142345670840860719_n.jpg',
];

export default function GalleryPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % galleryImages.length);
    }
  };

  return (
    <div className="bg-white text-[#330306] min-h-screen pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Main Heading: “See our recent work” + subheading. NO subsections and NO eyebrow labels */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <FlipFadeText
            as="h1"
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#330306]"
          >
            See our recent work
          </FlipFadeText>
          <StaggerText
            className="text-sm sm:text-base text-[#330306]/80 mt-3"
            delay={0.15}
          >
            A visual showcase of finished kitchens, custom tile bathrooms, outdoor living decks, and complete home remodeling projects by Robinson Custom Renovations.
          </StaggerText>
        </div>

        {/* Gallery Grid: Exactly 3 images in one row on mobile view! */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-5">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={`${src}-${idx}`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveIdx(idx)}
              className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100 border border-[#EAAEBA]/30 cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <Image
                src={src}
                alt={`Robinson Custom Renovations Project ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover group-hover:scale-108 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-[#330306]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#F03620] flex items-center justify-center shadow-md transform scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIdx(null)}
              className="fixed inset-0 bg-[#330306]/90 backdrop-blur-md"
            />

            {/* Lightbox content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative z-10 max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveIdx(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-[#EAAEBA] transition-colors"
                aria-label="Close image viewer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* High-res Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] bg-black/60 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={galleryImages[activeIdx]}
                  alt={`Robinson Custom Renovations Project View ${activeIdx + 1}`}
                  fill
                  className="object-contain"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between w-full mt-4 px-2 text-white text-xs sm:text-sm">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 hover:bg-[#F03620] backdrop-blur-md transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span className="font-semibold text-[#EAAEBA]">
                  {activeIdx + 1} / {galleryImages.length}
                </span>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 hover:bg-[#F03620] backdrop-blur-md transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
