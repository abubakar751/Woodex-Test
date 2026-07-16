import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle, Linkedin, Instagram, Facebook } from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      email: '',
      mobile: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8422004807', '+91 7700051312'],
      link: 'tel:+918422004807'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@woodexmumbai.com'],
      link: 'mailto:info@woodexmumbai.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday', '9:00 AM - 6:00 PM IST'],
      link: null
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/woodexmumbai' },
    { name: 'Instagram', icon: Instagram, url: ' https://www.instagram.com/woodexmumbai?igsh=MWd1azl4N2p4bXhoMQ==' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/1XdUMpFGB3/' }
  ];

  return (
    <>
      <SEO
        title="Contact Us | Woodex Mumbai"
        description="Get in touch with Woodex Mumbai for premium corporate gifting solutions. Contact our team for inquiries and custom orders."
      />

      <PageHero
        title="Contact Us"
        subtitle="Get in Touch with Our Team"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-padding bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
        <div className="container-luxury">
          {/* Contact Info Cards - Improved Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="space-y-1 block hover:text-amber-500 transition-colors"
                        >
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-400 text-sm">{detail}</p>
                          ))}
                        </a>
                      ) : (
                        <div className="space-y-1">
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-400 text-sm">{detail}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="gold-divider mb-16" />

          {/* Main Contact Area - Two Column Layout Fixed */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form - Takes 3 columns on large screens */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Send us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
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

                  {/* Email and Mobile - Two column layout for better spacing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-amber-500 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
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

                    <div>
                      <label className="block text-sm font-medium text-amber-500 mb-2">
                        Mobile Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border-2 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-900 ${
                          errors.mobile ? 'border-red-500/50' : 'border-gray-700'
                        }`}
                      />
                      {errors.mobile && (
                        <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.mobile}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium text-amber-500 mb-2">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border-2 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-900 ${
                        errors.subject ? 'border-red-500/50' : 'border-gray-700'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-amber-500 mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border-2 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-amber-500 focus:bg-gray-900 resize-none ${
                        errors.message ? 'border-red-500/50' : 'border-gray-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-amber-500/25"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

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
                        <p className="text-green-400 font-medium">Message sent successfully!</p>
                        <p className="text-green-400/70 text-sm">We'll get back to you shortly.</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Sidebar - Takes 2 columns on large screens */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* WhatsApp CTA */}
              <motion.a
  href="https://wa.me/919833160655"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.02 }}
  className="block bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-500/60 hover:from-emerald-500/20 hover:to-emerald-600/10 transition-all duration-300"
>
  <div className="flex items-center space-x-4">
    <div className="p-3 bg-emerald-500/20 rounded-xl">
      <img 
        src="/whatsapp-logo.png" 
        alt="WhatsApp" 
        className="w-8 h-8 object-contain"
      />
    </div>
    <div>
      <p className="text-sm text-gray-400">Chat with us on</p>
      <p className="text-xl font-bold text-white">WhatsApp</p>
      <p className="text-emerald-400 text-sm mt-1">Click to start conversation →</p>
    </div>
  </div>
</motion.a>

              {/* Business Address */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      A52, 2 floor MCGM Building, Nahar Amrit Shakti, <br />
                       Next to White Lily Building Near DMart, Chandivali <br />
                       Mumbai - Maharashtra 400072
                    </p>
                  </div>
                </div>
              </div>

              {/* Website Info */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Visit Our Website</h3>
                    <a
                      href="https://www.woodexmumbai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-400 transition-colors font-medium break-all"
                    >
                      www.woodexmumbai.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-11 h-11 rounded-xl bg-gray-900 hover:bg-amber-500 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
                <p className="text-gray-500 text-xs mt-4">Connect with us on social media for updates and inspiration</p>
              </div>

              {/* Map Preview */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative w-full h-56 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-amber-500 mx-auto mb-2 opacity-50" />
                    <p className="text-gray-400 text-sm">📍 Andheri East, Mumbai</p>
                    <p className="text-gray-500 text-xs mt-2">A52, 2 floor MCGM Building, Nahar Amrit Shakti,
Next to White Lily <br /> Building Near DMart, Chandivali
Mumbai - Maharashtra 400072n</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;