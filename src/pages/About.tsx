import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Leaf, Award, Target, Eye, Heart, Shield, Building2, Users,
  TrendingUp, Lightbulb, Zap, Globe, ArrowRight, Check, Package,
  Mail, Phone, MapPin, Clock, Quote, Star, Briefcase, GraduationCap
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PlaceholderImage from '../components/ui/PlaceholderImage';
import PageHero from '../components/sections/PageHero';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const coreValues = [
  {
    icon: Heart,
    title: 'Passion for Excellence',
    description: 'We pour our hearts into every product, delivering craftsmanship that exceeds expectations.'
  },
  {
    icon: Leaf,
    title: 'Sustainability First',
    description: 'Every decision is guided by environmental responsibility and ethical sourcing practices.'
  },
  {
    icon: Shield,
    title: 'Integrity & Trust',
    description: 'We build lasting relationships through transparency, honesty, and reliable service delivery.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Creativity',
    description: 'We continuously evolve our designs and processes to stay ahead of market trends.'
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Supporting local artisans and contributing positively to the communities we operate in.'
  },
  {
    icon: Globe,
    title: 'Global Standards, Local Heart',
    description: 'International quality with a deep understanding of Indian market and culture.'
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Premium Quality Assurance',
    description: 'Each product undergoes rigorous quality checks ensuring only the best reaches your hands.'
  },
  {
    icon: Zap,
    title: 'Rapid Customization',
    description: 'Fast turnaround on custom designs without compromising on quality or sustainability.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'From single orders to bulk corporate gifting, we handle projects of any scale seamlessly.'
  },
  {
    icon: Leaf,
    title: '100% Eco-Friendly',
    description: 'Sustainably sourced materials and environmentally responsible manufacturing processes.'
  },
  {
    icon: Building2,
    title: 'Make In India Pride',
    description: 'Supporting Indian craftsmanship with local sourcing and production excellence.'
  },
  {
    icon: Users,
    title: 'Dedicated Account Management',
    description: 'Personal attention to your project from conception to delivery and beyond.'
  },
];

const timeline = [
  {
    year: '2019',
    title: 'Genesis',
    description: 'Woodex Mumbai founded as a vision to create sustainable luxury in corporate gifting.'
  },
  {
    year: '2020',
    title: 'Expansion Phase',
    description: 'Expanded product line to include bamboo products and specialized corporate solutions.'
  },
  {
    year: '2021',
    title: 'Market Recognition',
    description: 'Recognized as a leading sustainable gifting brand, serving 50+ corporate clients.'
  },
  {
    year: '2022',
    title: 'Technology Integration',
    description: 'Implemented advanced customization technology - laser engraving and UV printing.'
  },
  {
    year: '2023',
    title: 'Pandemic Resilience',
    description: 'Pivoted to e-commerce while maintaining service excellence during challenging times.'
  },
  {
    year: '2024',
    title: 'Sustainability Certification',
    description: 'Achieved eco-certification and zero-waste manufacturing standards.'
  },
  {
    year: '2025',
    title: 'Industry Leadership',
    description: 'Became the go-to partner for 500+ brands across pharmaceuticals, IT, and enterprises.'
  },
  {
    year: '2026',
    title: 'Digital Transformation',
    description: 'Launched comprehensive online platform for seamless ordering and customization.'
  },
];

// Leadership Team Data with image paths from public folder
const leadershipTeam = [
  {
    id: 1,
    
    image: '/zubair.jpeg',
    icon: Briefcase,
    bio: 'Founder of Woodex Mumbai with over 15 years of experience in sustainable manufacturing and corporate gifting. Visionary leader driving the "Say No to Plastic" initiative across Indian enterprises.',
    education: 'MBA in Sustainable Business Management',
    experience: '18+ years in eco-friendly product innovation',
    achievements: ['Built 500+ corporate client base', 'Zero-waste manufacturing pioneer', 'Make in India advocate']
  },
  {
    id: 2,
    
    image: '/saba.jpeg',
    icon: TrendingUp,
    bio: 'Strategic leader driving Woodex Mumbai\'s growth as a premier sustainable gifting brand. Expert in corporate partnerships and brand development with a passion for environmental stewardship.',
    education: 'Executive Leadership Program, IIM',
    experience: '12+ years in corporate strategy & operations',
    achievements: ['Grew revenue 300% in 3 years', 'Led expansion across 6 industry sectors', 'Established ESG framework']
  },
  {
    id: 3,
    
    image: '/zuhaib.jpeg',
    icon: Lightbulb,
    bio: 'Award-winning designer specializing in sustainable product innovation. Transforms raw wood and bamboo into elegant corporate gifts that blend functionality with aesthetic brilliance.',
    education: 'National Institute of Design (NID)',
    experience: '10+ years in product design & development',
    achievements: ['50+ unique product designs', 'Red Dot Design Award nominee', 'Patent holder for eco-designs']
  },
];

// Profile Card Component with fully responsive photo
interface ProfileCardProps {
  member: typeof leadershipTeam[0];
  index: number;
}

function ProfileCard({ member, index }: ProfileCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = member.icon;
  const colors = [
    'from-amber-500 to-amber-600',
    'from-amber-600 to-amber-700',
    'from-amber-500 to-amber-600'
  ];
  const colorScheme = colors[index % colors.length];

  return (
    <motion.div
      variants={stagger}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
        {/* Profile Image Area - Fully responsive with proper aspect ratio */}
        <div className="relative w-full bg-gradient-to-br from-gray-800 to-gray-900" style={{ aspectRatio: '3/4' }}>
          {!imageError ? (
            <img
              src={member.image}
              
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            // Professional fallback avatar when image not found
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-amber-600 to-amber-700 p-4">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/40 mb-3 md:mb-4">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <div className="text-center px-4">
                
              </div>
            </div>
          )}
          
          {/* Gradient overlay for better text readability - only visible on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Name and position overlay at bottom of image - appears on hover */}
          {!imageError && (
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
             </div>
          )}
        </div>

        {/* Content Section - Responsive padding */}
        <div className="p-4 md:p-6 flex-1 flex flex-col">
          {/* Name and Designation always visible below image */}
          {!imageError && (
            <div className="text-center mb-3 md:mb-4">
             
              <div className="w-10 h-0.5 md:w-12 bg-amber-500 mx-auto mt-2 md:mt-3" />
            </div>
          )}
          
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">
            {member.bio}
          </p>

          <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
            <div className="flex items-start gap-2">
              <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] md:text-xs text-gray-400">Education</p>
                <p className="text-xs md:text-sm font-medium text-gray-700">{member.education}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] md:text-xs text-gray-400">Experience</p>
                <p className="text-xs md:text-sm font-medium text-gray-700">{member.experience}</p>
              </div>
            </div>
          </div>

          {/* Key Achievements - Responsive tags */}
          <div className="border-t border-gray-100 pt-3 mt-auto">
            <p className="text-[10px] md:text-xs font-semibold text-amber-600 mb-2">Key Achievements</p>
            <div className="flex flex-wrap gap-1 md:gap-1.5">
              {member.achievements.map((achievement, i) => (
                <span key={i} className="text-[9px] md:text-xs bg-amber-50 text-amber-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                  {achievement}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative Quote Icon */}
          <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Quote className="w-8 h-8 md:w-12 md:h-12 text-gray-800" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <>
      <SEO
        title="About Us | Woodex Mumbai"
        description="Woodex Mumbai, a venture of ZAK Kreations, is a leading manufacturer of premium eco-friendly corporate gifting solutions. Specializing in wooden, bamboo, and sustainable products for pharma, IT, banking, and enterprises across India."
        canonical="https://www.woodexmumbai.com/about"
      />

      <PageHero
        title="About Woodex Mumbai"
        subtitle="Smart Gifting for a Better Planet - Crafting Sustainable Luxury Since 2019"
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* COMPANY STORY - Updated with new description */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-amber-500" />
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                About <span className="text-amber-600">Woodex Mumbai</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                Woodex Mumbai, a venture of Zak Kreations, is a leading manufacturer and supplier of premium eco-friendly corporate gifting and branding solutions. We specialize in crafting innovative products from wood, bamboo, MDF, and other sustainable materials that combine functionality, elegance, and environmental responsibility.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                With a strong commitment to sustainability, Woodex Mumbai helps organizations reduce plastic usage by offering customized wooden products designed for corporate gifting, employee engagement, promotional campaigns, events, and brand activations. Our product range includes desk accessories, wooden trophies, plaques, gift hampers, nameplates, office essentials, festive gifts, and personalized branding solutions.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                Serving industries such as Pharma, IT, Banking, Manufacturing, Education, and Corporate Enterprises, we focus on delivering high-quality craftsmanship, creative designs, and timely execution. Every product is carefully designed to reflect your brand identity while supporting a greener future.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                At Woodex Mumbai, we believe in the vision of <span className="font-semibold text-amber-600">"Vocal for Local"</span> and <span className="font-semibold text-amber-600">"Say No to Plastic"</span>, creating sustainable alternatives that make a positive impact on businesses, communities, and the environment.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4">
                <p className="text-amber-800 text-sm md:text-base font-medium">
                  Woodex Mumbai – Smart Gifting for a Better Planet
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-gray-800 text-sm md:text-base">100+</p>
                    <p className="text-xs md:text-sm text-gray-500">Corporate Clients</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-gray-800 text-sm md:text-base">100%</p>
                    <p className="text-xs md:text-sm text-gray-500">Sustainable</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="order-first lg:order-last">
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/about/woodex-craftsmanship.jpg"
                    alt="Woodex Mumbai Heritage & Craftsmanship" 
                    className="w-full h-auto object-cover aspect-[4/3] md:aspect-square"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x800/fef3c7/78350f?text=Premium+Wooden+Gifts';
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-amber-500 rounded-full opacity-10 hidden lg:block" />
                <div className="absolute -top-6 -left-6 w-20 h-20 md:w-24 md:h-24 bg-amber-400 rounded-full opacity-10 hidden lg:block" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM SECTION - Professional Profile Cards with Photos */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-luxury">
          <motion.div className="text-center mb-10 md:mb-14" {...fadeInUp}>
            <span className="text-amber-600 font-semibold text-xs md:text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-3 mb-4">
              Meet Our <span className="text-amber-600">Leadership Team</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
              The passionate minds driving Woodex Mumbai's vision of sustainable excellence and innovation in corporate gifting.
            </p>
            <div className="w-20 h-0.5 md:w-24 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {leadershipTeam.map((member, index) => (
              <ProfileCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] opacity-5" />
        <div className="container-luxury relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                <span className="text-amber-400 font-semibold text-xs md:text-sm uppercase tracking-wider">Our Mission</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
                To Redefine Corporate <span className="text-amber-400">Gifting Excellence</span>
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Our mission is to create premium corporate gifts that celebrate your brand's values while honoring our planet. We strive to be the preferred partner for companies seeking meaningful, sustainable gifting solutions that leave lasting impressions.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mt-4">
                We're committed to setting new industry standards for quality, customization, and environmental responsibility—making sustainable luxury accessible to every business.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                <span className="text-amber-400 font-semibold text-xs md:text-sm uppercase tracking-wider">Our Vision</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
                Leading the Sustainable <span className="text-amber-400">Gifting Revolution</span>
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                We envision a future where every corporate gift is a conscious choice—where luxury and sustainability go hand in hand. We aspire to be India's most trusted brand for premium eco-friendly corporate gifting.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mt-4">
                Our vision extends to empowering artisans, innovating product lines, and creating a positive impact on communities and the environment, one beautiful gift at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section-padding bg-gray-50">
        <div className="container-luxury">
          <motion.div className="text-center mb-10 md:mb-14" {...fadeInUp}>
            <span className="text-amber-600 font-semibold text-xs md:text-sm uppercase tracking-wider">Core Values</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-3 mb-4">
              What We Stand <span className="text-amber-600">For</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              These principles guide every decision we make and shape our relationships with clients, partners, and the planet.
            </p>
            <div className="w-20 h-0.5 md:w-24 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500/10 rounded-full flex items-center justify-center mb-4 md:mb-5 group-hover:bg-amber-500/20 transition-colors">
                  <value.icon className="w-6 h-6 md:w-7 md:h-7 text-amber-600" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 group-hover:text-amber-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY COMMITMENT */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div {...fadeInUp} className="order-last lg:order-first">
              <div className="bg-gradient-to-br from-green-100 to-emerald-50 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/about/sustainable-manufacturing.jpg"
                  alt="Sustainable Manufacturing & Green Initiative" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x450/d1fae5/065f46?text=Eco-Friendly+Production';
                  }}
                />
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-amber-500" />
                <span className="text-amber-600 font-semibold text-xs md:text-sm uppercase tracking-wider">Sustainability</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Our Commitment to <span className="text-amber-600">The Planet</span>
              </h2>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex gap-3 md:gap-4">
                  <Leaf className="w-5 h-5 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-gray-800 text-sm md:text-base mb-1">100% Sustainably Sourced Materials</h3>
                    <p className="text-gray-500 text-xs md:text-sm">All wood and bamboo sourced from certified sustainable forests with proper forest management practices.</p>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-gray-800 text-sm md:text-base mb-1">Eco-Friendly Manufacturing</h3>
                    <p className="text-gray-500 text-xs md:text-sm">Zero-waste production processes with water-efficient systems and renewable energy usage in our facilities.</p>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <Package className="w-5 h-5 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-gray-800 text-sm md:text-base mb-1">Plastic-Free Packaging</h3>
                    <p className="text-gray-500 text-xs md:text-sm">All packaging uses recyclable, biodegradable materials. We've eliminated single-use plastics completely.</p>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-gray-800 text-sm md:text-base mb-1">Carbon Neutral Operations</h3>
                    <p className="text-gray-500 text-xs md:text-sm">We offset our carbon footprint through reforestation initiatives and renewable energy investments.</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-xl p-4 md:p-6">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  <span className="font-display font-semibold text-amber-700">For every product sold,</span> we plant a tree in partnership with environmental organizations, ensuring our growth contributes to a greener India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAKE IN INDIA */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] opacity-5" />
        <div className="container-luxury relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-amber-400 font-semibold text-xs md:text-sm uppercase tracking-wider">Made In India</span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3 mb-6">
                Proudly Supporting <span className="text-amber-400">Indian Craftsmanship</span>
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
                Woodex Mumbai is a proud flag-bearer of the Make In India initiative. Our commitment to local sourcing and artisan support isn't just a business strategy—it's a moral obligation to the communities that make us.
              </p>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                We employ skilled Indian craftsmen, source materials from local suppliers, and contribute to the growth of India's manufacturing ecosystem. Every product is a testament to the quality and creativity of Indian artisans.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6">
                  <Building2 className="w-6 h-6 md:w-8 md:h-8 text-amber-400 mb-2 md:mb-3" />
                  <p className="font-display font-semibold text-white text-sm md:text-base mb-1">Local Manufacturing</p>
                  <p className="text-white/60 text-xs md:text-sm">100% production in India with state-of-the-art facilities</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-amber-400 mb-2 md:mb-3" />
                  <p className="font-display font-semibold text-white text-sm md:text-base mb-1">Artisan Employment</p>
                  <p className="text-white/60 text-xs md:text-sm">Fair wages and benefits for 50+ skilled craftspeople</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="order-first lg:order-last">
              <div className="bg-gradient-to-br from-amber-800/20 to-gray-800 rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/about/indian-artisans.jpg"
                  alt="Indian Artisans at Work - Make In India" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x450/111827/fbbf24?text=Craftsmanship+Excellence';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-gray-50">
        <div className="container-luxury">
          <motion.div className="text-center mb-10 md:mb-14" {...fadeInUp}>
            <span className="text-amber-600 font-semibold text-xs md:text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-3 mb-4">
              What Sets Woodex Mumbai <span className="text-amber-600">Apart</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Experience the Woodex difference through quality, sustainability, and unparalleled customer service.
            </p>
            <div className="w-20 h-0.5 md:w-24 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {whyChooseUs.map((reason, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500/10 rounded-full flex items-center justify-center mb-4 md:mb-5 group-hover:bg-amber-500/20 transition-colors">
                  <reason.icon className="w-6 h-6 md:w-7 md:h-7 text-amber-600" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 group-hover:text-amber-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100 flex items-center gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                  <span className="text-xs md:text-sm font-semibold text-gray-700">Industry Leading</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY JOURNEY TIMELINE */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div className="text-center mb-10 md:mb-14" {...fadeInUp}>
            <span className="text-amber-600 font-semibold text-xs md:text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-3 mb-4">
              Timeline of <span className="text-amber-600">Growth & Achievement</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              From a small workshop to an industry leader, every milestone reflects our commitment to excellence and sustainability.
            </p>
            <div className="w-20 h-0.5 md:w-24 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-6" />
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-amber-500 via-amber-400 to-amber-500" />

            <div className="space-y-6 md:space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  {...stagger}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`flex flex-col md:flex-row gap-4 md:gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  onMouseEnter={() => setActiveTimeline(i)}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className={`bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md border transition-all duration-300 cursor-pointer ${activeTimeline === i ? 'shadow-xl border-amber-300' : 'border-gray-100 hover:shadow-lg'}`}>
                      <span className="inline-block bg-amber-500/10 text-amber-600 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-display text-base md:text-xl font-bold text-gray-800 mb-1 md:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex md:w-auto items-center justify-center">
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full bg-amber-500 border-4 border-white ring-4 ring-amber-500 transition-all duration-300 ${activeTimeline === i ? 'scale-150' : ''}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] opacity-5" />
        <div className="container-luxury relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { number: '100+', label: 'Corporate Clients', icon: Users },
              { number: '4M+', label: 'Products Delivered', icon: Award },
              { number: '6+', label: 'Years Experience', icon: TrendingUp },
              { number: '50+', label: 'Skilled Artisans', icon: Building2 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 border border-amber-500/20">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
                </div>
                <p className="font-display text-xl md:text-3xl lg:text-4xl font-bold text-amber-400 mb-1 md:mb-2">
                  {stat.number}
                </p>
                <p className="text-white/70 text-xs md:text-sm font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] opacity-5" />
        <div className="container-luxury relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="text-amber-400 font-semibold text-xs md:text-sm uppercase tracking-wider">Ready to Partner</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Let's Create <br />
              <span className="text-amber-400">Sustainable Impressions</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-10">
              Join hundreds of leading brands choosing Woodex Mumbai for premium, eco-friendly corporate gifts that strengthen relationships and reflect your values.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a href="mailto:info@woodexmumbai.com" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-2.5 px-5 md:py-3 md:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/25 inline-flex items-center gap-2 text-sm md:text-base">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/contact" className="bg-transparent hover:bg-amber-600 text-amber-500 hover:text-white font-semibold py-2.5 px-5 md:py-3 md:px-8 rounded-xl transition-all duration-300 border-2 border-amber-500 hover:border-amber-500 inline-flex items-center gap-2 text-sm md:text-base">
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}