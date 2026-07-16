import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Building2, Trophy, Users, TrendingUp, Shield, Zap,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';
import { clients } from '../data/clients';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-100px' },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// Logo Component with actual images - NO grayscale, NO hover color changes
interface LogoCardProps {
  client: typeof clients[0];
  index: number;
}

function LogoCard({ client, index }: LogoCardProps) {
  const [imageError, setImageError] = useState(false);

  // Generate fallback colors
  const colors = [
    { bg: 'from-amber-600 to-amber-700', accent: 'bg-amber-500' },
    { bg: 'from-amber-700 to-amber-800', accent: 'bg-amber-400' },
    { bg: 'from-amber-500 to-amber-600', accent: 'bg-amber-600' },
    { bg: 'from-amber-800 to-amber-900', accent: 'bg-amber-500' },
  ];
  const colorScheme = colors[index % colors.length];
  const initials = client.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 3);

  return (
    <motion.div
      variants={staggerItem}
      className="group relative"
    >
      <div className="relative h-32 md:h-36 rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
        {!imageError ? (
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            className="w-full h-full object-contain p-4 transition-all duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          // Fallback gradient with initials when image fails to load
          <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} flex flex-col items-center justify-center p-4`}>
            <div className={`${colorScheme.accent} rounded-full w-12 h-12 flex items-center justify-center mb-3 font-semibold text-white text-lg`}>
              {initials}
            </div>
            <p className="text-xs md:text-sm font-medium text-white/90 text-center line-clamp-2">
              {client.name}
            </p>
          </div>
        )}

        {/* Hover overlay with industry tag - subtle and clean */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3">
          <p className="text-white text-xs font-medium text-center">{client.industry}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Auto-scrolling Logo Slider Component - NO grayscale, NO hover color changes
function LogoSlider() {
  const sliderClients = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-6 px-4"
          animate={{
            x: [0, -(sliderClients.length / 2) * 160],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {sliderClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 w-36 md:w-40"
            >
              <div className="h-24 md:h-28 rounded-xl bg-white border border-gray-200 shadow-md flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-center';
                      fallback.innerHTML = `<span class="text-xl font-bold text-amber-600">${client.name.charAt(0)}</span>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Trust Indicators Component
function TrustIndicators() {
  const indicators = [
    { icon: Building2, label: 'Client Companies', value: '16+', desc: 'Trusted businesses' },
    { icon: Users, label: 'Industry Sectors', value: '6+', desc: 'Diverse verticals' },
    { icon: Trophy, label: 'Success Rate', value: '100%', desc: 'Client satisfaction' },
    { icon: TrendingUp, label: 'Year of Growth', value: '10+', desc: 'Consistent excellence' },
    { icon: Shield, label: 'Certifications', value: 'ISO', desc: 'Quality assured' },
    { icon: Zap, label: 'Quick Turnaround', value: '48h', desc: 'Fast delivery' },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
    >
      {indicators.map((indicator, index) => {
        const Icon = indicator.icon;
        return (
          <motion.div
            key={index}
            variants={staggerItem}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Icon className="w-6 h-6 text-amber-600" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
              {indicator.value}
            </p>
            <p className="text-sm font-semibold text-gray-700 mb-1">
              {indicator.label}
            </p>
            <p className="text-xs text-gray-500">
              {indicator.desc}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// Industry Breakdown Component
function IndustryBreakdown() {
  const industryCount = clients.reduce((acc, client) => {
    acc[client.industry] = (acc[client.industry] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const industries = Object.entries(industryCount).sort((a, b) => b[1] - a[1]);
  const maxCount = Math.max(...industries.map(([_, count]) => count));

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-100px' }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Industry Expertise
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We partner with leaders across multiple sectors, delivering tailored solutions for each industry's unique needs
        </p>
      </div>

      <div className="space-y-4">
        {industries.map(([industry, count], index) => {
          const percentage = (count / maxCount) * 100;
          return (
            <motion.div
              key={industry}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-700">{industry}</span>
                <span className="text-sm font-bold text-amber-600">{count} clients</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Clients() {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  return (
    <>
      <SEO
        title="Our Clients | Woodex Mumbai"
        description="Woodex Mumbai proudly partners with leading brands including Cipla, Dr. Reddy's, Mankind Pharma, and more across India's pharmaceutical and healthcare sectors."
      />

      {/* PAGE HERO */}
      <PageHero
        title="Our Clients"
        subtitle="Trusted by Leading Brands Across India"
        breadcrumbs={[{ label: 'Clients' }]}
      />

      {/* LOGO WALL - MAIN SHOWCASE */}
     

      {/* TRUST INDICATORS */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
        <div className="container-luxury">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              By the Numbers
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto" />
          </motion.div>

          <TrustIndicators />
        </div>
      </section>

      {/* AUTO-SCROLLING LOGO SLIDER */}
      <section className="section-padding bg-gray-900">
        <div className="container-luxury">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Our Trusted Partners
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Leading pharmaceutical companies that trust Woodex Mumbai for their corporate gifting needs
            </p>
          </motion.div>

          <LogoSlider />
        </div>
      </section>

      {/* INDUSTRY BREAKDOWN */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <IndustryBreakdown />
        </div>
      </section>

      {/* CLIENT SUCCESS STORIES PREVIEW */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-luxury">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Why Brands Choose <span className="text-amber-600">Woodex Mumbai</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Premium Quality',
                description: 'Handcrafted excellence with sustainable materials and meticulous attention to detail in every piece.'
              },
              {
                title: 'Customization',
                description: 'Fully tailored solutions to match your brand identity, from design to packaging and final delivery.'
              },
              {
                title: 'Reliability',
                description: 'Consistent on-time delivery, professional project management, and dedicated client support.'
              },
              {
                title: 'Innovation',
                description: 'Cutting-edge eco-friendly materials combined with contemporary design trends and manufacturing practices.'
              },
              {
                title: 'Expertise',
                description: 'Years of experience across pharmaceutical and healthcare sectors, understanding unique industry requirements.'
              },
              {
                title: '100% Satisfaction',
                description: 'Our proven track record speaks for itself - every client leaves with products that exceed expectations.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-400 rounded-xl mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent" />

        <div className="container-luxury relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join Our <span className="text-amber-500">Success Stories</span>?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Let's create something extraordinary together. Connect with our team to explore how Woodex Mumbai can elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/request-quote" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/25">
                Request a Quote
              </a>
              <a href="/contact" className="bg-transparent hover:bg-amber-600 text-amber-500 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 border-2 border-amber-500 hover:border-amber-500">
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}