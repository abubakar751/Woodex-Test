import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Gift, LayoutGrid, Sprout, Layers, UserPlus, Calendar,
  Package, Award, Tag, Wand2, ArrowRight, CheckCircle2,
  Filter, Grid3X3, ListIcon
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PlaceholderImage from '../components/ui/PlaceholderImage';
import PageHero from '../components/sections/PageHero';
import { productCategories } from '../data/products';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const categoryIcons: Record<string, typeof Gift> = {
  'corporate-gifts': Gift,
  'desk-organizers': LayoutGrid,
  'bamboo-products': Sprout,
  'mdf-products': Layers,
  'welcome-kits': UserPlus,
  'event-merchandise': Calendar,
  'festive-hampers': Package,
  'awards-trophies': Award,
  'branding-merchandise': Tag,
  'customized-wooden': Wand2,
};

export default function Products() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <>
      <SEO
        title="Product Categories"
        description="Explore Woodex Mumbai's complete range of premium sustainable corporate gifts - wooden desk organizers, bamboo products, employee welcome kits, awards, and customized solutions."
      />

      {/* PAGE HERO */}
      <PageHero
        title="Our Products"
        subtitle="Premium Sustainable Corporate Gift Collection"
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* VIEW CONTROLS */}
      <section className="section-padding bg-beige-50 border-b border-beige-200">
        <div className="container-luxury">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-forest-700 font-semibold">
                Showing <span className="text-gold-600 font-display">{productCategories.length}</span> product categories
              </p>
              <p className="text-sm text-forest-500/70 mt-1">
                Handcrafted with sustainable materials, customizable to your brand
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-btn transition-all ${
                  viewMode === 'grid'
                    ? 'bg-forest-700 text-white'
                    : 'bg-white border border-beige-300 text-forest-600 hover:bg-beige-100'
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-btn transition-all ${
                  viewMode === 'list'
                    ? 'bg-forest-700 text-white'
                    : 'bg-white border border-beige-300 text-forest-600 hover:bg-beige-100'
                }`}
                aria-label="List view"
              >
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GRID VIEW */}
      {viewMode === 'grid' && (
        <section className="section-padding bg-white">
          <div className="container-luxury">
            <div className="space-y-24">
              {productCategories.map((category, index) => {
                const Icon = categoryIcons[category.id] || Gift;
                const isEven = index % 2 === 0;

                return (
                  <motion.section key={category.id} {...fadeInUp} className="relative">
                    {/* ALTERNATING LAYOUT */}
                    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven && 'lg:auto-cols-auto'}`}>
                      {/* IMAGE SECTION */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7 }}
                        className={isEven ? '' : 'lg:order-2'}
                      >
                        <div className="relative">
                          <div className="rounded-card overflow-hidden shadow-luxury-lg">
                            <PlaceholderImage
                              text={category.name}
                              aspect="aspect-[4/3]"
                              className="w-full"
                            />
                          </div>

                          {/* FLOATING STATS CARD */}
                          <div className={`absolute -bottom-6 ${isEven ? 'left-6' : 'right-6'} bg-white rounded-card shadow-luxury-lg p-4 max-w-xs`}>
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/20">
                                <Icon className="w-6 h-6 text-gold-600" />
                              </div>
                              <div>
                                <p className="font-display font-bold text-forest-800 text-sm">
                                  {category.products.length}+ Items
                                </p>
                                <p className="text-xs text-forest-500">Available in collection</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* CONTENT SECTION */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className={isEven ? '' : 'lg:order-1'}
                      >
                        {/* CATEGORY TAG */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-1 h-8 bg-gradient-to-b from-gold-600 to-gold-400 rounded-full" />
                          <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">
                            Category {index + 1} of {productCategories.length}
                          </span>
                        </div>

                        {/* TITLE */}
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mb-4">
                          {category.name}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-lg text-forest-600/80 leading-relaxed mb-8 max-w-md">
                          {category.description}
                        </p>

                        {/* FEATURES LIST */}
                        <div className="mb-10">
                          <p className="font-display font-semibold text-forest-700 text-sm uppercase tracking-wider mb-4">
                            Key Features
                          </p>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {category.features.map((feature, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="w-5 h-5 text-gold-600 mt-0.5 shrink-0" />
                                <span className="text-forest-600/70 text-sm leading-snug">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* SAMPLE PRODUCTS */}
                        <div className="mb-10 pb-10 border-b border-beige-200">
                          <p className="font-display font-semibold text-forest-700 text-sm uppercase tracking-wider mb-3">
                            Sample Products
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {category.products.map((product, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-2 bg-beige-100 text-forest-700 px-3 py-1.5 rounded-full text-xs border border-beige-200"
                              >
                                <span className="text-gold-600 font-semibold">•</span>
                                {product.name}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA BUTTON */}
                        <Link
                          to="/request-quote"
                          className="btn-primary inline-flex items-center gap-2 group"
                        >
                          Request Quote
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>

                    {/* DECORATIVE DIVIDER */}
                    {index < productCategories.length - 1 && (
                      <div className="mt-24 flex items-center gap-4">
                        <div className="flex-1 h-px bg-gradient-to-r from-beige-200 via-gold-200 to-transparent" />
                        <div className="text-gold-600/50">
                          <Package className="w-5 h-5" />
                        </div>
                      </div>
                    )}
                  </motion.section>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (
        <section className="section-padding bg-white">
          <div className="container-luxury">
            <div className="space-y-4">
              {productCategories.map((category, index) => {
                const Icon = categoryIcons[category.id] || Gift;

                return (
                  <motion.div
                    key={category.id}
                    {...fadeInUp}
                    className="card-luxury p-6 hover:shadow-luxury-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-6">
                      {/* ICON */}
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-500/10 to-forest-700/5 rounded-lg flex items-center justify-center border border-gold-500/20 group-hover:border-gold-500/40 transition-colors shrink-0">
                        <Icon className="w-8 h-8 text-gold-600" />
                      </div>

                      {/* CONTENT */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <span className="inline-block text-gold-600 font-semibold text-xs uppercase tracking-wider mb-2">
                              Category {index + 1}
                            </span>
                            <h3 className="font-display text-xl md:text-2xl font-bold text-forest-800 group-hover:text-gold-600 transition-colors">
                              {category.name}
                            </h3>
                          </div>
                          <span className="text-forest-500 text-sm font-medium bg-beige-100 px-3 py-1 rounded-full shrink-0">
                            {category.products.length} Items
                          </span>
                        </div>

                        <p className="text-forest-600/80 mb-4 line-clamp-2">
                          {category.description}
                        </p>

                        {/* FEATURES PREVIEW */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {category.features.slice(0, 3).map((feature, i) => (
                            <span key={i} className="text-xs text-forest-600/60 bg-forest-50 px-2 py-1 rounded-sm">
                              {feature}
                            </span>
                          ))}
                          {category.features.length > 3 && (
                            <span className="text-xs text-gold-600 font-medium">
                              +{category.features.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* ACTION */}
                        <Link
                          to="/request-quote"
                          className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm hover:gap-3 transition-all"
                        >
                          Request Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS SECTION */}
      <section className="section-padding bg-forest-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="container-luxury relative z-10">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Why Choose Woodex</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Premium Quality <span className="text-gold-400">Guaranteed</span>
            </h2>
            <div className="gold-divider mt-6 mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gift,
                title: 'Customizable Branding',
                desc: 'Laser engraving, UV printing, and full brand integration on all products',
              },
              {
                icon: Layers,
                title: 'Premium Materials',
                desc: 'Sustainably sourced wood, bamboo, and eco-friendly MDF options',
              },
              {
                icon: Award,
                title: 'Expert Craftsmanship',
                desc: 'Handcrafted by skilled artisans with over 10 years of experience',
              },
              {
                icon: Package,
                title: 'Bulk Ordering',
                desc: 'Scalable production with consistent quality across large quantities',
              },
              {
                icon: Sprout,
                title: '100% Sustainable',
                desc: 'Eco-friendly manufacturing and plastic-free packaging',
              },
              {
                icon: Truck,
                title: 'Pan India Delivery',
                desc: 'Reliable logistics ensuring safe and timely delivery nationwide',
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-card p-6 hover:bg-white/10 hover:border-gold-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4 border border-gold-500/20">
                  <benefit.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2 text-lg">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <motion.div className="text-center" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Ready to Get Started?</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-forest-800 mt-4 mb-6">
              Find Your Perfect <br />
              <span className="text-gradient-gold">Corporate Gift</span>
            </h2>
            <p className="text-forest-600/70 max-w-xl mx-auto mb-10">
              With 10 product categories and unlimited customization options, we have the perfect gift solution for your corporate needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote" className="btn-primary inline-flex items-center gap-2 group">
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
  href="https://wa.me/919833160655"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-btn flex items-center gap-2 hover:bg-[#1DA851] transition-colors shadow-luxury"
>
  <img 
    src="/whatsapp-logo.png" 
    alt="WhatsApp" 
    className="w-8 h-8 object-contain"
  /> 
  WhatsApp Us
</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Import additional icon
import { MessageCircle, Truck } from 'lucide-react';
