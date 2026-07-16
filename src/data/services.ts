export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'corporate-gifting',
    name: 'Corporate Gifting',
    description: 'End-to-end corporate gifting solutions tailored to your brand identity. From selection to delivery, we ensure every gift reflects your company values and strengthens business relationships.',
    features: ['Curated gift selection', 'Brand customization', 'Bulk ordering', 'Pan-India delivery', 'Gift packaging', 'Timeline management'],
    icon: 'Gift',
  },
  {
    id: 'brand-merchandising',
    name: 'Brand Merchandising',
    description: 'Transform your brand identity into tangible merchandise that leaves a lasting impression. Our premium wooden merchandise solutions combine sustainability with sophisticated branding.',
    features: ['Brand integration', 'Multiple product lines', 'Consistent aesthetics', 'Quality materials', 'Custom designs', 'Scalable production'],
    icon: 'BadgeCheck',
  },
  {
    id: 'laser-engraving',
    name: 'Laser Engraving',
    description: 'Precision laser engraving that brings your designs to life on wood and bamboo. High-detail, permanent branding that adds value and distinction to every piece.',
    features: ['High precision detail', 'Permanent marking', 'Multiple wood types', 'Logo reproduction', 'Text engraving', 'Complex artwork'],
    icon: 'PenTool',
  },
  {
    id: 'uv-printing',
    name: 'UV Printing',
    description: 'Full-color UV printing on wood and bamboo for vibrant, durable branding. Achieve photorealistic quality on curved and flat surfaces with our advanced UV technology.',
    features: ['Full-color output', 'Photorealistic quality', 'Durable finish', 'Flat & curved surfaces', 'Quick production', 'Fade resistant'],
    icon: 'Printer',
  },
  {
    id: 'customized-branding',
    name: 'Customized Branding',
    description: 'Comprehensive branding solutions that go beyond logos. We help you create a cohesive branded experience across all your corporate gifts and merchandise.',
    features: ['Brand guideline adherence', 'Multi-item consistency', 'Color matching', 'Design consultation', 'Sample production', 'Quality checks'],
    icon: 'Palette',
  },
  {
    id: 'employee-kits',
    name: 'Employee Welcome Kits',
    description: 'Make every new team member feel valued from day one. Our onboarding kits are thoughtfully designed to reflect your company culture while providing practical, premium items.',
    features: ['Custom contents', 'Company branding', 'Scalable production', 'Premium packaging', 'Quick turnaround', 'Bulk discounts'],
    icon: 'Package',
  },
  {
    id: 'event-merchandise',
    name: 'Event Merchandise',
    description: 'Create memorable event experiences with bespoke merchandise. From conferences to product launches, our event solutions ensure your brand stands out.',
    features: ['Event-specific design', 'Timeline delivery', 'Attendee packages', 'VIP items', 'Quantity flexibility', 'Post-event support'],
    icon: 'Calendar',
  },
  {
    id: 'promotional-merchandise',
    name: 'Promotional Merchandise',
    description: 'Drive brand awareness with premium promotional items that people actually want to keep. Sustainable wooden promotional products that make your brand memorable.',
    features: ['Brand visibility', 'Practical items', 'Eco-friendly options', 'Cost-effective', 'Wide distribution', 'Lasting impact'],
    icon: 'Megaphone',
  },
  {
    id: 'bulk-orders',
    name: 'Bulk Corporate Orders',
    description: 'Efficient, high-quality bulk order fulfillment for large corporate requirements. Consistent quality across thousands of pieces with dedicated project management.',
    features: ['Volume pricing', 'Consistent quality', 'Dedicated manager', 'Timeline delivery', 'Quality assurance', 'Logistics support'],
    icon: 'Truck',
  },
];
