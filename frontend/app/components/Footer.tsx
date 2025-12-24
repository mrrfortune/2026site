import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import Link from "next/link";

export function Footer() {
  // Use a variable for the year to keep it updated automatically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold">AdVantage AI</span>
            </div>
            <p className="text-slate-400">
              Transforming brands with AI-powered digital advertising solutions that deliver real results.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              {/* Added internal links to your sections if they exist on your main page */}
              <li><Link href="/#google-ads" className="hover:text-white transition-colors">Targeted Campaigns</Link></li>
              <li><Link href="/#performance" className="hover:text-white transition-colors">Growth Marketing</Link></li>
              <li><Link href="/#analytics" className="hover:text-white transition-colors">Analytics & Insights</Link></li>
              <li>Creative Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li>Our Work</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                <a href="mailto:hello@advantageai.com" className="hover:text-white transition-colors">hello@advantageai.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>123 Innovation Drive<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} AdVantage AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            {/* UPDATED TO USE NEXT.JS LINK */}
            <Link href="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/termsofservice" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}