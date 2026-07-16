import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Package, Users, DollarSign, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';

const RequestQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    mobileNumber: '',
    productRequirement: '',
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const productCategories = [
    { value: '', label: 'Select a product category' },
    { value: 'wooden-boxes', label: 'Wooden Gift Boxes' },
    { value: 'desk-accessories', label: 'Desk Accessories' },
    { value: 'photo-frames', label: 'Photo Frames' },
    { value: 'personalized-items', label: 'Personalized Items' },
    { value: 'corporate-sets', label: 'Corporate Gift Sets' },
    { value: 'custom-design', label: 'Custom Design' },
    { value: 'other', label: 'Other' }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.productRequirement) {
      newErrors.productRequirement = 'Please select a product category';
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(Number(formData.quantity)) || Number(formData.quantity) <= 0) {
      newErrors.quantity = 'Please enter a valid quantity';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setFormData({
      name: '',
      companyName: '',
      email: '',
      mobileNumber: '',
      productRequirement: '',
      quantity: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    setLoading(false);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Get customized quotes based on your specific requirements and order volume'
    },
    {
      icon: Package,
      title: 'Product Variety',
      description: 'Choose from our extensive range of premium wooden gift items'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Our team will guide you through the entire quotation process'
    }
  ];

  return (
    <>
      <SEO
        title="Request Quote | Woodex Mumbai"
        description="Get customized pricing for your corporate gifting needs. Submit your requirements and receive a professional quote from Woodex Mumbai."
      />

      <PageHero
        title="Request a Quote"
        subtitle="Get Customized Pricing for Your Requirements"
        breadcrumbs={[{ label: "Request Quote" }]}
      />

      <section className="section-padding bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
        <div className="container-luxury">
          {/* Benefits Section - Improved Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 group text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="gold-divider mb-16" />

          {/* Quote Form Section */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tell Us About Your Requirements
              </h2>
              <p className="text-gray-400 text-base max-w-2xl mx-auto">
                Fill out the form below with your details and specific product needs. Our team will review your requirements and send you a customized quote within 24 hours.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 space-y-6"
            >
              {/* Two Column Layout for better organization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-amber-500 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border-2 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-900 ${
                      errors.name ? 'border-red-500/50' : 'border-gray-700'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Company Name Field */}
                <div>
                  <label className="block text-sm font-medium text-amber-500 mb-2">
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border-2 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-900 ${
                      errors.companyName ? 'border-red-500/50' : 'border-gray-700'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.companyName}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-amber-500 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border-2 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-900 ${
                      errors.email ? 'border-red-500/50' : 'border-gray-700'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Mobile Number Field */}
                <div>
                  <label className="block text-sm font-medium text-amber-500 mb-2">
                    Mobile Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border-2 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-900 ${
                      errors.mobileNumber ? 'border-red-500/50' : 'border-gray-700'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.mobileNumber}</span>
                    </p>
                  )}
                </div>

                {/* Product Category Field */}
                <div>
                  <label className="block text-sm font-medium text-amber-500 mb-2">
                    Product Requirement <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="productRequirement"
                    value={formData.productRequirement}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border-2 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-900 appearance-none cursor-pointer ${
                      errors.productRequirement ? 'border-red-500/50' : 'border-gray-700'
                    }`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23fbbf24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5rem'
                    }}
                  >
                    {productCategories.map(category => (
                      <option key={category.value} value={category.value} className="bg-gray-900 text-white">
                        {category.label}
                      </option>
                    ))}
                  </select>
                  {errors.productRequirement && (
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.productRequirement}</span>
                    </p>
                  )}
                </div>

                {/* Quantity Field */}
                <div>
                  <label className="block text-sm font-medium text-amber-500 mb-2">
                    Quantity <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Enter quantity"
                    min="1"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border-2 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-900 ${
                      errors.quantity ? 'border-red-500/50' : 'border-gray-700'
                    }`}
                  />
                  {errors.quantity && (
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.quantity}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field - Full Width */}
              <div>
                <label className="block text-sm font-medium text-amber-500 mb-2">
                  Additional Requirements
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific customization, design preferences, or special requirements? (Optional)"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/80 border-2 border-gray-700 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-900 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-amber-500/25"
                >
                  <span>{loading ? 'Submitting...' : 'Request Quote'}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-400 font-medium">Quote request submitted successfully!</p>
                    <p className="text-green-400/70 text-sm">Our team will review your requirements and send a customized quote within 24 hours.</p>
                  </div>
                </motion.div>
              )}
            </motion.form>

            {/* Additional Info - Improved Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-500 mb-2">Need Immediate Assistance?</h3>
                  <p className="text-gray-400">
                    Our sales team is ready to help you with any questions about our products and pricing.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+917700051312"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium transition-all duration-300 border border-gray-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Us</span>
                  </a>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestQuote;