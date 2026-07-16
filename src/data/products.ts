export interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  features: string[];
  image?: string;
}

export const productCategories = [
  {
    id: 'corporate-gifts',
    name: 'Corporate Gifts',
    slug: 'corporate-gifts',
    description: 'Premium wooden corporate gifts designed to leave a lasting impression on your business partners, clients, and employees. Each piece is crafted with sustainable materials and customizable branding options.',
    features: ['Customizable branding', 'Premium wood finish', 'Gift box packaging', 'Bulk order discounts', 'Laser engraving available', 'Eco-friendly materials'],
    products: [
      { id: 'cg-1', name: 'Executive Wooden Pen Set', description: 'Handcrafted wooden pen set with premium finish and custom branding' },
      { id: 'cg-2', name: 'Wooden Desk Clock', description: 'Elegant desk clock with corporate logo engraving' },
      { id: 'cg-3', name: 'Premium Gift Hamper', description: 'Curated wooden gift hamper with assorted items' },
      { id: 'cg-4', name: 'Wooden Card Holder', description: 'Sleek business card holder with laser engraving' },
    ],
  },
  {
    id: 'desk-organizers',
    name: 'Desk Organizers',
    slug: 'desk-organizers',
    description: 'Elegant desk organizers crafted from premium wood to keep workspaces tidy while adding a touch of sophistication. Perfect for corporate offices and executive desks.',
    features: ['Multi-compartment design', 'Premium wood finish', 'Non-slip base', 'Custom branding', 'Durable construction', 'Elegant aesthetics'],
    products: [
      { id: 'do-1', name: 'Multi-Slot Pen Stand', description: 'Organize pens and stationery in style' },
      { id: 'do-2', name: 'Mobile Stand Organizer', description: 'Desk organizer with built-in mobile stand' },
      { id: 'do-3', name: 'Letter Tray Set', description: 'Stackable wooden letter trays' },
      { id: 'do-4', name: 'Complete Desk Set', description: 'Full desk organization suite' },
    ],
  },
  {
    id: 'bamboo-products',
    name: 'Bamboo Products',
    slug: 'bamboo-products',
    description: 'Sustainable bamboo products that combine eco-consciousness with elegance. Our bamboo range offers a natural, premium look that resonates with environmentally responsible brands.',
    features: ['100% sustainable bamboo', 'Natural finish', 'Lightweight yet durable', 'Biodegradable', 'Premium appearance', 'Custom branding options'],
    products: [
      { id: 'bp-1', name: 'Bamboo Wireless Charger', description: 'Eco-friendly wireless charging pad' },
      { id: 'bp-2', name: 'Bamboo Tumbler', description: 'Insulated bamboo tumbler for corporate gifting' },
      { id: 'bp-3', name: 'Bamboo Desk Organizer', description: 'Natural bamboo desk organization set' },
      { id: 'bp-4', name: 'Bamboo Notebook Set', description: 'Bamboo-covered premium notebook set' },
    ],
  },
  {
    id: 'mdf-products',
    name: 'MDF Products',
    slug: 'mdf-products',
    description: 'High-quality MDF products that offer consistent quality, smooth finishes, and versatile customization options. Ideal for large corporate orders requiring uniform aesthetics.',
    features: ['Consistent finish quality', 'Versatile customization', 'Cost-effective bulk pricing', 'Smooth surface for printing', 'Durable construction', 'Wide range of designs'],
    products: [
      { id: 'mp-1', name: 'MDF Photo Frame Set', description: 'Customizable photo frames for corporate gifting' },
      { id: 'mp-2', name: 'MDF Coaster Set', description: 'Branded coaster set in premium finish' },
      { id: 'mp-3', name: 'MDF Wall Art', description: 'Corporate wall art and signage' },
      { id: 'mp-4', name: 'MDF Gift Box', description: 'Premium gift box with custom branding' },
    ],
  },
  {
    id: 'welcome-kits',
    name: 'Employee Welcome Kits',
    slug: 'welcome-kits',
    description: 'Thoughtfully curated welcome kits that make new employees feel valued from day one. Customized with company branding and filled with premium wooden essentials.',
    features: ['Fully customizable contents', 'Company branding on all items', 'Premium packaging', 'Scalable for large onboarding', 'Eco-friendly options', 'Quick turnaround'],
    products: [
      { id: 'wk-1', name: 'Executive Welcome Kit', description: 'Premium onboarding kit for senior hires' },
      { id: 'wk-2', name: 'Standard Welcome Kit', description: 'Complete welcome package for new employees' },
      { id: 'wk-3', name: 'Tech Welcome Kit', description: 'Tech-focused kit with gadget accessories' },
      { id: 'wk-4', name: 'Sustainable Welcome Kit', description: 'All-bamboo eco-friendly welcome package' },
    ],
  },
  {
    id: 'event-merchandise',
    name: 'Corporate Event Merchandise',
    slug: 'event-merchandise',
    description: 'Bespoke merchandise for corporate events, conferences, and launches. Create memorable experiences with premium wooden items that attendees will cherish.',
    features: ['Event-specific customization', 'Quick bulk production', 'Premium packaging', 'Multiple item options', 'Brand consistency', 'Event timeline delivery'],
    products: [
      { id: 'em-1', name: 'Conference Kit', description: 'Complete conference attendee package' },
      { id: 'em-2', name: 'Launch Event Souvenirs', description: 'Product launch commemorative items' },
      { id: 'em-3', name: 'Annual Day Mementos', description: 'Corporate annual day keepsakes' },
      { id: 'em-4', name: 'Summit Gift Pack', description: 'Premium gift pack for summit delegates' },
    ],
  },
  {
    id: 'festive-hampers',
    name: 'Sustainable Festive Hampers',
    slug: 'festive-hampers',
    description: 'Celebrate festivals sustainably with our curated festive hampers. Eco-friendly packaging filled with premium wooden gifts, perfect for Diwali, Christmas, and corporate celebrations.',
    features: ['Festival-themed designs', 'Eco-friendly packaging', 'Premium presentation', 'Customizable contents', 'Cultural sensitivity', 'Bulk ordering available'],
    products: [
      { id: 'fh-1', name: 'Diwali Premium Hamper', description: 'Luxury Diwali gift hamper with wooden items' },
      { id: 'fh-2', name: 'Christmas Gift Set', description: 'Festive wooden gift collection' },
      { id: 'fh-3', name: 'New Year Kit', description: 'Corporate new year celebration package' },
      { id: 'fh-4', name: 'Custom Festival Hamper', description: 'Tailored hamper for any celebration' },
    ],
  },
  {
    id: 'awards-trophies',
    name: 'Awards & Trophies',
    slug: 'awards-trophies',
    description: 'Premium wooden awards and trophies that honor achievement with elegance. Each piece is masterfully crafted and can be fully customized with recipient details and company branding.',
    features: ['Premium wood craftsmanship', 'Custom engravings', 'Multiple size options', 'Elegant display base', 'Protective packaging', 'Quick production available'],
    products: [
      { id: 'at-1', name: 'Achievement Trophy', description: 'Classic wooden achievement trophy' },
      { id: 'at-2', name: 'Leadership Award', description: 'Premium leadership recognition piece' },
      { id: 'at-3', name: 'Excellence Plaque', description: 'Wall-mountable excellence plaque' },
      { id: 'at-4', name: 'Custom Award', description: 'Bespoke award designed to specifications' },
    ],
  },
  {
    id: 'branding-merchandise',
    name: 'Branding Merchandise',
    slug: 'branding-merchandise',
    description: 'Branded merchandise that extends your corporate identity into tangible, premium items. From wooden keychains to branded desk accessories, make your brand unforgettable.',
    features: ['Full-color UV printing', 'Laser engraving', 'Consistent branding', 'Wide product range', 'Bulk pricing', 'Brand guideline adherence'],
    products: [
      { id: 'bm-1', name: 'Branded Keychain Set', description: 'Premium wooden keychains with logo' },
      { id: 'bm-2', name: 'Logo Bottle Opener', description: 'Branded wooden bottle opener' },
      { id: 'bm-3', name: 'Coaster Set with Branding', description: 'UV printed coaster collection' },
      { id: 'bm-4', name: 'Brand Kit Collection', description: 'Complete branded merchandise suite' },
    ],
  },
  {
    id: 'customized-wooden',
    name: 'Customized Wooden Products',
    slug: 'customized-wooden-products',
    description: 'Bring your vision to life with our fully customized wooden products. From concept to creation, we work with you to design unique pieces that perfectly represent your brand.',
    features: ['Custom design from scratch', 'Material selection', 'Prototype development', 'Unlimited customization', 'Expert craftsmanship', 'Quality assurance'],
    products: [
      { id: 'cw-1', name: 'Custom Box Design', description: 'Bespoke wooden box to your specifications' },
      { id: 'cw-2', name: 'Custom Furniture Piece', description: 'Corporate furniture with brand integration' },
      { id: 'cw-3', name: 'Custom Signage', description: 'Premium wooden signage for offices' },
      { id: 'cw-4', name: 'Custom Gift Item', description: 'Unique gift item designed from concept' },
    ],
  },
];
