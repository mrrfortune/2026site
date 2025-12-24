// app/services/[id]/page.tsx
import { notFound } from 'next/navigation'; // Replaces Navigate
import Link from 'next/link'; // Replaces react-router-dom Link
import { ArrowRight, Check } from 'lucide-react';
import { getServiceById } from '../data/services';
import { Button } from './ui/button';

// 1. Next.js 15 uses an async function for pages to handle params
export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const service = getServiceById(id);
  
  // 2. If service is missing, trigger the standard 404 page
  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Icon className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold dark:text-white">
                {service.title}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {service.description}
              </p>
              
              <div className="flex gap-4 pt-4">
                {/* 3. Changed 'to' to 'href' */}
                <Link href="/#solutions-finder">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" >
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-[500px]">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Description Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 dark:text-white">
            Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Benefits & Features Section */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 dark:text-white">
                Key Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 dark:text-white">
                Features
              </h2>
              <div className="space-y-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how {service.title.toLowerCase()} can help grow your business.
          </p>
          <Link href="/#solutions-finder">
            <Button size="lg" variant="outline" className=" text-blue-600 hover:bg-blue-50 border-white">
              Start Your Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}