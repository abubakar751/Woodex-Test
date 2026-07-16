import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WhatsAppButton() {
  return (
    <a
  href="https://wa.me/919833160655?text=Hello%20Woodex%20Mumbai%2C%20I%20am%20interested%20in%20your%20corporate%20gifting%20solutions."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-4 z-40 p-0 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 overflow-hidden"
  aria-label="Chat on WhatsApp"
>
  <img 
    src="/whatsapp-logo.png" 
    alt="WhatsApp" 
    className="w-14 h-14 object-cover"
  />
</a>
  );
}

export function CallButton() {
  return (
    <a
      href="tel:7700051312"
      className="fixed bottom-6 left-6 z-40 bg-forest-700 text-gold-400 p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-6 z-40 bg-gold-500 text-forest-700 p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gold-600 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function FloatingQuoteCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          href="/request-quote"
          className="fixed top-1/2 -translate-y-1/2 right-0 z-30 bg-forest-700 text-gold-400 px-3 py-4 rounded-l-lg shadow-luxury writing-vertical hover:bg-forest-800 transition-colors text-sm font-semibold tracking-wider"
          style={{ writingMode: 'vertical-rl' }}
        >
          REQUEST QUOTE
        </motion.a>
      )}
    </AnimatePresence>
  );
}
