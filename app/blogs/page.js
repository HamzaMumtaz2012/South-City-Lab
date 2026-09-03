import React from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Pathology',
  'Radiology',
  'Health Tips',
  'Diagnostic Tech',
  'Patient Care',
];

const BLOG_POSTS = [
  {
    id: '1',
    slug: 'understanding-complete-blood-count-cbc',
    title: 'Understanding Your Complete Blood Count (CBC) Results',
    excerpt:
      'A comprehensive guide on what your CBC test measures, including white blood cells, red blood cells, and platelets, and what anomalies might indicate.',
    category: 'Pathology',
    date: 'Sep 01, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: '2',
    slug: 'role-of-mri-in-early-detection',
    title: 'The Vital Role of Advanced MRI in Early Disease Detection',
    excerpt:
      'Explore how high-field MRI technology allows radiologists to catch subtle tissue changes before symptoms even begin to present.',
    category: 'Radiology',
    date: 'Aug 28, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: '3',
    slug: 'fasting-for-lab-tests-guide',
    title: 'Why Fasting Matters: Preparing for Your Lab Tests',
    excerpt:
      'Learn which blood tests require fasting, how long you should fast, and why eating beforehand can alter your lipid and glucose numbers.',
    category: 'Patient Care',
    date: 'Aug 20, 2026',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: '4',
    slug: 'preventative-health-checkups-30s',
    title: 'Essential Diagnostic Screenings You Should Get in Your 30s',
    excerpt:
      'Don’t wait for symptoms. Here are the core blood markers, vitamin levels, and health screenings every adult should track annually.',
    category: 'Health Tips',
    date: 'Aug 14, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((post) => post.id !== featuredPost.id);

  return (
    <div className="min-h-screen bg-gray-50 text-[#555555]">
      {/* South City Lab Header Banner */}
      <section className="bg-white border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-3">
          <span className="text-[#d30815] font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-md border border-red-100">
            South City Lab Blog
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Health Knowledge & Medical Insights
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Stay informed with expert guidance on diagnostics, pathology tests, and healthy living.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles or tests..."
                className="w-full py-2.5 pl-10 pr-4 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d30815] focus:bg-white text-sm"
              />
              <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all ${
                idx === 0
                  ? 'bg-[#d30815] text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-red-50 hover:text-[#d30815] border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:border-red-200 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative lg:col-span-7 h-64 sm:h-80 lg:h-auto">
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-50 text-[#d30815] text-xs font-bold px-2.5 py-0.5 rounded border border-red-100 uppercase">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-gray-400">Featured Article</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug hover:text-[#d30815] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1 text-[#d30815] font-bold hover:underline"
                  >
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Post Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#d30815] pl-3">
              Latest Health Articles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-red-300 transition-all group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 text-[#d30815] text-[11px] font-bold uppercase px-2 py-0.5 rounded shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-bold text-base text-gray-900 group-hover:text-[#d30815] transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Red CTA Section */}
        <section className="bg-[#d30815] text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold">Book a Home Sample Collection</h3>
            <p className="text-red-100 text-xs sm:text-sm max-w-lg">
              Get diagnostic pathology tests done at your convenience with South City Lab.
            </p>
          </div>
          <button className="px-6 py-2.5 bg-white text-[#d30815] hover:bg-gray-100 font-bold rounded-lg text-sm transition-colors shadow-sm whitespace-nowrap">
            Book Test Online
          </button>
        </section>
      </main>
    </div>
  );
}