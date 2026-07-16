export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
}

export const clients: Client[] = [
  {
    id: 'c1',
    name: 'Cipla',
    logo: '/cipla.jpeg',
    industry: 'Pharmaceutical',
  },
  {
    id: 'c2',
    name: "Dr. Reddy's Laboratories",
    logo: '/dr-reddys.png',
    industry: 'Pharmaceutical',
  },
  {
    id: 'c3',
    name: 'MSN Laboratories',
    logo: '/msn.png',
    industry: 'Pharmaceutical',
  },
  {
    id: 'c4',
    name: 'Mankind Pharma',
    logo: '/mankind.webp',
    industry: 'Pharmaceutical',
  },
  {
    id: 'c5',
    name: 'Brinton Pharmaceuticals',
    logo: '/brinton.jpg',
    industry: 'Pharmaceutical',
  },
  {
    id: 'c6',
    name: 'Zuventus Healthcare Ltd.',
    logo: '/zuventus.webp',
    industry: 'Pharmaceutical',
  },
  {
    id: 'c7',
    name: 'Mezaya',
    logo: '/mezaya.jpeg',
    industry: 'Pharmaceutical',
  },
];