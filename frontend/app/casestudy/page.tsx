"use client";
import { useState } from 'react';
import { TrendingUp, Users, DollarSign, MousePointerClick, ArrowUpRight, Filter } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudies() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      client: 'Urban Fitness Co.',
      industry: 'Health & Fitness',
      service: 'local-seo',
      serviceName: 'Local SEO',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzfGVufDF8fHx8MTc2NjE2OTExOHww&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'A local gym chain struggling to compete with national franchises in local search results, resulting in declining foot traffic and membership sign-ups.',
      solution: 'Implemented comprehensive local SEO strategy including Google Business Profile optimization, local citation building, and location-specific content creation.',
      results: [
        { metric: '247%', label: 'Increase in Local Search Visibility' },
        { metric: '186%', label: 'Growth in Organic Traffic' },
        { metric: '94%', label: 'Increase in Phone Calls' },
        { metric: '3x', label: 'More Walk-in Memberships' }
      ],
      testimonial: {
        quote: 'EchoShift transformed our online presence. We went from invisible to dominating local search results in just 6 months.',
        author: 'Sarah Chen',
        title: 'Marketing Director'
      }
    },
    {
      id: 2,
      client: 'TechFlow Solutions',
      industry: 'B2B SaaS',
      service: 'google-ads',
      serviceName: 'Google Ads',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY2MTY5MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'High cost-per-acquisition and low conversion rates from paid search campaigns were eating into marketing budget with minimal ROI.',
      solution: 'Restructured Google Ads campaigns with advanced audience targeting, improved ad copy, landing page optimization, and strategic bid management.',
      results: [
        { metric: '68%', label: 'Reduction in Cost-per-Click' },
        { metric: '312%', label: 'Increase in Conversion Rate' },
        { metric: '4.2x', label: 'Return on Ad Spend' },
        { metric: '$2.1M', label: 'Revenue Generated' }
      ],
      testimonial: {
        quote: 'The ROI we\'re seeing from our Google Ads campaigns is phenomenal. EchoShift turned our biggest expense into our best performing channel.',
        author: 'Michael Rodriguez',
        title: 'CEO'
      }
    },
    {
      id: 3,
      client: 'Artisan Roasters',
      industry: 'Food & Beverage',
      service: 'social-media',
      serviceName: 'Social Media Marketing',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc2NjE2OTEyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Specialty coffee brand with minimal social media presence looking to build brand awareness and drive e-commerce sales among millennials and Gen Z.',
      solution: 'Developed comprehensive social media strategy across Instagram and Facebook with influencer partnerships, user-generated content campaigns, and targeted paid social ads.',
      results: [
        { metric: '425%', label: 'Growth in Social Following' },
        { metric: '8.7%', label: 'Average Engagement Rate' },
        { metric: '156%', label: 'Increase in E-commerce Sales' },
        { metric: '92K', label: 'New Email Subscribers' }
      ],
      testimonial: {
        quote: 'Our social media went from an afterthought to our primary customer acquisition channel. The creative campaigns EchoShift developed are phenomenal.',
        author: 'Emma Thompson',
        title: 'Co-Founder'
      }
    },
    {
      id: 4,
      client: 'Heritage Law Group',
      industry: 'Legal Services',
      service: 'programmatic-display',
      serviceName: 'Programmatic Display',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2V8ZW58MXx8fHwxNzY2MTY5MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Mid-size law firm needed to increase brand visibility and generate qualified leads for their estate planning and business law practices.',
      solution: 'Launched targeted programmatic display campaigns with geo-fencing around competitor offices, contextual targeting on legal content sites, and retargeting campaigns.',
      results: [
        { metric: '340%', label: 'Increase in Website Traffic' },
        { metric: '218%', label: 'Growth in Quality Leads' },
        { metric: '2.8%', label: 'Click-Through Rate' },
        { metric: '$387K', label: 'New Client Revenue' }
      ],
      testimonial: {
        quote: 'The precision targeting capabilities of programmatic advertising brought us clients we would have never reached through traditional marketing.',
        author: 'James Patterson',
        title: 'Senior Partner'
      }
    },
    {
      id: 5,
      client: 'Verde Home Solutions',
      industry: 'Home Services',
      service: 'mobile-geolocation',
      serviceName: 'Mobile & Geolocation',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VydmljZXN8ZW58MXx8fHwxNzY2MTY5MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'HVAC and plumbing company wanted to target homeowners in real-time when they were most likely to need emergency services.',
      solution: 'Implemented mobile geolocation targeting with weather-triggered ads, competitor location targeting, and real-time bidding adjustments based on service demand.',
      results: [
        { metric: '276%', label: 'Increase in Service Calls' },
        { metric: '89%', label: 'Mobile Conversion Rate' },
        { metric: '4.1x', label: 'Return on Investment' },
        { metric: '62%', label: 'Reduction in CAC' }
      ],
      testimonial: {
        quote: 'The ability to reach people exactly when and where they need our services has been a game-changer. Our trucks are fully booked.',
        author: 'Carlos Martinez',
        title: 'Owner'
      }
    },
    {
      id: 6,
      client: 'Luxe Fashion Boutique',
      industry: 'Retail & E-commerce',
      service: 'email-marketing',
      serviceName: 'Email Marketing',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWV8ZW58MXx8fHwxNzY2MTY5MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'High-end fashion retailer with a large but unengaged email list and declining repeat purchase rates from existing customers.',
      solution: 'Revamped email marketing strategy with advanced segmentation, personalized product recommendations, automated abandoned cart sequences, and VIP customer nurture campaigns.',
      results: [
        { metric: '52%', label: 'Email Open Rate' },
        { metric: '12.4%', label: 'Click-Through Rate' },
        { metric: '389%', label: 'Email Revenue Growth' },
        { metric: '67%', label: 'Increase in Repeat Purchases' }
      ],
      testimonial: {
        quote: 'Email went from our lowest performing channel to our highest ROI channel. The personalization strategy EchoShift implemented is brilliant.',
        author: 'Olivia Chen',
        title: 'E-commerce Director'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Industries' },
    { id: 'Health & Fitness', label: 'Health & Fitness' },
    { id: 'B2B SaaS', label: 'B2B SaaS' },
    { id: 'Food & Beverage', label: 'Food & Beverage' },
    { id: 'Legal Services', label: 'Legal Services' },
    { id: 'Home Services', label: 'Home Services' },
    { id: 'Retail & E-commerce', label: 'Retail & E-commerce' }
  ];

  const filteredCaseStudies = selectedFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedFilter);

  return (
    <div className="min-h-screen dark:bg-slate-950 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 py-20 mb-16">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-6xl mb-6 text-white">
            Client Success Stories
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Real results from real businesses. See how we've helped clients across industries 
            achieve remarkable growth through data-driven digital marketing strategies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            <h2 className="text-xl dark:text-white">Filter by Industry</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-20">
          {filteredCaseStudies.map((study, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-full">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  {/* Client & Service */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-950 rounded-full mb-4">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {study.serviceName}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl mb-2 dark:text-white">
                      {study.client}
                    </h2>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      The Challenge
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      Our Solution
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                      Results Achieved
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, rIndex) => (
                        <div 
                          key={rIndex}
                          className="p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border border-slate-200 dark:border-slate-800"
                        >
                          <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                    <p className="text-white text-lg mb-4 italic">
                      "{study.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{study.testimonial.author}</p>
                        <p className="text-white/80 text-sm">{study.testimonial.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                href={`/services/${study.service}`}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                  >
                    <span>Learn more about {study.serviceName}</span>
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 p-12 bg-gradient-to-br from-slate-900 to-blue-900 dark:from-slate-950 dark:to-blue-950 rounded-3xl text-center border border-slate-800">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join the growing list of businesses achieving remarkable results with EchoShift's 
            data-driven digital marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#solutions-finder"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all shadow-xl group"
            >
              <span>Get Started</span>
              <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="mailto:hello@echoshift.agency"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              <span>Schedule a Consultation</span>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-xl mb-3">
              <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">320%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Average Growth Rate</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-950 rounded-xl mb-3">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">500+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Successful Campaigns</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-950 rounded-xl mb-3">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">$50M+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Client Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-950 rounded-xl mb-3">
              <MousePointerClick className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">98%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
