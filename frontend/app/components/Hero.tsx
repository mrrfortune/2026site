"use client";
import { ChevronDown, Send, Loader2, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';
// Updated interface to match your app.py JSON structure
interface Solution {
  title: string;
  description: string;
  service_match: string;
  service_link: string;
}

interface BackendResponse {
  strategy_overview: string;
  solutions: Solution[];
}

export function Hero() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<BackendResponse | null>(null);

  // GIBBERISH FILTER FUNCTION
  const validateInput = (text: string) => {
    if (text.length < 10) return "Input too short to be a strategy request.";
    const smashRegex = /[^aeiou]{6,}/i; 
    if (smashRegex.test(text.replace(/\s/g, ''))) return "Please use real words.";
    const repeatRegex = /(.)\1{4,}/;
    if (repeatRegex.test(text)) return "Invalid input detected.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. VALIDATION
    const validationError = validateInput(input);
    if (validationError) {
      toast.error("Input Issue", { description: validationError });
      return; 
    }

    // 2. START LOADING & API CALL
    setIsLoading(true);
    setResponse(null); // Clear previous response

    try {
      const res = await fetch('http://127.0.0.1:8000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      if (!res.ok) throw new Error("Backend unreachable");

      const data: BackendResponse = await res.json();
      setResponse(data);
      toast.success("Strategy Generated!");

      // 3. AUTO-SCROLL LOGIC
      if (data.solutions && data.solutions.length > 0) {
        setTimeout(() => {
          const sectionId = data.solutions[0].service_link;
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 800);
      }
    } catch (error) {
      console.error("Connection to app.py failed:", error);
      toast.error("Backend Error", {
        description: "Could not connect to the strategy engine. Please check if app.py is running."
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20 transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.05] -z-10" />
      
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Hero Text */}
          <div className="space-y-8 max-w-3xl">
            <div className="inline-block">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Full-Service Digital Agency
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Amplify Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Your AI-powered strategist for Ad Tech, local SEO, and multi-channel growth.
            </p>
          </div>
          
          {/* Solution Finder Card */}
          <div className="w-full max-w-2xl">
            <Card className="border-border shadow-2xl bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Find Your Solution</CardTitle>
                <CardDescription>
                  Describe your business challenge and our AI will map your tactical roadmap.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Textarea
                    placeholder="e.g., I need to drive more foot traffic to my pizza shop using Geo-Fencing..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[120px] resize-none bg-muted/50 border-border focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-all font-semibold"
                    disabled={isLoading || !input.trim()}
                  >
                    {isLoading ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing...</>
                    ) : (
                      <><Sparkles className="mr-2 h-5 w-5" /> Get AI Strategy</>
                    )}
                  </Button>
                </form>

                {/* AI RESPONSE SECTION */}
                {response && (
                  <div className="mt-6 text-left space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
                    <div className="p-5 bg-muted/50 rounded-xl border border-border">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        Strategic Overview
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {response.strategy_overview}
                      </p>
                      
                      <div className="space-y-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Recommended Tactics:</p>
                        {response?.solutions?.map((sol: any, index: number) => (
                          <div 
                            key={index}
                            onClick={() => document.getElementById(sol.service_link)?.scrollIntoView({ behavior: 'smooth' })}
                            className="group p-4 bg-background border border-border rounded-lg cursor-pointer hover:border-blue-600 transition-all"
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-bold text-blue-600">{sol.service_match}</span>
                              <ChevronDown className="h-3 w-3 text-muted-foreground group-hover:text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-sm">{sol.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{sol.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}