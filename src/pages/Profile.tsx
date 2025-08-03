import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, ExternalLink, Users, ArrowLeft } from "lucide-react";

// Mock user data
const mockUser = {
  id: "1",
  name: "Sarah Chen",
  role: "Full Stack Developer",
  bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love working on innovative projects that solve real-world problems and collaborating with talented developers from around the world.",
  skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS", "GraphQL", "Python"],
  avatar: "/placeholder.svg",
  githubUrl: "https://github.com/sarahchen",
  linkedinUrl: "https://linkedin.com/in/sarahchen",
  college: "MIT",
  year: "Senior",
  projects: [
    {
      name: "EcoTracker",
      description: "Environmental impact tracking application",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      name: "DevCollab", 
      description: "Real-time collaboration platform for developers",
      tech: ["TypeScript", "Socket.io", "PostgreSQL"]
    }
  ]
};

export default function Profile() {
  const { userId } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <div className="space-y-8">
          {/* Back button */}
          <Button asChild variant="outline" size="sm">
            <Link to="/explore">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Explore
            </Link>
          </Button>

          {/* Profile Header */}
          <Card className="gradient-card border-border/50">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <Avatar className="h-32 w-32 ring-4 ring-primary/20">
                  <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                  <AvatarFallback className="text-2xl">
                    {mockUser.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">{mockUser.name}</h1>
                    <p className="text-xl text-muted-foreground">{mockUser.role}</p>
                    <p className="text-muted-foreground">{mockUser.college} • {mockUser.year}</p>
                  </div>
                  
                  <p className="text-muted-foreground max-w-2xl">{mockUser.bio}</p>
                  
                  <div className="flex space-x-3">
                    <Button asChild variant="outline">
                      <a href={mockUser.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={mockUser.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3 md:items-end">
                  <Button asChild className="gradient-primary shadow-elegant">
                    <Link to="/compare">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Compare Me
                    </Link>
                  </Button>
                  <Button variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Invite to Team
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">AI-Generated Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mockUser.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Recent Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockUser.projects.map((project, index) => (
                <div key={index} className="p-4 rounded-lg border border-border/50 bg-muted/20">
                  <h3 className="font-semibold text-foreground mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}