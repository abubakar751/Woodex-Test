import { useState } from 'react'; // ADDED: missing import
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Leaf, Settings, TreePine, Truck, Package, Flag,
  ArrowRight, ChevronRight, Star, // REMOVED: ChevronLeft (unused)
  Gift, LayoutGrid, Sprout, Layers, UserPlus, Calendar,
  Award, Quote, MessageCircle, Download
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PlaceholderImage from '../components/ui/PlaceholderImage';
import { productCategories } from '../data/products';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { clients } from '../data/clients';
import { WhatsAppButton } from '../components/ui/FloatingElements';

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

const trustItems = [
  { icon: Leaf, label: '100% Sustainable', desc: 'Eco-friendly materials' },
  { icon: Settings, label: '100% Customizable', desc: 'Tailored to your brand' },
  { icon: TreePine, label: 'Eco-Friendly', desc: 'Green manufacturing' },
  { icon: Truck, label: 'PAN India Delivery', desc: 'Nationwide reach' },
  { icon: Package, label: 'Bulk Orders', desc: 'Scalable solutions' },
  { icon: Flag, label: 'Make In India', desc: 'Proudly Indian' },
];

const productIcons: Record<string, typeof Gift> = {
  'corporate-gifts': Gift,
  'desk-organizers': LayoutGrid,
  'bamboo-products': Sprout,
  'mdf-products': Layers,
  'welcome-kits': UserPlus,
  'event-merchandise': Calendar,
  'festive-hampers': Package, // FIXED: removed colon
  'awards-trophies': Award,
};

const testimonials = [
  { name: 'Rajesh Sharma', role: 'VP Marketing, PharmaCorp India', text: 'Woodex Mumbai delivered exceptional quality corporate gifts for our annual conference. The wooden items were beautifully crafted and our clients loved them.' },
  { name: 'Priya Patel', role: 'HR Director, TechVista Solutions', text: 'The employee welcome kits have transformed our onboarding experience. New hires feel valued from day one, and the sustainable approach aligns with our values.' },
  { name: 'Anil Mehta', role: 'CEO, GlobalCorp Enterprises', text: 'We switched to Woodex for all our corporate gifting needs. The quality, customization, and service are unmatched. Highly recommend for B2B gifting.' },
];

const faqs = [
  { q: 'What types of corporate gifts does Woodex Mumbai offer?', a: 'We offer a wide range of premium wooden and bamboo corporate gifts including desk organizers, pen sets, welcome kits, awards, trophies, festive hampers, and fully customized products.' },
  { q: 'Do you offer bulk ordering for corporate events?', a: 'Yes, we specialize in bulk corporate orders with dedicated project management, consistent quality, and timeline delivery across India.' },
  { q: 'Can I customize gifts with my company branding?', a: 'Absolutely! We offer laser engraving, UV printing, and customized branding options to ensure your corporate gifts perfectly represent your brand identity.' },
  { q: 'What is the typical delivery timeline?', a: 'Standard orders are delivered within 7-10 business days. Bulk orders and custom designs projects may require 15-20 days depending on complexity and quantity.' },
  { q: 'Are your products truly sustainable?', a: 'Yes, all our products are made from sustainably sourced wood and bamboo. We use eco-friendly manufacturing processes and plastic-free packaging to minimize environmental impact.' },
  { q: 'Do you deliver across India?', a: 'Yes, we provide PAN India delivery for all our corporate gifting products with reliable logistics partners ensuring safe and timely delivery.' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Sustainable Luxury Corporate Gifting"
        description="Woodex Mumbai - Premium eco-friendly wooden corporate gifts for pharmaceutical, healthcare, and enterprise clients across India. Sustainable luxury by ZAK Kreations."
      />

      {/* HERO */}
     <section className="relative min-h-screen flex items-center bg-gradient-to-br from-beige-50 via-white to-beige-100 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-wooden-texture opacity-30" />
  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest-700/5 to-transparent hidden lg:block" />
  
  {/* Animated Background Circles */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-700/5 rounded-full blur-3xl animate-pulse delay-1000" />

  <div className="container-luxury relative z-10 pt-28 pb-16">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT COLUMN - Content */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 bg-forest-700/10 backdrop-blur-sm text-forest-700 px-5 py-2.5 rounded-full text-sm font-medium border border-gold-500/20 shadow-sm">
          <Leaf className="w-4 h-4 text-gold-600 animate-pulse" />
          A Sustainable Brand of ZAK Kreations
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-forest-800 leading-[1.1] mb-6">
          Sustainable <br />
          <span className="text-gradient-gold relative inline-block">
            Luxury
            <svg className="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 200 4" preserveAspectRatio="none">
              <line x1="0" y1="2" x2="200" y2="2" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="4 4"/>
            </svg>
          </span> 
          Corporate <br />
          Gifting
        </h1>

        {/* Description with Highlighted Tags */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gold-500/20 shadow-lg">
          <p className="text-lg text-forest-600/90 leading-relaxed">
            Premium Eco-Friendly Wooden Gifts for Corporate Leaders, Pharma Companies & Businesses Across India.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 items-center">
            <span className="inline-flex items-center gap-2 bg-forest-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              🌿 Vocal for Local
            </span>
            <span className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              🚫 Say No to Plastic
            </span>
            <span className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              🇮🇳 Make in India
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="/request-quote" className="btn-primary flex items-center gap-2 group">
            Request Quote 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="https://wa.me/919833160655"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold px-6 py-3 rounded-btn flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <img 
              src="/whatsapp-logo.png" 
              alt="WhatsApp" 
              className="w-6 h-6 object-contain"
            /> 
            WhatsApp Us
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center gap-8 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-ping" />
            <div className="w-2 h-2 bg-gold-500 rounded-full -ml-2" />
            <span className="text-sm font-medium text-forest-600">Trusted by 100+ Brands</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-gold-600" />
            <span className="text-sm font-medium text-forest-600">PAN India Delivery</span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT COLUMN - Image & Stats */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }} 
        className="order-first lg:order-last mb-8 lg:mb-0"
      >
        <div className="relative">
          {/* Main Image Container */}
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-beige-100 to-beige-200 relative group">
            <img 
              src="/home.jpeg" 
              alt="Premium Corporate Gift Showcase - Woodex Mumbai" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Stats Cards - Below Image */}
          <div className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-xl border-2 border-gold-500/20 bg-gradient-to-br from-white to-gold-50/50 px-4 py-3 sm:px-6 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">500+</p>
                <p className="text-xs uppercase tracking-wider text-forest-600 font-semibold mt-1">
                  Channel Partners
                </p>
                <div className="w-12 h-0.5 bg-gold-500/30 mt-2 rounded-full" />
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-xl border-2 border-gold-500/20 bg-gradient-to-br from-white to-gold-50/50 px-4 py-3 sm:px-6 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">6+ </p>
                <p className="text-xs uppercase tracking-wider text-forest-600 font-semibold mt-1">
                  Years of Excellence
                </p>
                <div className="w-12 h-0.5 bg-gold-500/30 mt-2 rounded-full" />
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-xl border-2 border-gold-500/20 bg-gradient-to-br from-white to-gold-50/50 px-4 py-3 sm:px-6 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">4M+</p>
                <p className="text-xs uppercase tracking-wider text-forest-600 font-semibold mt-1">
                  Units Delivered
                </p>
                <div className="w-12 h-0.5 bg-gold-500/30 mt-2 rounded-full" />
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-xl border-2 border-gold-500/20 bg-gradient-to-br from-white to-gold-50/50 px-4 py-3 sm:px-6 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">100+</p>
                <p className="text-xs uppercase tracking-wider text-forest-600 font-semibold mt-1">
                 corporate clients
                </p>
                <div className="w-12 h-0.5 bg-gold-500/30 mt-2 rounded-full" />
              </motion.div>
            </div>
          </div>
          
          {/* Top Right Floating Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            >
            
          </motion.div>

          {/* Bottom Left Floating Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
              >
            
            
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>

  {/* Gradient Definitions */}
  <svg className="hidden" width="0" height="0">
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#F3E5AB" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
    </defs>
  </svg>
</section>
      {/* TRUST SECTION */}
      <section className="bg-forest-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="container-luxury relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustItems.map((item, i) => (
              <motion.div key={i} {...stagger} transition={{ delay: i * 0.1, duration: 0.5 }} className="text-center">
                <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-gold-500/20">
                  <item.icon className="w-7 h-7 text-gold-400" />
                </div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-white/50 text-xs mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
     <section className="section-padding bg-white">
  <div className="container-luxury">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div {...fadeInUp}>
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-divider-left" />
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">About Woodex Mumbai</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mb-6">
          Crafting Sustainable Luxury for <span className="text-gradient-gold">Corporate India</span>
        </h2>
        <p className="text-forest-600/80 leading-relaxed mb-4">
          Woodex Mumbai, a sustainable brand of ZAK Kreations, is a premier manufacturer and supplier of eco-friendly wooden corporate gifts. We combine traditional craftsmanship with modern design to create premium products that reflect your brand values.
        </p>
        <p className="text-forest-600/80 leading-relaxed mb-8">
          From pharmaceutical giants to IT leaders, we serve India's top corporations with sustainable, customizable wooden gifts that leave lasting impressions while caring for the planet.
        </p>
        <Link to="/about" className="btn-primary inline-flex items-center gap-2">
          Learn More About Us <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
        <div className="relative">
          {/* Image Container - Shows full image without cropping */}
          <div className="rounded-card overflow-hidden shadow-luxury-lg bg-beige-100 flex items-center justify-center">
            <img 
              src="/show.jpeg" 
              alt="Woodex Mumbai Team" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Stats Overlay */}
          
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* FEATURED PRODUCTS */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Premium Corporate <span className="text-gradient-gold">Gift Categories</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              Explore our diverse range of sustainable wooden products, each crafted to perfection and customizable to your brand requirements.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.slice(0, 8).map((cat, i) => {
              // OPTIONAL ENHANCEMENT: Use specific icons for each product category
              const IconComponent = productIcons[cat.id] || Gift;
              return (
                <motion.div key={cat.id} {...stagger} transition={{ delay: i * 0.08, duration: 0.5 }}>
                  <Link to="/products" className="card-luxury p-6 block group">
                    <div className="w-12 h-12 bg-forest-700/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500/10 transition-colors">
                      <IconComponent className="w-6 h-6 text-forest-700 group-hover:text-gold-600 transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-forest-800 mb-2 group-hover:text-gold-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-forest-500/70 line-clamp-2 mb-4">{cat.description}</p>
                    <span className="text-gold-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Comprehensive <span className="text-gradient-gold">Gifting Solutions</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              End-to-end corporate gifting services from design to delivery, ensuring every gift reflects your brand excellence.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <motion.div key={service.id} {...stagger} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <div className="card-luxury p-8 h-full group">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                    <Gift className="w-7 h-7 text-gold-600" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-forest-800 mb-3 group-hover:text-gold-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-forest-500/70 leading-relaxed mb-5">{service.description}</p>
                  <Link to="/services" className="text-gold-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES OVERVIEW */}
      <section className="section-padding bg-forest-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="container-luxury relative z-10">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Tailored Solutions for <span className="text-gold-400">Every Sector</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We understand that every industry has unique gifting needs. Our solutions are customized for your sector's specific requirements.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.slice(0, 7).map((ind, i) => (
              <motion.div key={ind.id} {...stagger} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <Link to="/industries" className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-card p-6 block group hover:bg-white/10 hover:border-gold-500/30 transition-all">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                    <Gift className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-white/50 line-clamp-2">{ind.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/industries" className="bg-gold-500 text-forest-700 font-semibold px-8 py-3.5 rounded-btn hover:bg-gold-600 transition-colors inline-flex items-center gap-2">
              View All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENT LOGO SLIDER */}
    <section className="section-padding bg-beige-50">
  <div className="container-luxury">
    <motion.div className="text-center mb-14" {...fadeInUp}>
      <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Clients</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
        Trusted by Leading <span className="text-gradient-gold">Brands Across India</span>
      </h2>
      <div className="gold-divider mt-6" />
    </motion.div>

    <div className="relative overflow-hidden">
      <div 
        className="flex gap-12 items-center"
        style={{
          animation: 'scrollRightToLeft 25s linear infinite',
          width: 'max-content'
        }}
      >
        {[...clients, ...clients].map((client, i) => (
          <div 
            key={`${client.id}-${i}`} 
            className="shrink-0 w-40 h-20 bg-white rounded-card flex items-center justify-center border border-beige-200 transition-all duration-300 hover:shadow-luxury"
          >
            <img src={client.logo} alt={client.name} className="w-full h-full object-contain p-3" />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* CSS Animation */}
  <style>{`
    @keyframes scrollRightToLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              What Our <span className="text-gradient-gold">Clients Say</span>
            </h2>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...stagger} transition={{ delay: i * 0.15, duration: 0.5 }}>
                <div className="card-luxury p-8 h-full relative">
                  <Quote className="w-10 h-10 text-gold-200 mb-4" />
                  <p className="text-forest-600/80 leading-relaxed mb-6 italic">{t.text}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <div className="border-t border-beige-200 pt-4">
                    <p className="font-display font-semibold text-forest-800">{t.name}</p>
                    <p className="text-sm text-forest-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-forest-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="container-luxury relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Ready to Elevate Your <br />
              <span className="text-gold-400">Corporate Gifting?</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10">
              Let us help you create sustainable, premium corporate gifts that strengthen your business relationships and reflect your brand values.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote" className="btn-primary flex items-center gap-2">
                Request a Quote <ArrowRight className="w-4 h-4" />
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-luxury overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-display font-semibold text-forest-800 pr-4">{question}</span>
        <ChevronRight className={`w-5 h-5 text-gold-500 shrink-0 transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <p className="text-forest-600/70 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}