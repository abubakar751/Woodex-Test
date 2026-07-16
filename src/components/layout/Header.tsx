import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Clients', path: '/clients' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-luxury'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-forest-700 text-white/90 text-xs hidden md:block">
        <div className="container-luxury flex items-center justify-between py-1.5">
          <div className="flex items-center gap-4">
            <a href="tel:7700051312" className="hover:text-gold-400 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3" /> 7700051312
            </a>
            <span className="text-white/40">|</span>
            <a href="mailto:info@woodexmumbai.com" className="hover:text-gold-400 transition-colors">
              info@woodexmumbai.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span>A Sustainable Brand of ZAK Kreations</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-luxury">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* Logo */}
<Link to="/" className="flex items-center shrink-0">
  <img
    src="/banner.png"
    alt="Woodex Mumbai - Smart Gifting for a Better Planet"
    className="
      h-12
      sm:h-12
      md:h-16
      lg:h-18
      w-auto
      object-contain
      drop-shadow-sm
      transition-all
      duration-300
      hover:scale-[1.02]
    "
  />
</Link>


          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-gold-600 bg-gold-50'
                    : 'text-forest-600 hover:text-gold-600 hover:bg-beige-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/request-quote" className="btn-primary btn-sm">
              Request Quote
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-forest-700 hover:text-gold-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-beige-200 overflow-hidden"
          >
            <nav className="container-luxury py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-gold-600 bg-gold-50'
                      : 'text-forest-600 hover:text-gold-600 hover:bg-beige-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-beige-200 mt-2">
                <Link to="/request-quote" className="btn-primary btn-sm block text-center">
                  Request Quote
                </Link>
                
              </div>
              <div className="pt-4 border-t border-beige-200 mt-2 text-sm text-forest-500 space-y-1">
                <a href="tel:7700051312" className="block hover:text-gold-600">Call: 7700051312</a>
                <a href="mailto:info@woodexmumbai.com" className="block hover:text-gold-600">info@woodexmumbai.com</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
