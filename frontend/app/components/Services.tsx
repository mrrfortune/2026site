import { MapPin, MessageCircle, Globe, UserCheck, Briefcase, Flame, Palette, Target, Cpu, MonitorPlay, Smartphone, Mail, FileText, Video, Tv, Headphones, Share2, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Services() {
  const services = [
    {
      icon: MonitorPlay,
      title: 'Programmatic Display',
      description: 'Boost your business by getting your message in front of your target market, any place at any time.',
    },
    {
      icon: Smartphone,
      title: 'Mobile & Geolocation Targeting',
      description: 'Target people on their mobile devices based on where they are in real-time using location data.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Securely deliver your message to specific consumers using hundreds of targeting options via dedicated email blasts.',
    },
    {
      icon: FileText,
      title: 'Native Advertising',
      description: 'Seamlessly integrate your brand\'s content into contextually relevant editorial with dynamic creative.',
    },
    {
      icon: Video,
      title: 'Video Advertising',
      description: 'Tell your brand story to the desired target audience in real-time, at any time, anywhere in the world.',
    },
    {
      icon: Tv,
      title: 'OTT & CTV',
      description: 'Reach users on all screens as they view live or on-demand programming through any connected device.',
    },
    {
      icon: Headphones,
      title: 'Streaming Audio',
      description: 'Touch your target audience through music and audio content everywhere they listen throughout their day.',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Leverage 2B+ Facebook users and 500M+ daily Instagram users with precise audience targeting.',
    },
    {
      icon: Target,
      title: 'Google Ads Management',
      description: 'Certified Google Ads professionals following best practices with custom solutions for your needs.',
    },
    {
      icon: TrendingUp,
      title: 'Organic SEO',
      description: 'Maximize your online referral traffic from search engines. Over two-thirds of clicks come from SEO.',
    },
    {
      icon: MapPin,
      title: 'Local SEO & Visibility',
      description: 'Drive foot traffic and phone calls by ranking higher locally and engaging with your customers.',
    },
    {
      icon: MessageCircle,
      title: 'Chat Widget & Messaging',
      description: 'Automated chat responses. Never miss a customer\'s text, chat, review, or Facebook message.',
    },
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Search-optimized, mobile-ready, social-friendly websites that convert visitors into customers.',
    },
    {
      icon: UserCheck,
      title: 'Web Accessibility',
      description: 'WCAG and ADA compliant solutions powered by AI to make your site accessible to everyone.',
    },
    {
      icon: Briefcase,
      title: 'White Label Services',
      description: 'Extend your team with our expertise. Cut costs and increase efficiencies in your campaigns.',
    },
    {
      icon: Flame,
      title: 'Restricted Vertical Advertising',
      description: 'Designated network for cannabis, tobacco, gambling, casinos, and more restricted verticals.',
    },
    {
      icon: Palette,
      title: 'Creative & Design Services',
      description: 'Best-in-class design offerings to bring your vision and advertising campaigns to life.',
    },
    {
      icon: Cpu,
      title: 'Proprietary Ad Tech Platform',
      description: 'Revolutionary advertising technology that oversees the full lifecycle of your marketing campaigns.',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-colors dark:bg-slate-900 dark:border-slate-800">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="dark:text-slate-400">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}