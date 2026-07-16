import { motion } from 'framer-motion';
import {
  HeartPulse, Heart, Monitor, Building, Building2, GraduationCap, Briefcase,
  ArrowRight, CheckCircle2, TrendingUp, Users, Globe, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';
import { industries } from '../data/industries';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const industryIcons: Record<string, typeof HeartPulse> = {
  'Pill': HeartPulse,
  'Heart': Heart,
  'Monitor': Monitor,
  'Building': Building,
  'Factory': Building2,
  'GraduationCap': GraduationCap,
  'Briefcase': Briefcase,
};

export default function Industries() {
  const stats = [
    {
      icon: TrendingUp,
      number: '7+',
      label: 'Industries Served',
      desc: 'From healthcare to corporate enterprises',
    },
    {
      icon: Users,
      number: '500+',
      label: 'Satisfied Clients',
      desc: 'Across different sectors',
    },
    {
      icon: Globe,
      number: '10k+',
      label: 'Custom Solutions',
      desc: 'Tailored for unique needs',
    },
    {
      icon: Zap,
      number: '100%',
      label: 'Premium Quality',
      desc: 'Sustainable & ethical',
    },
  ];

  return (
    <>
      <SEO
        title="Industries We Serve"
        description="Discover Woodex Mumbai's specialized gifting solutions for Pharmaceutical, Healthcare, IT Companies, Banking & Finance, Manufacturing, Education, and Corporate Enterprises."
      />

      {/* PAGE HERO */}
      <PageHero
        title="Industries We Serve"
        subtitle="Tailored Solutions for Every Sector"
        breadcrumbs={[{ label: 'Industries' }]}
      />

      {/* STATS SECTION */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Trusted by Leading <span className="text-gradient-gold">Organizations</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-luxury p-6 text-center hover:shadow-luxury-lg transition-all"
                >
                  <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/20">
                    <StatIcon className="w-7 h-7 text-gold-600" />
                  </div>
                  <div className="font-display text-3xl font-bold text-forest-800 mb-1">
                    {stat.number}
                  </div>
                  <h3 className="font-semibold text-forest-700 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-forest-600/60">
                    {stat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Specialized Solutions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Industry-Specific <span className="text-gradient-gold">Expertise</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              Each industry has unique gifting requirements. We provide customized solutions that align with sector-specific standards and expectations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industryIcons[industry.icon] || Briefcase;

              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                  className="card-luxury overflow-hidden hover:shadow-luxury-lg transition-all group"
                >
                  {/* CARD HEADER WITH GRADIENT */}
                  <div className="relative bg-gradient-to-r from-forest-700 to-forest-800 p-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-wooden-texture" />
                    <div className="absolute -right-12 -top-12 w-32 h-32 bg-gold-500/10 rounded-full" />

                    <div className="relative z-10 flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center border border-gold-500/30 group-hover:border-gold-500/60 group-hover:bg-gold-500/30 transition-all">
                        <Icon className="w-8 h-8 text-gold-400" />
                      </div>
                      <span className="text-gold-400 font-semibold text-xs uppercase tracking-wider bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                        Industry {index + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  {/* CARD BODY */}
                  <div className="p-8">
                    {/* SOLUTIONS SECTION */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-6 bg-gradient-to-b from-gold-600 to-gold-400 rounded-full" />
                        <h4 className="font-display font-semibold text-forest-800 uppercase text-sm tracking-wider">
                          Tailored Solutions
                        </h4>
                      </div>

                      <div className="space-y-3 mb-8">
                        {industry.solutions.map((solution, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-gold-600 mt-0.5 shrink-0" />
                            <span className="text-forest-600/80 text-sm leading-relaxed">
                              {solution}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="mb-6 h-px bg-gradient-to-r from-beige-200 via-gold-200 to-transparent" />

                    {/* WHY CHOOSE SECTION */}
                    <div className="mb-8">
                      <p className="font-display font-semibold text-forest-700 text-xs uppercase tracking-wider mb-3">
                        Why Choose Woodex
                      </p>
                      <ul className="space-y-2 text-sm text-forest-600/70">
                        <li className="flex items-center gap-2">
                          <span className="text-gold-600 font-bold">•</span>
                          Premium quality aligned with industry standards
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-gold-600 font-bold">•</span>
                          Sustainable and compliant materials
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-gold-600 font-bold">•</span>
                          Expert customization for brand integration
                        </li>
                      </ul>
                    </div>

                    {/* CTA BUTTON */}
                    <Link
                      to="/request-quote"
                      className="btn-primary inline-flex items-center gap-2 group w-full justify-center text-center"
                    >
                      Request Custom Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mt-3 mb-4">
              Industry-Specific <span className="text-gradient-gold">Customization</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto">
              We understand that each sector has distinct requirements, compliance needs, and gifting cultures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Analysis',
                desc: 'We conduct thorough research into your industry\'s gifting standards, compliance requirements, and cultural preferences.',
                icon: Monitor,
              },
              {
                title: 'Customized Solutions',
                desc: 'From material selection to branding, every aspect is tailored to align with your industry\'s unique identity.',
                icon: Zap,
              },
              {
                title: 'Quality Assurance',
                desc: 'Rigorous testing and quality checks ensure products meet industry-specific standards and expectations.',
                icon: CheckCircle2,
              },
            ].map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-500/20">
                    <ItemIcon className="w-8 h-8 text-gold-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-forest-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-forest-600/70 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="section-padding bg-forest-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-wooden-texture opacity-5" />
        <div className="container-luxury relative z-10">
          <motion.div className="text-center mb-14" {...fadeInUp}>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Industry Partnership</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Why Leading Organizations <span className="text-gold-400">Choose Us</span>
            </h2>
            <div className="gold-divider mt-6 mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Proven Track Record',
                desc: '500+ satisfied clients across 7+ industries with consistent quality and reliability',
              },
              {
                icon: Globe,
                title: 'Pan-India Reach',
                desc: 'Reliable logistics and delivery capabilities across the entire country',
              },
              {
                icon: Zap,
                title: 'Quick Turnaround',
                desc: 'Efficient production and timely delivery without compromising on quality',
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                desc: 'Personalized account management and industry-specific consultation',
              },
            ].map((benefit, i) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-card p-6 hover:bg-white/10 hover:border-gold-500/30 transition-all"
                >
                  <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4 border border-gold-500/20">
                    <BenefitIcon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2 text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <motion.div className="text-center" {...fadeInUp}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Let's Partner Together</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-forest-800 mt-4 mb-6">
              Transform Your <br />
              <span className="text-gradient-gold">Industry Gifting Strategy</span>
            </h2>
            <p className="text-forest-600/70 max-w-2xl mx-auto mb-10 text-lg">
              Connect with our team to discuss your industry's unique requirements and discover how Woodex can elevate your corporate gifting program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote" className="btn-primary inline-flex items-center gap-2 group">
                Get Industry-Specific Quote
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

          {/* TRUST INDICATORS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 pt-12 border-t border-beige-200"
          >
            <p className="text-center text-forest-600/60 text-sm uppercase tracking-wider font-semibold mb-6">
              Trusted by Organizations in
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-forest-600/50 text-sm font-medium">
              <span>Pharmaceutical</span>
              <span className="w-1 h-1 bg-forest-600/30 rounded-full" />
              <span>Healthcare</span>
              <span className="w-1 h-1 bg-forest-600/30 rounded-full" />
              <span>IT & Tech</span>
              <span className="w-1 h-1 bg-forest-600/30 rounded-full" />
              <span>Banking</span>
              <span className="w-1 h-1 bg-forest-600/30 rounded-full" />
              <span>Manufacturing</span>
              <span className="w-1 h-1 bg-forest-600/30 rounded-full" />
              <span>Education</span>
              <span className="w-1 h-1 bg-forest-600/30 rounded-full" />
              <span>Corporate</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
