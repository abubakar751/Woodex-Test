import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { WhatsAppButton, CallButton, BackToTop, FloatingQuoteCTA } from './components/ui/FloatingElements';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Services = lazy(() => import('./pages/Services'));
const Industries = lazy(() => import('./pages/Industries'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Clients = lazy(() => import('./pages/Clients'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const Catalogue = lazy(() => import('./pages/Catalogue'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-beige-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gold-500 border-t-forest-700 rounded-full animate-spin mx-auto mb-4" />
        <p className="font-display text-forest-700">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-body">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/catalogue" element={<Catalogue />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
          <CallButton />
          <BackToTop />
          <FloatingQuoteCTA />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
