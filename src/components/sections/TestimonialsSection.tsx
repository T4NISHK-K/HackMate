import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Full Stack Developer",
    company: "TechCorp",
    avatar: "/placeholder.svg",
    content: "HackMate helped me find the perfect frontend developer for my project. The AI matching was incredibly accurate - we had 95% skill compatibility and our collaboration has been seamless!",
    rating: 5,
    project: "EcoTracker App",
  },
  {
    id: 2,
    name: "Alex Rivera", 
    role: "Backend Engineer",
    company: "StartupXYZ",
    avatar: "/placeholder.svg",
    content: "I was amazed by how quickly I found a great teammate. The platform's comparison feature showed exactly where our skills complemented each other. We launched our project 2 weeks ahead of schedule!",
    rating: 5,
    project: "DevCollab Platform",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "ML Engineer", 
    company: "AI Innovations",
    avatar: "/placeholder.svg",
    content: "The skill extraction from GitHub was spot-on. It saved me hours of manually updating my profile. Found two amazing developers within a week and we're building something incredible together.",
    rating: 5,
    project: "SmartAnalytics Tool",
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Frontend Specialist",
    company: "DesignHub",
    avatar: "/placeholder.svg", 
    content: "As someone who struggled to find backend developers who understood my design vision, HackMate was a game-changer. The compatibility scores are incredibly accurate!",
    rating: 5,
    project: "Creative Portfolio Site",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Developers <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from developers who found their perfect coding partners through HackMate
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border-border/50 shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                      <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                      <AvatarFallback>
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                      <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-px h-12 bg-border" />
                  
                  <div className="text-center">
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      Project: {currentTestimonial.project}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button onClick={prevTestimonial} variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            
            <Button onClick={nextTestimonial} variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">2.5x</div>
            <div className="text-sm text-muted-foreground">Faster Project Completion</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">1,200+</div>
            <div className="text-sm text-muted-foreground">Successful Collaborations</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}