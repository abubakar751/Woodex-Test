export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
}

export const galleryCategories = [
  'All',
  'Corporate Gifts',
  'Desk Organizers',
  'Bamboo Products',
  'MDF Products',
  'Welcome Kits',
  'Trophies',
  'Event Merchandise',
  'Branding Merchandise',
  'Festive Hampers',
];

export const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'Executive Pen Set', category: 'Corporate Gifts', description: 'Premium wooden pen set with custom engraving' },
  { id: 'g2', title: 'Multi-Slot Organizer', category: 'Desk Organizers', description: 'Handcrafted desk organizer with multiple compartments' },
  { id: 'g3', title: 'Bamboo Charging Pad', category: 'Bamboo Products', description: 'Sustainable bamboo wireless charger' },
  { id: 'g4', title: 'Custom Photo Frame', category: 'MDF Products', description: 'MDF photo frame with UV printed branding' },
  { id: 'g5', title: 'Onboarding Kit Box', category: 'Welcome Kits', description: 'Complete employee welcome kit in premium packaging' },
  { id: 'g6', title: 'Leadership Trophy', category: 'Trophies', description: 'Elegant wooden trophy for leadership awards' },
  { id: 'g7', title: 'Conference Attendee Pack', category: 'Event Merchandise', description: 'Full conference merchandise package' },
  { id: 'g8', title: 'Branded Keychain', category: 'Branding Merchandise', description: 'Wooden keychain with laser engraved logo' },
  { id: 'g9', title: 'Diwali Gift Hamper', category: 'Festive Hampers', description: 'Premium Diwali celebration hamper' },
  { id: 'g10', title: 'Wooden Desk Clock', category: 'Corporate Gifts', description: 'Executive desk clock with company branding' },
  { id: 'g11', title: 'Pen & Card Stand', category: 'Desk Organizers', description: 'Combined pen holder and card organizer' },
  { id: 'g12', title: 'Bamboo Tumbler Set', category: 'Bamboo Products', description: 'Insulated bamboo tumbler for corporate gifting' },
  { id: 'g13', title: 'Branded Coaster Set', category: 'MDF Products', description: 'MDF coasters with full-color UV printing' },
  { id: 'g14', title: 'Senior Hire Kit', category: 'Welcome Kits', description: 'Executive welcome kit for C-suite onboarding' },
  { id: 'g15', title: 'Excellence Plaque', category: 'Trophies', description: 'Wall-mountable wooden excellence plaque' },
  { id: 'g16', title: 'Launch Event Souvenir', category: 'Event Merchandise', description: 'Product launch commemorative wooden piece' },
  { id: 'g17', title: 'Logo Bottle Opener', category: 'Branding Merchandise', description: 'Branded wooden bottle opener' },
  { id: 'g18', title: 'Christmas Gift Collection', category: 'Festive Hampers', description: 'Festive wooden gift collection' },
  { id: 'g19', title: 'Premium Gift Box', category: 'Corporate Gifts', description: 'Luxury corporate gift box with assorted items' },
  { id: 'g20', title: 'Mobile Stand Organizer', category: 'Desk Organizers', description: 'Desk organizer with integrated mobile stand' },
  { id: 'g21', title: 'Bamboo Notebook', category: 'Bamboo Products', description: 'Bamboo-covered premium notebook' },
  { id: 'g22', title: 'MDF Gift Box', category: 'MDF Products', description: 'Premium MDF gift box with custom branding' },
  { id: 'g23', title: 'Achievement Trophy', category: 'Trophies', description: 'Classic wooden achievement trophy' },
  { id: 'g24', title: 'Summit Gift Pack', category: 'Event Merchandise', description: 'Premium gift pack for summit delegates' },
];
