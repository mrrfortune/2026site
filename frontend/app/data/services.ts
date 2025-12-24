import { MonitorPlay, Smartphone, Mail, FileText, Video, Tv, Headphones, Share2, Target, TrendingUp, MapPin, MessageCircle, Globe, UserCheck, Briefcase, Flame, Palette, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  benefits: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: 'programmatic-display',
    icon: MonitorPlay,
    title: 'Programmatic Display',
    description: 'Boost your business by getting your message in front of your target market, any place at any time with precision programmatic advertising.',
    image: 'https://images.unsplash.com/photo-1749321485863-29e9cf0f40c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWF0aWMlMjBkaXNwbGF5JTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzY2MTY5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Programmatic Display advertising uses automated technology to buy and optimize digital ad placements in real-time. Our platform ensures your message reaches the right audience at the right time, maximizing your return on investment.',
    benefits: [
      'Real-time bidding for optimal ad placement',
      'Advanced audience targeting and segmentation',
      'Comprehensive analytics and reporting',
      'Cost-effective campaign management',
    ],
    features: [
      'Multi-platform reach across web and mobile',
      'Dynamic creative optimization',
      'Retargeting and lookalike audiences',
      'Brand safety controls',
    ],
  },
  {
    id: 'mobile-geolocation',
    icon: Smartphone,
    title: 'Mobile & Geolocation Targeting',
    description: 'Target people on their mobile devices based on where they are in real-time using advanced location intelligence and behavioral data.',
    image: 'https://images.unsplash.com/photo-1625059706065-d3ce78d04f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGxvY2F0aW9ufGVufDF8fHx8MTc2NjE2OTExMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Leverage the power of location-based marketing to reach customers when and where it matters most. Our geolocation targeting combines GPS, Wi-Fi, and beacon technology to deliver hyper-relevant messages.',
    benefits: [
      'Drive foot traffic to physical locations',
      'Target competitors\' customers',
      'Event-based marketing opportunities',
      'Increased conversion rates',
    ],
    features: [
      'Geofencing and proximity marketing',
      'Behavioral location tracking',
      'Real-time campaign adjustments',
      'Attribution and foot traffic analysis',
    ],
  },
  {
    id: 'email-marketing',
    icon: Mail,
    title: 'Email Marketing',
    description: 'Securely deliver your message to specific consumers using hundreds of targeting options via dedicated email blasts that convert.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjYxNjkxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Email marketing remains one of the highest ROI channels in digital advertising. Our platform provides sophisticated targeting, personalization, and automation to deliver the right message to the right inbox.',
    benefits: [
      'High ROI compared to other channels',
      'Advanced segmentation and personalization',
      'Automated drip campaigns',
      'Detailed performance tracking',
    ],
    features: [
      'A/B testing and optimization',
      'Mobile-responsive templates',
      'Spam compliance and deliverability management',
      'Integration with CRM systems',
    ],
  },
  {
    id: 'native-advertising',
    icon: FileText,
    title: 'Native Advertising',
    description: 'Seamlessly integrate your brand\'s content into contextually relevant editorial with dynamic creative that adapts automatically.',
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nfGVufDF8fHx8MTc2NjEzMDA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Native advertising blends seamlessly with the content users are already consuming, providing a non-intrusive way to reach your audience. Our solutions adapt to match the look, feel, and context of the surrounding content.',
    benefits: [
      'Higher engagement than display ads',
      'Non-disruptive user experience',
      'Improved brand perception',
      'Better ad viewability rates',
    ],
    features: [
      'Contextual content matching',
      'Dynamic creative optimization',
      'Premium publisher network',
      'Performance-based pricing options',
    ],
  },
  {
    id: 'video-advertising',
    icon: Video,
    title: 'Video Advertising',
    description: 'Tell your brand story to your desired target audience in real-time with engaging video content that drives results.',
    image: 'https://images.unsplash.com/photo-1625690303837-654c9666d2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzY2MTY3MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Video is the most engaging content format available. Our video advertising solutions help you tell your brand story across multiple platforms and devices, capturing attention and driving action.',
    benefits: [
      'Higher engagement and recall',
      'Emotional storytelling capabilities',
      'Multi-platform distribution',
      'Measurable video completion rates',
    ],
    features: [
      'In-stream and out-stream placements',
      'Interactive video elements',
      'Viewability and completion tracking',
      'Mobile-optimized formats',
    ],
  },
  {
    id: 'ott-ctv',
    icon: Tv,
    title: 'OTT & CTV',
    description: 'Reach users on all their screens as they view live or on-demand programming through any connected device.',
    image: 'https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjB0dnxlbnwxfHx8fDE3NjYxMzA2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Reach cord-cutters and streaming audiences with precision-targeted ads on OTT and Connected TV platforms. Combine the impact of television with the targeting capabilities of digital advertising.',
    benefits: [
      'Reach streaming-first audiences',
      'Premium, brand-safe environments',
      'Advanced audience targeting',
      'Cross-device attribution',
    ],
    features: [
      'Multiple streaming platform access',
      'Household-level targeting',
      'Non-skippable ad formats',
      'Real-time performance data',
    ],
  },
  {
    id: 'streaming-audio',
    icon: Headphones,
    title: 'Streaming Audio',
    description: 'Touch your target audience through music and audio content everywhere they listen throughout their day.',
    image: 'https://images.unsplash.com/photo-1572119244337-bcb4aae995af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGhlYWRwaG9uZXMlMjBtdXNpY3xlbnwxfHx8fDE3NjYxNjkxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Streaming audio reaches engaged listeners during their daily activities - commuting, working, exercising, and relaxing. Deliver your message in a distraction-free, high-attention environment.',
    benefits: [
      'Captive, engaged audience',
      'Companion display ads',
      'Demographic and behavioral targeting',
      'High brand recall rates',
    ],
    features: [
      'Multiple streaming platforms',
      'Podcast advertising',
      'Voice-activated device compatibility',
      'Completion rate tracking',
    ],
  },
  {
    id: 'social-media',
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Leverage 2B+ Facebook users and 500M+ daily Instagram users with some of the most precise audience targeting available.',
    image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjYxNTU5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Social media advertising provides unparalleled targeting precision and massive reach. Our social media marketing solutions help you build brand awareness, drive engagement, and convert followers into customers.',
    benefits: [
      'Massive audience reach',
      'Granular targeting options',
      'Various ad formats',
      'Community engagement',
    ],
    features: [
      'Multi-platform campaigns',
      'Influencer partnerships',
      'Social listening and monitoring',
      'Creative testing and optimization',
    ],
  },
  {
    id: 'google-ads',
    icon: Target,
    title: 'Google Ads Management',
    description: 'Our certified Google Ads professionals follow best practices with custom solutions tailored to your specific needs.',
    image: 'https://images.unsplash.com/photo-1628320281190-89b24da58b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBhZHMlMjBzZWFyY2h8ZW58MXx8fHwxNzY2MTY5MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Google Ads is the world\'s largest search advertising platform. Our certified professionals maximize your ROI through strategic keyword selection, ad copy optimization, and continuous performance monitoring.',
    benefits: [
      'Immediate visibility in search results',
      'Pay-per-click cost model',
      'Extensive remarketing capabilities',
      'Detailed conversion tracking',
    ],
    features: [
      'Search, Display, and Shopping campaigns',
      'Keyword research and optimization',
      'Ad extension management',
      'Quality score optimization',
    ],
  },
  {
    id: 'organic-seo',
    icon: TrendingUp,
    title: 'Organic SEO',
    description: 'Maximize your online referral traffic from search engines. Over two-thirds of search-related clicks come from SEO.',
    image: 'https://images.unsplash.com/photo-1657812160299-6b656decd5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzY2MTY5MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Organic search engine optimization builds long-term visibility and credibility for your business. Our comprehensive SEO services improve your rankings, drive qualified traffic, and increase conversions.',
    benefits: [
      'Long-term organic visibility',
      'Cost-effective traffic generation',
      'Improved website authority',
      'Higher conversion rates',
    ],
    features: [
      'On-page and technical SEO',
      'Content strategy and creation',
      'Link building campaigns',
      'Competitor analysis',
    ],
  },
  {
    id: 'local-seo',
    icon: MapPin,
    title: 'Local SEO & Visibility',
    description: 'Drive foot traffic and phone calls by ranking higher locally and engaging with your customers in your area.',
    image: 'https://images.unsplash.com/photo-1610320022580-5295faad847c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGJ1c2luZXNzJTIwc3RvcmVmcm9udHxlbnwxfHx8fDE3NjYxNjkxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Local SEO helps businesses appear in local search results when customers are looking for products or services nearby. Our local SEO strategies increase your visibility in your target geographic area.',
    benefits: [
      'Increased local visibility',
      'More foot traffic and phone calls',
      'Higher conversion rates',
      'Competitive advantage',
    ],
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'Review management',
      'Local content creation',
    ],
  },
  {
    id: 'chat-messaging',
    icon: MessageCircle,
    title: 'Chat Widget & Messaging',
    description: 'Automated chat responses ensure you never miss a customer\'s text, chat, review, or Facebook message.',
    image: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwbWVzc2FnaW5nJTIwY3VzdG9tZXJ8ZW58MXx8fHwxNzY2MTY5MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Never miss a customer inquiry with our automated chat and messaging solutions. Provide instant responses, qualify leads, and maintain customer engagement 24/7 across all communication channels.',
    benefits: [
      '24/7 customer support',
      'Instant response times',
      'Lead qualification automation',
      'Omnichannel integration',
    ],
    features: [
      'AI-powered chatbots',
      'Multi-channel inbox',
      'Automated workflows',
      'CRM integration',
    ],
  },
  {
    id: 'web-design',
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Search-optimized, mobile-ready, social-friendly websites that convert visitors into paying customers.',
    image: 'https://images.unsplash.com/photo-1613211431746-aacbe481a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjYwNjYxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Your website is your digital storefront. We create beautiful, high-performing websites that provide exceptional user experiences and drive conversions. Every site we build is optimized for search, mobile devices, and social sharing.',
    benefits: [
      'Professional brand representation',
      'Mobile-responsive design',
      'SEO-friendly architecture',
      'Higher conversion rates',
    ],
    features: [
      'Custom design and development',
      'Content management systems',
      'E-commerce functionality',
      'Analytics integration',
    ],
  },
  {
    id: 'web-accessibility',
    icon: UserCheck,
    title: 'Web Accessibility',
    description: 'WCAG and ADA compliant solutions powered by AI to make your site accessible to everyone.',
    image: 'https://images.unsplash.com/photo-1711654311023-22ecd3b33a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwaW5jbHVzaXZlfGVufDF8fHx8MTc2NjE2OTExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Web accessibility ensures your website is usable by everyone, including people with disabilities. Our AI-powered solutions help you achieve WCAG and ADA compliance while expanding your reach to all potential customers.',
    benefits: [
      'Legal compliance (ADA/WCAG)',
      'Expanded audience reach',
      'Improved SEO rankings',
      'Better user experience for all',
    ],
    features: [
      'Automated accessibility scanning',
      'Remediation and fixes',
      'Compliance reporting',
      'Ongoing monitoring',
    ],
  },
  {
    id: 'white-label',
    icon: Briefcase,
    title: 'White Label Services',
    description: 'Extend your team with our expertise. Cut costs and increase efficiencies in your campaigns.',
    image: 'https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwdGVhbXxlbnwxfHx8fDE3NjYxNjkxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Our white label services allow agencies and businesses to offer comprehensive digital marketing services under their own brand. We become an extension of your team, delivering high-quality work without the overhead.',
    benefits: [
      'Scale without hiring',
      'Increased profit margins',
      'Expert execution',
      'Your brand, our expertise',
    ],
    features: [
      'Full-service digital marketing',
      'Custom reporting',
      'Direct client communication (optional)',
      'Flexible partnership models',
    ],
  },
  {
    id: 'creative-design',
    icon: Palette,
    title: 'Creative & Design Services',
    description: 'Best-in-class design offerings to bring your vision and advertising campaigns to life.',
    image: 'https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjYxMDE1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Great creative makes the difference between campaigns that perform and campaigns that excel. Our award-winning creative team brings your brand vision to life with stunning visuals and compelling copy.',
    benefits: [
      'Professional brand identity',
      'Higher engagement rates',
      'Consistent brand messaging',
      'Award-winning design team',
    ],
    features: [
      'Display ad creation',
      'Video production',
      'Brand identity development',
      'Landing page design',
    ],
  },
  {
    id: 'ad-tech-platform',
    icon: Cpu,
    title: 'Proprietary Ad Tech Platform',
    description: 'Revolutionary advertising technology that oversees the full lifecycle of your marketing campaigns.',
    image: 'https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcGxhdGZvcm0lMjBkYXRhfGVufDF8fHx8MTc2NjE2OTExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Our proprietary ad tech platform provides a unified solution for managing, optimizing, and measuring all your digital advertising campaigns. Gain unprecedented visibility and control over your marketing spend.',
    benefits: [
      'Unified campaign management',
      'Real-time optimization',
      'Comprehensive analytics',
      'Cross-channel attribution',
    ],
    features: [
      'Multi-channel campaign management',
      'Advanced audience segmentation',
      'AI-powered optimization',
      'Custom reporting dashboards',
    ],
  },
  {
    id: 'restricted-verticals',
    icon: Flame,
    title: 'Restricted Vertical Advertising',
    description: 'Specialized advertising solutions for industries with strict regulations including cannabis, tobacco, gambling, and adult entertainment.',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWd1bGF0ZWQlMjBpbmR1c3RyeXxlbnwxfHx8fDE3NjYxNjkxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Advertising in restricted verticals requires specialized knowledge and dedicated networks. Our expertise in compliance and dedicated publisher relationships allow us to deliver results where traditional advertising platforms won\'t.',
    benefits: [
      'Compliant advertising solutions',
      'Dedicated publisher network',
      'Specialized expertise',
      'Risk mitigation',
    ],
    features: [
      'Compliance-first approach',
      'Age and location verification',
      'Premium placement opportunities',
      'Industry-specific targeting',
    ],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getServiceRoutes(): string[] {
  return services.map(service => service.id);
}
