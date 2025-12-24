"use client";
import React, { useState } from 'react';
import { useRef } from 'react';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ServicesAlternate } from './components/ServicesAlternate';
import { Services } from './components/Services';
import { ThemeProvider } from './components/theme-provider'
import { AiProblemSolver } from './components/AiProblemSolver';
import { Footer } from './components/Footer';



export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aiSolverRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
  home: heroRef,
  services: servicesRef,
  'ai-solver': aiSolverRef,
};
    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAiSolver = () => {
    if (aiSolverRef.current) {
      aiSolverRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
   
    <div>

       
<div id="Home" ref={heroRef}>
          <Hero/>
      
        </div>
        <SocialProof />
      <ServicesAlternate />
  
      
      <section className="py-24 dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY2MTUwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital marketing strategy"
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl dark:text-white">
                Why Choose EchoShift?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                We're a full-service digital agency with the expertise, technology, and creativity 
                to help your business thrive online.
              </p>
              <ul className="space-y-4">
                {[
                  'Comprehensive suite of digital services',
                  'Proprietary advertising technology platform',
                  'Certified Google Ads professionals',
                  'Dedicated account management',
                  'Award-winning creative team',
                  'Proven track record across industries',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
        
      
      </div>

  );
}