import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, Calendar, Clock, User, ArrowRight, Tag
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';
import { blogPosts, blogCategories } from '../data/blogs';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  // Get featured post (first post overall)
  const featuredPost = blogPosts[0];

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <>
      <SEO
        title="Blog - Insights on Corporate Gifting & Sustainability"
        description="Explore Woodex Mumbai's blog for insights on sustainable corporate gifting, eco-friendly products, branding, employee engagement, and sustainability trends."
      />

      {/* PAGE HERO */}
      <PageHero
        title="Blog"
        subtitle="Insights on Corporate Gifting & Sustainability"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      {/* FEATURED ARTICLE SECTION */}
      <section className="section-padding bg-gradient-to-b from-beige-50 to-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Featured Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-center"
            >
              <div>
                <span className="inline-block px-4 py-2 bg-forest-700/10 text-forest-700 rounded-full text-sm font-semibold mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-forest-900 leading-tight">
                  {featuredPost.title}
                </h2>
              </div>

              <p className="text-lg text-forest-700/80 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-forest-600 border-t border-b border-gold-200/30 py-6">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gold-600" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gold-600" />
                  <span>
                    {new Date(featuredPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold-600" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-3 btn-primary group"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-200 to-transparent" />

      {/* SEARCH AND FILTERS SECTION */}
      <section className="section-padding bg-white">
        <div className="container-luxury space-y-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-forest-400" />
            <input
              type="text"
              placeholder="Search articles by title, author, or keywords..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-beige-50 border-2 border-beige-200 rounded-lg text-forest-900 placeholder-forest-400/50 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200/50 transition-all text-lg"
            />
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {blogCategories.map((category) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/30'
                    : 'bg-beige-100 text-forest-700 border border-beige-200 hover:bg-beige-200 hover:border-gold-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Results Count */}
          <div className="text-center text-sm text-forest-600/70">
            Showing <span className="font-semibold text-forest-700">{paginatedPosts.length}</span> of{' '}
            <span className="font-semibold text-forest-700">{filteredPosts.length}</span> articles
            {searchTerm && (
              <span>
                {' '}for "<span className="text-forest-700 font-semibold">{searchTerm}</span>"
              </span>
            )}
          </div>
        </div>
      </section>

      {/* BLOG POSTS LIST - TEXT ONLY */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          {paginatedPosts.length > 0 ? (
            <>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-8"
              >
                {paginatedPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={staggerItem}
                    className="border-b border-beige-200 pb-8 last:border-0 last:pb-0"
                  >
                    <div className="space-y-4">
                      {/* Category and Date */}
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="inline-block px-3 py-1 bg-forest-700/10 text-forest-700 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <span className="text-forest-500/60 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="text-forest-500/60 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-forest-900 hover:text-gold-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-forest-700/80 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Author and Read More */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-3 text-sm text-forest-600">
                          <User className="w-4 h-4 text-gold-600" />
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <motion.button
                          whileHover={{ x: 3 }}
                          className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm group"
                        >
                          Read Full Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-16 flex items-center justify-center gap-3 flex-wrap"
                >
                  {/* Previous Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-6 py-3 rounded-lg border-2 border-gold-200 text-forest-700 font-semibold hover:bg-beige-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    ← Previous
                  </motion.button>

                  {/* Page Numbers */}
                  <div className="flex gap-2 flex-wrap">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <motion.button
                          key={page}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setCurrentPage(page)}
                          className={`w-11 h-11 rounded-lg font-bold transition-all ${
                            currentPage === page
                              ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/30'
                              : 'bg-beige-100 text-forest-700 border border-beige-200 hover:bg-beige-200'
                          }`}
                        >
                          {page}
                        </motion.button>
                      )
                    )}
                  </div>

                  {/* Next Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-6 py-3 rounded-lg border-2 border-gold-200 text-forest-700 font-semibold hover:bg-beige-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Next →
                  </motion.button>
                </motion.div>
              )}

              {/* Page Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8 text-center text-sm text-forest-600/70"
              >
                Page <span className="font-semibold text-forest-700">{currentPage}</span> of{' '}
                <span className="font-semibold text-forest-700">{totalPages}</span>
              </motion.div>
            </>
          ) : (
            /* No Results State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-gold-200 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-forest-900 mb-3">
                No articles found
              </h3>
              <p className="text-forest-600/70 max-w-md mx-auto mb-8">
                {searchTerm
                  ? `We couldn't find any articles matching "${searchTerm}" in the ${selectedCategory} category.`
                  : `No articles available in the ${selectedCategory} category.`}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setCurrentPage(1);
                }}
                className="btn-primary"
              >
                Clear Filters & View All
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-gradient-to-r from-forest-700 to-forest-900">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8 max-w-3xl mx-auto"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Transform Your Corporate Gifting Strategy
              </h2>
              <p className="text-xl text-beige-100 max-w-2xl mx-auto">
                Ready to elevate your brand with sustainable, premium corporate gifts? Let's create something extraordinary together.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-gold-500/30 transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}