import lakeside from "@/assets/hero-lakeside.jpg";
import clubhouse from "@/assets/project-clubhouse.jpg";
import villas from "@/assets/project-villas.jpg";
import tower from "@/assets/project-tower.jpg";
import interior from "@/assets/interior-ivory.jpg";

export type PropertyType = "Apartments" | "Villas" | "Row Houses" | "Plots";
export type ProjectStatus = "Under Construction" | "Ready to Move" | "New Launch";

export type AmenityCategory =
  "Clubhouse & Leisure" | "Wellness & Sports" | "Nature & Outdoors" | "Community & Smart Living";

export type AmenityItem = {
  title: string;
  category: AmenityCategory;
  description: string;
  image: string;
  badge?: string;
  features?: string[];
};

export type GalleryCategory = "All" | "Architecture" | "Interiors" | "Clubhouse" | "Aerial & Views";

export type GalleryItem = {
  src: string;
  title: string;
  category: "Architecture" | "Interiors" | "Clubhouse" | "Aerial & Views";
  tag?: string;
};

export type UnitPlanItem = {
  type: string;
  title: string;
  bedrooms: string;
  bathrooms: string;
  balconies: string;
  carpetArea: string;
  superBuiltUpArea: string;
  efficiency: string;
  facing: string;
  price: string;
  image: string;
  description: string;
  dimensions: { room: string; size: string }[];
  keyFeatures: string[];
};

export type MasterPlanData = {
  image: string;
  totalAcreage: string;
  openSpaceRatio: string;
  towersCount: string;
  carpetEfficiency: string;
  zones: { id: number; title: string; category: string; description: string }[];
};

export type ConnectivityCategory = {
  category: "Transit & Metro" | "Tech Parks & Hubs" | "Highways & Airport" | "Schools & Hospitals";
  items: { place: string; distance: string; travelTime: string; highlight?: string }[];
};

export type MapData = {
  embedUrl: string;
  googleMapsUrl: string;
  address: string;
  landmark: string;
  coordinates: { lat: number; lng: number };
};

export type Project = {
  slug: string;
  name: string;
  developer: string;
  location: string;
  city: string;
  propertyType: PropertyType;
  configuration: string;
  sizeRange: string;
  priceFrom: string;
  units: string;
  landArea: string;
  status: ProjectStatus;
  possession: string;
  rera: string;
  image: string;
  gallery: string[];
  galleryItems: GalleryItem[];
  tagline: string;
  summary: string;
  description: string[];
  highlights: string[];
  amenities: string[];
  visualAmenities: AmenityItem[];
  masterPlan: MasterPlanData;
  unitPlans: UnitPlanItem[];
  unitMix: { type: string; size: string; price: string }[];
  connectivity: { place: string; distance: string }[];
  categorizedConnectivity: ConnectivityCategory[];
  mapData: MapData;
};

export const projects: Project[] = [
  {
    slug: "mizumi-reserve",
    name: "Mizumi Reserve",
    developer: "Naverah Signature",
    location: "Kudlu, Off Hosur Road",
    city: "Bengaluru",
    propertyType: "Apartments",
    configuration: "3 & 4 BHK Apartments",
    sizeRange: "1,860 – 2,940 sq.ft",
    priceFrom: "₹2.19 Cr",
    units: "612 units",
    landArea: "9.4 acres",
    status: "Under Construction",
    possession: "Dec 2028",
    rera: "PRM/KA/RERA/1251/446/PR/240118/006512",
    image: lakeside,
    gallery: [lakeside, interior, clubhouse, tower, villas],
    galleryItems: [
      {
        src: lakeside,
        title: "Twin-Lake Waterfront Facade",
        category: "Architecture",
        tag: "Shot at Location",
      },
      {
        src: interior,
        title: "Grand Living & Dining with Double Balcony",
        category: "Interiors",
        tag: "Show Suite",
      },
      {
        src: clubhouse,
        title: "63,000 sq.ft Lakefront Clubhouse & Lounge",
        category: "Clubhouse",
        tag: "Amenity",
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        title: "Heated Infinity Edge Pool at Twilight",
        category: "Clubhouse",
        tag: "Signature Feature",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        title: "Master Suite with Panoramic Lake Vista",
        category: "Interiors",
        tag: "Interiors",
      },
      {
        src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        title: "Aerially Staggered High-Rise Towers",
        category: "Aerial & Views",
        tag: "Architectural Layout",
      },
      {
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        title: "State-of-the-Art Dual-Floor Gym",
        category: "Clubhouse",
        tag: "Wellness",
      },
      {
        src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
        title: "Lakeside Sunset Viewing Promenade",
        category: "Aerial & Views",
        tag: "Landscape",
      },
    ],
    tagline: "Lakeside living between two natural waterbodies",
    summary:
      "Curated 3 & 4 BHK residences framed by two lakes, a 63,000 sq.ft clubhouse and 77% open space.",
    description: [
      "Mizumi Reserve sits between two protected lakes, and the masterplan is built around that fact. Towers are set back and staggered so that every home opens to water or landscape rather than to the next balcony.",
      "Homes are planned for ~75% carpet efficiency with deep living balconies, cross ventilation in every bedroom and a service utility separated from the kitchen — the details that decide how a home actually lives after year three.",
      "Designed with sustainable rainwater management, zero vehicular movement on the landscaped ground level, and an uninterrupted 1.2 km perimeter jogging track around the water's edge.",
    ],
    highlights: [
      "~63,000 sq.ft grand lakeside clubhouse",
      "~77% open space across 9.4 acres of landscaped greens",
      "~75% carpet area efficiency with Vaastu-compliant designs",
      "Deep 8-foot living balconies in every apartment",
      "Twin-lake frontage with private wooden boardwalk & walking trail",
      "Zero vehicle movement on ground level — 100% podium parked",
      "Floor-to-ceiling glass fenestrations with acoustic double glazing",
      "3-tier biometric access & 24/7 peripheral CCTV surveillance",
    ],
    amenities: [
      "Infinity pool",
      "Clubhouse",
      "Fully-equipped gym",
      "Indoor badminton",
      "Yoga & meditation deck",
      "Kids' play zone",
      "Amphitheatre",
      "Co-working lounge",
      "Pet park",
      "EV charging bays",
    ],
    visualAmenities: [
      {
        title: "63,000 sq.ft Grand Clubhouse",
        category: "Clubhouse & Leisure",
        description:
          "Triple-height arrival atrium, private screening theater, banquet hall, library café, and bespoke cigar lounge.",
        image: clubhouse,
        badge: "Signature Landmark",
        features: ["Banqueting for 250+", "Private Cinema", "Concierge Desk"],
      },
      {
        title: "Lake-Facing Infinity Lap Pool",
        category: "Wellness & Sports",
        description:
          "50-meter temperature-regulated infinity pool that blends seamlessly into the Kudlu lake horizon with sunken cabanas.",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        badge: "50m Olympic Length",
        features: ["Temperature-Controlled", "Toddler Splash Pool", "Sunken Cabanas"],
      },
      {
        title: "Multi-Tier Wellness Gymnasium",
        category: "Wellness & Sports",
        description:
          "Equipped by LifeFitness & Technogym with dedicated spinning studio, functional CrossFit ring, and pilates reformers.",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        badge: "LifeFitness Certified",
        features: ["CrossFit Arena", "Pilates Reformers", "Steam & Sauna Suites"],
      },
      {
        title: "Double-Height Indoor Sports Arena",
        category: "Wellness & Sports",
        description:
          "Wooden-sprung indoor badminton courts, glass-back squash court, table tennis lounge, and indoor golf simulator.",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        badge: "BWF Compliant Court",
        features: ["2 BWF Badminton Courts", "Squash Court", "Golf Simulator"],
      },
      {
        title: "1.2 km Lakefront Promenade & Zen Deck",
        category: "Nature & Outdoors",
        description:
          "Perimeter reflexology trails, floating yoga decks, sensory herb gardens, and shaded gazebos over the water body.",
        image:
          "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
        badge: "77% Green Cover",
        features: ["1.2 km Waterfront Track", "Lotus Reflection Ponds", "Meditation Pavilion"],
      },
      {
        title: "Executive Business Lounge & Co-Work",
        category: "Community & Smart Living",
        description:
          "High-speed fiber connectivity, private soundproof phone pods, boardroom conference suites, and barista counter.",
        image: interior,
        badge: "Smart Work Hub",
        features: ["Conference Rooms", "Acoustic Phone Pods", "Hi-Speed Fiber"],
      },
    ],
    masterPlan: {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      totalAcreage: "9.4 Acres",
      openSpaceRatio: "77% Open Green Space",
      towersCount: "6 Iconic Towers (G+28 Floors)",
      carpetEfficiency: "~75% Usable Carpet Efficiency",
      zones: [
        {
          id: 1,
          title: "Grand Gateway & Security Plaza",
          category: "Entry",
          description: "Water cascades with dual boom barriers and visitor registration lounge.",
        },
        {
          id: 2,
          title: "Lakeview Residential Towers (A to F)",
          category: "Residences",
          description: "Staggered orientation ensuring 100% lake or landscape vistas.",
        },
        {
          id: 3,
          title: "The Grand 63,000 sq.ft Clubhouse",
          category: "Clubhouse",
          description: "Multi-level leisure complex fronting the southern lake promenade.",
        },
        {
          id: 4,
          title: "50m Infinity Pool & Sunken Deck",
          category: "Aquatics",
          description: "Olympic length temperature-regulated pool and aqua fitness zone.",
        },
        {
          id: 5,
          title: "Central Amphitheatre & Event Lawn",
          category: "Culture",
          description: "Open-air theatre seating 300 guests with manicured party lawns.",
        },
        {
          id: 6,
          title: "Multisport Field & Tennis Pavilion",
          category: "Sports",
          description: "Floodlit synthetic tennis court and half-basketball court.",
        },
        {
          id: 7,
          title: "1.2 km Waterfront Promenade",
          category: "Nature",
          description: "Biophilic running trail with native flora and bio-retention swales.",
        },
        {
          id: 8,
          title: "Pet Play Park & Children's Forest Trail",
          category: "Recreation",
          description: "Enclosed pet agility zone and natural wood adventure play.",
        },
      ],
    },
    unitPlans: [
      {
        type: "3 BHK Classic",
        title: "3 Bedroom Luxury Suite",
        bedrooms: "3 Beds",
        bathrooms: "3 Baths",
        balconies: "2 Balconies",
        carpetArea: "1,395 sq.ft",
        superBuiltUpArea: "1,860 sq.ft",
        efficiency: "75.0% Carpet Efficiency",
        facing: "East / North-East Facing (Vaastu)",
        price: "₹2.19 Cr onwards",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        description:
          "Optimal family living with spacious foyer, large dining hall opening to a scenic sunset balcony, and separated utility area.",
        dimensions: [
          { room: "Living & Dining", size: "22'4\" × 14'6\"" },
          { room: "Master Bedroom", size: "15'0\" × 12'8\"" },
          { room: "Bedroom 02", size: "13'6\" × 11'4\"" },
          { room: "Bedroom 03", size: "12'0\" × 11'0\"" },
          { room: "Modular Kitchen & Utility", size: "12'6\" × 8'2\"" },
          { room: "Main Balcony", size: "14'0\" × 6'0\"" },
        ],
        keyFeatures: [
          "Zero dead-space layout with separated foyer",
          "Deep 6-foot wide sit-out balcony opening to lake view",
          "Dedicated utility & wet kitchen with plumbing ready",
          "Double acoustic glazed sound-dampening windows",
        ],
      },
      {
        type: "3 BHK + Study",
        title: "3 Bedroom Residence with Executive Study",
        bedrooms: "3 Beds + Study",
        bathrooms: "3 Baths + Powder",
        balconies: "2 Balconies",
        carpetArea: "1,610 sq.ft",
        superBuiltUpArea: "2,140 sq.ft",
        efficiency: "75.2% Carpet Efficiency",
        facing: "North-East / East Facing",
        price: "₹2.54 Cr onwards",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
        description:
          "Curated for modern professionals with an executive home office, dual master layout, and walk-in wardrobe dressing bays.",
        dimensions: [
          { room: "Living & Formal Dining", size: "25'6\" × 15'0\"" },
          { room: "Executive Study / Home Office", size: "11'0\" × 9'6\"" },
          { room: "Master Bedroom Suite", size: "16'6\" × 13'0\"" },
          { room: "Bedroom 02 with En-suite", size: "14'0\" × 12'0\"" },
          { room: "Bedroom 03", size: "12'6\" × 11'6\"" },
          { room: "Grand Balcony", size: "16'0\" × 6'6\"" },
        ],
        keyFeatures: [
          "Private quiet study room perfect for hybrid work",
          "Walk-in wardrobe zone in primary master bedroom",
          "Corner apartment location with 3-side cross ventilation",
          "High 10-foot 6-inch finished ceiling heights",
        ],
      },
      {
        type: "4 BHK Grand",
        title: "4 Bedroom Sovereign Residence",
        bedrooms: "4 Beds + Maid Room",
        bathrooms: "4 Baths + Powder + Maid Bath",
        balconies: "3 Balconies",
        carpetArea: "1,980 sq.ft",
        superBuiltUpArea: "2,610 sq.ft",
        efficiency: "75.8% Carpet Efficiency",
        facing: "East / North Corner (100% Vaastu)",
        price: "₹3.08 Cr onwards",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        description:
          "An expansive corner layout featuring a double living area, separate maid's suite with independent service entrance, and 180-degree panoramic lake frontage.",
        dimensions: [
          { room: "Double Living & Dining Salon", size: "29'4\" × 17'8\"" },
          { room: "Master Grand Suite with Lounge", size: "18'0\" × 14'6\"" },
          { room: "Junior Suite 02", size: "15'0\" × 12'6\"" },
          { room: "Bedroom 03", size: "14'0\" × 12'0\"" },
          { room: "Bedroom 04 / Guest Room", size: "13'0\" × 11'6\"" },
          { room: "Maid's Quarters & Toilet", size: "9'0\" × 6'6\"" },
        ],
        keyFeatures: [
          "Separate private service entrance for domestic help and deliveries",
          "Expansive 20-foot wide sunrise deck over the lake",
          "Master en-suite with free-standing bathtub provision",
          "Only 2 residences per floor elevator core",
        ],
      },
      {
        type: "4 BHK Royal Penthouse",
        title: "Duplex Sky Penthouse with Private Terrace",
        bedrooms: "4 Beds + Lounge + Maid Suite",
        bathrooms: "5 Baths + Powder",
        balconies: "Wrap-around Sky Terrace",
        carpetArea: "2,260 sq.ft",
        superBuiltUpArea: "2,940 sq.ft",
        efficiency: "76.8% Carpet Efficiency",
        facing: "Panoramic 270° Vista (North-East)",
        price: "On Request (Starting ₹3.75 Cr)",
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
        description:
          "The pinnacle of high-rise living with a 650 sq.ft private rooftop terrace, plunge pool provision, and double-height living room windows.",
        dimensions: [
          { room: "Double-Height Great Hall", size: "32'0\" × 18'6\"" },
          { room: "Sky Terrace & Lounge", size: "26'0\" × 14'0\"" },
          { room: "Presidential Master Suite", size: "20'0\" × 16'0\"" },
          { room: "Family Entertainment Den", size: "16'0\" × 13'6\"" },
          { room: "Guest Suites (x3)", size: "15'0\" × 12'6\" each" },
        ],
        keyFeatures: [
          "Private open-to-sky terrace with plunge pool option",
          "Soaring 21-foot double-height living ceiling",
          "Direct access private elevator lobby",
          "3 dedicated covered basement parking bays",
        ],
      },
    ],
    unitMix: [
      { type: "3 BHK", size: "1,860 sq.ft", price: "₹2.19 Cr onwards" },
      { type: "3 BHK + Study", size: "2,140 sq.ft", price: "₹2.54 Cr onwards" },
      { type: "4 BHK", size: "2,610 sq.ft", price: "₹3.08 Cr onwards" },
      { type: "4 BHK Grand", size: "2,940 sq.ft", price: "On request" },
    ],
    connectivity: [
      { place: "HSR Layout", distance: "20 mins" },
      { place: "Electronic City", distance: "15 mins" },
      { place: "Koramangala", distance: "25 mins" },
      { place: "Kempegowda Airport", distance: "70 mins" },
    ],
    categorizedConnectivity: [
      {
        category: "Tech Parks & Hubs",
        items: [
          {
            place: "Electronic City Phase 1 & 2",
            distance: "7.2 km",
            travelTime: "15 mins",
            highlight: "Infosys, Wipro, TCS campuses",
          },
          {
            place: "HSR Layout Sector 1–7",
            distance: "8.5 km",
            travelTime: "20 mins",
            highlight: "Bangalore startup capital",
          },
          {
            place: "Koramangala Commercial Hub",
            distance: "11.0 km",
            travelTime: "25 mins",
            highlight: "Venture hubs & dining",
          },
          {
            place: "RGA Tech Park & Sarjapur Hub",
            distance: "9.8 km",
            travelTime: "22 mins",
            highlight: "Capgemini, Cognizant",
          },
        ],
      },
      {
        category: "Transit & Metro",
        items: [
          {
            place: "Singasandra Metro Station (Yellow Line)",
            distance: "3.2 km",
            travelTime: "8 mins",
            highlight: "Direct connection to Silk Board",
          },
          {
            place: "Hosa Road Metro Station",
            distance: "3.8 km",
            travelTime: "9 mins",
            highlight: "Rapid transit to South Bangalore",
          },
          {
            place: "Hosur Road Elevated Expressway",
            distance: "2.5 km",
            travelTime: "6 mins",
            highlight: "Signal-free transit to city centre",
          },
        ],
      },
      {
        category: "Highways & Airport",
        items: [
          {
            place: "NICE Ring Road Junction",
            distance: "6.5 km",
            travelTime: "12 mins",
            highlight: "Bypass to Bannerghatta & Tumkur",
          },
          {
            place: "Kempegowda International Airport (BLR)",
            distance: "48 km",
            travelTime: "65-75 mins",
            highlight: "Via Outer Ring Road / Expressway",
          },
        ],
      },
      {
        category: "Schools & Hospitals",
        items: [
          {
            place: "Delhi Public School (DPS) Bangalore South",
            distance: "5.4 km",
            travelTime: "14 mins",
          },
          {
            place: "Primus Public School & Prakriya Green Wisdom",
            distance: "6.8 km",
            travelTime: "16 mins",
          },
          {
            place: "Narayana Health City & Mazumdar Shaw",
            distance: "9.2 km",
            travelTime: "18 mins",
          },
          {
            place: "St. John's Medical College & Hospital",
            distance: "11.5 km",
            travelTime: "25 mins",
          },
        ],
      },
    ],
    mapData: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.379234851214!2d77.65342937588362!3d12.883307587424103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b73b22cf33%3A0x6a1dd15c2b8ba370!2sKudlu%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      googleMapsUrl: "https://maps.google.com/?q=Kudlu+Off+Hosur+Road+Bengaluru",
      address: "Kudlu Village, Off Hosur Main Road, Near HSR Extension, Bengaluru 560068",
      landmark: "Adjacent to Kudlu Chikka Kere & Hosa Road Junction",
      coordinates: { lat: 12.8833, lng: 77.6534 },
    },
  },
  {
    slug: "naverah-one-tower",
    name: "Naverah One",
    developer: "Naverah Assets",
    location: "Yelahanka, Bellary Road",
    city: "Bengaluru",
    propertyType: "Apartments",
    configuration: "2 & 3 BHK Apartments",
    sizeRange: "1,160 – 1,740 sq.ft",
    priceFrom: "₹1.09 Cr",
    units: "1,200 units",
    landArea: "6.2 acres",
    status: "New Launch",
    possession: "Jun 2029",
    rera: "PRM/KA/RERA/1250/303/PR/250412/007841",
    image: tower,
    gallery: [tower, interior, clubhouse, lakeside],
    galleryItems: [
      {
        src: tower,
        title: "Modern Geometric Skyline Towers",
        category: "Architecture",
        tag: "Airport Corridor",
      },
      {
        src: interior,
        title: "Minimalist Ivory & Champagne Interiors",
        category: "Interiors",
        tag: "Sample Residence",
      },
      {
        src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        title: "Sky Decks on Alternate Floors",
        category: "Architecture",
        tag: "Biophilic Design",
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        title: "Rooftop Sky Pool with Cloud Vistas",
        category: "Clubhouse",
        tag: "Rooftop Oasis",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        title: "Spacious Living Room with Natural Sunlight",
        category: "Interiors",
        tag: "Living",
      },
      {
        src: clubhouse,
        title: "Club One Social & Co-Working Hub",
        category: "Clubhouse",
        tag: "Lifestyle",
      },
    ],
    tagline: "Skyline homes on the high-growth airport corridor",
    summary:
      "Efficient 2 & 3 BHK homes on the airport corridor, with sky decks on alternate floors and podium landscape.",
    description: [
      "Naverah One is planned for the buyer who wants airport-corridor appreciation without giving up daily liveability. Two towers, wide corridors, and only four homes per core.",
      "Sky decks on alternate floors give residents shared open space at height, and the podium keeps all parking below the landscape level.",
      "With direct access to the 10-lane Bellary Road expressway and the upcoming Blue Line Metro station within 6 minutes, connectivity to Manyata and Kempegowda Airport is seamless.",
    ],
    highlights: [
      "Only four homes per core — no common walls between living rooms",
      "Cantilevered sky decks on alternate floors for communal unwinding",
      "Fully podium-parked: 100% vehicle-free ground landscape",
      "6 minutes to upcoming Blue Line Yelahanka Metro Station",
      "12 minutes to Kempegowda Airport expressway corridor",
      "100% Vaastu-compliant layouts across all towers",
      "40,000 sq.ft multi-level clubhouse with rooftop observatory",
    ],
    amenities: [
      "Rooftop infinity pool",
      "Sky lounge",
      "Gym & spin studio",
      "Cricket practice net",
      "Toddler zone",
      "Library",
      "Multipurpose hall",
      "24×7 security",
    ],
    visualAmenities: [
      {
        title: "Rooftop Infinity Sky Pool",
        category: "Clubhouse & Leisure",
        description:
          "Perched on the 32nd level overlooking the Yelahanka lake basin and northern Bangalore horizon with private cabanas.",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        badge: "32nd Floor Sky Pool",
        features: ["Sunset Deck", "Heated Water", "Sky Bar Counter"],
      },
      {
        title: "Sky Decks on Alternate Floors",
        category: "Nature & Outdoors",
        description:
          "Double-height cantilevered vertical gardens where neighbors can gather for yoga, reading, and evening coffee.",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        badge: "Architectural First",
        features: ["Vertical Herb Gardens", "Seating Nooks", "Wi-Fi Enabled"],
      },
      {
        title: "Professional Spin Studio & Gym",
        category: "Wellness & Sports",
        description:
          "Cardio zones, strength conditioning machines, and virtual spin classes with personal training monitors.",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        badge: "Fitness First",
        features: ["Spinning Bikes", "Free Weights", "Locker & Shower Suites"],
      },
      {
        title: "Full-Length Box Cricket & Tennis",
        category: "Wellness & Sports",
        description:
          "All-weather synthetic turf cricket net with automated bowling machine and multipurpose court.",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        badge: "Outdoor Sports",
        features: ["Bowling Machine", "LED Floodlights", "Synthetic Turf"],
      },
    ],
    masterPlan: {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      totalAcreage: "6.2 Acres",
      openSpaceRatio: "74% Open Area",
      towersCount: "2 High-Rise Towers (G+32)",
      carpetEfficiency: "74.8% Usable Carpet Area",
      zones: [
        {
          id: 1,
          title: "Grand Boulevard & Water Features",
          category: "Entry",
          description: "Tree-lined drop-off avenue with security turnstiles.",
        },
        {
          id: 2,
          title: "Tower Alpha & Tower Beta",
          category: "Residences",
          description: "Two parallel aerodynamic towers designed for zero solar heat trap.",
        },
        {
          id: 3,
          title: "Club One Central Hub",
          category: "Clubhouse",
          description: "40,000 sq.ft clubhouse with squash, spa, and banquet.",
        },
        {
          id: 4,
          title: "Central Podium Greens",
          category: "Landscape",
          description: "Raised podium gardens with walking paths and seating gazebos.",
        },
        {
          id: 5,
          title: "Children's Splash & Sand Play",
          category: "Kids",
          description: "Shaded play courts with impact-absorbing rubberized flooring.",
        },
        {
          id: 6,
          title: "Sports Complex & Cricket Arena",
          category: "Sports",
          description: "Corner sports park separated from residential quiet zones.",
        },
      ],
    },
    unitPlans: [
      {
        type: "2 BHK Compact",
        title: "2 Bedroom Smart Residence",
        bedrooms: "2 Beds",
        bathrooms: "2 Baths",
        balconies: "1 Balcony",
        carpetArea: "865 sq.ft",
        superBuiltUpArea: "1,160 sq.ft",
        efficiency: "74.6% Carpet Efficiency",
        facing: "East Facing",
        price: "₹1.09 Cr onwards",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        description:
          "Intelligently designed for young couples and nuclear families with zero hallway wastage and optimal cross ventilation.",
        dimensions: [
          { room: "Living & Dining", size: "18'0\" × 12'6\"" },
          { room: "Master Bedroom", size: "13'0\" × 11'6\"" },
          { room: "Bedroom 02", size: "11'6\" × 10'6\"" },
          { room: "Kitchen & Utility", size: "10'0\" × 7'6\"" },
          { room: "Balcony", size: "10'0\" × 5'0\"" },
        ],
        keyFeatures: [
          "Zero square foot wasted in long corridors",
          "Wide living room balcony overlooking podium park",
          "Dedicated utility sink and washing machine niche",
        ],
      },
      {
        type: "2 BHK Large",
        title: "2 Bedroom Luxury with Dining Deck",
        bedrooms: "2 Beds + Utility Court",
        bathrooms: "2 Baths",
        balconies: "2 Balconies",
        carpetArea: "1,005 sq.ft",
        superBuiltUpArea: "1,340 sq.ft",
        efficiency: "75.0% Carpet Efficiency",
        facing: "North-East Facing",
        price: "₹1.26 Cr onwards",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
        description:
          "Features a dedicated dining alcove, larger second bedroom, and private balcony attached to the master suite.",
        dimensions: [
          { room: "Living Room", size: "16'0\" × 13'0\"" },
          { room: "Formal Dining Alcove", size: "11'0\" × 9'6\"" },
          { room: "Master Suite with Balcony", size: "14'0\" × 12'0\"" },
          { room: "Bedroom 02", size: "12'6\" × 11'0\"" },
          { room: "Kitchen", size: "11'0\" × 8'0\"" },
        ],
        keyFeatures: [
          "Dual balconies for maximum natural airflow",
          "Separate formal dining space",
          "Large master suite with wooden flooring finish",
        ],
      },
      {
        type: "3 BHK Grand",
        title: "3 Bedroom Corner Horizon Suite",
        bedrooms: "3 Beds",
        bathrooms: "3 Baths",
        balconies: "2 Balconies",
        carpetArea: "1,310 sq.ft",
        superBuiltUpArea: "1,740 sq.ft",
        efficiency: "75.3% Carpet Efficiency",
        facing: "East / North Corner",
        price: "₹1.68 Cr onwards",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        description:
          "Corner apartment featuring 3 large bedrooms, independent foyer entrance, and unbroken vistas towards the Yelahanka airfield and green belt.",
        dimensions: [
          { room: "Foyer & Entrance", size: "7'6\" × 5'0\"" },
          { room: "Living & Dining Room", size: "22'0\" × 14'0\"" },
          { room: "Master Bedroom Suite", size: "15'6\" × 12'6\"" },
          { room: "Bedroom 02", size: "13'0\" × 11'6\"" },
          { room: "Bedroom 03", size: "12'0\" × 11'0\"" },
          { room: "Living Balcony", size: "13'6\" × 6'0\"" },
        ],
        keyFeatures: [
          "Corner placement guaranteeing full privacy",
          "Three-side natural ventilation and sunlight",
          "Dedicated master en-suite with glass shower partition",
        ],
      },
    ],
    unitMix: [
      { type: "2 BHK", size: "1,160 sq.ft", price: "₹1.09 Cr onwards" },
      { type: "2 BHK Large", size: "1,340 sq.ft", price: "₹1.26 Cr onwards" },
      { type: "3 BHK", size: "1,740 sq.ft", price: "₹1.68 Cr onwards" },
    ],
    connectivity: [
      { place: "Kempegowda Airport", distance: "25 mins" },
      { place: "Manyata Tech Park", distance: "22 mins" },
      { place: "Hebbal Flyover", distance: "18 mins" },
      { place: "Metro (Yelahanka)", distance: "6 mins" },
    ],
    categorizedConnectivity: [
      {
        category: "Highways & Airport",
        items: [
          {
            place: "Kempegowda International Airport (BLR)",
            distance: "18 km",
            travelTime: "22-25 mins",
            highlight: "Direct signal-free Bellary Road expressway",
          },
          {
            place: "Hebbal Flyover & Outer Ring Road",
            distance: "14 km",
            travelTime: "18 mins",
            highlight: "Access to Central Bengaluru",
          },
        ],
      },
      {
        category: "Transit & Metro",
        items: [
          {
            place: "Upcoming Blue Line Yelahanka Metro",
            distance: "2.5 km",
            travelTime: "6 mins",
            highlight: "Direct airport metro line",
          },
          {
            place: "Yelahanka Railway Junction",
            distance: "4.2 km",
            travelTime: "10 mins",
            highlight: "Suburban railway connectivity",
          },
        ],
      },
      {
        category: "Tech Parks & Hubs",
        items: [
          {
            place: "Manyata Tech Park, Nagavara",
            distance: "14 km",
            travelTime: "22 mins",
            highlight: "100,000+ tech workforce",
          },
          {
            place: "KIADB Aerospace & IT Park",
            distance: "16 km",
            travelTime: "20 mins",
            highlight: "Boeing, Airbus, Shell campuses",
          },
        ],
      },
      {
        category: "Schools & Hospitals",
        items: [
          { place: "Canadian International School", distance: "4.8 km", travelTime: "10 mins" },
          {
            place: "Ryan International & Vidyashilp Academy",
            distance: "5.5 km",
            travelTime: "12 mins",
          },
          { place: "Aster CMI Hospital Hebbal", distance: "13 km", travelTime: "18 mins" },
          { place: "Manipal Hospital Doddaballapur Rd", distance: "7.2 km", travelTime: "15 mins" },
        ],
      },
    ],
    mapData: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0594326574345!2d77.5936854758872!3d13.100918087226687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18f8c8535a2d%3A0xe549925fa7761002!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      googleMapsUrl: "https://maps.google.com/?q=Yelahanka+Bellary+Road+Bengaluru",
      address: "Bellary Road, Near Yelahanka Bypass, Bengaluru North, Karnataka 560064",
      landmark: "Opposite Kogilu Cross, On Main Bellary Expressway",
      coordinates: { lat: 13.1009, lng: 77.5937 },
    },
  },
  {
    slug: "the-ivory-villas",
    name: "The Ivory Villas",
    developer: "Naverah Signature",
    location: "Sarjapur Road",
    city: "Bengaluru",
    propertyType: "Villas",
    configuration: "4 BHK Triplex Villas",
    sizeRange: "3,420 – 4,180 sq.ft",
    priceFrom: "₹4.65 Cr",
    units: "48 villas",
    landArea: "11 acres",
    status: "Ready to Move",
    possession: "Completed (OC Received)",
    rera: "PRM/KA/RERA/1251/309/PR/220716/005104",
    image: villas,
    gallery: [villas, interior, clubhouse, lakeside],
    galleryItems: [
      {
        src: villas,
        title: "Triplex Villa Architecture with Courtyard",
        category: "Architecture",
        tag: "Shot at Site",
      },
      {
        src: interior,
        title: "Double-Height Living Salon with Kota Stone Floors",
        category: "Interiors",
        tag: "Villa Interior",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        title: "Private Courtyard & Plunge Pool Deck",
        category: "Architecture",
        tag: "Private Luxury",
      },
      {
        src: clubhouse,
        title: "Private Residents-Only Clubhouse Pavilion",
        category: "Clubhouse",
        tag: "Exclusive",
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        title: "25-Meter Heated Lap Pool",
        category: "Clubhouse",
        tag: "Wellness",
      },
      {
        src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
        title: "Avenue of Mature Teak & Gulmohar Trees",
        category: "Aerial & Views",
        tag: "Landscape",
      },
    ],
    tagline: "Forty-eight bespoke villas, one private avenue",
    summary:
      "Ready-to-move triplex villas with private courtyards, plunge pools and a resident-only avenue.",
    description: [
      "Only 48 villas across 11 acres, which means the plot ratio here reads closer to a farmhouse enclave than a typical villa project. Each home is a triplex with a private courtyard at its centre.",
      "Ivory plaster, teak screens and Kota stone floors were chosen to age gracefully in Bengaluru's monsoon. Handover includes landscaped private gardens and fitted designer kitchens.",
      "With Occupancy Certificate (OC) received, you can move in immediately with zero construction gestation risk.",
    ],
    highlights: [
      "Occupancy Certificate (OC) received — immediate possession",
      "Only 48 private residences across 11 lush acres",
      "Triplex architecture centered on an open internal sky-courtyard",
      "Private plunge pool and landscaped Japanese garden option",
      "Dedicated servant quarters with separate service staircase",
      "Sheltered covered parking for 3 luxury SUVs per villa",
      "Solar water heating & rainwater harvesting self-sustaining grid",
    ],
    amenities: [
      "Clubhouse & lounge",
      "Lap pool",
      "Tennis court",
      "Jogging avenue",
      "Organic garden",
      "Guest suites",
      "Gated security",
    ],
    visualAmenities: [
      {
        title: "Boutique Resident Clubhouse",
        category: "Clubhouse & Leisure",
        description:
          "Restricted exclusively to 48 villa owners: private sommelier cellar, banquet dining hall, and resident guest suites.",
        image: clubhouse,
        badge: "Private to 48 Owners",
        features: ["Guest Suites", "Private Dining", "Cigar Lounge"],
      },
      {
        title: "Private Courtyard & Plunge Pool",
        category: "Wellness & Sports",
        description:
          "Each villa features a central open sky courtyard and ground-floor heated plunge pool enclosed in natural teak louvers.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        badge: "In-Villa Feature",
        features: ["Sky Open Courtyard", "Plunge Pool", "Kota Stone Paving"],
      },
      {
        title: "Championship Tennis Court",
        category: "Wellness & Sports",
        description:
          "Professional ITF-regulation acrylic hard tennis court with night floodlights and coaching pavilion.",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        badge: "ITF Regulation",
        features: ["Night Floodlights", "Acrylic Surface", "Spectator Terrace"],
      },
      {
        title: "Community Organic Garden & Orchard",
        category: "Nature & Outdoors",
        description:
          "Over 300 fruit-bearing trees, seasonal herb gardens, and an on-site organic composting conservatory.",
        image:
          "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
        badge: "Farm-to-Table",
        features: ["Fruit Orchard", "Herb Beds", "Composting Unit"],
      },
    ],
    masterPlan: {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      totalAcreage: "11 Acres",
      openSpaceRatio: "82% Farmhouse Density Open Space",
      towersCount: "48 Individual Triplex Villas",
      carpetEfficiency: "85% Built-to-Carpet Efficiency",
      zones: [
        {
          id: 1,
          title: "Grand Heritage Entrance & Gatehouse",
          category: "Entry",
          description: "Cobblestone boulevard guarded by 24/7 manned security.",
        },
        {
          id: 2,
          title: "The Central Teak Avenue",
          category: "Avenue",
          description: "Tree-canopied main spine connecting all villa cul-de-sacs.",
        },
        {
          id: 3,
          title: "The Clubhouse Manor",
          category: "Clubhouse",
          description: "British colonial architectural style manor with heated lap pool.",
        },
        {
          id: 4,
          title: "Villas 01 to 24 (The North Grove)",
          category: "Villas",
          description: "Triplex residences backing into the protected green buffer.",
        },
        {
          id: 5,
          title: "Villas 25 to 48 (The Meadow Villas)",
          category: "Villas",
          description: "Facing the organic farm and championship tennis grounds.",
        },
        {
          id: 6,
          title: "Organic Farm & Reflexology Park",
          category: "Nature",
          description: "Resident communal fruit orchards and butterfly sanctuaries.",
        },
      ],
    },
    unitPlans: [
      {
        type: "4 BHK Triplex Classic",
        title: "Triplex Villa · Type A",
        bedrooms: "4 Bedrooms + Maid Suite",
        bathrooms: "5 Bathrooms",
        balconies: "3 Terraces + Courtyard",
        carpetArea: "2,890 sq.ft",
        superBuiltUpArea: "3,420 sq.ft",
        efficiency: "84.5% Built Efficiency",
        facing: "East Facing Main Entrance",
        price: "₹4.65 Cr onwards",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
        description:
          "Three levels of crafted living: Ground floor formal entertainment with private courtyard, first floor family bedrooms, and top floor sky lounge terrace.",
        dimensions: [
          { room: "Ground Level Living & Dining", size: "28'0\" × 18'0\"" },
          { room: "Central Open Sky Courtyard", size: "14'0\" × 12'0\"" },
          { room: "Master Bedroom Suite (Level 1)", size: "20'0\" × 15'0\"" },
          { room: "Family Lounge (Level 1)", size: "16'0\" × 13'0\"" },
          { room: "Bedroom 02 & 03 (Level 1)", size: "15'0\" × 13'0\" each" },
          { room: "Sky Lounge & Terrace (Level 2)", size: "24'0\" × 16'0\"" },
          { room: "Maid's Room with Toilet", size: "10'0\" × 7'0\"" },
        ],
        keyFeatures: [
          "Private open-to-sky courtyard bringing light to all 3 floors",
          "Top-floor terrace lounge equipped for barbecue and stargazing",
          "3 covered parking bays with EV fast-charger provision",
          "Separate external entrance for domestic staff",
        ],
      },
      {
        type: "4 BHK Signature Corner",
        title: "Corner Manor Villa · Type B",
        bedrooms: "4 Bedrooms + Study + Maid Suite",
        bathrooms: "6 Bathrooms",
        balconies: "4 Terraces + Garden Courtyard",
        carpetArea: "3,480 sq.ft",
        superBuiltUpArea: "4,180 sq.ft",
        efficiency: "83.2% Built Efficiency",
        facing: "North-East Corner (Vaastu Perfect)",
        price: "On Request (Starting ₹5.60 Cr)",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        description:
          "Set on an expansive 4,800 sq.ft plot, this signature corner villa features wrap-around gardens, an in-built plunge pool, private internal elevator shaft, and double-height study.",
        dimensions: [
          { room: "Grand Double-Height Foyer", size: "16'0\" × 12'0\"" },
          { room: "Living Salon & Formal Dining", size: "32'0\" × 20'0\"" },
          { room: "Presidential Master Suite", size: "22'0\" × 17'0\"" },
          { room: "Walk-in Dressing Salon", size: "14'0\" × 10'0\"" },
          { room: "Private Plunge Pool & Deck", size: "20'0\" × 12'0\"" },
          { room: "Rooftop Party Deck", size: "30'0\" × 18'0\"" },
        ],
        keyFeatures: [
          "Private internal pneumatic glass elevator installed",
          "Private in-ground heated plunge pool with filtration plant",
          "Expanded 1,200 sq.ft perimeter lawn with mature trees",
          "Dedicated home cinema hall on the upper level",
        ],
      },
    ],
    unitMix: [
      { type: "4 BHK Triplex", size: "3,420 sq.ft", price: "₹4.65 Cr onwards" },
      { type: "4 BHK Corner", size: "3,880 sq.ft", price: "₹5.30 Cr onwards" },
      { type: "4 BHK Signature", size: "4,180 sq.ft", price: "On request" },
    ],
    connectivity: [
      { place: "Wipro Corporate Office", distance: "12 mins" },
      { place: "Greenwood High School", distance: "8 mins" },
      { place: "Whitefield", distance: "35 mins" },
      { place: "ORR Junction", distance: "20 mins" },
    ],
    categorizedConnectivity: [
      {
        category: "Tech Parks & Hubs",
        items: [
          {
            place: "Wipro Corporate Headquarters, Sarjapur",
            distance: "5.8 km",
            travelTime: "12 mins",
            highlight: "Global headquarters",
          },
          {
            place: "RGA Tech Park & Carmelaram",
            distance: "8.2 km",
            travelTime: "18 mins",
            highlight: "Major tech campus",
          },
          {
            place: "Outer Ring Road (Bellandur / Ecospace)",
            distance: "12 km",
            travelTime: "22 mins",
            highlight: "Prestige Tech Park, Ecoworld",
          },
          {
            place: "Whitefield IT Corridor",
            distance: "16 km",
            travelTime: "35 mins",
            highlight: "ITPL, EPIP Zone",
          },
        ],
      },
      {
        category: "Schools & Hospitals",
        items: [
          {
            place: "Greenwood High International School",
            distance: "3.5 km",
            travelTime: "8 mins",
            highlight: "Ranked #1 ICSE / IB school",
          },
          {
            place: "TISB (The International School Bangalore)",
            distance: "4.2 km",
            travelTime: "10 mins",
            highlight: "Premier international school",
          },
          { place: "Inventure Academy & Oakridge", distance: "5.0 km", travelTime: "12 mins" },
          {
            place: "Manipal Hospital Sarjapur",
            distance: "7.5 km",
            travelTime: "15 mins",
            highlight: "Multi-speciality healthcare",
          },
        ],
      },
      {
        category: "Transit & Metro",
        items: [
          { place: "Carmelaram Railway Station", distance: "7.0 km", travelTime: "14 mins" },
          {
            place: "Upcoming Sarjapur - Hebbal Metro Line",
            distance: "2.0 km",
            travelTime: "5 mins",
            highlight: "Approved Phase 3 corridor",
          },
        ],
      },
      {
        category: "Highways & Airport",
        items: [
          {
            place: "Satellite Town Ring Road (STRR)",
            distance: "8.0 km",
            travelTime: "12 mins",
            highlight: "Direct airport bypass without city traffic",
          },
          { place: "Kempegowda International Airport", distance: "52 km", travelTime: "75 mins" },
        ],
      },
    ],
    mapData: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.702951978255!2d77.7289524758832!3d12.86245108744318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7299a9b749d9%3A0xe62e49c716298539!2sSarjapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      googleMapsUrl: "https://maps.google.com/?q=Sarjapur+Road+Bengaluru",
      address: "Sarjapur Road, Near Greenwood High International, Bengaluru 562125",
      landmark: "Opposite Decathlon Sarjapur & Prestige Smart City Enclave",
      coordinates: { lat: 12.8625, lng: 77.729 },
    },
  },
  {
    slug: "serene-row-houses",
    name: "Serene Row Houses",
    developer: "Naverah Communities",
    location: "Devanahalli",
    city: "Bengaluru",
    propertyType: "Row Houses",
    configuration: "3 BHK Row Houses",
    sizeRange: "2,180 – 2,460 sq.ft",
    priceFrom: "₹2.05 Cr",
    units: "96 homes",
    landArea: "8 acres",
    status: "Under Construction",
    possession: "Mar 2028",
    rera: "PRM/KA/RERA/1250/304/PR/241128/007233",
    image: clubhouse,
    gallery: [clubhouse, villas, interior, lakeside],
    galleryItems: [
      {
        src: clubhouse,
        title: "Pedestrian Spine & Community Clubhouse",
        category: "Clubhouse",
        tag: "Car-Free Living",
      },
      {
        src: villas,
        title: "Contemporary Row House Facade with Terraces",
        category: "Architecture",
        tag: "Architecture",
      },
      {
        src: interior,
        title: "Double-Height Living Volume with Clerestory Windows",
        category: "Interiors",
        tag: "Interior Design",
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        title: "Central Lagoon Pool with Shallow Kids Deck",
        category: "Clubhouse",
        tag: "Pool",
      },
      {
        src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
        title: "Internal Shaded Walking Courts",
        category: "Aerial & Views",
        tag: "Green Spine",
      },
    ],
    tagline: "Courtyard row houses near the booming airport aerospace belt",
    summary:
      "Ninety-six 3 BHK row houses arranged around shaded courts and a car-free internal spine.",
    description: [
      "Serene Row Houses keeps cars to the perimeter and gives the interior of the community back to residents — a car-free spine connects every cluster to the clubhouse on foot.",
      "Each home gets a double-height living volume, a private terrace and a rear utility court, so the family space never has to double as a service area.",
      "Positioned within 10 minutes of KIADB Aerospace Park and 18 minutes to the international airport.",
    ],
    highlights: [
      "100% car-free internal residential spine",
      "Double-height living room volume in every single home",
      "Private open terrace garden on the upper floor",
      "Six interconnected pocket parks and community orchards",
      "Rainwater harvesting & 100% STP treated water recycling",
      "10 minutes to KIADB Aerospace SEZ (Boeing, Collins Aerospace)",
    ],
    amenities: [
      "Clubhouse",
      "Swimming pool",
      "Gym",
      "Amphitheatre",
      "Cycling loop",
      "Kids' play court",
      "Convenience store",
    ],
    visualAmenities: [
      {
        title: "Central Pedestrian Clubhouse",
        category: "Clubhouse & Leisure",
        description:
          "20,000 sq.ft lifestyle pavilion set at the heart of the car-free green walkway with terrace cafe.",
        image: clubhouse,
        badge: "Central Spine Hub",
        features: ["Terrace Café", "Mini Theatre", "Indoor Games Room"],
      },
      {
        title: "Resort-Style Lagoon Pool",
        category: "Wellness & Sports",
        description:
          "Zero-depth entry family lagoon pool surrounded by lush tropical frangipani trees and poolside daybeds.",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        badge: "Tropical Lagoon",
        features: ["Zero-Depth Entry", "Kids Water Play", "Poolside Loungers"],
      },
      {
        title: "1.5 km Traffic-Free Cycling Loop",
        category: "Wellness & Sports",
        description:
          "Safe, dedicated rubber-cushioned cycling and roller-skate trail winding through the community's six pocket parks.",
        image:
          "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
        badge: "Child Safe Trail",
        features: ["Rubber-Cushioned", "Dedicated Bike Racks", "Solar-Lit at Night"],
      },
    ],
    masterPlan: {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      totalAcreage: "8.0 Acres",
      openSpaceRatio: "70% Open & Pedestrian Area",
      towersCount: "96 Independent Row Houses (G+2)",
      carpetEfficiency: "82% Built-to-Carpet Ratio",
      zones: [
        {
          id: 1,
          title: "Perimeter Parking & Gateway Plaza",
          category: "Entry",
          description: "Perimeter vehicle ring road keeping internal core 100% pedestrian.",
        },
        {
          id: 2,
          title: "Row House Clusters A, B, C",
          category: "Homes",
          description: "Arranged around central green courtyards.",
        },
        {
          id: 3,
          title: "The Serene Clubhouse & Pool",
          category: "Clubhouse",
          description: "Placed centrally at the meeting point of the pedestrian spines.",
        },
        {
          id: 4,
          title: "Pocket Parks & Organic Herb Beds",
          category: "Parks",
          description: "Six mini-parks scattered between row house clusters.",
        },
        {
          id: 5,
          title: "Children's Creative Play Park",
          category: "Kids",
          description: "Natural log play equipment and sandbox amphitheater.",
        },
      ],
    },
    unitPlans: [
      {
        type: "3 BHK Classic Row House",
        title: "3 Bedroom Tri-Level Row House",
        bedrooms: "3 Bedrooms",
        bathrooms: "3 Bathrooms + Powder",
        balconies: "Private Rooftop Terrace",
        carpetArea: "1,790 sq.ft",
        superBuiltUpArea: "2,180 sq.ft",
        efficiency: "82.1% Carpet Efficiency",
        facing: "East / North Facing",
        price: "₹2.05 Cr onwards",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        description:
          "Featuring double-height ceiling in the main living hall, private front sit-out facing the green walkway, and a private open terrace on the 2nd level.",
        dimensions: [
          { room: "Double-Height Living Hall", size: "20'0\" × 14'0\"" },
          { room: "Dining & Kitchen", size: "16'0\" × 11'0\"" },
          { room: "Ground Guest Bedroom", size: "12'6\" × 11'0\"" },
          { room: "Master Bedroom Suite (Level 1)", size: "16'0\" × 13'6\"" },
          { room: "Bedroom 03 (Level 1)", size: "13'0\" × 11'6\"" },
          { room: "Open Sky Terrace (Level 2)", size: "18'0\" × 12'0\"" },
        ],
        keyFeatures: [
          "Dramatic 18-foot double-height living room",
          "Private garden sit-out directly connecting to car-free spine",
          "Upper floor private terrace ready for solar pergola or mini-garden",
        ],
      },
    ],
    unitMix: [
      { type: "3 BHK", size: "2,180 sq.ft", price: "₹2.05 Cr onwards" },
      { type: "3 BHK + Terrace", size: "2,320 sq.ft", price: "₹2.24 Cr onwards" },
      { type: "3 BHK End Unit", size: "2,460 sq.ft", price: "₹2.42 Cr onwards" },
    ],
    connectivity: [
      { place: "Kempegowda Airport", distance: "18 mins" },
      { place: "KIADB Aerospace Park", distance: "10 mins" },
      { place: "Devanahalli Town", distance: "7 mins" },
      { place: "Hebbal", distance: "40 mins" },
    ],
    categorizedConnectivity: [
      {
        category: "Highways & Airport",
        items: [
          {
            place: "Kempegowda International Airport (BLR)",
            distance: "14 km",
            travelTime: "18 mins",
            highlight: "Expressway access",
          },
          {
            place: "Devanahalli Business Park",
            distance: "6.0 km",
            travelTime: "8 mins",
            highlight: "Upcoming IT investment zone",
          },
        ],
      },
      {
        category: "Tech Parks & Hubs",
        items: [
          {
            place: "KIADB Aerospace Park",
            distance: "9.5 km",
            travelTime: "10 mins",
            highlight: "Boeing, Collins Aerospace, Wipro Aero",
          },
          {
            place: "Foxconn Mega Facility (Project Elephant)",
            distance: "11 km",
            travelTime: "12 mins",
            highlight: "High growth employment hub",
          },
        ],
      },
      {
        category: "Schools & Hospitals",
        items: [
          {
            place: "Akash International School & Hospital",
            distance: "5.2 km",
            travelTime: "7 mins",
          },
          { place: "Stonehill International School", distance: "16 km", travelTime: "22 mins" },
        ],
      },
    ],
    mapData: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.261271630138!2d77.70295837589133!3d13.245842887094978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d06b9b3e945%3A0xb35a39eb88fb5f6b!2sDevanahalli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      googleMapsUrl: "https://maps.google.com/?q=Devanahalli+Bengaluru",
      address: "Devanahalli, Near Airport Trumpet Interchange, Bengaluru North 562110",
      landmark: "5 mins from Devanahalli Fort & Satellite Town Ring Road",
      coordinates: { lat: 13.2458, lng: 77.703 },
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const propertyTypes: PropertyType[] = ["Apartments", "Villas", "Row Houses", "Plots"];
export const statuses: ProjectStatus[] = ["Under Construction", "Ready to Move", "New Launch"];
