import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Github, ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const mockUsers = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    avatar: "/placeholder.svg",
    githubUrl: "https://github.com/sarahchen",
    college: "MIT",
  },
  {
    id: "2", 
    name: "Alex Rivera",
    role: "Frontend Specialist",
    skills: ["Vue.js", "Tailwind CSS", "JavaScript", "Figma"],
    avatar: "/placeholder.svg",
    githubUrl: "https://github.com/alexrivera",
    college: "Stanford",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "Backend Engineer", 
    skills: ["Python", "Django", "Docker", "AWS"],
    avatar: "/placeholder.svg",
    githubUrl: "https://github.com/marcusj",
    college: "UC Berkeley",
  },
  {
    id: "4",
    name: "Priya Patel",
    role: "ML Engineer",
    skills: ["Python", "TensorFlow", "PyTorch", "Jupyter"],
    avatar: "/placeholder.svg", 
    githubUrl: "https://github.com/priyapatel",
    college: "Caltech",
  },
];

const filterOptions = [
  "React", "Vue.js", "Python", "TypeScript", "Node.js", "Django", "AWS", "Docker"
];

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilters = selectedFilters.length === 0 ||
                          selectedFilters.some(filter => user.skills.includes(filter));
    
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gradient">Explore Developers</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover talented developers and find your perfect collaboration partners
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search developers, skills, or roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Chips */}
            <div className="flex items-center justify-center space-x-2 flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filters:</span>
              </div>
              {filterOptions.map((filter) => (
                <Badge
                  key={filter}
                  variant={selectedFilters.includes(filter) ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    selectedFilters.includes(filter) 
                      ? "bg-primary text-primary-foreground shadow-glow" 
                      : "hover:bg-primary/10"
                  }`}
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <Card key={user.id} className="gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-elegant">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">{user.role}</p>
                      <p className="text-xs text-muted-foreground">{user.college}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {user.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link to={`/profile/${user.id}`}>
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Profile
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No developers found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}