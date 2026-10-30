import type { ServiceItem } from '@/components/ServiceCard3D';

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  services: ServiceItem[];
}

// Main service categories with their sub-services (source: services.txt)
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'exterior-construction-renovations',
    name: 'Exterior Construction & Renovations',
    description: 'Decks, porches, siding, trim, windows and doors built and finished to last.',
    image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1790007033/deck_service.jpg',
    services: [
      {
        id: 'deck-construction-repairs-replacements',
        name: 'Deck Construction, Repairs & Replacements',
        description: 'Custom multi-tier wood and composite decks, plus repairs and full replacements.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1790007033/deck_service.jpg',
      },
      {
        id: 'porch-construction-repairs',
        name: 'Porch Construction & Repairs',
        description: 'Covered porches and entryways built or restored for structure and curb appeal.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372298/Porch_construction_repairs_service.jpg',
      },
      {
        id: 'exterior-stairs-railings-landings',
        name: 'Exterior Stairs, Railings & Landings',
        description: 'Sturdy, code-compliant outdoor stairs, guardrails and landings.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1789398948/722147724_1328427919390334_6746985090643650559_n.jpg',
      },
      {
        id: 'siding-installation-replacement',
        name: 'Siding Installation & Replacement',
        description: 'Heavy-duty vinyl and composite siding for long-lasting weather protection.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1790007033/siding_service.jpg',
      },
      {
        id: 'soffit-fascia-installation',
        name: 'Soffit & Fascia Installation',
        description: 'Clean, ventilated soffit and fascia lines that protect your roof edge.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372296/Soffit_fascia_installation_service.webp',
      },
      {
        id: 'exterior-trim-wood-repairs',
        name: 'Exterior Trim & Wood Repairs',
        description: 'Precision trim work and rot-damaged wood restoration around your home.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372295/Exterior_trim_wood_repairs_service.webp',
      },
      {
        id: 'window-installation-replacement',
        name: 'Window Installation & Replacement',
        description: 'Energy-efficient replacement windows with custom casing and wood trim.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1789665447/window_wood.jpg',
      },
      {
        id: 'exterior-door-installation-replacement',
        name: 'Exterior Door Installation & Replacement',
        description: 'Weather-sealed entryways with secure hanging and hardware fitting.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793373053/exterior_door_instalation_and_repair_service.webp',
      },
    ],
  },
  {
    id: 'interior-remodeling-renovations',
    name: 'Interior Remodeling & Renovations',
    description: 'Kitchens, bathrooms, basements and rooms reimagined from floor to finish.',
    image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1789398943/512170452_1052340383665757_3626179142262041026_n.jpg',
    services: [
      {
        id: 'kitchen-remodeling',
        name: 'Kitchen Remodeling',
        description: 'Custom cabinetry, durable quartz countertops, and ergonomic cooking spaces.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1789398943/512170452_1052340383665757_3626179142262041026_n.jpg',
      },
      {
        id: 'bathroom-remodeling',
        name: 'Bathroom Remodeling',
        description: 'Walk-in tile showers, freestanding tubs, vanities, and premium plumbing fixtures.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1789398948/805665945_1406438664922592_1170397082400950198_n.jpg',
      },
      {
        id: 'basement-finishing',
        name: 'Basement Finishing',
        description: 'Transforming unused basements into entertainment lounges, bars, and extra suites.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1789399487/basement_remodel.jpg',
      },
      {
        id: 'interior-room-renovations',
        name: 'Interior Room Renovations',
        description: 'Complete room updates with drywall, layouts and finishes tailored to your needs.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372295/Interior_room_renovations_service.jpg',
      },
      {
        id: 'flooring-installation',
        name: 'Flooring Installation (LVP, Laminate & Hardwood)',
        description: 'Waterproof luxury vinyl plank, laminate and hardwood installed seamlessly.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1790097041/lvp-flooring.jpg',
      },
      {
        id: 'interior-door-installation',
        name: 'Interior Door Installation',
        description: 'Interior door hanging, hardware fitting and clean casing details.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793373053/interior_door_instalation_and_repair_service.jpg',
      },
      {
        id: 'baseboards-casing-finish-trim',
        name: 'Baseboards, Casing & Finish Trim',
        description: 'Crisp millwork and trim that gives every room a finished, custom look.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372295/Baseboards_casing_finish_trim_service.webp',
      },
      {
        id: 'custom-carpentry-built-ins',
        name: 'Custom Carpentry & Built-Ins',
        description: 'Custom built-ins, cabinetry and fine millwork designed for your space.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372289/Custom_carpentry_built-ins_service.webp',
      },
    ],
  },
  {
    id: 'framing-carpentry',
    name: 'Framing & Carpentry',
    description: 'Structural framing, walls and woodwork built straight, plumb and true.',
    image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372288/Residential_wood_framing_service.jpg',
    services: [
      {
        id: 'residential-wood-framing',
        name: 'Residential Wood Framing',
        description: 'Load-bearing and non-load-bearing wood framing for homes and additions.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372288/Residential_wood_framing_service.jpg',
      },
      {
        id: 'interior-partition-walls',
        name: 'Interior Partition Walls',
        description: 'New partition walls to reconfigure and maximize your interior layout.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372288/Interior_partition_walls_service.avif',
      },
      {
        id: 'wall-modifications',
        name: 'Wall Modifications',
        description: 'Opening, relocating or reconfiguring walls for open-concept living.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372287/Wall_modifications_service.jpg',
      },
      {
        id: 'subfloor-installation-repairs',
        name: 'Subfloor Installation & Repairs',
        description: 'Solid, level subfloor replacement and repair before any finish flooring.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372286/Subfloor_installation_repairs_service.jpg',
      },
      {
        id: 'structural-wood-repairs',
        name: 'Structural Wood Repairs',
        description: 'Framed repairs performed within applicable licensing and permit requirements.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372285/Structural_wood_repairs_service.jpg',
      },
      {
        id: 'custom-wood-construction',
        name: 'Custom Wood Construction',
        description: 'Custom pergolas, feature walls, shelving and one-of-a-kind wood builds.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372285/Custom_wood_construction_service.jpg',
      },
    ],
  },
  {
    id: 'drywall-painting',
    name: 'Drywall & Painting',
    description: 'Smooth walls, flawless prep and premium paint finishes inside and out.',
    image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372285/Drywall_installation_service.jpg',
    services: [
      {
        id: 'drywall-installation',
        name: 'Drywall Installation',
        description: 'New drywall hanging for walls and ceilings, hung tight and to code.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372285/Drywall_installation_service.jpg',
      },
      {
        id: 'drywall-finishing-repairs',
        name: 'Drywall Finishing & Repairs',
        description: 'Seamless taping, mudding, texture matching and hole repairs.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372284/Drywall_finishing_repairs_servcie.jpg',
      },
      {
        id: 'interior-painting',
        name: 'Interior Painting',
        description: 'Precision interior paint finishes with professional prep work.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372282/Interior_painting_service.jpg',
      },
      {
        id: 'exterior-painting',
        name: 'Exterior Painting',
        description: 'Durable, weather-ready exterior coatings with clean lines.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372282/Exterior_painting_service.jpg',
      },
      {
        id: 'trim-doors-cabinet-painting',
        name: 'Trim, Doors & Cabinet Painting',
        description: 'Smooth, furniture-grade finishes on trim, doors and cabinets.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372282/Trim_doors_cabinet_painting_service.jpg',
      },
      {
        id: 'wall-and-ceiling-repairs',
        name: 'Wall and Ceiling Repairs',
        description: 'Water damage, cracks and holes patched, blended and repainted.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372281/Wall_and_ceiling_repairs_service.webp',
      },
    ],
  },
  {
    id: 'property-maintenance-repairs',
    name: 'Property Maintenance & Repairs',
    description: 'Reliable repairs and turn-ready improvements for homes and rentals.',
    image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372281/Rental_property_repairs_servcie.jpg',
    services: [
      {
        id: 'rental-property-repairs',
        name: 'Rental Property Repairs',
        description: 'Fast, cost-effective repairs that keep tenants happy and units rentable.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372281/Rental_property_repairs_servcie.jpg',
      },
      {
        id: 'rental-turnover-renovations',
        name: 'Rental Turnover Renovations',
        description: 'Between-tenant turnovers refreshed and back on the market faster.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372281/Rental_turnover_renovations_service.webp',
      },
      {
        id: 'general-residential-repairs',
        name: 'General Residential Repairs',
        description: 'Honey-do lists and around-the-house fixes handled in one visit.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372280/General_residential_repairs_service.jpg',
      },
      {
        id: 'wood-rot-replacement',
        name: 'Wood Rot Replacement',
        description: 'Rot-cut out, matched and replaced — protected against recurrence.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372247/Wood_rot_replacement_servcie.jpg',
      },
      {
        id: 'punch-list-completion',
        name: 'Punch-List Completion',
        description: 'Remaining items from any project closed out properly and on schedule.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372203/Punch-list_completion.png',
      },
      {
        id: 'pre-sale-property-improvements',
        name: 'Pre-Sale Property Improvements',
        description: 'High-ROI updates that make your home show and sell better.',
        image: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793372199/Pre-sale_property_improvements_service.jpg',
      },
    ],
  },
];

export const serviceOptions = serviceCategories.flatMap((category) => category.services);
