import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Zap, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and connect your GitHub and LinkedIn profiles. Our AI will automatically extract your skills and experience to create a comprehensive developer profile.",
    color: "text-purple-400",
  },
  {
    step: "02", 
    icon: Search,
    title: "Discover Developers",
    description: "Use our advanced search and filtering system to find developers by skills, experience, college, or project interests. Browse through curated profiles.",
    color: "text-blue-400",
  },
  {
    step: "03",
    icon: Zap,
    title: "AI-Powered Matching",
    description: "Get instant compatibility analysis, collaboration fit scores, and project role recommendations. Find your perfect coding partner with AI insights.",
    color: "text-green-400",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get Started in <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From profile creation to finding your perfect coding partner - it's never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 h-full group hover:shadow-elegant">
                <CardContent className="p-8 space-y-6">
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="text-6xl font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors">
                      {step.step}
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow between cards (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="bg-background border border-border rounded-full p-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to find your perfect coding partner?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl">
              Get Started Now
            </button>
            <button className="px-8 py-3 border border-primary/20 text-primary rounded-lg font-medium hover:bg-primary/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}