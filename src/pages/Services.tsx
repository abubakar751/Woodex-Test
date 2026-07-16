import { motion } from 'framer-motion';
import {
  Gift, BadgeCheck, PenTool, Printer, Palette, Package,
  Calendar, Volume2, Truck, ArrowRight, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';
import { services } from '../data/services';

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

const iconMap: Record<string, typeof Gift> = {
  Gift,
  BadgeCheck,
  PenTool,
  Printer,
  Palette,
  Package,
  Calendar,
  Volume2,
  Truck,
};

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We understand your brand vision, requirements, and timeline. Our experts discuss your corporate gifting goals to create the perfect strategy.',
    icon: Gift,
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Our creative team develops customized designs that align with your brand identity. We provide mockups and samples for your approval.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Production',
    description: 'With your approval, we move to production using premium materials and advanced techniques like laser engraving and UV printing.',
    icon: Printer,
  },
  {
    number: '04',
    title: 'Quality & Delivery',
    description: 'Every product undergoes rigorous quality checks before secure packaging and pan-India delivery to your doorstep.',
    icon: Truck,
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Corporate Gifting & Branding Services | Woodex Mumbai"
        description="Premium corporate gifting services including laser engraving, UV printing, brand merchandising, and custom branding solutions for businesses across India."
      />

      {/* PAGE HERO */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Corporate Gifting Solutions"
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* SERVICES GRID */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Premium Services</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              End-to-End <span className="text-gradient-gold">Gifting Excellence</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              From consultation to delivery, we handle every aspect of your corporate gifting journey with premium craftsmanship and meticulous attention to detail.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon] || Gift;
              return (
                <motion.div
                  key={service.id}
                  {...stagger}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="h-full"
                >
                  <div className="card-luxury p-8 h-full flex flex-col group hover:shadow-luxury-lg transition-all duration-300 relative overflow-hidden">
                    {/* Decorative gradient background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-400/10 rounded-full flex items-center justify-center mb-6 group-hover:from-gold-500/30 group-hover:to-gold-400/20 transition-all duration-300 border border-gold-300/20 group-hover:border-gold-400/40">
                      <IconComponent className="w-8 h-8 text-gold-600 group-hover:text-gold-500 transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-bold text-forest-800 mb-3 group-hover:text-gold-600 transition-colors relative z-10">
                      {service.name}
                    </h3>

                    <p className="text-sm text-forest-500/80 leading-relaxed mb-6 relative z-10">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8 flex-grow relative z-10">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 border border-gold-400/30">
                            <Check className="w-3 h-3 text-gold-600" />
                          </div>
                          <span className="text-sm text-forest-600/70">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/request-quote"
                      className="btn-primary inline-flex items-center gap-2 group/btn relative z-10 w-full justify-center mt-auto"
                    >
                      Request Quote
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section-padding bg-forest-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="container-luxury relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Our Proven <span className="text-gold-400">Process</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We follow a streamlined process that ensures quality, transparency, and timely delivery at every step of your corporate gifting project.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={i}
                  {...stagger}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-card p-8 h-full hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300 group">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-forest-800">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-gold-500/15 rounded-full flex items-center justify-center mb-5 group-hover:bg-gold-500/25 transition-colors border border-gold-400/20 group-hover:border-gold-400/40">
                      <StepIcon className="w-7 h-7 text-gold-400 group-hover:text-gold-300 transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Connector Line (hidden on last item) */}
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gold-500/50 to-transparent" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Process Timeline Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-card p-8">
              <h3 className="font-display text-xl font-bold text-white mb-4">Our Commitment to Excellence</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold-400 mb-2">7-10</p>
                  <p className="text-sm text-white/60">Standard Turnaround (Days)</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold-400 mb-2">100%</p>
                  <p className="text-sm text-white/60">Quality Guaranteed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold-400 mb-2">Pan-India</p>
                  <p className="text-sm text-white/60">Delivery Coverage</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE SERVICES SECTION */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Why Our Services</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Premium Service <span className="text-gradient-gold">Advantages</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              Discover what sets our services apart and why 500+ corporate brands trust us for their most important gifting moments.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <motion.div {...fadeInUp} className="space-y-6">
              {[
                {
                  title: 'Customization Expertise',
                  description: 'From logo design to full brand integration, we customize every element to reflect your corporate identity perfectly.',
                },
                {
                  title: 'Advanced Technology',
                  description: 'Laser engraving, UV printing, and digital embroidery capabilities ensure flawless execution of your design vision.',
                },
                {
                  title: 'Quality Assurance',
                  description: 'Multi-stage quality checks ensure every product meets our premium standards before it reaches you.',
                },
                {
                  title: 'Dedicated Support',
                  description: 'Personal account managers guide you through every phase, from initial consultation to final delivery.',
                },
                {
                  title: 'Eco-Conscious',
                  description: 'All services use sustainable materials and environmentally responsible processes without compromise on quality.',
                },
                {
                  title: 'Bulk Scaling',
                  description: 'Efficient processes allow us to handle massive orders while maintaining consistent quality across every piece.',
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  {...stagger}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-1 border border-gold-400/30">
                    <Check className="w-4 h-4 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-forest-800 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-forest-600/70">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="relative">
                <div className="bg-gradient-to-br from-gold-50 to-beige-50 rounded-card p-8 border border-gold-200/30">
                  <div className="space-y-6">
                    <div className="bg-white rounded-card p-6 border border-beige-200 shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-forest-700 rounded-full flex items-center justify-center">
                          <Gift className="w-6 h-6 text-gold-400" />
                        </div>
                        <h4 className="font-display font-semibold text-forest-800">Corporate Gifting</h4>
                      </div>
                      <p className="text-sm text-forest-600/70">Expert solutions for client relations, employee rewards, and brand positioning.</p>
                    </div>

                    <div className="bg-white rounded-card p-6 border border-beige-200 shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-forest-700 rounded-full flex items-center justify-center">
                          <Palette className="w-6 h-6 text-gold-400" />
                        </div>
                        <h4 className="font-display font-semibold text-forest-800">Brand Customization</h4>
                      </div>
                      <p className="text-sm text-forest-600/70">Laser engraving, UV printing, and advanced techniques ensure perfect brand representation.</p>
                    </div>

                    <div className="bg-white rounded-card p-6 border border-beige-200 shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-forest-700 rounded-full flex items-center justify-center">
                          <Truck className="w-6 h-6 text-gold-400" />
                        </div>
                        <h4 className="font-display font-semibold text-forest-800">Pan-India Delivery</h4>
                      </div>
                      <p className="text-sm text-forest-600/70">Secure, timely delivery across the country with real-time tracking and support.</p>
                    </div>
                  </div>
                </div>

                {/* Accent Element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE PACKAGES */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Flexible Options</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Service <span className="text-gradient-gold">Packages</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              Tailored solutions for projects of any scale, from intimate corporate events to massive nationwide campaigns.
            </p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Starter Package',
                description: 'Perfect for small teams and initial orders',
                minQty: '25+ items',
                features: [
                  'Single product customization',
                  'One design revision',
                  'Basic packaging',
                  '10-12 days turnaround',
                  'Standard delivery',
                ],
              },
              {
                title: 'Professional Package',
                description: 'Ideal for medium-sized corporate gifting',
                minQty: '100+ items',
                features: [
                  'Multiple product options',
                  'Three design revisions',
                  'Premium packaging',
                  '7-10 days turnaround',
                  'Pan-India delivery',
                  'Dedicated account manager',
                ],
                highlight: true,
              },
              {
                title: 'Enterprise Package',
                description: 'Complete solutions for large-scale campaigns',
                minQty: '500+ items',
                features: [
                  'Full product customization',
                  'Unlimited design revisions',
                  'Luxury packaging',
                  '5-7 days turnaround',
                  'Priority delivery',
                  'Dedicated project manager',
                  'Custom logistics support',
                ],
              },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.12 }}
                className={`rounded-card border transition-all duration-300 ${
                  pkg.highlight
                    ? 'card-luxury border-gold-400/50 shadow-luxury-lg scale-105'
                    : 'bg-white border-beige-200 hover:shadow-luxury'
                }`}
              >
                <div className="p-8 h-full flex flex-col relative">
                  {pkg.highlight && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-gold-500 to-transparent px-4 py-2 rounded-bl-lg text-white text-xs font-bold uppercase">
                      Most Popular
                    </div>
                  )}

                  <h3 className="font-display text-xl font-bold text-forest-800 mb-2">{pkg.title}</h3>
                  <p className="text-sm text-forest-600/70 mb-4">{pkg.description}</p>

                  <div className="mb-6 pb-6 border-b border-beige-200">
                    <p className="text-xs text-gold-600 font-semibold uppercase tracking-wider">Minimum Order</p>
                    <p className="font-display text-2xl font-bold text-forest-800">{pkg.minQty}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-forest-600/70">
                        <Check className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/request-quote"
                    className={`text-center font-semibold py-3 px-6 rounded-btn transition-all duration-300 ${
                      pkg.highlight
                        ? 'btn-primary'
                        : 'border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-forest-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="container-luxury relative z-10">
          <motion.div className="text-center" {...fadeInUp}>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Ready to Begin</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Let's Create Your <br />
              <span className="text-gradient-gold">Perfect Corporate Gifts</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
              Connect with our experts to discuss your vision, timelines, and requirements. We'll craft the perfect gifting solution that reflects your brand excellence.
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

            <p className="text-white/50 text-sm mt-8">
              Or call us: <span className="text-gold-400 font-semibold">+91-8422-004-807</span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import { MessageCircle } from 'lucide-react';
