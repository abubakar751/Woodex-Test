export interface Industry {
  id: string;
  name: string;
  description: string;
  solutions: string[];
  icon: string;
}

export const industries: Industry[] = [
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    description: 'Specialized gifting solutions for pharmaceutical companies that comply with industry standards while maintaining a premium, professional image. Our products align with pharma marketing guidelines and create meaningful brand touchpoints.',
    solutions: ['Doctor welcome kits', 'Medical conference merchandise', 'Pharma branded desk items', 'Launch event souvenirs', 'Festival hampers for healthcare professionals', 'Compliance-friendly branding'],
    icon: 'Pill',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Premium gifting solutions designed for hospitals, clinics, and healthcare organizations. Create a warm, professional impression with sustainable wooden gifts that reflect care and quality.',
    solutions: ['Patient welcome kits', 'Staff appreciation gifts', 'Hospital anniversary items', 'Health event merchandise', 'Doctor recognition awards', 'Department-specific gifts'],
    icon: 'Heart',
  },
  {
    id: 'it-companies',
    name: 'IT Companies',
    description: 'Tech-focused gifting solutions that resonate with the modern, innovative culture of IT companies. From onboarding kits to event merchandise, our products complement the tech workspace.',
    solutions: ['Tech onboarding kits', 'Hackathon merchandise', 'Tech conference packs', 'Remote work accessories', 'Gadget-friendly desk items', 'Start-up branded merchandise'],
    icon: 'Monitor',
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    description: 'Sophisticated gifting solutions that match the prestige and professionalism of the banking and finance sector. Premium wooden gifts that convey trust, stability, and excellence.',
    solutions: ['Premium client gifts', 'Branch opening merchandise', 'Employee milestone awards', 'VIP customer hampers', 'Annual event souvenirs', 'Executive desk accessories'],
    icon: 'Building',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Durable and practical gifting solutions for the manufacturing sector. Our products are built to last and designed to reflect the strength and reliability of manufacturing enterprises.',
    solutions: ['Safety milestone awards', 'Factory anniversary items', 'Vendor appreciation gifts', 'Trade show merchandise', 'Worker recognition trophies', 'Industrial event souvenirs'],
    icon: 'Factory',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Inspiring gifting solutions for educational institutions. From student welcome kits to faculty awards, our wooden products celebrate learning and achievement with sustainable elegance.',
    solutions: ['Student welcome kits', 'Faculty appreciation gifts', 'Convocation memorabilia', 'Alumni event merchandise', 'Achievement trophies', 'Institutional branded items'],
    icon: 'GraduationCap',
  },
  {
    id: 'corporate-enterprises',
    name: 'Corporate Enterprises',
    description: 'Comprehensive gifting solutions for large corporate enterprises. We handle end-to-end gifting programs that align with corporate values and deliver consistent brand experiences.',
    solutions: ['Corporate gifting programs', 'Employee engagement merchandise', 'Client relationship gifts', 'Annual celebration hampers', 'Boardroom accessories', 'CSR-aligned sustainable gifts'],
    icon: 'Briefcase',
  },
];
