"use client";
import { ArrowUpRight, Sparkles, Target, Check } from 'lucide-react';
import { services } from '../data/services';
import Link from 'next/link';

export default function Services() {
  const serviceCategories = [
    {
      name: 'Search & SEO',
      description: 'Dominate search results and drive organic growth',
      services: ['organic-seo', 'local-seo', 'google-ads']
    },
    {
      name: 'Paid Advertising',
      description: 'Targeted campaigns that deliver measurable results',
      services: ['programmatic-display', 'social-media', 'native-advertising']
    },
    {
      name: 'Video & Audio',
      description: 'Engage audiences with compelling multimedia content',
      services: ['video-advertising', 'ott-ctv', 'streaming-audio']
    },
    {
      name: 'Mobile & Location',
      description: 'Reach customers on-the-go with precision targeting',
      services: ['mobile-geolocation']
    },
    {
      name: 'Email & Messaging',
      description: 'Direct communication that converts',
      services: ['email-marketing', 'chat-messaging']
    },
    {
      name: 'Web Solutions',
      description: 'Professional websites that drive conversions',
      services: ['web-design', 'web-accessibility']
    },
    {
      name: 'Creative & Technology',
      description: 'Innovation and design excellence',
      services: ['creative-design', 'ad-tech-platform']
    },
    {
      name: 'Specialized Services',
      description: 'Expert solutions for unique needs',
      services: ['white-label', 'restricted-verticals']
    }
  ];

  const benefits = [
    'Full-service digital marketing agency',
    'Proprietary ad tech platform',
    'Certified Google & Meta partners',
    'Dedicated account management',
    'Transparent reporting & analytics',
    'Award-winning creative team',
    'Proven track record: 320% avg growth',
    'Flexible engagement models'
  ];

  return (
    <div className="min-h-screen dark:bg-slate-950">
      {/* Hero Section */}
<section className="relative pt-32 pb-20 bg-white dark:bg-slate-950 overflow-hidden">
  {/* The "Glow" - This replaces the off-looking white gradient */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 dark:bg-purple-500/10 blur-[120px] rounded-full"></div>
  </div>

  <div className="container mx-auto px-6 max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        {/* Modern Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-full">
          <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            18 Comprehensive Services
          </span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          Full-Service Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Marketing Solutions</span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
          From SEO to programmatic display—we provide the precision technology 
          your B2B enterprise needs to scale.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="mailto:hello@echoshift.agency"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 group"
          >
            <span>Get Free Consultation</span>
            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
          >
            <span>View Case Studies</span>
          </Link>
        </div>
      </div>
      
      {/* Hero Image with custom dark-mode shadow */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080"
          alt="B2B Marketing Dashboard"
          className="relative rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-10"
        />
      </div>
    </div>
  </div>
</section>

      {/* Why Choose EchoShift */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 dark:from-slate-950 dark:to-blue-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Why Choose EchoShift?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We're more than an agency—we're your growth partner
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white/90">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-24 dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 dark:text-white">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of digital marketing services, 
              organized by category for your convenience
            </p>
          </div>

          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => {
              const categoryServices = services.filter(s => 
                category.services.includes(s.id)
              );

              return (
                <div key={categoryIndex}>
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-3xl dark:text-white">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 ml-13">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className="group p-8 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-blue-600 dark:hover:border-blue-400 transition-all"
                        >
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          
                          <h4 className="text-xl mb-3 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {service.title}
                          </h4>
                          
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            {service.description}
                          </p>
                          
                          <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                            Learn More 
                            <ArrowUpRight className="h-5 w-5" />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      {/* Complete Service Directory */}
<section className="py-24 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-800">
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 dark:text-white">Complete Service Directory</h2>
      <p className="text-slate-600 dark:text-slate-400">Quick access to all {services.length} specialized solutions</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-blue-500 transition-all"
          >
            <div className="w-10 h-10 shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Icon size={20} />
            </div>
            <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
              {service.title}
            </span>
          </Link>
        );
      })}
    </div>
  </div>
</section>

      {/* How We Work */}
      <section className="py-24 dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl mb-6 dark:text-white">
                How We Work With You
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Whether you need a single service or a comprehensive multi-channel strategy, 
                we customize our approach to fit your unique business goals and budget.
              </p>
              <div className="space-y-4">
               {/* Step 1 - High Visibility Fix */}
<div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-blue-500/50">
  {/* Brightened blue-400 for better "glow" in dark mode */}
  <div className="w-10 h-10 bg-blue-600 dark:bg-blue-400 rounded-lg flex items-center justify-center shrink-0 text-white dark:text-slate-950 font-bold shadow-lg shadow-blue-500/20">
    1
  </div>
  <div>
    {/* Force text-white and increase font-weight */}
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
      Single Service Execution
    </h3>
    {/* Use slate-300 (light gray) instead of slate-600 (dark gray) */}
    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
      Focused expertise for specific project needs. We execute individual 
      services with dedicated precision.
    </p>
  </div>
</div>
                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      Multi-Channel Campaigns
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Combine multiple services for a comprehensive strategy that reaches your audience 
                      across all touchpoints.
                    </p>
                  </div>
                </div>
               {/* Step 3 - High Visibility Version */}
<div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
  {/* We use emerald-400 in dark mode because it glows better against slate-900 */}
  <div className="w-10 h-10 bg-emerald-600 dark:bg-emerald-400 rounded-lg flex items-center justify-center shrink-0 text-white dark:text-slate-950 font-bold shadow-lg shadow-emerald-500/20">
    3
  </div>
  <div>
    {/* Force text-white to ensure it doesn't inherit a darker gray */}
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
      Full-Service Partnership
    </h3>
    {/* Use slate-300 for a crisp, clean look on dark bg */}
    <p className="text-slate-600 dark:text-slate-300">
      Let us handle all your digital marketing needs. We become an extension of your 
      team, managing everything from strategy to execution.
    </p>
  </div>
</div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0cmF0ZWd5fGVufDF8fHx8MTc2NjE2OTEyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Strategy"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-purple-700 dark:from-blue-900 dark:to-purple-900">
   <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl mb-6 text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss which services are right for your business 
            and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@echoshift.agency?subject=Free Consultation - Services Inquiry"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-xl group"
            >
              <span>Schedule Free Consultation</span>
              <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
            href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              <span>Learn About Our Agency</span>
            </Link>
          </div>
        </div>
</section>
    </div>
  );
}
