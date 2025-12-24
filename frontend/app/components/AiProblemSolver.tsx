import { useState } from 'react';
import { Sparkles, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface Solution {
  category: string;
  title: string;
  description: string;
  actions: string[];
}

export function AiProblemSolver() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const generateSolutions = async () => {
  if (!input.trim()) return;

  setIsLoading(true);
  setHasSubmitted(true);
  
  try {
    const res = await fetch('http://127.0.0.1:8000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();
    
    // We expect the Python backend to return { "solutions": [...] }
    if (data.solutions) {
      setSolutions(data.solutions);
    }
  } catch (err) {
    console.error("Failed to fetch B2B solutions:", err);
    // Optional: Add a 'System Error' toast or state here
  } finally {
    setIsLoading(false);
  }
};
  
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateSolutions();
};

  return (
    <section id="ai-solver" className="py-24 bg-linear-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Insights</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            Tell Us Your Challenge
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Share your adverting and marketing pain points and receive instant AI-generated solutions tailored to your needs
          </p>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader>
            <CardTitle>What's your biggest marketing challenge?</CardTitle>
            <CardDescription>
              Describe your current pain points, goals, or obstacles you're facing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <Textarea
                placeholder="Example: We're struggling to reach our target audience effectively. Our current ads aren't converting well and our cost per acquisition is too high..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-37.5 mb-4 resize-none"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Your Challenge...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Generate AI Solutions
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {hasSubmitted && solutions.length > 0 && (
          <div className="mt-12 space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl">Recommended Solutions</h3>
            </div>

            <div className="grid gap-6">
              {solutions.map((solution, index) => (
                <Card 
                  key={index} 
                  className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animation: 'slideInFromBottom 0.5s ease-out forwards',
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge variant="secondary">{solution.category}</Badge>
                        <CardTitle className="text-xl">{solution.title}</CardTitle>
                      </div>
                      <Sparkles className="h-5 w-5 text-purple-600 shrink-0" />
                    </div>
                    <CardDescription className="text-base">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="font-medium text-slate-700">Action Steps:</div>
                      <ul className="space-y-2">
                        {solution.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-slate-700">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-linear-to-r from-blue-600 to-purple-600 text-white border-0">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  
                    <h3 className="text-2xl mb-2">Ready to implement these solutions?</h3>
                    <p className="text-blue-100">
                      Let's schedule a consultation to discuss your custom strategy
                    </p>
                  
                  <Button size="lg" variant="secondary" className="shrink-0">
                    Book a Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
