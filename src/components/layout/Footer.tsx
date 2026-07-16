import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ArrowRight, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
];

const productLinks = [
  { label: 'Corporate Gifts', path: '/products' },
  { label: 'Desk Organizers', path: '/products' },
  { label: 'Bamboo Products', path: '/products' },
  { label: 'Employee Welcome Kits', path: '/products' },
  { label: 'Awards & Trophies', path: '/products' },
  { label: 'Festive Hampers', path: '/products' },
];

const serviceLinks = [
  { label: 'Corporate Gifting', path: '/services' },
  { label: 'Laser Engraving', path: '/services' },
  { label: 'UV Printing', path: '/services' },
  { label: 'Brand Merchandising', path: '/services' },
  { label: 'Bulk Orders', path: '/services' },
  { label: 'Event Merchandise', path: '/services' },
];

const industryLinks = [
  { label: 'Pharmaceutical', path: '/industries' },
  { label: 'Healthcare', path: '/industries' },
  { label: 'IT Companies', path: '/industries' },
  { label: 'Banking & Finance', path: '/industries' },
  { label: 'Manufacturing', path: '/industries' },
  { label: 'Education', path: '/industries' },
];

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-forest-700">
        <div className="container-luxury py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-gold-400">Stay Updated</h3>
              <p className="text-white/70 mt-1">Subscribe to our newsletter for the latest in sustainable corporate gifting.</p>
            </div>
            <form className="flex w-full md:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-btn bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold-400 w-full md:w-72"
              />
              <button type="submit" className="btn-primary shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
<Link to="/" className="flex items-center shrink-0">
  <img
    src="/banner2.png"
    alt="Woodex Mumbai - Smart Gifting for a Better Planet"
    className="
      h-12
      sm:h-14
      md:h-16
      lg:h-20
      w-auto
      object-contain
      drop-shadow-sm
      transition-all
      duration-300
      hover:scale-[1.02]
    "
  />
</Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Premium eco-friendly wooden corporate gifts for businesses across India.
              Sustainable luxury crafted with purpose and precision.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <a href="tel:8422004807" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4 text-gold-500" />7700051312
              </a>
              <a href="mailto:info@woodexmumbai.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4 text-gold-500" /> info@woodexmumbai.com
              </a>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gold-500" /> www.woodexmumbai.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path + link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-gold-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-400 mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-gold-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Industries */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-400 mb-4">Services</h4>
            <ul className="space-y-2 mb-8">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-gold-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display text-lg font-semibold text-gold-400 mb-4">Industries</h4>
            <ul className="space-y-2">
              {industryLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-gold-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Woodex Mumbai. A Sustainable Brand of ZAK Kreations. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/catalogue" className="hover:text-gold-400 transition-colors">Sitemap</Link>
            <span>|</span>
            <Link to="/sustainability" className="hover:text-gold-400 transition-colors">Sustainability</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
