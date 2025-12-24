import { Target, Users, Zap, Award, Heart, TrendingUp, Globe, Shield, Sparkles, ArrowUpRight } from 'lucide-react';
import Link from "next/link";

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by your success. Every strategy is built around delivering measurable, meaningful results that impact your bottom line.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'No smoke and mirrors. We provide clear reporting, honest communication, and full visibility into how your marketing dollars are working.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of industry trends and leverage cutting-edge technology to give our clients a competitive advantage.'
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'Your success is our success. We become an extension of your team, invested in your growth and committed to your goals.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards, from campaign strategy to customer service, delivering exceptional work every time.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Enterprise-level marketing expertise made accessible to businesses of all sizes, from startups to established brands.'
    }
  ];

  const team = [
    {
      name: 'Alexandra Mitchell',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2MTY5MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '15+ years in digital marketing. Former VP at Fortune 500 tech company. Stanford MBA.'
    },
    {
      name: 'Marcus Thompson',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjE2OTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Ad tech innovator with 12 years experience. Built platforms processing $100M+ in ad spend annually.'
    },
    {
      name: 'Sarah Chen',
      role: 'VP of Strategy',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjE2OTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Strategic marketing expert. Led campaigns for brands like Nike, Adobe, and Salesforce.'
    },
    {
      name: 'David Rodriguez',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjYxNjkxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Award-winning creative with work featured in Cannes Lions. 10+ years agency experience.'
    },
    {
      name: 'Emily Parker',
      role: 'VP of Client Services',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2MTY5MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Client success champion. 98% client retention rate. Certified Google & Meta Partner.'
    },
    {
      name: 'James Wu',
      role: 'Head of Analytics',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjYxNjkxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Data scientist turned marketer. PhD in Statistics. Drives decisions with actionable insights.'
    }
  ];

  const timeline = [
    {
      year: '2016',
      title: 'The Beginning',
      description: 'EchoShift founded with a mission to democratize enterprise-level digital marketing for businesses of all sizes.'
    },
    {
      year: '2018',
      title: 'Major Milestone',
      description: 'Reached $10M in client ad spend managed. Expanded team to 25 specialists across all digital channels.'
    },
    {
      year: '2020',
      title: 'Innovation Launch',
      description: 'Launched proprietary ad tech platform, revolutionizing how we manage and optimize campaigns at scale.'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Named "Top 50 Digital Marketing Agencies" by AdAge. 500+ successful campaigns delivered.'
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Managing $50M+ in annual ad spend. Serving clients across 18 specialized service areas with 60+ team members.'
    }
  ];

  const stats = [
    { number: '8+', label: 'Years in Business' },
    { number: '500+', label: 'Clients Served' },
    { number: '$50M+', label: 'Ad Spend Managed' },
    { number: '60+', label: 'Team Members' },
    { number: '18', label: 'Service Offerings' },
    { number: '98%', label: 'Client Retention' }
  ];

  return (
    <div className="min-h-screen dark:bg-slate-950 pt-24 pb-16">
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-950 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">About EchoShift</span>
            </div>
            <h1 className="text-4xl lg:text-6xl mb-6 dark:text-white">
              We're Building the Future of Digital Advertising
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              EchoShift is a full-service digital advertising agency on a mission to help businesses 
              achieve extraordinary growth through data-driven marketing strategies and innovative technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#solutions-finder"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all group"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="/casestudy"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:border-blue-600 dark:hover:border-blue-400 transition-all"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NjYxNjkxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="EchoShift Team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl -z-10 opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl -z-10 opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 dark:from-slate-950 dark:to-blue-950 py-16 mb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl mb-4 dark:text-white">Our Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              To empower businesses of all sizes with enterprise-level digital marketing strategies 
              that drive measurable growth. We believe every business deserves access to world-class 
              marketing expertise, innovative technology, and transparent, results-driven partnerships.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl mb-4 dark:text-white">Our Vision</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              To become the most trusted and innovative digital advertising partner in the industry, 
              known for delivering exceptional results, pioneering new technologies, and fostering 
              long-term relationships built on integrity, transparency, and mutual success.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 dark:text-white">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="p-8 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className=" dark:bg-slate-900 py-24 mb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 dark:text-white">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Growing from a startup to an industry leader
            </p>
          </div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="flex gap-8 items-start"
              >
                <div className="shrink-0 w-24 text-right">
                  <div className="inline-block px-4 py-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="relative flex-1 pb-12 border-l-2 border-blue-600 dark:border-blue-400 pl-8">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <h3 className="text-2xl mb-2 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 dark:text-white">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-1 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                Why Partner With EchoShift?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Proven Expertise</h3>
                    <p className="text-white/90">
                      8+ years of experience, 500+ successful campaigns, and industry recognition from top publications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Cutting-Edge Technology</h3>
                    <p className="text-white/90">
                      Proprietary ad tech platform and access to the latest tools and innovations in digital marketing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Dedicated Support</h3>
                    <p className="text-white/90">
                      Your success team includes strategists, analysts, creatives, and account managers working together.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Measurable Results</h3>
                    <p className="text-white/90">
                      Average client growth of 320% with transparent reporting and data-driven optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY2MTY5MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 max-w-4xl mt-24">
        <div className="text-center p-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl lg:text-4xl mb-4 dark:text-white">
            Ready to Start Your Growth Journey?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how EchoShift can help you achieve your business goals with data-driven digital marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#solutions-finder"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all group"
            >
              <span>Get Your Free Strategy</span>
              <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="mailto:hello@echoshift.agency"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:border-blue-600 dark:hover:border-blue-400 transition-all"
            >
              <span>Contact Our Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
