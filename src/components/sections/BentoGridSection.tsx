import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Brain, Zap, Users, Code2, ArrowRight, GitBranch, MessageSquare } from "lucide-react";

export function BentoGridSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">Platform</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need to <span className="text-gradient">Build Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools and integrations designed to supercharge your development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* GitHub Integration - Large */}
          <Card className="lg:col-span-2 lg:row-span-2 gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-elegant">
            <CardContent className="p-8 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="outline" className="border-primary/20 text-primary">Integration</Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground">GitHub Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seamlessly connect your repositories to showcase real projects. Our AI analyzes your code to automatically extract skills, technologies, and project insights.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Auto Skill Detection</Badge>
                  <Badge variant="secondary">Project Analysis</Badge>
                  <Badge variant="secondary">Contribution Tracking</Badge>
                </div>
              </div>
              <Button className="mt-6 w-fit group-hover:bg-primary/90 transition-colors">
                Connect GitHub
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* AI Matching */}
          <Card className="gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-elegant">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-purple-500/10 ring-1 ring-purple-500/20 group-hover:bg-purple-500/20 transition-colors w-fit">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground">AI Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced algorithms analyze compatibility and suggest perfect collaborators.
                </p>
              </div>
              <Badge variant="outline" className="border-purple-400/20 text-purple-400 w-fit mt-4">
                Smart
              </Badge>
            </CardContent>
          </Card>

          {/* Real-time Chat */}
          <Card className="gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-elegant">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-blue-500/10 ring-1 ring-blue-500/20 group-hover:bg-blue-500/20 transition-colors w-fit">
                  <MessageSquare className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Team Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Built-in messaging to discuss projects and coordinate with your team.
                </p>
              </div>
              <Badge variant="outline" className="border-blue-400/20 text-blue-400 w-fit mt-4">
                Communicate
              </Badge>
            </CardContent>
          </Card>

          {/* LinkedIn Integration */}
          <Card className="lg:col-span-2 gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-elegant">
            <CardContent className="p-6 h-full flex items-center justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-blue-600/10 ring-1 ring-blue-600/20 group-hover:bg-blue-600/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">LinkedIn Sync</h3>
                </div>
                <p className="text-muted-foreground max-w-md">
                  Import professional experience and education to create comprehensive developer profiles.
                </p>
              </div>
              <Button variant="outline" className="border-blue-500/20 hover:bg-blue-500/10">
                Connect
              </Button>
            </CardContent>
          </Card>

          {/* Project Insights */}
          <Card className="gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-elegant">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-green-500/10 ring-1 ring-green-500/20 group-hover:bg-green-500/20 transition-colors w-fit">
                  <GitBranch className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Project Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Track collaboration success and project metrics across teams.
                </p>
              </div>
              <Badge variant="outline" className="border-green-400/20 text-green-400 w-fit mt-4">
                Analytics
              </Badge>
            </CardContent>
          </Card>

          {/* Skill Assessment */}
          <Card className="gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-elegant">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-orange-500/10 ring-1 ring-orange-500/20 group-hover:bg-orange-500/20 transition-colors w-fit">
                  <Zap className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Skill Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Validate and showcase your technical abilities with AI-powered assessments.
                </p>
              </div>
              <Badge variant="outline" className="border-orange-400/20 text-orange-400 w-fit mt-4">
                Validate
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to revolutionize your development workflow?
          </h3>
          <Button size="lg" className="gradient-primary shadow-elegant text-lg px-8">
            <Users className="mr-2 h-5 w-5" />
            Join HackMate Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}