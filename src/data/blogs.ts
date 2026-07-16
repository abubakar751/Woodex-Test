export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
}

export const blogCategories = [
  'All',
  'Corporate Gifting',
  'Branding',
  'Sustainability',
  'Employee Engagement',
  'Eco-Friendly Products',
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Rise of Sustainable Corporate Gifting in India',
    excerpt: 'How Indian companies are shifting towards eco-friendly gifting options and why sustainable gifts create stronger business relationships.',
    category: 'Corporate Gifting',
    author: 'Woodex Team',
    date: '2024-12-15',
    readTime: '5 min read',
  },
  {
    id: 'b2',
    title: 'Building Brand Identity Through Premium Merchandise',
    excerpt: 'Discover how branded merchandise can elevate your corporate identity and create lasting impressions with clients and employees.',
    category: 'Branding',
    author: 'Woodex Team',
    date: '2024-12-01',
    readTime: '4 min read',
  },
  {
    id: 'b3',
    title: 'Why Bamboo is the Future of Corporate Products',
    excerpt: 'Exploring the environmental and business benefits of choosing bamboo products for your corporate gifting needs.',
    category: 'Sustainability',
    author: 'Woodex Team',
    date: '2024-11-20',
    readTime: '6 min read',
  },
  {
    id: 'b4',
    title: 'Employee Onboarding: The Power of Welcome Kits',
    excerpt: 'How thoughtfully designed welcome kits can transform the onboarding experience and boost employee retention from day one.',
    category: 'Employee Engagement',
    author: 'Woodex Team',
    date: '2024-11-10',
    readTime: '5 min read',
  },
  {
    id: 'b5',
    title: 'Plastic-Free Corporate Gifts: A Complete Guide',
    excerpt: 'A comprehensive guide to replacing plastic corporate gifts with sustainable wooden and bamboo alternatives.',
    category: 'Eco-Friendly Products',
    author: 'Woodex Team',
    date: '2024-10-25',
    readTime: '7 min read',
  },
  {
    id: 'b6',
    title: 'Corporate Diwali Gifting Trends for 2025',
    excerpt: 'Stay ahead of the curve with the latest Diwali gifting trends that combine tradition with sustainability.',
    category: 'Corporate Gifting',
    author: 'Woodex Team',
    date: '2024-10-15',
    readTime: '4 min read',
  },
  {
    id: 'b7',
    title: 'Laser Engraving vs UV Printing: Which is Right for You?',
    excerpt: 'Understanding the differences between laser engraving and UV printing to make the best branding choice for your products.',
    category: 'Branding',
    author: 'Woodex Team',
    date: '2024-10-01',
    readTime: '5 min read',
  },
  {
    id: 'b8',
    title: 'The Environmental Impact of Corporate Gifting',
    excerpt: 'Understanding how traditional corporate gifting impacts the environment and what your company can do to make a positive change.',
    category: 'Sustainability',
    author: 'Woodex Team',
    date: '2024-09-20',
    readTime: '6 min read',
  },
  {
    id: 'b9',
    title: 'Creating Memorable Corporate Events with Sustainable Merchandise',
    excerpt: 'How eco-friendly event merchandise can enhance your corporate events while supporting sustainability goals.',
    category: 'Employee Engagement',
    author: 'Woodex Team',
    date: '2024-09-10',
    readTime: '4 min read',
  },
];
