import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf, TreePine, Recycle, Package, Heart, Globe, Droplets, Wind, Sun,
  CheckCircle2, ArrowRight, Zap, Shield, Award, Target, Eye, TrendingUp
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';
import PlaceholderImage from '../components/ui/PlaceholderImage';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// Animated counter component
function AnimatedCounter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div>
      <p className="font-display text-4xl md:text-5xl font-bold text-gold-400">
        {count}%
      </p>
      <p className="text-white/70 font-semibold mt-2">{label}</p>
    </div>
  );
}

const ecoFriendlyProducts = [
  {
    icon: TreePine,
    title: 'Wooden Products',
    description: 'Premium wooden desk organizers, pens, and crafts made from sustainably harvested forest wood.',
    features: ['FSC Certified', 'Zero Chemical Treatment', 'Biodegradable'],
    benefits: 'Long-lasting, elegant, and completely compostable at end of life'
  },
  {
    icon: Leaf,
    title: 'Bamboo Products',
    description: 'Fast-growing bamboo utilized for sustainable and versatile product manufacturing.',
    features: ['Rapid Renewal', 'Natural Durability', 'Chemical-Free Growth'],
    benefits: 'Bamboo regenerates 3-5 years, requiring no pesticides or fertilizers'
  },
  {
    icon: Recycle,
    title: 'Plastic-Free Alternatives',
    description: 'Complete elimination of single-use plastics in all our products and packaging.',
    features: ['Zero Plastic', 'Biodegradable', 'Compostable'],
    benefits: 'Reduces landfill waste and ocean pollution by eliminating plastic entirely'
  },
];

const sustainabilityPillars = [
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Advanced water recycling systems reduce consumption by 80%',
    stat: '80%'
  },
  {
    icon: Wind,
    title: 'Carbon Neutral',
    description: 'Renewable energy sources power 100% of our operations',
    stat: '100%'
  },
  {
    icon: Sun,
    title: 'Energy Efficiency',
    description: 'LED lighting and solar panels across all facilities',
    stat: '65%'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Trees planted worldwide through our environmental initiatives',
    stat: '5000+'
  },
];

const reusableGifts = [
  {
    title: 'Wooden Desk Sets',
    description: 'Elegant desk organizers that last decades, creating lasting brand impressions',
    impact: 'Reduces paper waste by 40% annually per user'
  },
  {
    title: 'Bamboo Utensil Sets',
    description: 'Portable, durable utensil sets for eco-conscious professionals',
    impact: 'Prevents 100+ plastic utensils per year per person'
  },
  {
    title: 'Wooden Stationery',
    description: 'Premium wooden pens and writing instruments with timeless appeal',
    impact: 'Single pen replaces 500+ plastic pens over lifetime'
  },
  {
    title: 'Reusable Bottle Sets',
    description: 'Bamboo-finished water bottles with corporate branding',
    impact: 'Eliminates 150+ plastic bottles per person yearly'
  },
];

const environmentalBenefits = [
  {
    icon: TreePine,
    title: 'Reforestation',
    description: 'For every product sold, we plant a tree through verified environmental partners, offsetting our manufacturing footprint.',
    stat: '1 Tree per product'
  },
  {
    icon: Droplets,
    title: 'Water Protection',
    description: 'Our zero-waste processes protect water systems. We recycle 95% of water used in production.',
    stat: '95% Water recycled'
  },
  {
    icon: Package,
    title: 'Waste Reduction',
    description: 'Packaging-free shipping options and compostable packaging materials eliminate 99% of landfill waste.',
    stat: '99% Waste reduction'
  },
  {
    icon: Leaf,
    title: 'Biodiversity Protection',
    description: 'Ethical sourcing practices protect forests and wildlife habitats from destructive exploitation.',
    stat: '100% Ethical sourcing'
  },
];

export default function Sustainability() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SEO
        title="Sustainability"
        description="Learn about Woodex Mumbai's commitment to environmental responsibility. Discover our eco-friendly products, sustainable practices, and positive impact on the planet."
        canonical="https://www.woodexmumbai.com/sustainability"
      />

      <PageHero
        title="Sustainability"
        subtitle="Our Commitment to a Greener Future"
        breadcrumbs={[{ label: 'Sustainability' }]}
      />

      {/* SUSTAINABILITY MISSION */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-divider-left" />
                <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Commitment</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mb-6">
                Sustainable Luxury is <span className="text-gradient-gold">Our Promise</span>
              </h2>
              <p className="text-forest-600/80 leading-relaxed mb-4">
                At Woodex Mumbai, sustainability isn't a marketing buzzword—it's the foundation of everything we do. Every product, every process, and every decision is guided by our commitment to environmental responsibility and ethical practices.
              </p>
              <p className="text-forest-600/80 leading-relaxed mb-4">
                We believe that luxury and sustainability can coexist beautifully. Our premium eco-friendly corporate gifts prove that you don't have to choose between elegance and environmental consciousness. When you choose Woodex Mumbai, you're choosing to make a positive impact.
              </p>
              <p className="text-forest-600/80 leading-relaxed mb-6">
                From sourcing to shipping, every aspect of our business is designed to minimize environmental impact while maximizing positive change. We measure our success not just in products delivered, but in trees planted, waste eliminated, and lives improved.
              </p>

              <div className="flex gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-semibold text-forest-800">100% Sustainable</p>
                    <p className="text-sm text-forest-500 mt-1">All products eco-certified</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-semibold text-forest-800">Zero Waste</p>
                    <p className="text-sm text-forest-500 mt-1">Manufacturing process</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <PlaceholderImage text="Sustainable Manufacturing - Green Initiatives" aspect="aspect-[4/3]" className="w-full rounded-card" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ECO-FRIENDLY PRODUCTS OVERVIEW */}
      <section className="section-padding bg-forest-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="container-luxury relative z-10">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Eco-Friendly Products</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Sustainable Materials, Premium <span className="text-gold-400">Quality</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our complete range of eco-friendly products combines environmental responsibility with luxurious design and exceptional functionality.
            </p>
            <div className="gold-divider-center mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ecoFriendlyProducts.map((product, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="card-luxury p-8 h-full bg-white/5 border border-white/10 hover:border-gold-400/50 transition-all">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                    <product.icon className="w-8 h-8 text-gold-400" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {product.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>

                  <div className="mb-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-gold-300 font-semibold mb-3 uppercase tracking-wider">Key Features</p>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                          <span className="text-sm text-white/60">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gold-500/5 border border-gold-400/20 rounded-card p-4">
                    <p className="text-sm text-gold-300 font-semibold">
                      {product.benefits}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WOODEN PRODUCTS SUSTAINABILITY */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <PlaceholderImage text="Wooden Products - Sustainable Craftsmanship" aspect="aspect-[4/3]" className="w-full rounded-card" />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-gold-600" />
                <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Wooden Products</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mb-6">
                Crafted from Nature's <span className="text-gradient-gold">Finest Resources</span>
              </h2>

              <div className="space-y-5 mb-8">
                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-forest-800 mb-2">FSC Certified Sourcing</h3>
                    <p className="text-forest-600/70 text-sm">Every piece of wood is sourced from FSC-certified sustainable forests that practice responsible forest management and protect biodiversity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-forest-800 mb-2">Chemical-Free Processing</h3>
                    <p className="text-forest-600/70 text-sm">We use zero harmful chemicals in wood treatment. Our natural finishing processes preserve wood's integrity while being completely safe for users and environment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <TrendingUp className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-forest-800 mb-2">Full Lifecycle Value</h3>
                    <p className="text-forest-600/70 text-sm">Wooden products last decades, reducing need for replacements. At end of life, they biodegrade completely, returning nutrients to soil.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-forest-800 mb-2">Carbon Neutral Production</h3>
                    <p className="text-forest-600/70 text-sm">Our manufacturing uses renewable energy, and for every tree harvested, we plant five new ones, creating a positive carbon cycle.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gold-500/5 border border-gold-200/30 rounded-card p-6">
                <p className="text-forest-700 font-display font-semibold mb-2">Impact Per Product:</p>
                <p className="text-forest-600/80 leading-relaxed">
                  Each wooden gift prevents approximately 5 plastic products from being manufactured, saving resources and reducing landfill waste significantly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BAMBOO PRODUCTS SUSTAINABILITY */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <TreePine className="w-6 h-6 text-gold-600" />
                <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Bamboo Products</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mb-6">
                The Future of Sustainable <span className="text-gradient-gold">Materials</span>
              </h2>

              <div className="space-y-5 mb-8">
                <div className="flex gap-4">
                  <Eye className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-forest-800 mb-2">World's Fastest Growing Plant</h3>
                    <p className="text-forest-600/70 text-sm">Bamboo grows 3-5 times faster than trees, reaching maturity in just 3-5 years compared to decades for conventional timber.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Leaf className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-forest-800 mb-2">No Pesticides Required</h3>
                    <p className="text-forest-600/70 text-sm">Bamboo grows naturally without requiring pesticides or chemical fertilizers, maintaining soil health and protecting surrounding ecosystems.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-forest-800 mb-2">Biodiversity Enhancement</h3>
                    <p className="text-forest-600/70 text-sm">Bamboo forests store twice the carbon of equivalent forests and provide habitat for diverse wildlife while preventing soil erosion.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-forest-800 mb-2">Superior Durability</h3>
                    <p className="text-forest-600/70 text-sm">Bamboo is harder and more durable than many hardwoods, ensuring products withstand years of daily use without degradation.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gold-500/5 border border-gold-200/30 rounded-card p-6">
                <p className="text-forest-700 font-display font-semibold mb-2">Regeneration Advantage:</p>
                <p className="text-forest-600/80 leading-relaxed">
                  One bamboo stalk sequesters more carbon than 35 trees. A single bamboo grove removes the same CO₂ as 35 people annually.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="order-1 lg:order-2">
              <PlaceholderImage text="Bamboo Products - Eco-Sustainable Material" aspect="aspect-[4/3]" className="w-full rounded-card" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PLASTIC-FREE ALTERNATIVES */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Plastic-Free Solutions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Zero Plastic <span className="text-gradient-gold">Commitment</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              We've completely eliminated single-use plastics from our products and supply chain, protecting our oceans and reducing landfill burden.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Product Packaging',
                description: 'All packaging uses recyclable kraft paper, compostable bio-plastics, or reusable fabric materials.',
                items: ['Zero plastic wrapping', 'Biodegradable materials', 'Reusable cloth bags']
              },
              {
                title: 'Shipping Materials',
                description: 'We ship with mushroom packing, recycled cardboard, and plant-based padding instead of styrofoam.',
                items: ['Compostable padding', 'Recycled boxes', 'Minimal packaging waste']
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-luxury p-8"
              >
                <Recycle className="w-8 h-8 text-gold-600 mb-4" />
                <h3 className="font-display text-xl font-semibold text-forest-800 mb-3">
                  {section.title}
                </h3>
                <p className="text-forest-600/70 text-sm mb-6 leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold-600 rounded-full" />
                      <span className="text-forest-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="bg-forest-700 rounded-card p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-wooden-texture opacity-5" />
            <div className="relative z-10">
              <Recycle className="w-12 h-12 text-gold-400 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Lifetime Plastic Savings
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-4">
                By choosing one Woodex bamboo product over plastic alternatives, you save approximately <span className="text-gold-400 font-display font-semibold">500+ pieces of plastic</span> from entering landfills over your lifetime.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <div className="inline-block bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                  <p className="text-gold-400 font-semibold">99% Landfill Reduction</p>
                </div>
                <div className="inline-block bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                  <p className="text-gold-400 font-semibold">100% Compostable</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUSTAINABLE PACKAGING */}
      <section className="section-padding bg-forest-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="container-luxury relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
            <motion.div {...fadeInUp}>
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Sustainable Packaging</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                Every Detail <span className="text-gold-400">Considered</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Our commitment to sustainability extends to every element of the packaging experience. From the moment your product leaves our facility to when it reaches your hands, everything is designed with environmental impact in mind.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Recyclable Materials', desc: 'All boxes are 100% recycled kraft cardboard' },
                  { label: 'Compostable Fillers', desc: 'Plant-based packing materials break down in 90 days' },
                  { label: 'Minimal Ink Use', desc: 'Vegetable-based inks for all printing' },
                  { label: 'No Plastic Windows', desc: 'Transparent cellulose windows instead of plastic' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display font-semibold text-white">{item.label}</p>
                      <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <PlaceholderImage text="Sustainable Packaging Solutions" aspect="aspect-[4/3]" className="w-full rounded-card" />
            </motion.div>
          </div>

          {/* PACKAGING OPTIONS */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Premium Box',
                description: 'Recycled kraft with custom design and compostable tissue',
                icon: Package
              },
              {
                title: 'Eco Wrap',
                description: 'Plant-based cellulose wrap in place of plastic',
                icon: Leaf
              },
              {
                title: 'Minimal Packaging',
                description: 'Reduced packaging option for eco-conscious recipients',
                icon: Globe
              },
            ].map((option, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-card p-6 text-center hover:border-gold-400/50 transition-colors"
              >
                <option.icon className="w-8 h-8 text-gold-400 mx-auto mb-4" />
                <h3 className="font-display font-semibold text-white mb-2">{option.title}</h3>
                <p className="text-white/60 text-sm">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REUSABLE CORPORATE GIFTS */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Reusable Gifts</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Gifts That Keep <span className="text-gradient-gold">Giving</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              Every product is designed for longevity and reuse, creating lasting value and repeated brand impressions over years of daily use.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {reusableGifts.map((gift, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-luxury p-8 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center group-hover:bg-gold-500/20 transition-colors shrink-0">
                    <Heart className="w-7 h-7 text-gold-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-forest-800 mb-2 group-hover:text-gold-600 transition-colors">
                      {gift.title}
                    </h3>
                    <p className="text-forest-600/70 text-sm leading-relaxed mb-4">
                      {gift.description}
                    </p>
                    <div className="pt-4 border-t border-beige-200">
                      <p className="text-xs text-gold-600 font-semibold uppercase tracking-wider mb-2">Environmental Impact</p>
                      <p className="text-sm font-display font-semibold text-forest-700">
                        {gift.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENVIRONMENTAL BENEFITS */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Environmental Impact</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Our Promise to the <span className="text-gradient-gold">Planet</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              Measurable actions and verifiable commitments to environmental protection and regeneration.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {environmentalBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-luxury p-8 border-l-4 border-gold-600"
              >
                <div className="flex items-start gap-4">
                  <benefit.icon className="w-8 h-8 text-gold-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-forest-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-forest-600/70 text-sm leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <div className="inline-block bg-gold-500/10 rounded-lg px-4 py-2 border border-gold-200/50">
                      <p className="font-display font-bold text-gold-600 text-sm">
                        {benefit.stat}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY PILLARS & STATS */}
      <section className="section-padding bg-forest-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="container-luxury relative z-10">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Our Operations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Sustainability <span className="text-gold-400">In Numbers</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Measurable commitments across all aspects of our manufacturing and business operations.
            </p>
            <div className="gold-divider-center mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {sustainabilityPillars.map((pillar, i) => (
              <motion.div
                key={i}
                {...scaleIn}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center p-8 bg-white/5 border border-white/10 rounded-card hover:border-gold-400/50 transition-colors group"
              >
                <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <pillar.icon className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="inline-block bg-gold-500/10 rounded-full px-4 py-2 border border-gold-400/30">
                  <p className="font-display font-bold text-gold-400 text-xl">
                    {pillar.stat}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ANIMATED COUNTERS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            <motion.div {...stagger} transition={{ delay: 0.1, duration: 0.5 }} className="text-center">
              <AnimatedCounter end={95} label="Water Recycled" />
            </motion.div>
            <motion.div {...stagger} transition={{ delay: 0.2, duration: 0.5 }} className="text-center">
              <AnimatedCounter end={100} label="Energy from Renewables" />
            </motion.div>
            <motion.div {...stagger} transition={{ delay: 0.3, duration: 0.5 }} className="text-center">
              <AnimatedCounter end={99} label="Waste Reduction" />
            </motion.div>
            <motion.div {...stagger} transition={{ delay: 0.4, duration: 0.5 }} className="text-center">
              <AnimatedCounter end={100} label="Sustainable Sourcing" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION & STANDARDS */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Certifications</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Verified <span className="text-gradient-gold">Sustainability</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              Our commitment is certified by leading environmental and manufacturing standards organizations.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'FSC Certified', desc: 'Forest Stewardship Council certification for sustainable wood sourcing' },
              { name: 'ISO 14001', desc: 'Environmental management system certification' },
              { name: 'Zero Waste Manufacturing', desc: 'Certified zero-waste manufacturing processes' },
              { name: 'Organic Compliance', desc: 'Organic material sourcing and processing' },
              { name: 'Carbon Neutral', desc: 'Third-party verified carbon neutral operations' },
              { name: 'Ethical Sourcing', desc: 'Fair trade and ethical supply chain practices' },
            ].map((cert, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-luxury p-6 text-center border-t-4 border-t-gold-600 group"
              >
                <Award className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                <h3 className="font-display font-semibold text-forest-800 mb-2">
                  {cert.name}
                </h3>
                <p className="text-forest-600/70 text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-padding bg-forest-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="container-luxury relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Ready to Make An Impact</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Choose Sustainable <br />
              <span className="text-gold-400">Luxury Today</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10">
              Every purchase contributes to reforestation, waste reduction, and positive environmental change. Join hundreds of brands creating a greener future with Woodex Mumbai.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:contact@woodexmumbai.com" className="btn-secondary border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-forest-700 inline-flex items-center gap-2">
                Request Custom Solution
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
