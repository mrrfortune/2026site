import { MonitorPlay, Smartphone, Mail, FileText, Video, Tv, Headphones, Share2, Target, TrendingUp, MapPin, MessageCircle, Globe, UserCheck, Briefcase, Flame, Palette, ArrowUpRight, Cpu } from 'lucide-react';
import Link from "next/link";

export function ServicesAlternate() {
  const services = [
    {
      id: 'programmatic-display',
      icon: MonitorPlay,
      title: 'Programmatic Display',
      description: 'Boost your business by getting your message in front of your target market, any place at any time with precision programmatic advertising.',
      image: 'https://images.unsplash.com/photo-1749321485863-29e9cf0f40c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWF0aWMlMjBkaXNwbGF5JTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzY2MTY5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'geo-fencing',
      icon: Smartphone,
      title: 'Mobile & Geolocation Targeting',
      description: 'Target people on their mobile devices based on where they are in real-time using advanced location intelligence and behavioral data.',
      image: 'https://images.unsplash.com/photo-1625059706065-d3ce78d04f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGxvY2F0aW9ufGVufDF8fHx8MTc2NjE2OTExMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'email-marketing',
      icon: Mail,
      title: 'Email Marketing',
      description: 'Securely deliver your message to specific consumers using hundreds of targeting options via dedicated email blasts that convert.',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjYxNjkxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'native-advertising',
      icon: FileText,
      title: 'Native Advertising',
      description: 'Seamlessly integrate your brand\'s content into contextually relevant editorial with dynamic creative that adapts automatically.',
      image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nfGVufDF8fHx8MTc2NjEzMDA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'video-advertising',
      icon: Video,
      title: 'Video Advertising',
      description: 'Tell your brand story to your desired target audience in real-time with engaging video content that drives results.',
      image: 'https://images.unsplash.com/photo-1625690303837-654c9666d2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzY2MTY3MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'ott-ctv',
      icon: Tv,
      title: 'OTT & CTV',
      description: 'Reach users on all their screens as they view live or on-demand programming through any connected device.',
      image: 'https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjB0dnxlbnwxfHx8fDE3NjYxMzA2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'streaming-audio',
      icon: Headphones,
      title: 'Streaming Audio',
      description: 'Touch your target audience through music and audio content everywhere they listen throughout their day.',
      image: 'https://images.unsplash.com/photo-1572119244337-bcb4aae995af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGhlYWRwaG9uZXMlMjBtdXNpY3xlbnwxfHx8fDE3NjYxNjkxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Leverage 2B+ Facebook users and 500M+ daily Instagram users with some of the most precise audience targeting available.',
      image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjYxNTU5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'google-ads',
      icon: Target,
      title: 'Google Ads Management',
      description: 'Our certified Google Ads professionals follow best practices with custom solutions tailored to your specific needs.',
      image: 'https://images.unsplash.com/photo-1628320281190-89b24da58b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBhZHMlMjBzZWFyY2h8ZW58MXx8fHwxNzY2MTY5MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'organic-seo',
      icon: TrendingUp,
      title: 'Organic SEO',
      description: 'Maximize your online referral traffic from search engines. Over two-thirds of search-related clicks come from SEO.',
      image: 'https://images.unsplash.com/photo-1657812160299-6b656decd5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzY2MTY5MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'local-seo',
      icon: MapPin,
      title: 'Local SEO & Visibility',
      description: 'Drive foot traffic and phone calls by ranking higher locally and engaging with your customers in your area.',
      image: 'https://images.unsplash.com/photo-1610320022580-5295faad847c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGJ1c2luZXNzJTIwc3RvcmVmcm9udHxlbnwxfHx8fDE3NjYxNjkxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'chat-messaging',
      icon: MessageCircle,
      title: 'Chat Widget & Messaging',
      description: 'Automated chat responses ensure you never miss a customer\'s text, chat, review, or Facebook message.',
      image: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwbWVzc2FnaW5nJTIwY3VzdG9tZXJ8ZW58MXx8fHwxNzY2MTY5MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'web-design',
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Search-optimized, mobile-ready, social-friendly websites that convert visitors into paying customers.',
      image: 'https://images.unsplash.com/photo-1613211431746-aacbe481a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjYwNjYxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'web-accessibility',
      icon: UserCheck,
      title: 'Web Accessibility',
      description: 'WCAG and ADA compliant solutions powered by AI to make your site accessible to everyone.',
      image: 'https://images.unsplash.com/photo-1711654311023-22ecd3b33a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwaW5jbHVzaXZlfGVufDF8fHx8MTc2NjE2OTExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'white-label',
      icon: Briefcase,
      title: 'White Label Services',
      description: 'Extend your team with our expertise. Cut costs and increase efficiencies in your campaigns.',
      image: 'https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwdGVhbXxlbnwxfHx8fDE3NjYxNjkxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'creative-design',
      icon: Palette,
      title: 'Creative & Design Services',
      description: 'Best-in-class design offerings to bring your vision and advertising campaigns to life.',
      image: 'https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjYxMDE1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'ad-tech-platform',
      icon: Cpu,
      title: 'Proprietary Ad Tech Platform',
      description: 'Revolutionary advertising technology that oversees the full lifecycle of your marketing campaigns.',
      image: 'https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcGxhdGZvcm0lMjBkYXRhfGVufDF8fHx8MTc2NjE2OTExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'restricted-verticals',
      icon: Flame,
      title: 'Restricted Vertical Advertising',
      description: 'Specialized advertising solutions for industries with strict regulations including cannabis, tobacco, gambling, and adult entertainment.',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWd1bGF0ZWQlMjBpbmR1c3RyeXxlbnwxfHx8fDE3NjYxNjkxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="solutions-finder" className="py-24 dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-4 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'md:grid-flow-dense'
                }`}
              >
                <div className={isEven ? '' : 'md:col-start-2'}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className={`space-y-6 ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl dark:text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex gap-4 pt-4">
                  <Link 
  href={`/services/${service.id}`}
  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
>
 <span>Learn More</span>
                      <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
</Link>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}