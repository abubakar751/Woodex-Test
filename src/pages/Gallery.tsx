import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ZoomIn, ChevronDown, ChevronLeft, ChevronRight, Grid, List, Image as ImageIcon, Loader2 } from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface SelectedItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

// ===== COMPLETE GALLERY DATA - 35 CATEGORIES WITH 5 IMAGES EACH =====
const GALLERY_DATA: GalleryItem[] = [
  // ===== 1. BOOKSELFHOLDER =====
  {
    id: 'bsh-1',
    title: 'Classic Book Self Holder',
    category: 'BOOKSELFHOLDER',
    description: 'Elegant book self holder with premium wooden finish, perfect for corporate gifting.',
    image: '/PRODUCT CATEGORY/BOOKSELFHOLDER/20260210_173717.jpg'
  },
  {
    id: 'bsh-2',
    title: 'Premium Book Self Holder',
    category: 'BOOKSELFHOLDER',
    description: 'Premium book self holder with exquisite craftsmanship and durable build.',
    image: '/PRODUCT CATEGORY/BOOKSELFHOLDER/20260210_173613.eJtRfRnx.jpg'
  },
  {
    id: 'bsh-3',
    title: 'Deluxe Book Self Holder',
    category: 'BOOKSELFHOLDER',
    description: 'Deluxe edition with elegant wooden base and superior finishing.',
    image: '/PRODUCT CATEGORY/BOOKSELFHOLDER/20260210_173727.jpg'
  },
  

  // ===== 2. BOWL =====
  {
    id: 'bowl-1',
    title: 'Classic Decorative Bowl',
    category: 'BOWL',
    description: 'Elegant decorative bowl perfect for professional settings.',
    image: '/PRODUCT CATEGORY/BOWL/20260211_131532.jpg'
  },
  {
    id: 'bowl-2',
    title: 'Premium Serving Bowl',
    category: 'BOWL',
    description: 'Premium bowl with multiple compartments for versatile use.',
    image: '/PRODUCT CATEGORY/BOWL/20260211_131545.jpg'
  },
  {
    id: 'bowl-3',
    title: 'Deluxe Crystal Bowl',
    category: 'BOWL',
    description: 'Deluxe crystal bowl with elegant design and premium finish.',
    image: '/PRODUCT CATEGORY/BOWL/20260211_132010.jpg'
  },
  {
    id: 'bowl-4',
    title: 'Executive Collection Bowl',
    category: 'BOWL',
    description: 'Executive series bowl crafted with premium materials.',
    image: '/PRODUCT CATEGORY/BOWL/20260211_132115.jpg'
  },
  

  // ===== 3. CERTIFICATE =====
  {
    id: 'cert-1',
    title: 'Classic Certificate Frame',
    category: 'CERTIFICATE',
    description: 'Premium certificate frame for displaying awards and achievements.',
    image: '/PRODUCT CATEGORY/CERTIFICATE/20260211_145909.jpg'
  },
  {
    id: 'cert-2',
    title: 'Premium Certificate Frame',
    category: 'CERTIFICATE',
    description: 'Elegant certificate frame with refined finish and gold accents.',
    image: '/PRODUCT CATEGORY/CERTIFICATE/20260211_150302.jpg'
  },
  {
    id: 'cert-3',
    title: 'Deluxe Certificate Display',
    category: 'CERTIFICATE',
    description: 'Deluxe display frame with premium glass and wooden backing.',
    image: '/PRODUCT CATEGORY/CERTIFICATE/20260211_150318.jpg'
  },
  

  // ===== 4. CHESS BOARD =====
  {
    id: 'chess-1',
    title: 'Classic Wooden Chess Board',
    category: 'CHESS BOARD',
    description: 'Elegant wooden chess board for professionals and enthusiasts.',
    image: '/PRODUCT CATEGORY/CHESS BOARD/20260210_175526.jpg'
  },
  {
    id: 'chess-2',
    title: 'Premium Carved Chess Board',
    category: 'CHESS BOARD',
    description: 'Premium chess board with intricately carved pieces.',
    image: '/PRODUCT CATEGORY/CHESS BOARD/20260210_175859.jpg'
  },
  {
    id: 'chess-3',
    title: 'Deluxe Marble Chess Board',
    category: 'CHESS BOARD',
    description: 'Deluxe chess board with elegant marble finish.',
    image: '/PRODUCT CATEGORY/CHESS BOARD/20260210_180014.jpg'
  },
  

  // ===== 5. COMPLETE DESK ORGANISER =====
  {
    id: 'cdo-1',
    title: 'Classic Desk Organiser',
    category: 'COMPLETE DESK ORGANISER',
    description: 'Complete desk organiser for efficient workspace management.',
    image: '/PRODUCT CATEGORY/COMPLETE DESK ORGANISER/20260210_171919.jpg'
  },
  {
    id: 'cdo-2',
    title: 'Premium Desk Organiser',
    category: 'COMPLETE DESK ORGANISER',
    description: 'Premium organiser with multiple sections and premium finish.',
    image: '/PRODUCT CATEGORY/COMPLETE DESK ORGANISER/20260211_140535.jpg'
  },
  {
    id: 'cdo-3',
    title: 'Deluxe Office Organiser',
    category: 'COMPLETE DESK ORGANISER',
    description: 'Deluxe organiser with wooden compartments and sleek design.',
    image: '/PRODUCT CATEGORY/COMPLETE DESK ORGANISER/20260210_171729.jpg'
  },
  {
    id: 'cdo-4',
    title: 'Executive Desk System',
    category: 'COMPLETE DESK ORGANISER',
    description: 'Executive system with comprehensive organisation features.',
    image: '/PRODUCT CATEGORY/COMPLETE DESK ORGANISER/20260210_172125.jpg'
  },
  {
    id: 'cdo-5',
    title: 'Signature Desk Organiser',
    category: 'COMPLETE DESK ORGANISER',
    description: 'Signature collection with premium materials and design.',
    image: '/PRODUCT CATEGORY/COMPLETE DESK ORGANISER/20260211_140519.jpg'
  },

  // ===== 6. DESK CALENDAR =====
  {
    id: 'dc-1',
    title: 'Classic Desk Calendar',
    category: 'DESK CALENDAR',
    description: 'Elegant desk calendar with premium wooden base.',
    image: '/PRODUCT CATEGORY/DESK CALENDAR/20260210_141329.jpg'
  },
  {
    id: 'dc-2',
    title: 'Premium Wooden Calendar',
    category: 'DESK CALENDAR',
    description: 'Premium desk calendar with handcrafted wooden design.',
    image: '/PRODUCT CATEGORY/DESK CALENDAR/20260210_141449.jpg'
  },
  {
    id: 'dc-3',
    title: 'Deluxe Calendar System',
    category: 'DESK CALENDAR',
    description: 'Deluxe calendar with elegant design and premium finish.',
    image: '/PRODUCT CATEGORY/DESK CALENDAR/20260210_135328.jpg'
  },
  {
    id: 'dc-4',
    title: 'Executive Desk Calendar',
    category: 'DESK CALENDAR',
    description: 'Executive series calendar with sophisticated features.',
    image: '/PRODUCT CATEGORY/DESK CALENDAR/20260210_141812.jpg'
  },
  {
    id: 'dc-5',
    title: 'Signature Collection Calendar',
    category: 'DESK CALENDAR',
    description: 'Signature calendar with unique design elements.',
    image: '/PRODUCT CATEGORY/DESK CALENDAR/IMG_20230312_185809.jpg'
  },

  // ===== 7. DESK CLOCK =====
  {
    id: 'dcl-1',
    title: 'Classic Desk Clock',
    category: 'DESK CLOCK',
    description: 'Elegant desk clock with timeless design for professionals.',
    image: '/PRODUCT CATEGORY/DESK CLOCK/20250613_151530.jpg'
  },
  {
    id: 'dcl-2',
    title: 'Premium Roman Clock',
    category: 'DESK CLOCK',
    description: 'Premium desk clock with roman numerals and gold finish.',
    image: '/PRODUCT CATEGORY/DESK CLOCK/20250517_130536.jpg'
  },
  {
    id: 'dcl-3',
    title: 'Deluxe Chrome Clock',
    category: 'DESK CLOCK',
    description: 'Deluxe chrome clock with modern design and precision.',
    image: '/PRODUCT CATEGORY/DESK CLOCK/20260211_132817.jpg'
  },
  {
    id: 'dcl-4',
    title: 'Executive Desk Clock',
    category: 'DESK CLOCK',
    description: 'Executive series clock with premium craftsmanship.',
    image: '/PRODUCT CATEGORY/DESK CLOCK/20260211_142810.jpg'
  },
  {
    id: 'dcl-5',
    title: 'Signature Collection Clock',
    category: 'DESK CLOCK',
    description: 'Signature collection with unique design and premium materials.',
    image: '/PRODUCT CATEGORY/DESK CLOCK/20260211_141652.jpg'
  },

  // ===== 8. DESK ORGANISER COMBO =====
  {
    id: 'doc-1',
    title: 'Classic Organiser Combo',
    category: 'DESK ORGANISER COMBO',
    description: 'Complete desk organiser combo with multiple accessories.',
    image: '/PRODUCT CATEGORY/DESK ORGANISER COMBO/20260213_152037.jpg'
  },
  {
    id: 'doc-2',
    title: 'Premium Organiser Combo',
    category: 'DESK ORGANISER COMBO',
    description: 'Premium combo with organiser, pen stand, and card holder.',
    image: '/PRODUCT CATEGORY/DESK ORGANISER COMBO/IMG_20230318_185959.jpg'
  },
  {
    id: 'doc-3',
    title: 'Deluxe Wooden Combo',
    category: 'DESK ORGANISER COMBO',
    description: 'Deluxe wooden finish combo for executive desks.',
    image: '/PRODUCT CATEGORY/DESK ORGANISER COMBO/20260212_131455.jpg'
  },
  {
    id: 'doc-4',
    title: 'Executive Desk Combo',
    category: 'DESK ORGANISER COMBO',
    description: 'Executive series combo with premium features.',
    image: '/PRODUCT CATEGORY/DESK ORGANISER COMBO/IMG_20230312_183158.jpg'
  },
  {
    id: 'doc-5',
    title: 'Signature Organiser Combo',
    category: 'DESK ORGANISER COMBO',
    description: 'Signature collection with premium materials and design.',
    image: '/PRODUCT CATEGORY/DESK ORGANISER COMBO/20260213_151916.jpg'
  },

  // ===== 9. DIWALI HAMPER =====
  {
    id: 'dh-1',
    title: 'Classic Diwali Hamper',
    category: 'DIWALI HAMPER',
    description: 'Elegant Diwali hamper with premium gifts and sweets.',
    image: '/PRODUCT CATEGORY/DIWALI HAMPER/586b247bc59f67d3b471e9cb315dbd5e.jpg'
  },
  {
    id: 'dh-2',
    title: 'Premium Diwali Gift Set',
    category: 'DIWALI HAMPER',
    description: 'Premium hamper with assorted luxury gifts.',
    image: '/PRODUCT CATEGORY/DIWALI HAMPER/1000119453-removebg-preview.jpg'
  },
  {
    id: 'dh-3',
    title: 'Deluxe Festive Hamper',
    category: 'DIWALI HAMPER',
    description: 'Deluxe hamper with premium chocolates and dry fruits.',
    image: '/PRODUCT CATEGORY/DIWALI HAMPER/1a9f072b95791e2955842778333624e1.jpg'
  },
  {
    id: 'dh-4',
    title: 'Executive Diwali Collection',
    category: 'DIWALI HAMPER',
    description: 'Executive series with curated luxury gifts.',
    image: '/PRODUCT CATEGORY/DIWALI HAMPER/96e71b1074687f7e6d36c3a4621f67dd.jpg'
  },
  {
    id: 'dh-5',
    title: 'Signature Celebration Hamper',
    category: 'DIWALI HAMPER',
    description: 'Signature collection with premium packaging and gifts.',
    image: '/PRODUCT CATEGORY/DIWALI HAMPER/1000118698-removebg-preview.jpg'
  },

  // ===== 10. DR IN OUT =====
  {
    id: 'dio-1',
    title: 'Classic Dr In/Out Board',
    category: 'DR IN OUT',
    description: 'Elegant doctor in/out sign board for clinics.',
    image: '/PRODUCT CATEGORY/DR IN OUT/20260210_174717.jpg'
  },
  {
    id: 'dio-2',
    title: 'Premium LED In/Out Board',
    category: 'DR IN OUT',
    description: 'Premium in/out board with LED lighting.',
    image: '/PRODUCT CATEGORY/DR IN OUT/20260210_180855.jpg'
  },
  {
    id: 'dio-3',
    title: 'Deluxe In/Out System',
    category: 'DR IN OUT',
    description: 'Deluxe board with premium finish and features.',
    image: '/PRODUCT CATEGORY/DR IN OUT/20260210_174823.jpg'
  },
  {
    id: 'dio-4',
    title: 'Executive In/Out Board',
    category: 'DR IN OUT',
    description: 'Executive series with sophisticated design.',
    image: '/PRODUCT CATEGORY/DR IN OUT/20260210_181013.jpg'
  },
  {
    id: 'dio-5',
    title: 'Signature In/Out Collection',
    category: 'DR IN OUT',
    description: 'Signature collection with premium materials.',
    image: '/PRODUCT CATEGORY/DR IN OUT/20260210_174731.jpg'
  },

  // ===== 11. DR NAME PLATE =====
  {
    id: 'dnp-1',
    title: 'Classic Dr Name Plate',
    category: 'DR NAME PLATE',
    description: 'Elegant name plate for doctors with premium finish.',
    image: '/PRODUCT CATEGORY/DR NAME PLATE/20260210_134124.jpg'
  },
  {
    id: 'dnp-2',
    title: 'Premium Gold Name Plate',
    category: 'DR NAME PLATE',
    description: 'Premium name plate with gold finish and engraving.',
    image: '/PRODUCT CATEGORY/DR NAME PLATE/20260210_134433.jpg'
  },
  {
    id: 'dnp-3',
    title: 'Deluxe Name Plate Set',
    category: 'DR NAME PLATE',
    description: 'Deluxe set with matching accessories.',
    image: '/PRODUCT CATEGORY/DR NAME PLATE/20260210_134621.jpg'
  },
  {
    id: 'dnp-4',
    title: 'Executive Name Plate',
    category: 'DR NAME PLATE',
    description: 'Executive series with sophisticated design.',
    image: '/PRODUCT CATEGORY/DR NAME PLATE/20260210_134820.jpg'
  },
  {
    id: 'dnp-5',
    title: 'Signature Name Plate',
    category: 'DR NAME PLATE',
    description: 'Signature collection with premium engraving.',
    image: '/PRODUCT CATEGORY/DR NAME PLATE/20260210_134952.jpg'
  },

  // ===== 12. KEY CHAIN =====
  {
    id: 'kc-1',
    title: 'Classic Key Chain',
    category: 'KEY CHAIN',
    description: 'Elegant key chain with premium finish.',
    image: '/PRODUCT CATEGORY/KEY CHAIN/HEART SHAPE/20250505_120558.jpg'
  },
  {
    id: 'kc-2',
    title: 'Premium Leather Key Chain',
    category: 'KEY CHAIN',
    description: 'Premium key chain with genuine leather strap.',
    image: '/PRODUCT CATEGORY/KEY CHAIN/20260211_145342.jpg'
  },
  {
    id: 'kc-3',
    title: 'Deluxe Key Chain Set',
    category: 'KEY CHAIN',
    description: 'Deluxe set with multiple key chains.',
    image: '/PRODUCT CATEGORY/KEY CHAIN/HEART SHAPE/20250505_123756.jpg'
  },
  {
    id: 'kc-4',
    title: 'Executive Key Chain',
    category: 'KEY CHAIN',
    description: 'Executive series with premium metal finish.',
    image: '/PRODUCT CATEGORY/KEY CHAIN/HEART SHAPE/20250505_123840.jpg'
  },
  {
    id: 'kc-5',
    title: 'Signature Key Chain',
    category: 'KEY CHAIN',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/KEY CHAIN/HEART SHAPE/20250505_123130.jpg'
  },

  // ===== 13. KEY HANGER =====
  {
    id: 'kh-1',
    title: 'Classic Key Hanger',
    category: 'KEY HANGER',
    description: 'Elegant key hanger for office and home.',
    image: '/PRODUCT CATEGORY/KEY HANGER/20250614_141403.jpg'
  },
  {
    id: 'kh-2',
    title: 'Premium Wooden Key Hanger',
    category: 'KEY HANGER',
    description: 'Premium key hanger with wooden base and hooks.',
    image: '/PRODUCT CATEGORY/KEY HANGER/20260210_174607.jpg'
  },
  {
    id: 'kh-3',
    title: 'Deluxe Key Organiser',
    category: 'KEY HANGER',
    description: 'Deluxe organiser with multiple hooks.',
    image: '/PRODUCT CATEGORY/KEY HANGER/20250618_134618.jpg'
  },
  {
    id: 'kh-4',
    title: 'Executive Key Hanger',
    category: 'KEY HANGER',
    description: 'Executive series with premium finish.',
    image: '/PRODUCT CATEGORY/KEY HANGER/20250614_141433.jpg'
  },
  {
    id: 'kh-5',
    title: 'Signature Key Hanger',
    category: 'KEY HANGER',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/KEY HANGER/20260210_174435.jpg'
  },

  // ===== 14. KITCHEN ITEMS =====
  {
    id: 'ki-1',
    title: 'Classic Kitchen Set',
    category: 'KITCHEN ITEMS',
    description: 'Elegant kitchen items for gifting.',
    image: '/PRODUCT CATEGORY/KITCHEN ITEMS/20260211_152006.jpg'
  },
  {
    id: 'ki-2',
    title: 'Premium Stainless Steel Set',
    category: 'KITCHEN ITEMS',
    description: 'Premium kitchen set with stainless steel finish.',
    image: '/PRODUCT CATEGORY/KITCHEN ITEMS/20260211_152107.jpg'
  },
  
  // ===== 15. LAPTOP STAND =====
  {
    id: 'ls-1',
    title: 'Classic Laptop Stand',
    category: 'LAPTOP STAND',
    description: 'Elegant laptop stand for comfortable working.',
    image: '/PRODUCT CATEGORY/LAPTOP STAND/20260213_153158.jpg'
  },
  {
    id: 'ls-2',
    title: 'Premium Adjustable Stand',
    category: 'LAPTOP STAND',
    description: 'Premium laptop stand with adjustable height.',
    image: '/PRODUCT CATEGORY/LAPTOP STAND/20260213_152958.jpg'
  },
  {
    id: 'ls-3',
    title: 'Deluxe Laptop Riser',
    category: 'LAPTOP STAND',
    description: 'Deluxe riser with cooling features.',
    image: '/PRODUCT CATEGORY/LAPTOP STAND/20260213_152650.jpg'
  },
  {
    id: 'ls-4',
    title: 'Executive Laptop Stand',
    category: 'LAPTOP STAND',
    description: 'Executive series with premium materials.',
    image: '/PRODUCT CATEGORY/LAPTOP STAND/20260213_152544.jpg'
  },
  {
    id: 'ls-5',
    title: 'Signature Laptop Stand',
    category: 'LAPTOP STAND',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/LAPTOP STAND/20260213_152251.jpg'
  },

  // ===== 16. MINIATURE =====
  {
    id: 'min-1',
    title: 'Classic Miniature Figure',
    category: 'MINIATURE',
    description: 'Elegant miniature collectible for display.',
    image: '/PRODUCT CATEGORY/MINIATURE/20260211_135706.jpg'
  },
  {
    id: 'min-2',
    title: 'Premium Detailed Miniature',
    category: 'MINIATURE',
    description: 'Premium miniature with fine detailing.',
    image: '/PRODUCT CATEGORY/MINIATURE/20260211_135631.jpg'
  },
  {
    id: 'min-3',
    title: 'Deluxe Miniature Set',
    category: 'MINIATURE',
    description: 'Deluxe set with multiple miniatures.',
    image: '/PRODUCT CATEGORY/MINIATURE/20260211_142523.jpg'
  },
  {
    id: 'min-4',
    title: 'Executive Miniature Collection',
    category: 'MINIATURE',
    description: 'Executive series with premium finish.',
    image: '/PRODUCT CATEGORY/MINIATURE/20260210_142055.jpg'
  },
  {
    id: 'min-5',
    title: 'Signature Miniature',
    category: 'MINIATURE',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/MINIATURE/20260211_142643.jpg'
  },

  // ===== 17. NOTE PAD =====
  {
    id: 'np-1',
    title: 'Classic Note Pad',
    category: 'NOTE PAD',
    description: 'Elegant note pad for professional use.',
    image: '/PRODUCT CATEGORY/NOTE PAD/20260210_182113.jpg'
  },
  {
    id: 'np-2',
    title: 'Premium Leather Note Pad',
    category: 'NOTE PAD',
    description: 'Premium note pad with genuine leather cover.',
    image: '/PRODUCT CATEGORY/NOTE PAD/20260210_182016.jpg'
  },
  {
    id: 'np-3',
    title: 'Deluxe Note Pad Set',
    category: 'NOTE PAD',
    description: 'Deluxe set with multiple note pads.',
    image: '/PRODUCT CATEGORY/NOTE PAD/20260210_181738.jpg'
  },
  

  // ===== 18. PAPER WEIGHT =====
  {
    id: 'pw-1',
    title: 'Classic Paper Weight',
    category: 'PAPER WEIGHT',
    description: 'Elegant paper weight for office desk.',
    image: '/PRODUCT CATEGORY/PAPER WEIGHT/20260211_140031.jpg'
  },
  {
    id: 'pw-2',
    title: 'Premium Crystal Paper Weight',
    category: 'PAPER WEIGHT',
    description: 'Premium paper weight with crystal finish.',
    image: '/PRODUCT CATEGORY/PAPER WEIGHT/20260210_180204.jpg'
  },
  {
    id: 'pw-3',
    title: 'Deluxe Marble Paper Weight',
    category: 'PAPER WEIGHT',
    description: 'Deluxe paper weight with marble base.',
    image: '/PRODUCT CATEGORY/PAPER WEIGHT/20260211_131338.jpg'
  },
  {
    id: 'pw-4',
    title: 'Executive Paper Weight',
    category: 'PAPER WEIGHT',
    description: 'Executive series with premium materials.',
    image: '/PRODUCT CATEGORY/PAPER WEIGHT/20260211_140053.jpg'
  },
  

  // ===== 19. PEN HOLDER & MOBILE STAND =====
  {
    id: 'phms-1',
    title: 'Classic Pen & Phone Stand',
    category: 'PEN HOLDER & MOBILE STAND',
    description: 'Elegant pen holder with mobile stand.',
    image: '/PRODUCT CATEGORY/PEN HOLDER & MOBILE STAND/IMG_20230312_173520.jpg'
  },
  {
    id: 'phms-2',
    title: 'Premium Wooden Stand',
    category: 'PEN HOLDER & MOBILE STAND',
    description: 'Premium pen holder with wooden finish and mobile stand.',
    image: '/PRODUCT CATEGORY/PEN HOLDER & MOBILE STAND/IMG_20230312_173810.jpg'
  },
  {
    id: 'phms-3',
    title: 'Deluxe Desk Stand',
    category: 'PEN HOLDER & MOBILE STAND',
    description: 'Deluxe stand with multiple compartments.',
    image: '/PRODUCT CATEGORY/PEN HOLDER & MOBILE STAND/IMG_20230312_173640.jpg'
  },
  {
    id: 'phms-4',
    title: 'Executive Stand Set',
    category: 'PEN HOLDER & MOBILE STAND',
    description: 'Executive series with premium features.',
    image: '/PRODUCT CATEGORY/PEN HOLDER & MOBILE STAND/IMG_20230312_174313.jpg'
  },
  {
    id: 'phms-5',
    title: 'Signature Collection Stand',
    category: 'PEN HOLDER & MOBILE STAND',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/PEN HOLDER & MOBILE STAND/IMG_20230312_174452.jpg'
  },

  // ===== 20. PEN STAND =====
  {
    id: 'ps-1',
    title: 'Classic Pen Stand',
    category: 'PEN STAND',
    description: 'Elegant pen stand for office use.',
    image: '/PRODUCT CATEGORY/PEN STAND/20250526_111137.jpg'
  },
  {
    id: 'ps-2',
    title: 'Premium Gold Pen Stand',
    category: 'PEN STAND',
    description: 'Premium pen stand with gold finish.',
    image: '/PRODUCT CATEGORY/PEN STAND/20250526_111250.jpg'
  },
  {
    id: 'ps-3',
    title: 'Deluxe Marble Pen Stand',
    category: 'PEN STAND',
    description: 'Deluxe pen stand with marble base.',
    image: '/PRODUCT CATEGORY/PEN STAND/20260210_142323.jpg'
  },
  {
    id: 'ps-4',
    title: 'Executive Pen Stand Set',
    category: 'PEN STAND',
    description: 'Executive series with gift box.',
    image: '/PRODUCT CATEGORY/PEN STAND/20260210_142838.jpg'
  },
  {
    id: 'ps-5',
    title: 'Signature Collection Stand',
    category: 'PEN STAND',
    description: 'Signature collection with premium finish.',
    image: '/PRODUCT CATEGORY/PEN STAND/20260211_131222.jpg'
  },
  {
    id: 'ps-6',
    title: 'Elite Pen Stand',
    category: 'PEN STAND',
    description: 'Elite pen stand with modern design.',
    image: '/PRODUCT CATEGORY/PEN STAND/20260211_132509.jpg'
  },
  {
    id: 'ps-7',
    title: 'Luxury Pen Stand',
    category: 'PEN STAND',
    description: 'Luxury pen stand with premium finish.',
    image: '/PRODUCT CATEGORY/PEN STAND/20260211_142429.jpg'
  },
  {
    id: 'ps-8',
    title: 'Classic Plus Pen Stand',
    category: 'PEN STAND',
    description: 'Classic pen stand with enhanced design.',
    image: '/PRODUCT CATEGORY/PEN STAND/20260211_143223.jpg'
  },
  {
    id: 'ps-9',
    title: 'Premium Plus Pen Stand',
    category: 'PEN STAND',
    description: 'Premium plus pen stand for executives.',
    image: '/PRODUCT CATEGORY/PEN STAND/20260210_162545.jpg'
  },
  {
    id: 'ps-10',
    title: 'Master Pen Stand',
    category: 'PEN STAND',
    description: 'Master pen stand with exquisite design.',
    image: '/PRODUCT CATEGORY/PEN STAND/20260210_145202.jpg'
  },

  // ===== 21. PEN STAND WITH CARD HOLDER =====
  {
    id: 'pswch-1',
    title: 'Classic Pen & Card Holder',
    category: 'PEN STAND WITH CARD HOLDER',
    description: 'Elegant pen stand with visiting card holder.',
    image: '/PRODUCT CATEGORY/PEN STAND WITH CARD HOLDER/IMG_20230311_200810.jpg'
  },
  {
    id: 'pswch-2',
    title: 'Premium Desk Set',
    category: 'PEN STAND WITH CARD HOLDER',
    description: 'Premium set with card holder slot.',
    image: '/PRODUCT CATEGORY/PEN STAND WITH CARD HOLDER/IMG_20230311_200827.jpg'
  },
  {
    id: 'pswch-3',
    title: 'Deluxe Organiser Set',
    category: 'PEN STAND WITH CARD HOLDER',
    description: 'Deluxe set with multiple compartments.',
    image: '/PRODUCT CATEGORY/PEN STAND WITH CARD HOLDER/IMG_20230311_203124.jpg'
  },
  {
    id: 'pswch-4',
    title: 'Executive Desk Set',
    category: 'PEN STAND WITH CARD HOLDER',
    description: 'Executive series with premium design.',
    image: '/PRODUCT CATEGORY/PEN STAND WITH CARD HOLDER/IMG_20230311_222418.jpg'
  },
  {
    id: 'pswch-5',
    title: 'Signature Collection Set',
    category: 'PEN STAND WITH CARD HOLDER',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/PEN STAND WITH CARD HOLDER/IMG_20230312_161855.jpg'
  },

  // ===== 22. PHONE STAND =====
  {
    id: 'phs-1',
    title: 'Classic Phone Stand',
    category: 'PHONE STAND',
    description: 'Elegant phone stand for desk.',
    image: '/PRODUCT CATEGORY/PHONE STAND/20260211_134832.jpg'
  },
  {
    id: 'phs-2',
    title: 'Premium Adjustable Stand',
    category: 'PHONE STAND',
    description: 'Premium phone stand with adjustable angle.',
    image: '/PRODUCT CATEGORY/PHONE STAND/20260211_152336.jpg'
  },
  {
    id: 'phs-3',
    title: 'Deluxe Phone Stand',
    category: 'PHONE STAND',
    description: 'Deluxe stand with premium finish.',
    image: '/PRODUCT CATEGORY/PHONE STAND/20260211_134331.jpg'
  },
  {
    id: 'phs-4',
    title: 'Executive Phone Stand',
    category: 'PHONE STAND',
    description: 'Executive series with premium features.',
    image: '/PRODUCT CATEGORY/PHONE STAND/IMG_20230312_181920.jpg'
  },
  {
    id: 'phs-5',
    title: 'Signature Phone Stand',
    category: 'PHONE STAND',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/PHONE STAND/20260211_152500.jpg'
  },

  // ===== 23. PUZZEL AND GAMES =====
  {
    id: 'pg-1',
    title: 'Classic Puzzle Game',
    category: 'PUZZEL AND GAMES',
    description: 'Elegant puzzle for brain teasers.',
    image: '/PRODUCT CATEGORY/PUZZEL AND GAMES/20260211_145014.jpg'
  },
  {
    id: 'pg-2',
    title: 'Premium Wooden Puzzle',
    category: 'PUZZEL AND GAMES',
    description: 'Premium puzzle with wooden pieces.',
    image: '/PRODUCT CATEGORY/PUZZEL AND GAMES/20260211_145042.jpg'
  },
  {
    id: 'pg-3',
    title: 'Deluxe Game Set',
    category: 'PUZZEL AND GAMES',
    description: 'Deluxe set with multiple puzzles.',
    image: '/PRODUCT CATEGORY/PUZZEL AND GAMES/20260211_144844.jpg'
  },
  {
    id: 'pg-4',
    title: 'Executive Game Collection',
    category: 'PUZZEL AND GAMES',
    description: 'Executive series with premium quality.',
    image: '/PRODUCT CATEGORY/PUZZEL AND GAMES/20260211_144731.jpg'
  },
  {
    id: 'pg-5',
    title: 'Signature Puzzle Collection',
    category: 'PUZZEL AND GAMES',
    description: 'Signature collection with unique designs.',
    image: '/PRODUCT CATEGORY/PUZZEL AND GAMES/20260211_144940.jpg'
  },

  // ===== 24. STICKY NOTE or CHIT HOLDER =====
  {
    id: 'snch-1',
    title: 'Classic Sticky Note Holder',
    category: 'STICKY NOTE or CHIT HOLDER',
    description: 'Elegant sticky note holder for desk.',
    image: '/PRODUCT CATEGORY/STICKY NOTE or CHIT HOLDER/20260211_140343.jpg'
  },
  {
    id: 'snch-2',
    title: 'Premium Wooden Holder',
    category: 'STICKY NOTE or CHIT HOLDER',
    description: 'Premium holder with wooden base.',
    image: '/PRODUCT CATEGORY/STICKY NOTE or CHIT HOLDER/20260210_173201.jpg'
  },
  {
    id: 'snch-3',
    title: 'Deluxe Note Organiser',
    category: 'STICKY NOTE or CHIT HOLDER',
    description: 'Deluxe organiser with multiple sections.',
    image: '/PRODUCT CATEGORY/STICKY NOTE or CHIT HOLDER/20260210_172332.jpg'
  },
  {
    id: 'snch-4',
    title: 'Executive Note Holder',
    category: 'STICKY NOTE or CHIT HOLDER',
    description: 'Executive series with premium finish.',
    image: '/PRODUCT CATEGORY/STICKY NOTE or CHIT HOLDER/20260210_173014.jpg'
  },
  {
    id: 'snch-5',
    title: 'Signature Collection Holder',
    category: 'STICKY NOTE or CHIT HOLDER',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/STICKY NOTE or CHIT HOLDER/20260210_172633.jpg'
  },

  // ===== 25. TEA COASTER =====
  {
    id: 'tc-1',
    title: 'Classic Tea Coaster Set',
    category: 'TEA COASTER',
    description: 'Elegant tea coaster set for office.',
    image: '/PRODUCT CATEGORY/TEA COASTER/20260210_165553.jpg'
  },
  {
    id: 'tc-2',
    title: 'Premium Wooden Coasters',
    category: 'TEA COASTER',
    description: 'Premium coaster set with wooden finish.',
    image: '/PRODUCT CATEGORY/TEA COASTER/20260211_144339.jpg'
  },
  {
    id: 'tc-3',
    title: 'Deluxe Coaster Collection',
    category: 'TEA COASTER',
    description: 'Deluxe set with multiple designs.',
    image: '/PRODUCT CATEGORY/TEA COASTER/20260211_144210.jpg'
  },
  {
    id: 'tc-4',
    title: 'Executive Coaster Set',
    category: 'TEA COASTER',
    description: 'Executive series with premium quality.',
    image: '/PRODUCT CATEGORY/TEA COASTER/20260210_164945.jpg'
  },
  {
    id: 'tc-5',
    title: 'Signature Coaster Collection',
    category: 'TEA COASTER',
    description: 'Signature collection with unique designs.',
    image: '/PRODUCT CATEGORY/TEA COASTER/20260210_170747.jpg'
  },

  // ===== 26. TISSUE HOLDER =====
  {
    id: 'th-1',
    title: 'Classic Tissue Holder',
    category: 'TISSUE HOLDER',
    description: 'Elegant tissue holder for office.',
    image: '/PRODUCT CATEGORY/TISSUE HOLDER/20260211_143411.jpg'
  },
  {
    id: 'th-2',
    title: 'Premium Wooden Tissue Box',
    category: 'TISSUE HOLDER',
    description: 'Premium tissue holder with wooden finish.',
    image: '/PRODUCT CATEGORY/TISSUE HOLDER/IMG_20230312_195156.jpg'
  },
  {
    id: 'th-3',
    title: 'Deluxe Tissue Holder',
    category: 'TISSUE HOLDER',
    description: 'Deluxe holder with premium design.',
    image: '/PRODUCT CATEGORY/TISSUE HOLDER/IMG_20230312_172001.jpg'
  },
  {
    id: 'th-4',
    title: 'Executive Tissue Holder',
    category: 'TISSUE HOLDER',
    description: 'Executive series with premium features.',
    image: '/PRODUCT CATEGORY/TISSUE HOLDER/IMG_20230312_170200.jpg'
  },
  {
    id: 'th-5',
    title: 'Signature Tissue Collection',
    category: 'TISSUE HOLDER',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/TISSUE HOLDER/IMG_20230312_195342.jpg'
  },

  // ===== 27. TO DO LIST BOARD =====
  {
    id: 'tdlb-1',
    title: 'Classic To Do List Board',
    category: 'TO DO LIST BOARD',
    description: 'Elegant to do list board for office.',
    image: '/PRODUCT CATEGORY/TO DO LIST BOARD/IMG_20230312_203154.jpg'
  },
  {
    id: 'tdlb-2',
    title: 'Premium Magnetic Board',
    category: 'TO DO LIST BOARD',
    description: 'Premium board with magnetic surface.',
    image: '/PRODUCT CATEGORY/TO DO LIST BOARD/IMG_20230318_162034.jpg'
  },
  {
    id: 'tdlb-3',
    title: 'Deluxe Organisation Board',
    category: 'TO DO LIST BOARD',
    description: 'Deluxe board with multiple features.',
    image: '/PRODUCT CATEGORY/TO DO LIST BOARD/IMG_20230318_171319.jpg'
  },
  {
    id: 'tdlb-4',
    title: 'Executive Planning Board',
    category: 'TO DO LIST BOARD',
    description: 'Executive series with premium design.',
    image: '/PRODUCT CATEGORY/TO DO LIST BOARD/IMG_20230318_175433.jpg'
  },
  {
    id: 'tdlb-5',
    title: 'Signature Collection Board',
    category: 'TO DO LIST BOARD',
    description: 'Signature collection with unique features.',
    image: '/PRODUCT CATEGORY/TO DO LIST BOARD/IMG_20230318_175055.jpg'
  },

  // ===== 28. TROPHIES =====
  {
    id: 'tr-1',
    title: 'Classic Trophy',
    category: 'TROPHIES',
    description: 'Elegant trophy for corporate awards.',
    image: '/PRODUCT CATEGORY/TROPHIES/20260211_145739.jpg'
  },
  {
    id: 'tr-2',
    title: 'Premium Gold Trophy',
    category: 'TROPHIES',
    description: 'Premium trophy with gold finish.',
    image: '/PRODUCT CATEGORY/TROPHIES/20260211_145659.jpg'
  },
  {
    id: 'tr-3',
    title: 'Deluxe Crystal Trophy',
    category: 'TROPHIES',
    description: 'Deluxe trophy with crystal design.',
    image: '/PRODUCT CATEGORY/TROPHIES/IMG_20230312_195852.jpg'
  },
  {
    id: 'tr-4',
    title: 'Executive Award Trophy',
    category: 'TROPHIES',
    description: 'Executive series with premium quality.',
    image: '/PRODUCT CATEGORY/TROPHIES/IMG_20230312_202405.jpg'
  },
  {
    id: 'tr-5',
    title: 'Signature Collection Trophy',
    category: 'TROPHIES',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/TROPHIES/IMG_20230318_195337.jpg'
  },

  // ===== 29. VISITING CARD HOLDER =====
  {
    id: 'vch-1',
    title: 'Classic Visiting Card Holder',
    category: 'VISITING CARD HOLDER',
    description: 'Elegant visiting card holder for professionals.',
    image: '/PRODUCT CATEGORY/VISITING CARD HOLDER/IMG-20230811-WA0111.jpg'
  },
  {
    id: 'vch-2',
    title: 'Premium Leather Card Holder',
    category: 'VISITING CARD HOLDER',
    description: 'Premium card holder with leather finish.',
    image: '/PRODUCT CATEGORY/VISITING CARD HOLDER/20260211_143512.jpg'
  },
  {
    id: 'vch-3',
    title: 'Deluxe Card Holder Set',
    category: 'VISITING CARD HOLDER',
    description: 'Deluxe set with multiple holders.',
    image: '/PRODUCT CATEGORY/VISITING CARD HOLDER/20260211_135926.jpg'
  },
  {
    id: 'vch-4',
    title: 'Executive Card Holder',
    category: 'VISITING CARD HOLDER',
    description: 'Executive series with premium finish.',
    image: '/PRODUCT CATEGORY/VISITING CARD HOLDER/20260210_171219.jpg'
  },
  {
    id: 'vch-5',
    title: 'Signature Card Collection',
    category: 'VISITING CARD HOLDER',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/VISITING CARD HOLDER/20260210_171219.jpg'
  },

  // ===== 30. WALL CLOCK =====
  {
    id: 'wc-1',
    title: 'Classic Wall Clock',
    category: 'WALL CLOCK',
    description: 'Elegant wall clock for office decor.',
    image: '/PRODUCT CATEGORY/WALL CLOCK/20260210_181143.jpg'
  },
  {
    id: 'wc-2',
    title: 'Premium Roman Wall Clock',
    category: 'WALL CLOCK',
    description: 'Premium wall clock with roman numerals.',
    image: '/PRODUCT CATEGORY/WALL CLOCK/20260210_181458.jpg'
  },
  

  // ===== 31. WOODEN BOTTEL =====
  {
    id: 'wb-1',
    title: 'Classic Wooden Bottle',
    category: 'WOODEN BOTTEL',
    description: 'Elegant wooden bottle for gifting.',
    image: '/PRODUCT CATEGORY/WOODEN BOTTEL/20260210_151012.jpg'
  },
  {
    id: 'wb-2',
    title: 'Premium Engraved Bottle',
    category: 'WOODEN BOTTEL',
    description: 'Premium wooden bottle with engraved design.',
    image: '/PRODUCT CATEGORY/WOODEN BOTTEL/20260210_151043.jpg'
  },
  {
    id: 'wb-3',
    title: 'Deluxe Wooden Bottle Set',
    category: 'WOODEN BOTTEL',
    description: 'Deluxe set with premium finish.',
    image: '/PRODUCT CATEGORY/WOODEN BOTTEL/20260210_165824.jpg'
  },
  {
    id: 'wb-4',
    title: 'Executive Wooden Bottle',
    category: 'WOODEN BOTTEL',
    description: 'Executive series with unique design.',
    image: '/PRODUCT CATEGORY/WOODEN BOTTEL/20260210_165922.jpg'
  },
  

  // ===== 32. WOODEN BOX =====
  {
    id: 'wbox-1',
    title: 'Classic Wooden Box',
    category: 'WOODEN BOX',
    description: 'Elegant wooden box for storage.',
    image: '/PRODUCT CATEGORY/WOODEN BOX/20260211_130839.jpg'
  },
  {
    id: 'wbox-2',
    title: 'Premium Carved Box',
    category: 'WOODEN BOX',
    description: 'Premium wooden box with carved details.',
    image: '/PRODUCT CATEGORY/WOODEN BOX/20260210_162901.jpg'
  },
  {
    id: 'wbox-3',
    title: 'Deluxe Storage Box',
    category: 'WOODEN BOX',
    description: 'Deluxe box with premium finish.',
    image: '/PRODUCT CATEGORY/WOODEN BOX/20260210_163134jpg'
  },
  {
    id: 'wbox-4',
    title: 'Executive Wooden Box',
    category: 'WOODEN BOX',
    description: 'Executive series with sophisticated design.',
    image: '/PRODUCT CATEGORY/WOODEN BOX/20260211_141909.jpg'
  },
  {
    id: 'wbox-5',
    title: 'Signature Collection Box',
    category: 'WOODEN BOX',
    description: 'Signature collection with unique features.',
    image: '/PRODUCT CATEGORY/WOODEN BOX/20260211_130813.jpg'
  },

  // ===== 33. WOODEN PEN =====
  {
    id: 'wp-1',
    title: 'Classic Wooden Pen',
    category: 'WOODEN PEN',
    description: 'Elegant wooden pen for executive gifting.',
    image: '/PRODUCT CATEGORY/WOODEN PEN/20260210_151124.jpg'
  },
  {
    id: 'wp-2',
    title: 'Premium Gold Nib Pen',
    category: 'WOODEN PEN',
    description: 'Premium wooden pen with gold nib.',
    image: '/PRODUCT CATEGORY/WOODEN PEN/20260210_151129.jpg'
  },
  {
    id: 'wp-3',
    title: 'Deluxe Wooden Pen Set',
    category: 'WOODEN PEN',
    description: 'Deluxe pen set with premium finish.',
    image: '/PRODUCT CATEGORY/WOODEN PEN/20260210_165718.jpg'
  },
 

  // ===== 34. WOODEN PLAQUE =====
  {
    id: 'wpl-1',
    title: 'Classic Wooden Plaque',
    category: 'WOODEN PLAQUE',
    description: 'Elegant wooden plaque for awards.',
    image: '/PRODUCT CATEGORY/WOODEN PLAQUE/20260211_150056.jpg'
  },
  {
    id: 'wpl-2',
    title: 'Premium Gold Engraved Plaque',
    category: 'WOODEN PLAQUE',
    description: 'Premium plaque with gold engraving.',
    image: '/PRODUCT CATEGORY/WOODEN PLAQUE/20260211_150151.jpg'
  },
  
  // ===== 35. WOODEN SERVING TRAY =====
  {
    id: 'wst-1',
    title: 'Classic Wooden Serving Tray',
    category: 'WOODEN SERVING TRAY',
    description: 'Elegant wooden serving tray for events.',
    image: '/PRODUCT CATEGORY/WOODEN SERVING TRAY/20250617_154830.jpg'
  },
  {
    id: 'wst-2',
    title: 'Premium Serving Tray Set',
    category: 'WOODEN SERVING TRAY',
    description: 'Premium serving tray with handles.',
    image: '/PRODUCT CATEGORY/WOODEN SERVING TRAY/20250617_154747.jpg'
  },
  {
    id: 'wst-3',
    title: 'Deluxe Serving Collection',
    category: 'WOODEN SERVING TRAY',
    description: 'Deluxe set with multiple trays.',
    image: '/PRODUCT CATEGORY/WOODEN SERVING TRAY/IMG_20230318_182817.jpg'
  },
  {
    id: 'wst-4',
    title: 'Executive Serving Tray',
    category: 'WOODEN SERVING TRAY',
    description: 'Executive series with premium finish.',
    image: '/PRODUCT CATEGORY/WOODEN SERVING TRAY/IMG_20230318_182938.jpg'
  },
  {
    id: 'wst-5',
    title: 'Signature Serving Collection',
    category: 'WOODEN SERVING TRAY',
    description: 'Signature collection with unique design.',
    image: '/PRODUCT CATEGORY/WOODEN SERVING TRAY/IMG_20230318_183051.jpg'
  },
];

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [visibleCount, setVisibleCount] = useState(20);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Get all unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(GALLERY_DATA.map(item => item.category)));
  }, []);

  // Filter gallery items
  const filteredItems = useMemo(() => {
    return GALLERY_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(20);
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleImageError = (itemId: string) => {
    setImageErrors((prev) => ({ ...prev, [itemId]: true }));
  };

  const handleImageLoad = (itemId: string) => {
    setLoadedImages((prev) => ({ ...prev, [itemId]: true }));
  };

  const getItemImageUrl = (item: GalleryItem) => {
    if (imageErrors[item.id]) {
      return null;
    }
    return item.image;
  };

  const scrollCategories = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 20, filteredItems.length));
  };

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore our premium corporate gift collection with 35 categories and 175+ products."
      />

      <PageHero
        title="Our Gallery"
        subtitle="Explore Our Premium Corporate Gift Collection"
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      {/* GALLERY SECTION */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          {/* SEARCH AND CONTROLS */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
          >
            <div className="relative flex-1 max-w-2xl w-full">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-gold-600 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full bg-beige-50 border-2 border-beige-200 rounded-btn px-12 py-3 md:py-4 text-forest-700 placeholder-forest-400/60 focus:outline-none focus:border-gold-600 focus:ring-2 focus:ring-gold-600/20 transition-all font-body text-sm md:text-base"
                />
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-4 p-1.5 text-forest-500 hover:text-forest-700 transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-beige-50 p-1 rounded-btn border-2 border-beige-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-btn transition-all ${viewMode === 'grid' ? 'bg-gold-600 text-white shadow-md' : 'text-forest-500 hover:text-forest-700'}`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-btn transition-all ${viewMode === 'list' ? 'bg-gold-600 text-white shadow-md' : 'text-forest-500 hover:text-forest-700'}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* CATEGORY SELECTOR */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            {/* Mobile: Dropdown */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-beige-50 border-2 border-beige-200 rounded-btn px-4 py-3 text-forest-700 font-medium"
              >
                <span className="flex items-center gap-2">
                  <span>Category:</span>
                  <span className="text-gold-600">
                    {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
                  </span>
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 bg-white border-2 border-beige-200 rounded-btn shadow-luxury max-h-60 overflow-y-auto"
                  >
                    <button
                      onClick={() => {
                        setSelectedCategory('All');
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 hover:bg-beige-50 transition-colors ${
                        selectedCategory === 'All' ? 'bg-beige-100 text-gold-600 font-medium' : ''
                      }`}
                    >
                      All Categories
                      {selectedCategory === 'All' && <span className="float-right">✓</span>}
                    </button>
                    
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 hover:bg-beige-50 transition-colors ${
                          selectedCategory === category ? 'bg-beige-100 text-gold-600 font-medium' : ''
                        }`}
                      >
                        {category}
                        {selectedCategory === category && <span className="float-right">✓</span>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop: Horizontal Scrollable Categories */}
            <div className="hidden lg:block relative">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollCategories('left')}
                  className="flex-shrink-0 p-2 bg-white border-2 border-beige-200 rounded-full hover:bg-beige-50 transition-colors shadow-sm"
                  aria-label="Scroll categories left"
                >
                  <ChevronLeft className="w-5 h-5 text-forest-600" />
                </button>
                
                <div
                  ref={scrollContainerRef}
                  className="flex-1 overflow-x-auto scrollbar-hide flex gap-2 py-2 px-1"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      selectedCategory === 'All'
                        ? 'bg-forest-700 text-white shadow-luxury'
                        : 'bg-beige-100 text-forest-700 border-2 border-beige-200 hover:border-gold-600/50 hover:bg-beige-50'
                    }`}
                  >
                    All Categories
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-forest-700 text-white shadow-luxury'
                          : 'bg-beige-100 text-forest-700 border-2 border-beige-200 hover:border-gold-600/50 hover:bg-beige-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => scrollCategories('right')}
                  className="flex-shrink-0 p-2 bg-white border-2 border-beige-200 rounded-full hover:bg-beige-50 transition-colors shadow-sm"
                  aria-label="Scroll categories right"
                >
                  <ChevronRight className="w-5 h-5 text-forest-600" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* RESULTS COUNT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 pb-4 border-b border-beige-200 flex justify-between items-center"
          >
            <p className="text-xs md:text-sm text-forest-600">
              <span className="font-semibold text-forest-700">{filteredItems.length}</span> items
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
            <span className="text-xs text-forest-400 bg-beige-100 px-3 py-1 rounded-full">
              {GALLERY_DATA.length} total
            </span>
          </motion.div>

          {/* GALLERY GRID */}
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key={`gallery-${selectedCategory}-${searchTerm}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={viewMode === 'grid' 
                  ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
                  : "flex flex-col gap-3"
                }
              >
                {visibleItems.map((item) => {
                  const imageUrl = getItemImageUrl(item);
                  return (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      whileHover={viewMode === 'grid' ? { y: -8, scale: 1.02 } : { x: 8 }}
                      className={`group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 ${
                        viewMode === 'list' ? 'flex flex-row items-center' : ''
                      }`}
                      onClick={() => setSelectedItem({ ...item, image: imageUrl || '' })}
                    >
                      {/* IMAGE */}
                      <div className={`relative overflow-hidden bg-beige-50 ${
                        viewMode === 'grid' ? 'w-full aspect-square' : 'w-32 h-32 sm:w-48 sm:h-48 flex-shrink-0'
                      }`}>
                        {imageUrl ? (
                          <>
                            {!loadedImages[item.id] && (
                              <div className="absolute inset-0 flex items-center justify-center bg-beige-100">
                                <Loader2 className="w-8 h-8 text-gold-600 animate-spin" />
                              </div>
                            )}
                            <img
                              src={imageUrl}
                              alt={item.title}
                              loading="lazy"
                              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                                loadedImages[item.id] ? 'opacity-100' : 'opacity-0'
                              }`}
                              onLoad={() => handleImageLoad(item.id)}
                              onError={() => handleImageError(item.id)}
                            />
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-beige-100 to-beige-200">
                            <ImageIcon className="w-8 h-8 text-forest-300" />
                          </div>
                        )}
                        
                        {/* HOVER OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            className="bg-white/95 rounded-full p-3 shadow-xl"
                          >
                            <ZoomIn className="w-6 h-6 text-forest-700" />
                          </motion.div>
                        </div>
                        
                        {/* CATEGORY BADGE */}
                        <div className="absolute bottom-2 left-2 bg-gold-600/95 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[8px] sm:text-[10px] font-semibold truncate max-w-[70%] shadow-lg border border-white/20">
                          {item.category}
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className={`p-3 md:p-4 flex-1 ${
                        viewMode === 'list' ? 'flex flex-col justify-center' : 'bg-white'
                      }`}>
                        <h3 className="font-display font-bold text-sm md:text-base text-forest-800 line-clamp-1 group-hover:text-gold-600 transition-colors">
                          {item.title}
                        </h3>
                        {viewMode === 'list' && (
                          <p className="text-sm text-forest-600/70 line-clamp-2 mt-1">
                            {item.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[10px] text-forest-400 bg-beige-100 px-2 py-0.5 rounded-full">
                            #{item.id}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="col-span-full text-center py-16 md:py-20"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-beige-200">
                  <Search className="w-8 h-8 md:w-10 md:h-10 text-gold-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-forest-800 mb-2">
                  No items found
                </h3>
                <p className="text-forest-600/70 max-w-sm mx-auto mb-6 text-sm md:text-base">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="btn-primary inline-flex items-center gap-2 text-sm md:text-base"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* LOAD MORE BUTTON */}
          {filteredItems.length > visibleCount && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-8"
            >
              <button
                onClick={loadMore}
                className="btn-secondary inline-flex items-center gap-2 text-sm md:text-base"
              >
                Load More ({filteredItems.length - visibleCount} remaining)
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* LIGHTBOX HEADER */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-beige-200 px-6 py-4 flex items-center justify-between z-10">
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    {selectedItem.category}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-forest-800 truncate">
                    {selectedItem.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-shrink-0 p-2 text-forest-600 hover:text-forest-800 hover:bg-beige-100 rounded-full transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* LIGHTBOX CONTENT */}
              <div className="p-6 md:p-8 space-y-6">
                {/* IMAGE */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-beige-50 to-beige-100">
                  {selectedItem.image ? (
                    <div className="w-full flex items-center justify-center bg-beige-50 p-4">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-80 flex items-center justify-center bg-gradient-to-br from-beige-100 to-beige-200">
                      <ImageIcon className="w-16 h-16 text-forest-300" />
                    </div>
                  )}
                </div>

                {/* DESCRIPTION */}
                <div>
                  <h3 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-2">
                    Description
                  </h3>
                  <p className="text-base md:text-lg text-forest-600/80 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* DETAILS GRID */}
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-beige-200">
                  <div>
                    <p className="text-xs font-semibold text-forest-700 uppercase tracking-wider mb-1">
                      Product ID
                    </p>
                    <p className="text-forest-600 font-mono text-sm">
                      {selectedItem.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-forest-700 uppercase tracking-wider mb-1">
                      Category
                    </p>
                    <p className="inline-flex items-center gap-2 bg-gold-600/10 text-gold-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gold-600/20">
                      {selectedItem.category}
                    </p>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-beige-200">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 bg-beige-100 text-forest-700 font-semibold py-3 rounded-xl hover:bg-beige-200 transition-colors"
                  >
                    Close
                  </button>
                  <button className="flex-1 btn-primary py-3 rounded-xl">
                    Request Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}