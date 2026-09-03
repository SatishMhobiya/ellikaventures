import lakeside from "@/assets/hero-lakeside.jpg";
import clubhouse from "@/assets/project-clubhouse.jpg";
import villas from "@/assets/project-villas.jpg";
import tower from "@/assets/project-tower.jpg";
import interior from "@/assets/interior-ivory.jpg";

export type PropertyType = "Apartments" | "Villas" | "Row Houses" | "Plots";
export type ProjectStatus = "Under Construction" | "Ready to Move" | "New Launch";

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
  tagline: string;
  summary: string;
  description: string[];
  highlights: string[];
  amenities: string[];
  unitMix: { type: string; size: string; price: string }[];
  connectivity: { place: string; distance: string }[];
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
    gallery: [lakeside, interior, clubhouse],
    tagline: "Lakeside living between two waterbodies",
    summary:
      "Curated 3 & 4 BHK residences framed by two lakes, a 63,000 sq.ft clubhouse and 77% open space.",
    description: [
      "Mizumi Reserve sits between two protected lakes, and the masterplan is built around that fact. Towers are set back and staggered so that every home opens to water or landscape rather than to the next balcony.",
      "Homes are planned for ~75% carpet efficiency with deep living balconies, cross ventilation in every bedroom and a service utility separated from the kitchen — the details that decide how a home actually lives after year three.",
    ],
    highlights: [
      "~63,000 sq.ft grand clubhouse",
      "~77% open space across 9.4 acres",
      "~75% carpet area efficiency",
      "Large living balconies in every home",
      "30+ curated amenities",
      "Twin-lake frontage with walking trail",
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
    gallery: [tower, interior, clubhouse],
    tagline: "Skyline homes on the airport corridor",
    summary:
      "Efficient 2 & 3 BHK homes on the airport corridor, with sky decks on alternate floors.",
    description: [
      "Naverah One is planned for the buyer who wants airport-corridor appreciation without giving up daily liveability. Two towers, wide corridors, and only four homes per core.",
      "Sky decks on alternate floors give residents shared open space at height, and the podium keeps all parking below the landscape level.",
    ],
    highlights: [
      "Four homes per core, no shared walls on living rooms",
      "Sky decks on alternate floors",
      "Fully podium-parked — landscape at ground level",
      "12 mins to the airport expressway entry",
      "Vaastu-compliant layouts across all towers",
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
    possession: "Completed",
    rera: "PRM/KA/RERA/1251/309/PR/220716/005104",
    image: villas,
    gallery: [villas, interior, clubhouse],
    tagline: "Forty-eight villas, one private avenue",
    summary:
      "Ready-to-move triplex villas with private courtyards, plunge pools and a resident-only avenue.",
    description: [
      "Only 48 villas across 11 acres, which means the plot ratio here reads closer to a farmhouse enclave than a typical villa project. Each home is a triplex with a private courtyard at its centre.",
      "Ivory plaster, teak screens and Kota stone floors were chosen to age gracefully in Bengaluru's monsoon. Handover includes landscaped gardens and fitted kitchens.",
    ],
    highlights: [
      "Ready to move with OC received",
      "Private courtyard and plunge pool option",
      "Home automation and solar water heating",
      "Servant quarters with separate access",
      "Car parking for three vehicles per villa",
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
    gallery: [clubhouse, villas, interior],
    tagline: "Courtyard row houses near the airport belt",
    summary:
      "Ninety-six 3 BHK row houses arranged around shaded courts and a car-free internal spine.",
    description: [
      "Serene Row Houses keeps cars to the perimeter and gives the interior of the community back to residents — a car-free spine connects every cluster to the clubhouse on foot.",
      "Each home gets a double-height living volume, a private terrace and a rear utility court, so the family space never has to double as a service area.",
    ],
    highlights: [
      "Car-free internal walkways",
      "Double-height living volume in every home",
      "Private terrace with garden provision",
      "Rainwater harvesting and STP treated reuse",
      "Six pocket parks within the community",
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
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const propertyTypes: PropertyType[] = ["Apartments", "Villas", "Row Houses", "Plots"];
export const statuses: ProjectStatus[] = ["Under Construction", "Ready to Move", "New Launch"];
