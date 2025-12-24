"use client";

import { useTheme } from "next-themes";
import { Sparkles, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Services', href: '/services', id: 'services' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Case Studies', href: '/casestudy', id: '' },
  ];

  return (
    /* 1. Changed bg-white/80 to bg-background/80 */
    /* 2. Changed border-slate-200 to border-border */
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg shadow-blue-500/20">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            {/* 3. Changed hardcoded gradient text to use foreground variable */}
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              AdVantage AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    e.preventDefault();
                    handleScroll(link.id);
                  }
                }}
                /* 4. Using muted-foreground for a professional B2B look */
                className="text-sm font-medium text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md shadow-blue-500/10">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          /* 5. Applied bg-background here to ensure mobile menu matches theme */
          <div className="md:hidden py-6 space-y-4 border-t border-border bg-background animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    e.preventDefault();
                    handleScroll(link.id);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="block text-base font-medium text-foreground/80 hover:text-blue-600 py-2"
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}