"use client"; // Required because you use window.history.back()

import Link from 'next/link'; // Standard Next.js Link
import { Home, Search, ArrowLeft, Sparkles } from 'lucide-react';

export default function NotFound() { // Removed 'export function' to use as default export
  const quickLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/services', label: 'Our Services', icon: Search },
    { to: '/case-studies', label: 'Case Studies', icon: Search },
    { to: '/about', label: 'About Us', icon: Search },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* ... (All your beautiful UI code stays exactly the same) ... */}
      
      {/* Just ensure your Links use the 'href' prop instead of 'to' */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all group"
        >
          <Home className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
        
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-100 rounded-xl hover:border-blue-600 dark:hover:border-blue-400 transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Go Back</span>
        </button>
      </div>

      {/* Grid Links mapping */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              href={link.to} // Changed 'to' to 'href'
              className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all group"
            >
              <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <span className="text-slate-700 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
      {/* ... rest of your code ... */}
    </div>
  );
}