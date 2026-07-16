import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, AlertCircle, FileText, Award, Zap, Lock } from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';

const Catalogue: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    mobileNumber: '',
    email: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate API call and file download
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setFormData({
      name: '',
      company: '',
      mobileNumber: '',
      email: ''
    });

    // Simulate downloading a PDF (in real scenario, trigger actual download)
    console.log('Downloading catalogue for:', formData);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    setLoading(false);
  };

  const catalogueFeatures = [
    {
      icon: FileText,
      title: 'Complete Product Range',
      description: 'Browse our entire collection of premium wooden gifts and corporate items'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Detailed specifications and quality certifications for all products'
    },
    {
      icon: Zap,
      title: 'Customization Options',
      description: 'Learn about our bespoke design and personalization capabilities'
    },
    {
      icon: Lock,
      title: 'Exclusive Pricing',
      description: 'Access special bulk pricing and corporate discounts'
    }
  ];

  const catalogueContent = [
    { title: 'Wooden Gift Boxes', items: 15 },
    { title: 'Desk Accessories', items: 12 },
    { title: 'Photo Frames & Display Items', items: 18 },
    { title: 'Personalized Wooden Items', items: 10 },
    { title: 'Corporate Gift Sets', items: 8 },
    { title: 'Custom Design Services', items: 'Unlimited' }
  ];

  return (
    <>
      <SEO
        title="Download Catalogue | Woodex Mumbai"
        description="Download our comprehensive catalogue of premium wooden corporate gifts. Explore our complete product range with specifications and pricing."
        keywords="catalogue, download, products, corporate gifts, woodex, mumbai"
      />

      <PageHero
        title="Download Catalogue"
        subtitle="Explore Our Complete Product Collection"
        breadcrumbs={[{ label: "Catalogue" }]}
      />

      <section className="section-padding bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
        <div className="container-luxury">
          {/* What's Inside Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">What's Inside Our Catalogue</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our comprehensive catalogue showcases the finest selection of premium wooden corporate gifts and personalized items. Each product is carefully curated to meet the highest standards of quality and design.
            </p>
          </motion.div>

          {/* Catalogue Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {catalogueFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="card-luxury text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-lg">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="gold-divider mb-16" />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Catalogue Content Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Comprehensive Product Collection</h2>

              <div className="space-y-4 mb-8">
                {catalogueContent.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg bg-gray-800/40 border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300 flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-white font-medium">{item.title}</span>
                    </div>
                    <span className="text-amber-500 font-semibold text-sm">
                      {typeof item.items === 'number' ? `${item.items} Products` : item.items}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-amber-500/10 border border-amber-500/20 space-y-2"
              >
                <p className="text-amber-500 font-semibold flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Premium Quality Guaranteed</span>
                </p>
                <p className="text-gray-300 text-sm">
                  All products in our catalogue meet international quality standards and are crafted with precision and care.
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Download Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-luxury p-8 space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Download Our Catalogue</h3>
                  <p className="text-gray-400">
                    Get instant access to our complete product catalogue by filling out the form below.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-amber-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 border-gray-700 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-800 ${
                        errors.name ? 'border-red-500/50' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </motion.div>

                  {/* Company Field */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-amber-500 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 border-gray-700 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-800 ${
                        errors.company ? 'border-red-500/50' : ''
                      }`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </motion.div>

                  {/* Mobile Number Field */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-amber-500 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="+91 XXXX XXXXXX"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 border-gray-700 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-800 ${
                        errors.mobileNumber ? 'border-red-500/50' : ''
                      }`}
                    />
                    {errors.mobileNumber && (
                      <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.mobileNumber}</span>
                      </p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-amber-500 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 border-gray-700 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-800 ${
                        errors.email ? 'border-red-500/50' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="pt-2"
                  >
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed py-3"
                    >
                      <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                      <span>{loading ? 'Processing...' : 'Download Catalogue'}</span>
                    </button>
                  </motion.div>

                  {/* Success Message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-400 font-medium">Download started!</p>
                        <p className="text-green-400/70 text-sm">Check your downloads folder for the catalogue PDF.</p>
                      </div>
                    </motion.div>
                  )}
                </form>

                {/* Privacy Notice */}
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy. Your information will only be used to send the catalogue and related updates.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Discuss Your Custom Requirements?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Our design team can create bespoke solutions tailored to your specific needs. Get in touch for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/request-quote" className="btn-primary">
                Request a Quote
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Catalogue;
