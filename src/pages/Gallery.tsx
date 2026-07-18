import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ZoomIn, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
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

// ----- MANUAL GALLERY DATA - ALL 44 CATEGORIES WITH 5 IMAGES EACH -----
const GALLERY_DATA: GalleryItem[] = [
  // ===== Corporate & Executive Gifts =====
  
  // 1. BOOK SELF HOLDER
  {
    id: 'bsh-1',
    title: 'Book Self Holder - Classic Edition',
    category: 'BOOK SELF HOLDER',
    description: 'Elegant book self holder perfect for corporate gifting.',
    image: '/PRODUCT CATEGORY/BOOKSELFHOLDER/20260210_173717.jpg'
  },
  
  {
    id: 'bsh-3',
    title: 'Book Self Holder - Deluxe Model',
    category: 'BOOK SELF HOLDER',
    description: 'Deluxe book self holder with premium wooden base.',
    image: '/PRODUCT CATEGORY/BOOKSELFHOLDER/20260210_173613.eJtRfRnx.jpg'
  },
 
  {
    id: 'bsh-5',
    title: 'Book Self Holder - Signature Collection',
    category: 'BOOK SELF HOLDER',
    description: 'Signature collection book self holder with gold accents.',
    image: '/PRODUCT CATEGORY/BOOKSELFHOLDER/20260210_173727.jpg'
  },

  // 2. BOWLS
  {
    id: 'bowl-1',
    title: 'Bowl - Classic Edition',
    category: 'BOWLS',
    description: 'Genuine bowl for professionals.',
    image: '/PRODUCT CATEGORY/BOWL/20260211_131532.jpg'
  },
  {
    id: 'bowl-2',
    title: 'Bowl - Premium Version',
    category: 'BOWLS',
    description: 'Premium bowl with multiple compartments.',
    image: '/PRODUCT CATEGORY/BOWL/20260211_131545.jpg'
  },
  {
    id: 'bowl-3',
    title: 'Bowl - Deluxe Model',
    category: 'BOWLS',
    description: 'Deluxe bowl with zipper closure.',
    image: '/PRODUCT CATEGORY/BOWL/20260211_132010.jpg'
  },
  {
    id: 'bowl-4',
    title: 'Bowl - Executive Series',
    category: 'BOWLS',
    description: 'Executive series portfolio with embossed logo.',
    image: '/PRODUCT CATEGORY/BOWL/20260211_132115.jpg'
  },
  {
    id: 'bowl-5',
    title: 'Bowl - Signature Collection',
    category: 'BOWLS',
    description: 'Signature collection bowl with premium finish.',
    image: '/PRODUCT CATEGORY/BOWL/20260211_132120.jpg'
  },

  // 3. PEN SETS
  {
    id: 'ps-1',
    title: 'Pen Set - Classic Edition',
    category: 'PEN SETS',
    description: 'Elegant pen set with wooden stand.',
    image: '/images/gallery/pen-sets/20260210_173623.jpg'
  },
  {
    id: 'ps-2',
    title: 'Pen Set - Premium Version',
    category: 'PEN SETS',
    description: 'Premium pen set with gold finish.',
    image: '/images/gallery/pen-sets/20260210_173624.jpg'
  },
  {
    id: 'ps-3',
    title: 'Pen Set - Deluxe Model',
    category: 'PEN SETS',
    description: 'Deluxe pen set with marble base.',
    image: '/images/gallery/pen-sets/20260210_173625.jpg'
  },
  {
    id: 'ps-4',
    title: 'Pen Set - Executive Series',
    category: 'PEN SETS',
    description: 'Executive series pen set with gift box.',
    image: '/images/gallery/pen-sets/20260210_173626.jpg'
  },
  {
    id: 'ps-5',
    title: 'Pen Set - Signature Collection',
    category: 'PEN SETS',
    description: 'Signature collection pen set with personalized engraving.',
    image: '/images/gallery/pen-sets/20260210_173627.jpg'
  },

  // 4. BUSINESS CARD HOLDERS
  {
    id: 'bch-1',
    title: 'Business Card Holder - Classic Edition',
    category: 'BUSINESS CARD HOLDERS',
    description: 'Elegant business card holder for professionals.',
    image: '/images/gallery/business-card-holders/20260210_173628.jpg'
  },
  {
    id: 'bch-2',
    title: 'Business Card Holder - Premium Version',
    category: 'BUSINESS CARD HOLDERS',
    description: 'Premium card holder with leather finish.',
    image: '/images/gallery/business-card-holders/20260210_173629.jpg'
  },
  {
    id: 'bch-3',
    title: 'Business Card Holder - Deluxe Model',
    category: 'BUSINESS CARD HOLDERS',
    description: 'Deluxe card holder with metal accents.',
    image: '/images/gallery/business-card-holders/20260210_173630.jpg'
  },
  {
    id: 'bch-4',
    title: 'Business Card Holder - Executive Series',
    category: 'BUSINESS CARD HOLDERS',
    description: 'Executive series card holder with logo engraving.',
    image: '/images/gallery/business-card-holders/20260210_173631.jpg'
  },
  {
    id: 'bch-5',
    title: 'Business Card Holder - Signature Collection',
    category: 'BUSINESS CARD HOLDERS',
    description: 'Signature collection card holder with premium finish.',
    image: '/images/gallery/business-card-holders/20260210_173632.jpg'
  },

  // 5. DESK ORGANIZERS
  {
    id: 'do-1',
    title: 'Desk Organizer - Classic Edition',
    category: 'DESK ORGANIZERS',
    description: 'Elegant desk organizer for office use.',
    image: '/images/gallery/desk-organizers/20260210_173633.jpg'
  },
  {
    id: 'do-2',
    title: 'Desk Organizer - Premium Version',
    category: 'DESK ORGANIZERS',
    description: 'Premium organizer with multiple compartments.',
    image: '/images/gallery/desk-organizers/20260210_173634.jpg'
  },
  {
    id: 'do-3',
    title: 'Desk Organizer - Deluxe Model',
    category: 'DESK ORGANIZERS',
    description: 'Deluxe organizer with wooden finish.',
    image: '/images/gallery/desk-organizers/20260210_173635.jpg'
  },
  {
    id: 'do-4',
    title: 'Desk Organizer - Executive Series',
    category: 'DESK ORGANIZERS',
    description: 'Executive series organizer with drawer.',
    image: '/images/gallery/desk-organizers/20260210_173636.jpg'
  },
  {
    id: 'do-5',
    title: 'Desk Organizer - Signature Collection',
    category: 'DESK ORGANIZERS',
    description: 'Signature collection organizer with premium materials.',
    image: '/images/gallery/desk-organizers/20260210_173637.jpg'
  },

  // ===== Wooden & Bamboo Products =====

  // 6. WOODEN CLOCKS
  {
    id: 'wc-1',
    title: 'Wooden Clock - Classic Edition',
    category: 'WOODEN CLOCKS',
    description: 'Elegant wooden clock for office decor.',
    image: '/images/gallery/wooden-clocks/20260210_173638.jpg'
  },
  {
    id: 'wc-2',
    title: 'Wooden Clock - Premium Version',
    category: 'WOODEN CLOCKS',
    description: 'Premium wooden clock with roman numerals.',
    image: '/images/gallery/wooden-clocks/20260210_173639.jpg'
  },
  {
    id: 'wc-3',
    title: 'Wooden Clock - Deluxe Model',
    category: 'WOODEN CLOCKS',
    description: 'Deluxe wooden clock with pendulum.',
    image: '/images/gallery/wooden-clocks/20260210_173640.jpg'
  },
  {
    id: 'wc-4',
    title: 'Wooden Clock - Executive Series',
    category: 'WOODEN CLOCKS',
    description: 'Executive series clock with modern design.',
    image: '/images/gallery/wooden-clocks/20260210_173641.jpg'
  },
  {
    id: 'wc-5',
    title: 'Wooden Clock - Signature Collection',
    category: 'WOODEN CLOCKS',
    description: 'Signature collection clock with premium finish.',
    image: '/images/gallery/wooden-clocks/20260210_173642.jpg'
  },

  // 7. BAMBOO DESK ACCESSORIES
  {
    id: 'bda-1',
    title: 'Bamboo Desk Accessory - Classic Edition',
    category: 'BAMBOO DESK ACCESSORIES',
    description: 'Eco-friendly bamboo desk accessory set.',
    image: '/images/gallery/bamboo-desk-accessories/20260210_173643.jpg'
  },
  {
    id: 'bda-2',
    title: 'Bamboo Desk Accessory - Premium Version',
    category: 'BAMBOO DESK ACCESSORIES',
    description: 'Premium bamboo accessories for office.',
    image: '/images/gallery/bamboo-desk-accessories/20260210_173644.jpg'
  },
  {
    id: 'bda-3',
    title: 'Bamboo Desk Accessory - Deluxe Model',
    category: 'BAMBOO DESK ACCESSORIES',
    description: 'Deluxe bamboo set with organizer.',
    image: '/images/gallery/bamboo-desk-accessories/20260210_173645.jpg'
  },
  {
    id: 'bda-4',
    title: 'Bamboo Desk Accessory - Executive Series',
    category: 'BAMBOO DESK ACCESSORIES',
    description: 'Executive series bamboo accessories.',
    image: '/images/gallery/bamboo-desk-accessories/20260210_173646.jpg'
  },
  {
    id: 'bda-5',
    title: 'Bamboo Desk Accessory - Signature Collection',
    category: 'BAMBOO DESK ACCESSORIES',
    description: 'Signature collection with premium bamboo.',
    image: '/images/gallery/bamboo-desk-accessories/20260210_173647.jpg'
  },

  // 8. WOODEN COASTERS
  {
    id: 'wco-1',
    title: 'Wooden Coaster - Classic Edition',
    category: 'WOODEN COASTERS',
    description: 'Elegant wooden coaster set for office.',
    image: '/images/gallery/wooden-coasters/20260210_173648.jpg'
  },
  {
    id: 'wco-2',
    title: 'Wooden Coaster - Premium Version',
    category: 'WOODEN COASTERS',
    description: 'Premium coaster set with engraved designs.',
    image: '/images/gallery/wooden-coasters/20260210_173649.jpg'
  },
  {
    id: 'wco-3',
    title: 'Wooden Coaster - Deluxe Model',
    category: 'WOODEN COASTERS',
    description: 'Deluxe coasters with holder.',
    image: '/images/gallery/wooden-coasters/20260210_173650.jpg'
  },
  {
    id: 'wco-4',
    title: 'Wooden Coaster - Executive Series',
    category: 'WOODEN COASTERS',
    description: 'Executive series coasters with logo.',
    image: '/images/gallery/wooden-coasters/20260210_173651.jpg'
  },
  {
    id: 'wco-5',
    title: 'Wooden Coaster - Signature Collection',
    category: 'WOODEN COASTERS',
    description: 'Signature collection coasters with premium finish.',
    image: '/images/gallery/wooden-coasters/20260210_173652.jpg'
  },

  // 9. WOODEN PHOTO FRAMES
  {
    id: 'wpf-1',
    title: 'Wooden Photo Frame - Classic Edition',
    category: 'WOODEN PHOTO FRAMES',
    description: 'Elegant wooden photo frame for desk.',
    image: '/images/gallery/wooden-photo-frames/20260210_173653.jpg'
  },
  {
    id: 'wpf-2',
    title: 'Wooden Photo Frame - Premium Version',
    category: 'WOODEN PHOTO FRAMES',
    description: 'Premium frame with carved details.',
    image: '/images/gallery/wooden-photo-frames/20260210_173654.jpg'
  },
  {
    id: 'wpf-3',
    title: 'Wooden Photo Frame - Deluxe Model',
    category: 'WOODEN PHOTO FRAMES',
    description: 'Deluxe frame with gold accents.',
    image: '/images/gallery/wooden-photo-frames/20260210_173655.jpg'
  },
  {
    id: 'wpf-4',
    title: 'Wooden Photo Frame - Executive Series',
    category: 'WOODEN PHOTO FRAMES',
    description: 'Executive series frame with engraving.',
    image: '/images/gallery/wooden-photo-frames/20260210_173656.jpg'
  },
  {
    id: 'wpf-5',
    title: 'Wooden Photo Frame - Signature Collection',
    category: 'WOODEN PHOTO FRAMES',
    description: 'Signature collection frame with premium wood.',
    image: '/images/gallery/wooden-photo-frames/20260210_173657.jpg'
  },

  // 10. WOODEN TRAYS
  {
    id: 'wt-1',
    title: 'Wooden Tray - Classic Edition',
    category: 'WOODEN TRAYS',
    description: 'Elegant wooden serving tray.',
    image: '/images/gallery/wooden-trays/20260210_173658.jpg'
  },
  {
    id: 'wt-2',
    title: 'Wooden Tray - Premium Version',
    category: 'WOODEN TRAYS',
    description: 'Premium tray with carved handles.',
    image: '/images/gallery/wooden-trays/20260210_173659.jpg'
  },
  {
    id: 'wt-3',
    title: 'Wooden Tray - Deluxe Model',
    category: 'WOODEN TRAYS',
    description: 'Deluxe tray with inlay design.',
    image: '/images/gallery/wooden-trays/20260210_173700.jpg'
  },
  {
    id: 'wt-4',
    title: 'Wooden Tray - Executive Series',
    category: 'WOODEN TRAYS',
    description: 'Executive series tray for office use.',
    image: '/images/gallery/wooden-trays/20260210_173701.jpg'
  },
  {
    id: 'wt-5',
    title: 'Wooden Tray - Signature Collection',
    category: 'WOODEN TRAYS',
    description: 'Signature collection tray with premium finish.',
    image: '/images/gallery/wooden-trays/20260210_173702.jpg'
  },

  // ===== Drinkware =====

  // 11. COFFEE MUGS
  {
    id: 'cm-1',
    title: 'Coffee Mug - Classic Edition',
    category: 'COFFEE MUGS',
    description: 'Elegant coffee mug for office use.',
    image: '/images/gallery/coffee-mugs/20260210_173703.jpg'
  },
  {
    id: 'cm-2',
    title: 'Coffee Mug - Premium Version',
    category: 'COFFEE MUGS',
    description: 'Premium ceramic coffee mug.',
    image: '/images/gallery/coffee-mugs/20260210_173704.jpg'
  },
  {
    id: 'cm-3',
    title: 'Coffee Mug - Deluxe Model',
    category: 'COFFEE MUGS',
    description: 'Deluxe mug with gold rim.',
    image: '/images/gallery/coffee-mugs/20260210_173705.jpg'
  },
  {
    id: 'cm-4',
    title: 'Coffee Mug - Executive Series',
    category: 'COFFEE MUGS',
    description: 'Executive series mug with logo.',
    image: '/images/gallery/coffee-mugs/20260210_173706.jpg'
  },
  {
    id: 'cm-5',
    title: 'Coffee Mug - Signature Collection',
    category: 'COFFEE MUGS',
    description: 'Signature collection mug with premium finish.',
    image: '/images/gallery/coffee-mugs/20260210_173707.jpg'
  },

  // 12. GLASS TUMBLERS
  {
    id: 'gt-1',
    title: 'Glass Tumbler - Classic Edition',
    category: 'GLASS TUMBLERS',
    description: 'Elegant glass tumbler set.',
    image: '/images/gallery/glass-tumblers/20260210_173708.jpg'
  },
  {
    id: 'gt-2',
    title: 'Glass Tumbler - Premium Version',
    category: 'GLASS TUMBLERS',
    description: 'Premium crystal glass tumblers.',
    image: '/images/gallery/glass-tumblers/20260210_173709.jpg'
  },
  {
    id: 'gt-3',
    title: 'Glass Tumbler - Deluxe Model',
    category: 'GLASS TUMBLERS',
    description: 'Deluxe tumblers with etched design.',
    image: '/images/gallery/glass-tumblers/20260210_173710.jpg'
  },
  {
    id: 'gt-4',
    title: 'Glass Tumbler - Executive Series',
    category: 'GLASS TUMBLERS',
    description: 'Executive series tumblers with gift box.',
    image: '/images/gallery/glass-tumblers/20260210_173711.jpg'
  },
  {
    id: 'gt-5',
    title: 'Glass Tumbler - Signature Collection',
    category: 'GLASS TUMBLERS',
    description: 'Signature collection tumblers with premium glass.',
    image: '/images/gallery/glass-tumblers/20260210_173712.jpg'
  },

  // 13. WHISKEY GLASSES
  {
    id: 'wg-1',
    title: 'Whiskey Glass - Classic Edition',
    category: 'WHISKEY GLASSES',
    description: 'Elegant whiskey glass set.',
    image: '/images/gallery/whiskey-glasses/20260210_173713.jpg'
  },
  {
    id: 'wg-2',
    title: 'Whiskey Glass - Premium Version',
    category: 'WHISKEY GLASSES',
    description: 'Premium crystal whiskey glasses.',
    image: '/images/gallery/whiskey-glasses/20260210_173714.jpg'
  },
  {
    id: 'wg-3',
    title: 'Whiskey Glass - Deluxe Model',
    category: 'WHISKEY GLASSES',
    description: 'Deluxe glasses with gold rim.',
    image: '/images/gallery/whiskey-glasses/20260210_173715.jpg'
  },
  {
    id: 'wg-4',
    title: 'Whiskey Glass - Executive Series',
    category: 'WHISKEY GLASSES',
    description: 'Executive series glasses with gift set.',
    image: '/images/gallery/whiskey-glasses/20260210_173716.jpg'
  },
  {
    id: 'wg-5',
    title: 'Whiskey Glass - Signature Collection',
    category: 'WHISKEY GLASSES',
    description: 'Signature collection glasses with premium crystal.',
    image: '/images/gallery/whiskey-glasses/20260210_173717.jpg'
  },

  // 14. THERMOS BOTTLES
  {
    id: 'tb-1',
    title: 'Thermos Bottle - Classic Edition',
    category: 'THERMOS BOTTLES',
    description: 'Elegant thermos bottle for office.',
    image: '/images/gallery/thermos-bottles/20260210_173718.jpg'
  },
  {
    id: 'tb-2',
    title: 'Thermos Bottle - Premium Version',
    category: 'THERMOS BOTTLES',
    description: 'Premium stainless steel thermos.',
    image: '/images/gallery/thermos-bottles/20260210_173719.jpg'
  },
  {
    id: 'tb-3',
    title: 'Thermos Bottle - Deluxe Model',
    category: 'THERMOS BOTTLES',
    description: 'Deluxe thermos with vacuum insulation.',
    image: '/images/gallery/thermos-bottles/20260210_173720.jpg'
  },
  {
    id: 'tb-4',
    title: 'Thermos Bottle - Executive Series',
    category: 'THERMOS BOTTLES',
    description: 'Executive series thermos with logo.',
    image: '/images/gallery/thermos-bottles/20260210_173721.jpg'
  },
  {
    id: 'tb-5',
    title: 'Thermos Bottle - Signature Collection',
    category: 'THERMOS BOTTLES',
    description: 'Signature collection thermos with premium finish.',
    image: '/images/gallery/thermos-bottles/20260210_173722.jpg'
  },

  // 15. WINE GLASSES
  {
    id: 'wine-1',
    title: 'Wine Glass - Classic Edition',
    category: 'WINE GLASSES',
    description: 'Elegant wine glass set.',
    image: '/images/gallery/wine-glasses/20260210_173723.jpg'
  },
  {
    id: 'wine-2',
    title: 'Wine Glass - Premium Version',
    category: 'WINE GLASSES',
    description: 'Premium crystal wine glasses.',
    image: '/images/gallery/wine-glasses/20260210_173724.jpg'
  },
  {
    id: 'wine-3',
    title: 'Wine Glass - Deluxe Model',
    category: 'WINE GLASSES',
    description: 'Deluxe wine glasses with gold stem.',
    image: '/images/gallery/wine-glasses/20260210_173725.jpg'
  },
  {
    id: 'wine-4',
    title: 'Wine Glass - Executive Series',
    category: 'WINE GLASSES',
    description: 'Executive series wine glasses.',
    image: '/images/gallery/wine-glasses/20260210_173726.jpg'
  },
  {
    id: 'wine-5',
    title: 'Wine Glass - Signature Collection',
    category: 'WINE GLASSES',
    description: 'Signature collection wine glasses with premium crystal.',
    image: '/images/gallery/wine-glasses/20260210_173727.jpg'
  },

  // ===== Tech & Gadgets =====

  // 16. WIRELESS CHARGERS
  {
    id: 'wc-16',
    title: 'Wireless Charger - Classic Edition',
    category: 'WIRELESS CHARGERS',
    description: 'Elegant wireless charger for office.',
    image: '/images/gallery/wireless-chargers/20260210_173728.jpg'
  },
  {
    id: 'wc-17',
    title: 'Wireless Charger - Premium Version',
    category: 'WIRELESS CHARGERS',
    description: 'Premium fast wireless charger.',
    image: '/images/gallery/wireless-chargers/20260210_173729.jpg'
  },
  {
    id: 'wc-18',
    title: 'Wireless Charger - Deluxe Model',
    category: 'WIRELESS CHARGERS',
    description: 'Deluxe charger with LED indicator.',
    image: '/images/gallery/wireless-chargers/20260210_173730.jpg'
  },
  {
    id: 'wc-19',
    title: 'Wireless Charger - Executive Series',
    category: 'WIRELESS CHARGERS',
    description: 'Executive series charger with premium finish.',
    image: '/images/gallery/wireless-chargers/20260210_173731.jpg'
  },
  {
    id: 'wc-20',
    title: 'Wireless Charger - Signature Collection',
    category: 'WIRELESS CHARGERS',
    description: 'Signature collection charger with wood base.',
    image: '/images/gallery/wireless-chargers/20260210_173732.jpg'
  },

  // 17. BLUETOOTH SPEAKERS
  {
    id: 'bs-1',
    title: 'Bluetooth Speaker - Classic Edition',
    category: 'BLUETOOTH SPEAKERS',
    description: 'Elegant bluetooth speaker for office.',
    image: '/images/gallery/bluetooth-speakers/20260210_173733.jpg'
  },
  {
    id: 'bs-2',
    title: 'Bluetooth Speaker - Premium Version',
    category: 'BLUETOOTH SPEAKERS',
    description: 'Premium sound bluetooth speaker.',
    image: '/images/gallery/bluetooth-speakers/20260210_173734.jpg'
  },
  {
    id: 'bs-3',
    title: 'Bluetooth Speaker - Deluxe Model',
    category: 'BLUETOOTH SPEAKERS',
    description: 'Deluxe speaker with premium sound.',
    image: '/images/gallery/bluetooth-speakers/20260210_173735.jpg'
  },
  {
    id: 'bs-4',
    title: 'Bluetooth Speaker - Executive Series',
    category: 'BLUETOOTH SPEAKERS',
    description: 'Executive series speaker with metal body.',
    image: '/images/gallery/bluetooth-speakers/20260210_173736.jpg'
  },
  {
    id: 'bs-5',
    title: 'Bluetooth Speaker - Signature Collection',
    category: 'BLUETOOTH SPEAKERS',
    description: 'Signature collection speaker with premium finish.',
    image: '/images/gallery/bluetooth-speakers/20260210_173737.jpg'
  },

  // 18. POWER BANKS
  {
    id: 'pb-1',
    title: 'Power Bank - Classic Edition',
    category: 'POWER BANKS',
    description: 'Elegant power bank for travel.',
    image: '/images/gallery/power-banks/20260210_173738.jpg'
  },
  {
    id: 'pb-2',
    title: 'Power Bank - Premium Version',
    category: 'POWER BANKS',
    description: 'Premium fast charging power bank.',
    image: '/images/gallery/power-banks/20260210_173739.jpg'
  },
  {
    id: 'pb-3',
    title: 'Power Bank - Deluxe Model',
    category: 'POWER BANKS',
    description: 'Deluxe power bank with solar charging.',
    image: '/images/gallery/power-banks/20260210_173740.jpg'
  },
  {
    id: 'pb-4',
    title: 'Power Bank - Executive Series',
    category: 'POWER BANKS',
    description: 'Executive series power bank with metal body.',
    image: '/images/gallery/power-banks/20260210_173741.jpg'
  },
  {
    id: 'pb-5',
    title: 'Power Bank - Signature Collection',
    category: 'POWER BANKS',
    description: 'Signature collection power bank with premium finish.',
    image: '/images/gallery/power-banks/20260210_173742.jpg'
  },

  // 19. USB DRIVES
  {
    id: 'usb-1',
    title: 'USB Drive - Classic Edition',
    category: 'USB DRIVES',
    description: 'Elegant USB drive for professionals.',
    image: '/images/gallery/usb-drives/20260210_173743.jpg'
  },
  {
    id: 'usb-2',
    title: 'USB Drive - Premium Version',
    category: 'USB DRIVES',
    description: 'Premium high-speed USB drive.',
    image: '/images/gallery/usb-drives/20260210_173744.jpg'
  },
  {
    id: 'usb-3',
    title: 'USB Drive - Deluxe Model',
    category: 'USB DRIVES',
    description: 'Deluxe USB drive with metal casing.',
    image: '/images/gallery/usb-drives/20260210_173745.jpg'
  },
  {
    id: 'usb-4',
    title: 'USB Drive - Executive Series',
    category: 'USB DRIVES',
    description: 'Executive series USB with leather case.',
    image: '/images/gallery/usb-drives/20260210_173746.jpg'
  },
  {
    id: 'usb-5',
    title: 'USB Drive - Signature Collection',
    category: 'USB DRIVES',
    description: 'Signature collection USB with premium finish.',
    image: '/images/gallery/usb-drives/20260210_173747.jpg'
  },

  // 20. LAPTOP SLEEVES
  {
    id: 'ls-1',
    title: 'Laptop Sleeve - Classic Edition',
    category: 'LAPTOP SLEEVES',
    description: 'Elegant laptop sleeve for professionals.',
    image: '/images/gallery/laptop-sleeves/20260210_173748.jpg'
  },
  {
    id: 'ls-2',
    title: 'Laptop Sleeve - Premium Version',
    category: 'LAPTOP SLEEVES',
    description: 'Premium neoprene laptop sleeve.',
    image: '/images/gallery/laptop-sleeves/20260210_173749.jpg'
  },
  {
    id: 'ls-3',
    title: 'Laptop Sleeve - Deluxe Model',
    category: 'LAPTOP SLEEVES',
    description: 'Deluxe sleeve with extra padding.',
    image: '/images/gallery/laptop-sleeves/20260210_173750.jpg'
  },
  {
    id: 'ls-4',
    title: 'Laptop Sleeve - Executive Series',
    category: 'LAPTOP SLEEVES',
    description: 'Executive sleeve with leather finish.',
    image: '/images/gallery/laptop-sleeves/20260210_173751.jpg'
  },
  {
    id: 'ls-5',
    title: 'Laptop Sleeve - Signature Collection',
    category: 'LAPTOP SLEEVES',
    description: 'Signature collection sleeve with premium materials.',
    image: '/images/gallery/laptop-sleeves/20260210_173752.jpg'
  },

  // ===== Office & Stationery =====

  // 21. LEATHER NOTEBOOKS
  {
    id: 'ln-1',
    title: 'Leather Notebook - Classic Edition',
    category: 'LEATHER NOTEBOOKS',
    description: 'Elegant leather notebook for professionals.',
    image: '/images/gallery/leather-notebooks/20260210_173753.jpg'
  },
  {
    id: 'ln-2',
    title: 'Leather Notebook - Premium Version',
    category: 'LEATHER NOTEBOOKS',
    description: 'Premium genuine leather notebook.',
    image: '/images/gallery/leather-notebooks/20260210_173754.jpg'
  },
  {
    id: 'ln-3',
    title: 'Leather Notebook - Deluxe Model',
    category: 'LEATHER NOTEBOOKS',
    description: 'Deluxe notebook with gold edges.',
    image: '/images/gallery/leather-notebooks/20260210_173755.jpg'
  },
  {
    id: 'ln-4',
    title: 'Leather Notebook - Executive Series',
    category: 'LEATHER NOTEBOOKS',
    description: 'Executive series notebook with embossed logo.',
    image: '/images/gallery/leather-notebooks/20260210_173756.jpg'
  },
  {
    id: 'ln-5',
    title: 'Leather Notebook - Signature Collection',
    category: 'LEATHER NOTEBOOKS',
    description: 'Signature collection notebook with premium leather.',
    image: '/images/gallery/leather-notebooks/20260210_173757.jpg'
  },

  // 22. DESK CALENDARS
  {
    id: 'dc-1',
    title: 'Desk Calendar - Classic Edition',
    category: 'DESK CALENDARS',
    description: 'Elegant desk calendar for office.',
    image: '/images/gallery/desk-calendars/20260210_173758.jpg'
  },
  {
    id: 'dc-2',
    title: 'Desk Calendar - Premium Version',
    category: 'DESK CALENDARS',
    description: 'Premium wooden desk calendar.',
    image: '/images/gallery/desk-calendars/20260210_173759.jpg'
  },
  {
    id: 'dc-3',
    title: 'Desk Calendar - Deluxe Model',
    category: 'DESK CALENDARS',
    description: 'Deluxe calendar with brass accents.',
    image: '/images/gallery/desk-calendars/20260210_173800.jpg'
  },
  {
    id: 'dc-4',
    title: 'Desk Calendar - Executive Series',
    category: 'DESK CALENDARS',
    description: 'Executive series calendar with leather base.',
    image: '/images/gallery/desk-calendars/20260210_173801.jpg'
  },
  {
    id: 'dc-5',
    title: 'Desk Calendar - Signature Collection',
    category: 'DESK CALENDARS',
    description: 'Signature collection calendar with premium finish.',
    image: '/images/gallery/desk-calendars/20260210_173802.jpg'
  },

  // 23. PAPER HOLDERS
  {
    id: 'ph-1',
    title: 'Paper Holder - Classic Edition',
    category: 'PAPER HOLDERS',
    description: 'Elegant paper holder for desk.',
    image: '/images/gallery/paper-holders/20260210_173803.jpg'
  },
  {
    id: 'ph-2',
    title: 'Paper Holder - Premium Version',
    category: 'PAPER HOLDERS',
    description: 'Premium paper holder with weighted base.',
    image: '/images/gallery/paper-holders/20260210_173804.jpg'
  },
  {
    id: 'ph-3',
    title: 'Paper Holder - Deluxe Model',
    category: 'PAPER HOLDERS',
    description: 'Deluxe paper holder with brass finish.',
    image: '/images/gallery/paper-holders/20260210_173805.jpg'
  },
  {
    id: 'ph-4',
    title: 'Paper Holder - Executive Series',
    category: 'PAPER HOLDERS',
    description: 'Executive series paper holder with logo.',
    image: '/images/gallery/paper-holders/20260210_173806.jpg'
  },
  {
    id: 'ph-5',
    title: 'Paper Holder - Signature Collection',
    category: 'PAPER HOLDERS',
    description: 'Signature collection paper holder with premium materials.',
    image: '/images/gallery/paper-holders/20260210_173807.jpg'
  },

  // 24. STICKY NOTE HOLDERS
  {
    id: 'snh-1',
    title: 'Sticky Note Holder - Classic Edition',
    category: 'STICKY NOTE HOLDERS',
    description: 'Elegant sticky note holder for desk.',
    image: '/images/gallery/sticky-note-holders/20260210_173808.jpg'
  },
  {
    id: 'snh-2',
    title: 'Sticky Note Holder - Premium Version',
    category: 'STICKY NOTE HOLDERS',
    description: 'Premium holder with acrylic finish.',
    image: '/images/gallery/sticky-note-holders/20260210_173809.jpg'
  },
  {
    id: 'snh-3',
    title: 'Sticky Note Holder - Deluxe Model',
    category: 'STICKY NOTE HOLDERS',
    description: 'Deluxe holder with wooden base.',
    image: '/images/gallery/sticky-note-holders/20260210_173810.jpg'
  },
  {
    id: 'snh-4',
    title: 'Sticky Note Holder - Executive Series',
    category: 'STICKY NOTE HOLDERS',
    description: 'Executive series holder with pen slot.',
    image: '/images/gallery/sticky-note-holders/20260210_173811.jpg'
  },
  {
    id: 'snh-5',
    title: 'Sticky Note Holder - Signature Collection',
    category: 'STICKY NOTE HOLDERS',
    description: 'Signature collection holder with premium finish.',
    image: '/images/gallery/sticky-note-holders/20260210_173812.jpg'
  },

  // 25. LETTER OPENERS
  {
    id: 'lo-1',
    title: 'Letter Opener - Classic Edition',
    category: 'LETTER OPENERS',
    description: 'Elegant letter opener for office.',
    image: '/images/gallery/letter-openers/20260210_173813.jpg'
  },
  {
    id: 'lo-2',
    title: 'Letter Opener - Premium Version',
    category: 'LETTER OPENERS',
    description: 'Premium letter opener with wooden handle.',
    image: '/images/gallery/letter-openers/20260210_173814.jpg'
  },
  {
    id: 'lo-3',
    title: 'Letter Opener - Deluxe Model',
    category: 'LETTER OPENERS',
    description: 'Deluxe opener with brass finish.',
    image: '/images/gallery/letter-openers/20260210_173815.jpg'
  },
  {
    id: 'lo-4',
    title: 'Letter Opener - Executive Series',
    category: 'LETTER OPENERS',
    description: 'Executive series opener with gift box.',
    image: '/images/gallery/letter-openers/20260210_173816.jpg'
  },
  {
    id: 'lo-5',
    title: 'Letter Opener - Signature Collection',
    category: 'LETTER OPENERS',
    description: 'Signature collection opener with premium steel.',
    image: '/images/gallery/letter-openers/20260210_173817.jpg'
  },

  // 26. BRIEFCASES
  {
    id: 'bc-1',
    title: 'Briefcase - Classic Edition',
    category: 'BRIEFCASES',
    description: 'Elegant briefcase for professionals.',
    image: '/images/gallery/briefcases/20260210_173818.jpg'
  },
  {
    id: 'bc-2',
    title: 'Briefcase - Premium Version',
    category: 'BRIEFCASES',
    description: 'Premium leather briefcase.',
    image: '/images/gallery/briefcases/20260210_173819.jpg'
  },
  {
    id: 'bc-3',
    title: 'Briefcase - Deluxe Model',
    category: 'BRIEFCASES',
    description: 'Deluxe briefcase with combination lock.',
    image: '/images/gallery/briefcases/20260210_173820.jpg'
  },
  {
    id: 'bc-4',
    title: 'Briefcase - Executive Series',
    category: 'BRIEFCASES',
    description: 'Executive series briefcase with laptop compartment.',
    image: '/images/gallery/briefcases/20260210_173821.jpg'
  },
  {
    id: 'bc-5',
    title: 'Briefcase - Signature Collection',
    category: 'BRIEFCASES',
    description: 'Signature collection briefcase with premium leather.',
    image: '/images/gallery/briefcases/20260210_173822.jpg'
  },

  // 27. TOTE BAGS
  {
    id: 'tb-27',
    title: 'Tote Bag - Classic Edition',
    category: 'TOTE BAGS',
    description: 'Elegant tote bag for daily use.',
    image: '/images/gallery/tote-bags/20260210_173823.jpg'
  },
  {
    id: 'tb-28',
    title: 'Tote Bag - Premium Version',
    category: 'TOTE BAGS',
    description: 'Premium canvas tote bag.',
    image: '/images/gallery/tote-bags/20260210_173824.jpg'
  },
  {
    id: 'tb-29',
    title: 'Tote Bag - Deluxe Model',
    category: 'TOTE BAGS',
    description: 'Deluxe tote with leather handles.',
    image: '/images/gallery/tote-bags/20260210_173825.jpg'
  },
  {
    id: 'tb-30',
    title: 'Tote Bag - Executive Series',
    category: 'TOTE BAGS',
    description: 'Executive series tote with laptop compartment.',
    image: '/images/gallery/tote-bags/20260210_173826.jpg'
  },
  {
    id: 'tb-31',
    title: 'Tote Bag - Signature Collection',
    category: 'TOTE BAGS',
    description: 'Signature collection tote with premium materials.',
    image: '/images/gallery/tote-bags/20260210_173827.jpg'
  },

  // 28. BACKPACKS
  {
    id: 'bp-1',
    title: 'Backpack - Classic Edition',
    category: 'BACKPACKS',
    description: 'Elegant backpack for professionals.',
    image: '/images/gallery/backpacks/20260210_173828.jpg'
  },
  {
    id: 'bp-2',
    title: 'Backpack - Premium Version',
    category: 'BACKPACKS',
    description: 'Premium waterproof backpack.',
    image: '/images/gallery/backpacks/20260210_173829.jpg'
  },
  {
    id: 'bp-3',
    title: 'Backpack - Deluxe Model',
    category: 'BACKPACKS',
    description: 'Deluxe backpack with USB charging port.',
    image: '/images/gallery/backpacks/20260210_173830.jpg'
  },
  {
    id: 'bp-4',
    title: 'Backpack - Executive Series',
    category: 'BACKPACKS',
    description: 'Executive series backpack with leather finish.',
    image: '/images/gallery/backpacks/20260210_173831.jpg'
  },
  {
    id: 'bp-5',
    title: 'Backpack - Signature Collection',
    category: 'BACKPACKS',
    description: 'Signature collection backpack with premium materials.',
    image: '/images/gallery/backpacks/20260210_173832.jpg'
  },

  // 29. DUFFEL BAGS
  {
    id: 'db-1',
    title: 'Duffel Bag - Classic Edition',
    category: 'DUFFEL BAGS',
    description: 'Elegant duffel bag for travel.',
    image: '/images/gallery/duffel-bags/20260210_173833.jpg'
  },
  {
    id: 'db-2',
    title: 'Duffel Bag - Premium Version',
    category: 'DUFFEL BAGS',
    description: 'Premium leather duffel bag.',
    image: '/images/gallery/duffel-bags/20260210_173834.jpg'
  },
  {
    id: 'db-3',
    title: 'Duffel Bag - Deluxe Model',
    category: 'DUFFEL BAGS',
    description: 'Deluxe duffel with shoe compartment.',
    image: '/images/gallery/duffel-bags/20260210_173835.jpg'
  },
  {
    id: 'db-4',
    title: 'Duffel Bag - Executive Series',
    category: 'DUFFEL BAGS',
    description: 'Executive series duffel with laptop sleeve.',
    image: '/images/gallery/duffel-bags/20260210_173836.jpg'
  },
  {
    id: 'db-5',
    title: 'Duffel Bag - Signature Collection',
    category: 'DUFFEL BAGS',
    description: 'Signature collection duffel with premium leather.',
    image: '/images/gallery/duffel-bags/20260210_173837.jpg'
  },

  // 30. LUGGAGE TAGS
  {
    id: 'lt-1',
    title: 'Luggage Tag - Classic Edition',
    category: 'LUGGAGE TAGS',
    description: 'Elegant luggage tag for travelers.',
    image: '/images/gallery/luggage-tags/20260210_173838.jpg'
  },
  {
    id: 'lt-2',
    title: 'Luggage Tag - Premium Version',
    category: 'LUGGAGE TAGS',
    description: 'Premium leather luggage tag.',
    image: '/images/gallery/luggage-tags/20260210_173839.jpg'
  },
  {
    id: 'lt-3',
    title: 'Luggage Tag - Deluxe Model',
    category: 'LUGGAGE TAGS',
    description: 'Deluxe tag with brass hardware.',
    image: '/images/gallery/luggage-tags/20260210_173840.jpg'
  },
  {
    id: 'lt-4',
    title: 'Luggage Tag - Executive Series',
    category: 'LUGGAGE TAGS',
    description: 'Executive series tag with logo engraving.',
    image: '/images/gallery/luggage-tags/20260210_173841.jpg'
  },
  {
    id: 'lt-5',
    title: 'Luggage Tag - Signature Collection',
    category: 'LUGGAGE TAGS',
    description: 'Signature collection tag with premium leather.',
    image: '/images/gallery/luggage-tags/20260210_173842.jpg'
  },

  // 31. ENGRAVED PENS
  {
    id: 'ep-1',
    title: 'Engraved Pen - Classic Edition',
    category: 'ENGRAVED PENS',
    description: 'Elegant pen with custom engraving.',
    image: '/images/gallery/engraved-pens/20260210_173843.jpg'
  },
  {
    id: 'ep-2',
    title: 'Engraved Pen - Premium Version',
    category: 'ENGRAVED PENS',
    description: 'Premium pen with gold engraving.',
    image: '/images/gallery/engraved-pens/20260210_173844.jpg'
  },
  {
    id: 'ep-3',
    title: 'Engraved Pen - Deluxe Model',
    category: 'ENGRAVED PENS',
    description: 'Deluxe pen with wooden case.',
    image: '/images/gallery/engraved-pens/20260210_173845.jpg'
  },
  {
    id: 'ep-4',
    title: 'Engraved Pen - Executive Series',
    category: 'ENGRAVED PENS',
    description: 'Executive series pen with personalized message.',
    image: '/images/gallery/engraved-pens/20260210_173846.jpg'
  },
  {
    id: 'ep-5',
    title: 'Engraved Pen - Signature Collection',
    category: 'ENGRAVED PENS',
    description: 'Signature collection pen with premium engraving.',
    image: '/images/gallery/engraved-pens/20260210_173847.jpg'
  },

  // 32. CUSTOM KEYCHAINS
  {
    id: 'ck-1',
    title: 'Custom Keychain - Classic Edition',
    category: 'CUSTOM KEYCHAINS',
    description: 'Elegant keychain with custom design.',
    image: '/images/gallery/custom-keychains/20260210_173848.jpg'
  },
  {
    id: 'ck-2',
    title: 'Custom Keychain - Premium Version',
    category: 'CUSTOM KEYCHAINS',
    description: 'Premium keychain with leather strap.',
    image: '/images/gallery/custom-keychains/20260210_173849.jpg'
  },
  {
    id: 'ck-3',
    title: 'Custom Keychain - Deluxe Model',
    category: 'CUSTOM KEYCHAINS',
    description: 'Deluxe keychain with brass finish.',
    image: '/images/gallery/custom-keychains/20260210_173850.jpg'
  },
  {
    id: 'ck-4',
    title: 'Custom Keychain - Executive Series',
    category: 'CUSTOM KEYCHAINS',
    description: 'Executive series keychain with logo.',
    image: '/images/gallery/custom-keychains/20260210_173851.jpg'
  },
  {
    id: 'ck-5',
    title: 'Custom Keychain - Signature Collection',
    category: 'CUSTOM KEYCHAINS',
    description: 'Signature collection keychain with premium materials.',
    image: '/images/gallery/custom-keychains/20260210_173852.jpg'
  },

  // 33. NAMEPLATES
  {
    id: 'np-1',
    title: 'Nameplate - Classic Edition',
    category: 'NAMEPLATES',
    description: 'Elegant nameplate for office desk.',
    image: '/images/gallery/nameplates/20260210_173853.jpg'
  },
  {
    id: 'np-2',
    title: 'Nameplate - Premium Version',
    category: 'NAMEPLATES',
    description: 'Premium nameplate with gold finish.',
    image: '/images/gallery/nameplates/20260210_173854.jpg'
  },
  {
    id: 'np-3',
    title: 'Nameplate - Deluxe Model',
    category: 'NAMEPLATES',
    description: 'Deluxe nameplate with wooden base.',
    image: '/images/gallery/nameplates/20260210_173855.jpg'
  },
  {
    id: 'np-4',
    title: 'Nameplate - Executive Series',
    category: 'NAMEPLATES',
    description: 'Executive series nameplate with LED backlight.',
    image: '/images/gallery/nameplates/20260210_173856.jpg'
  },
  {
    id: 'np-5',
    title: 'Nameplate - Signature Collection',
    category: 'NAMEPLATES',
    description: 'Signature collection nameplate with premium materials.',
    image: '/images/gallery/nameplates/20260210_173857.jpg'
  },

  // 34. PERSONALIZED STAMPS
  {
    id: 'ps-34',
    title: 'Personalized Stamp - Classic Edition',
    category: 'PERSONALIZED STAMPS',
    description: 'Elegant stamp with custom design.',
    image: '/images/gallery/personalized-stamps/20260210_173858.jpg'
  },
  {
    id: 'ps-35',
    title: 'Personalized Stamp - Premium Version',
    category: 'PERSONALIZED STAMPS',
    description: 'Premium stamp with wooden handle.',
    image: '/images/gallery/personalized-stamps/20260210_173859.jpg'
  },
  {
    id: 'ps-36',
    title: 'Personalized Stamp - Deluxe Model',
    category: 'PERSONALIZED STAMPS',
    description: 'Deluxe stamp with self-inking mechanism.',
    image: '/images/gallery/personalized-stamps/20260210_173900.jpg'
  },
  {
    id: 'ps-37',
    title: 'Personalized Stamp - Executive Series',
    category: 'PERSONALIZED STAMPS',
    description: 'Executive series stamp with custom logo.',
    image: '/images/gallery/personalized-stamps/20260210_173901.jpg'
  },
  {
    id: 'ps-38',
    title: 'Personalized Stamp - Signature Collection',
    category: 'PERSONALIZED STAMPS',
    description: 'Signature collection stamp with premium handle.',
    image: '/images/gallery/personalized-stamps/20260210_173902.jpg'
  },

  // 35. MONOGRAMMED TOWELS
  {
    id: 'mt-1',
    title: 'Monogrammed Towel - Classic Edition',
    category: 'MONOGRAMMED TOWELS',
    description: 'Elegant towel with monogram embroidery.',
    image: '/images/gallery/monogrammed-towels/20260210_173903.jpg'
  },
  {
    id: 'mt-2',
    title: 'Monogrammed Towel - Premium Version',
    category: 'MONOGRAMMED TOWELS',
    description: 'Premium Turkish cotton towel.',
    image: '/images/gallery/monogrammed-towels/20260210_173904.jpg'
  },
  {
    id: 'mt-3',
    title: 'Monogrammed Towel - Deluxe Model',
    category: 'MONOGRAMMED TOWELS',
    description: 'Deluxe towel set with gold embroidery.',
    image: '/images/gallery/monogrammed-towels/20260210_173905.jpg'
  },
  {
    id: 'mt-4',
    title: 'Monogrammed Towel - Executive Series',
    category: 'MONOGRAMMED TOWELS',
    description: 'Executive series towel with personalized design.',
    image: '/images/gallery/monogrammed-towels/20260210_173906.jpg'
  },
  {
    id: 'mt-5',
    title: 'Monogrammed Towel - Signature Collection',
    category: 'MONOGRAMMED TOWELS',
    description: 'Signature collection towel with premium embroidery.',
    image: '/images/gallery/monogrammed-towels/20260210_173907.jpg'
  },

  // ===== Wellness & Lifestyle =====

  // 36. AROMATHERAPY SETS
  {
    id: 'as-1',
    title: 'Aromatherapy Set - Classic Edition',
    category: 'AROMATHERAPY SETS',
    description: 'Elegant aromatherapy set for relaxation.',
    image: '/images/gallery/aromatherapy-sets/20260210_173908.jpg'
  },
  {
    id: 'as-2',
    title: 'Aromatherapy Set - Premium Version',
    category: 'AROMATHERAPY SETS',
    description: 'Premium set with essential oils.',
    image: '/images/gallery/aromatherapy-sets/20260210_173909.jpg'
  },
  {
    id: 'as-3',
    title: 'Aromatherapy Set - Deluxe Model',
    category: 'AROMATHERAPY SETS',
    description: 'Deluxe set with ceramic diffuser.',
    image: '/images/gallery/aromatherapy-sets/20260210_173910.jpg'
  },
  {
    id: 'as-4',
    title: 'Aromatherapy Set - Executive Series',
    category: 'AROMATHERAPY SETS',
    description: 'Executive series set with premium oils.',
    image: '/images/gallery/aromatherapy-sets/20260210_173911.jpg'
  },
  {
    id: 'as-5',
    title: 'Aromatherapy Set - Signature Collection',
    category: 'AROMATHERAPY SETS',
    description: 'Signature collection set with luxury packaging.',
    image: '/images/gallery/aromatherapy-sets/20260210_173912.jpg'
  },

  // 37. SPA GIFT SETS
  {
    id: 'sgs-1',
    title: 'Spa Gift Set - Classic Edition',
    category: 'SPA GIFT SETS',
    description: 'Elegant spa gift set for relaxation.',
    image: '/images/gallery/spa-gift-sets/20260210_173913.jpg'
  },
  {
    id: 'sgs-2',
    title: 'Spa Gift Set - Premium Version',
    category: 'SPA GIFT SETS',
    description: 'Premium spa set with organic products.',
    image: '/images/gallery/spa-gift-sets/20260210_173914.jpg'
  },
  {
    id: 'sgs-3',
    title: 'Spa Gift Set - Deluxe Model',
    category: 'SPA GIFT SETS',
    description: 'Deluxe set with bamboo accessories.',
    image: '/images/gallery/spa-gift-sets/20260210_173915.jpg'
  },
  {
    id: 'sgs-4',
    title: 'Spa Gift Set - Executive Series',
    category: 'SPA GIFT SETS',
    description: 'Executive series set with premium packaging.',
    image: '/images/gallery/spa-gift-sets/20260210_173916.jpg'
  },
  {
    id: 'sgs-5',
    title: 'Spa Gift Set - Signature Collection',
    category: 'SPA GIFT SETS',
    description: 'Signature collection set with luxury products.',
    image: '/images/gallery/spa-gift-sets/20260210_173917.jpg'
  },

  // 38. YOGA MATS
  {
    id: 'ym-1',
    title: 'Yoga Mat - Classic Edition',
    category: 'YOGA MATS',
    description: 'Elegant yoga mat for wellness.',
    image: '/images/gallery/yoga-mats/20260210_173918.jpg'
  },
  {
    id: 'ym-2',
    title: 'Yoga Mat - Premium Version',
    category: 'YOGA MATS',
    description: 'Premium eco-friendly yoga mat.',
    image: '/images/gallery/yoga-mats/20260210_173919.jpg'
  },
  {
    id: 'ym-3',
    title: 'Yoga Mat - Deluxe Model',
    category: 'YOGA MATS',
    description: 'Deluxe mat with alignment lines.',
    image: '/images/gallery/yoga-mats/20260210_173920.jpg'
  },
  {
    id: 'ym-4',
    title: 'Yoga Mat - Executive Series',
    category: 'YOGA MATS',
    description: 'Executive series mat with carry bag.',
    image: '/images/gallery/yoga-mats/20260210_173921.jpg'
  },
  {
    id: 'ym-5',
    title: 'Yoga Mat - Signature Collection',
    category: 'YOGA MATS',
    description: 'Signature collection mat with premium materials.',
    image: '/images/gallery/yoga-mats/20260210_173922.jpg'
  },

  // 39. FITNESS BOTTLES
  {
    id: 'fb-1',
    title: 'Fitness Bottle - Classic Edition',
    category: 'FITNESS BOTTLES',
    description: 'Elegant fitness bottle for gym.',
    image: '/images/gallery/fitness-bottles/20260210_173923.jpg'
  },
  {
    id: 'fb-2',
    title: 'Fitness Bottle - Premium Version',
    category: 'FITNESS BOTTLES',
    description: 'Premium stainless steel bottle.',
    image: '/images/gallery/fitness-bottles/20260210_173924.jpg'
  },
  {
    id: 'fb-3',
    title: 'Fitness Bottle - Deluxe Model',
    category: 'FITNESS BOTTLES',
    description: 'Deluxe bottle with infuser.',
    image: '/images/gallery/fitness-bottles/20260210_173925.jpg'
  },
  {
    id: 'fb-4',
    title: 'Fitness Bottle - Executive Series',
    category: 'FITNESS BOTTLES',
    description: 'Executive series bottle with time marker.',
    image: '/images/gallery/fitness-bottles/20260210_173926.jpg'
  },
  {
    id: 'fb-5',
    title: 'Fitness Bottle - Signature Collection',
    category: 'FITNESS BOTTLES',
    description: 'Signature collection bottle with premium finish.',
    image: '/images/gallery/fitness-bottles/20260210_173927.jpg'
  },

  // 40. WELLNESS JOURNALS
  {
    id: 'wj-1',
    title: 'Wellness Journal - Classic Edition',
    category: 'WELLNESS JOURNALS',
    description: 'Elegant wellness journal for self-care.',
    image: '/images/gallery/wellness-journals/20260210_173928.jpg'
  },
  {
    id: 'wj-2',
    title: 'Wellness Journal - Premium Version',
    category: 'WELLNESS JOURNALS',
    description: 'Premium journal with leather cover.',
    image: '/images/gallery/wellness-journals/20260210_173929.jpg'
  },
  {
    id: 'wj-3',
    title: 'Wellness Journal - Deluxe Model',
    category: 'WELLNESS JOURNALS',
    description: 'Deluxe journal with daily prompts.',
    image: '/images/gallery/wellness-journals/20260210_173930.jpg'
  },
  {
    id: 'wj-4',
    title: 'Wellness Journal - Executive Series',
    category: 'WELLNESS JOURNALS',
    description: 'Executive series journal with goal tracker.',
    image: '/images/gallery/wellness-journals/20260210_173931.jpg'
  },
  {
    id: 'wj-5',
    title: 'Wellness Journal - Signature Collection',
    category: 'WELLNESS JOURNALS',
    description: 'Signature collection journal with premium paper.',
    image: '/images/gallery/wellness-journals/20260210_173932.jpg'
  },

  // ===== Premium Collections =====

  // 41. GOLD COLLECTION
  {
    id: 'gc-1',
    title: 'Gold Collection - Classic Edition',
    category: 'GOLD COLLECTION',
    description: 'Elegant product from gold collection.',
    image: '/images/gallery/gold-collection/20260210_173933.jpg'
  },
  {
    id: 'gc-2',
    title: 'Gold Collection - Premium Version',
    category: 'GOLD COLLECTION',
    description: 'Premium piece from gold collection.',
    image: '/images/gallery/gold-collection/20260210_173934.jpg'
  },
  {
    id: 'gc-3',
    title: 'Gold Collection - Deluxe Model',
    category: 'GOLD COLLECTION',
    description: 'Deluxe item with 24K gold finish.',
    image: '/images/gallery/gold-collection/20260210_173935.jpg'
  },
  {
    id: 'gc-4',
    title: 'Gold Collection - Executive Series',
    category: 'GOLD COLLECTION',
    description: 'Executive series piece with gold plating.',
    image: '/images/gallery/gold-collection/20260210_173936.jpg'
  },
  {
    id: 'gc-5',
    title: 'Gold Collection - Signature Collection',
    category: 'GOLD COLLECTION',
    description: 'Signature piece with premium gold finish.',
    image: '/images/gallery/gold-collection/20260210_173937.jpg'
  },

  // 42. SILVER COLLECTION
  {
    id: 'sc-1',
    title: 'Silver Collection - Classic Edition',
    category: 'SILVER COLLECTION',
    description: 'Elegant product from silver collection.',
    image: '/images/gallery/silver-collection/20260210_173938.jpg'
  },
  {
    id: 'sc-2',
    title: 'Silver Collection - Premium Version',
    category: 'SILVER COLLECTION',
    description: 'Premium piece with silver finish.',
    image: '/images/gallery/silver-collection/20260210_173939.jpg'
  },
  {
    id: 'sc-3',
    title: 'Silver Collection - Deluxe Model',
    category: 'SILVER COLLECTION',
    description: 'Deluxe item with sterling silver.',
    image: '/images/gallery/silver-collection/20260210_173940.jpg'
  },
  {
    id: 'sc-4',
    title: 'Silver Collection - Executive Series',
    category: 'SILVER COLLECTION',
    description: 'Executive series piece with silver plating.',
    image: '/images/gallery/silver-collection/20260210_173941.jpg'
  },
  {
    id: 'sc-5',
    title: 'Silver Collection - Signature Collection',
    category: 'SILVER COLLECTION',
    description: 'Signature piece with premium silver finish.',
    image: '/images/gallery/silver-collection/20260210_173942.jpg'
  },

  // 43. CRYSTAL COLLECTION
  {
    id: 'cc-1',
    title: 'Crystal Collection - Classic Edition',
    category: 'CRYSTAL COLLECTION',
    description: 'Elegant product from crystal collection.',
    image: '/images/gallery/crystal-collection/20260210_173943.jpg'
  },
  {
    id: 'cc-2',
    title: 'Crystal Collection - Premium Version',
    category: 'CRYSTAL COLLECTION',
    description: 'Premium piece with Swarovski crystals.',
    image: '/images/gallery/crystal-collection/20260210_173944.jpg'
  },
  {
    id: 'cc-3',
    title: 'Crystal Collection - Deluxe Model',
    category: 'CRYSTAL COLLECTION',
    description: 'Deluxe item with premium crystals.',
    image: '/images/gallery/crystal-collection/20260210_173945.jpg'
  },
  {
    id: 'cc-4',
    title: 'Crystal Collection - Executive Series',
    category: 'CRYSTAL COLLECTION',
    description: 'Executive series piece with crystal accents.',
    image: '/images/gallery/crystal-collection/20260210_173946.jpg'
  },
  {
    id: 'cc-5',
    title: 'Crystal Collection - Signature Collection',
    category: 'CRYSTAL COLLECTION',
    description: 'Signature piece with premium crystal finish.',
    image: '/images/gallery/crystal-collection/20260210_173947.jpg'
  },

  // 44. MARBLE COLLECTION
  {
    id: 'mc-1',
    title: 'Marble Collection - Classic Edition',
    category: 'MARBLE COLLECTION',
    description: 'Elegant product from marble collection.',
    image: '/images/gallery/marble-collection/20260210_173948.jpg'
  },
  {
    id: 'mc-2',
    title: 'Marble Collection - Premium Version',
    category: 'MARBLE COLLECTION',
    description: 'Premium piece with natural marble.',
    image: '/images/gallery/marble-collection/20260210_173949.jpg'
  },
  {
    id: 'mc-3',
    title: 'Marble Collection - Deluxe Model',
    category: 'MARBLE COLLECTION',
    description: 'Deluxe item with Italian marble.',
    image: '/images/gallery/marble-collection/20260210_173950.jpg'
  },
  {
    id: 'mc-4',
    title: 'Marble Collection - Executive Series',
    category: 'MARBLE COLLECTION',
    description: 'Executive series piece with marble base.',
    image: '/images/gallery/marble-collection/20260210_173951.jpg'
  },
  {
    id: 'mc-5',
    title: 'Marble Collection - Signature Collection',
    category: 'MARBLE COLLECTION',
    description: 'Signature piece with premium marble finish.',
    image: '/images/gallery/marble-collection/20260210_173952.jpg'
  },

  // 45. PREMIUM BOX SETS
  {
    id: 'pbs-1',
    title: 'Premium Box Set - Classic Edition',
    category: 'PREMIUM BOX SETS',
    description: 'Elegant box set for gifting.',
    image: '/images/gallery/premium-box-sets/20260210_173953.jpg'
  },
  {
    id: 'pbs-2',
    title: 'Premium Box Set - Premium Version',
    category: 'PREMIUM BOX SETS',
    description: 'Premium box set with luxury items.',
    image: '/images/gallery/premium-box-sets/20260210_173954.jpg'
  },
  {
    id: 'pbs-3',
    title: 'Premium Box Set - Deluxe Model',
    category: 'PREMIUM BOX SETS',
    description: 'Deluxe box set with wooden case.',
    image: '/images/gallery/premium-box-sets/20260210_173955.jpg'
  },
  {
    id: 'pbs-4',
    title: 'Premium Box Set - Executive Series',
    category: 'PREMIUM BOX SETS',
    description: 'Executive series box with premium gifts.',
    image: '/images/gallery/premium-box-sets/20260210_173956.jpg'
  },
  {
    id: 'pbs-5',
    title: 'Premium Box Set - Signature Collection',
    category: 'PREMIUM BOX SETS',
    description: 'Signature collection box with luxury packaging.',
    image: '/images/gallery/premium-box-sets/20260210_173957.jpg'
  },
];

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleImageError = (itemId: string) => {
    setImageErrors((prev) => ({ ...prev, [itemId]: true }));
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

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore our premium corporate gift collection with 44 categories."
      />

      <PageHero
        title="Our Gallery"
        subtitle="Explore Our Premium Corporate Gift Collection"
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      {/* GALLERY SECTION */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          {/* SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="relative max-w-2xl">
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
              >
                {filteredItems.map((item) => {
                  const imageUrl = getItemImageUrl(item);
                  return (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                      className="group cursor-pointer h-full"
                      onClick={() => setSelectedItem({ ...item, image: imageUrl || '' })}
                    >
                      <div className="card-luxury overflow-hidden h-full flex flex-col hover:shadow-luxury-lg transition-all duration-300">
                        {/* IMAGE SECTION */}
                        <div className="relative overflow-hidden bg-beige-50 aspect-[4/3] flex-shrink-0">
                          {imageUrl ? (
                            <div className="w-full h-full flex items-center justify-center bg-beige-50">
                              <img
                                src={imageUrl}
                                alt={item.title}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                                onError={() => handleImageError(item.id)}
                              />
                            </div>
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-beige-100 to-beige-200">
                              <span className="text-forest-400 font-medium text-center px-4 text-sm md:text-base">
                                {item.title}
                              </span>
                            </div>
                          )}

                          {/* HOVER OVERLAY - Hide on mobile */}
                          <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 items-center justify-center opacity-0 group-hover:opacity-100">
                            <motion.div
                              initial={{ scale: 0.8 }}
                              whileHover={{ scale: 1.1 }}
                              className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-luxury-lg"
                            >
                              <ZoomIn className="w-5 h-5 text-forest-700" />
                            </motion.div>
                          </div>

                          {/* CATEGORY BADGE */}
                          <div className="absolute top-2 right-2 bg-gold-600/90 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-semibold truncate max-w-[70%] shadow-md">
                            {item.category}
                          </div>
                        </div>

                        {/* CONTENT SECTION */}
                        <div className="p-3 md:p-5 flex-1 flex flex-col">
                          <h3 className="font-display font-bold text-sm md:text-lg text-forest-800 mb-1 line-clamp-2 group-hover:text-gold-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="hidden md:block text-sm text-forest-600/70 line-clamp-2 flex-1 mb-3">
                            {item.description}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItem({ ...item, image: imageUrl || '' });
                            }}
                            className="inline-flex items-center justify-center gap-1 md:gap-2 w-full bg-gold-600 hover:bg-gold-700 text-white font-semibold py-2 md:py-2.5 rounded-btn transition-colors duration-200 text-sm md:text-base"
                          >
                            <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />
                            View Details
                          </button>
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
                className="col-span-full text-center py-12 md:py-16"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border-2 border-beige-200">
                  <Search className="w-6 h-6 md:w-8 md:h-8 text-gold-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-forest-800 mb-2">
                  No items found
                </h3>
                <p className="text-forest-600/70 max-w-sm mx-auto mb-4 md:mb-6 text-sm md:text-base">
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-card max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto shadow-luxury-lg mx-2 md:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* LIGHTBOX HEADER */}
              <div className="sticky top-0 bg-white border-b border-beige-200 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between z-10">
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-gold-600 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-0.5 md:mb-1">
                    {selectedItem.category}
                  </span>
                  <h2 className="font-display text-lg md:text-2xl font-bold text-forest-800 truncate">
                    {selectedItem.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-shrink-0 p-1.5 md:p-2 text-forest-600 hover:text-forest-800 hover:bg-beige-100 rounded-btn transition-all"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* LIGHTBOX CONTENT */}
              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                {/* IMAGE */}
                <div className="rounded-card overflow-hidden bg-gradient-to-br from-beige-50 to-beige-100 aspect-[4/3] relative group">
                  {selectedItem.image ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-full h-full p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center">
                        <img
                          src={selectedItem.image}
                          alt={selectedItem.title}
                          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105 rounded-lg shadow-lg"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            const placeholder = parent?.querySelector('.fallback-placeholder');
                            if (placeholder) {
                              placeholder.classList.remove('hidden');
                            }
                          }}
                        />
                      </div>
                      
                      {/* Fallback Placeholder */}
                      <div className="fallback-placeholder hidden absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-beige-100 to-beige-200">
                        <span className="text-forest-400 font-medium text-center px-3 sm:px-4 text-xs sm:text-sm md:text-base">
                          {selectedItem.title}
                        </span>
                      </div>

                      {/* Subtle Zoom Hint - Responsive */}
                      <div className="absolute bottom-2 right-2 xs:bottom-3 xs:right-3 sm:bottom-4 sm:right-4 bg-black/40 backdrop-blur-sm text-white/80 px-2 py-1 xs:px-2.5 xs:py-1.5 rounded-full text-[8px] xs:text-[10px] sm:text-xs flex items-center gap-1 xs:gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomIn className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="hidden xs:inline">Click to zoom</span>
                        <span className="xs:hidden">Zoom</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-beige-100 to-beige-200">
                      <span className="text-forest-400 font-medium text-center px-3 sm:px-4 text-xs sm:text-sm md:text-base">
                        {selectedItem.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* DESCRIPTION */}
                <div>
                  <h3 className="text-xs md:text-sm font-semibold text-forest-700 uppercase tracking-wider mb-2">
                    Description
                  </h3>
                  <p className="text-sm md:text-lg text-forest-600/80 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* DETAILS GRID */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 pt-3 md:pt-4 border-t border-beige-200">
                  <div>
                    <p className="text-[10px] md:text-xs font-semibold text-forest-700 uppercase tracking-wider mb-1 md:mb-2">
                      Product ID
                    </p>
                    <p className="text-forest-600 font-mono text-xs md:text-sm">
                      {selectedItem.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-semibold text-forest-700 uppercase tracking-wider mb-1 md:mb-2">
                      Category
                    </p>
                    <p className="inline-flex items-center gap-1 md:gap-2 bg-gold-600/10 text-gold-700 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium border border-gold-600/20">
                      {selectedItem.category}
                    </p>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-2 md:gap-3 pt-2 md:pt-3 border-t border-beige-200">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 bg-beige-100 text-forest-700 font-semibold py-2 md:py-3 rounded-btn hover:bg-beige-200 transition-colors text-sm md:text-base"
                  >
                    Close
                  </button>
                  <button className="flex-1 btn-primary text-sm md:text-base py-2 md:py-3">
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