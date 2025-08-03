import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Users, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 section-divider">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm">
            <Zap className="mr-2 h-4 w-4 text-primary" />
            <span className="text-primary font-medium">AI-Powered Developer Matching</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Find Your Perfect
              <span className="block text-gradient">Coding Partner</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Connect with developers through AI-powered skill matching. Build amazing projects together with teammates who complement your abilities.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary shadow-elegant text-lg px-8">
              <Link to="/explore">
                <Users className="mr-2 h-5 w-5" />
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 border-primary/20 hover:bg-primary/10">
              <Link to="/compare">
                <Code2 className="mr-2 h-5 w-5" />
                Try AI Comparison
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1,200+</div>
              <div className="text-sm text-muted-foreground">Active Developers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Matched</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Code2 className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute top-32 right-12 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Users className="h-6 w-6 text-accent" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        <Zap className="h-7 w-7 text-primary" />
      </div>
    </section>
  );
}