import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Zap, Users, Code, Target } from "lucide-react";

const mockUsers = [
  { id: "1", name: "Sarah Chen", avatar: "/placeholder.svg", skills: ["React", "Node.js", "TypeScript"] },
  { id: "2", name: "Alex Rivera", avatar: "/placeholder.svg", skills: ["Vue.js", "Python", "Docker"] },
  { id: "3", name: "Marcus Johnson", avatar: "/placeholder.svg", skills: ["Django", "PostgreSQL", "AWS"] },
];

const mockComparison = {
  skillOverlap: 75,
  collaborationFit: 88,
  sharedTechStacks: ["TypeScript", "React", "Node.js"],
  recommendedRoles: [
    { role: "Frontend Lead", user: "You", reason: "Strong React and TypeScript skills" },
    { role: "Backend Architect", user: "Sarah Chen", reason: "Extensive Node.js and database experience" },
  ],
  synergies: [
    "Both have strong TypeScript foundations",
    "Complementary frontend/backend expertise", 
    "Shared experience with modern development tools",
  ]
};

export default function Compare() {
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [showComparison, setShowComparison] = useState(false);

  const handleCompare = () => {
    if (selectedUser) {
      setShowComparison(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gradient">Compare Profiles</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover collaboration potential with AI-powered profile analysis
            </p>
          </div>

          {!showComparison ? (
            /* Selection Interface */
            <Card className="gradient-card border-border/50 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Select Developer to Compare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  {/* Your Profile */}
                  <div className="text-center space-y-2">
                    <Avatar className="h-16 w-16 mx-auto ring-2 ring-primary/20">
                      <AvatarImage src="/placeholder.svg" alt="You" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <p className="font-medium">Your Profile</p>
                  </div>

                  <ArrowRight className="h-6 w-6 text-muted-foreground" />

                  {/* Other User Selection */}
                  <div className="text-center space-y-2">
                    <div className="h-16 w-16 mx-auto rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="font-medium text-muted-foreground">Select Developer</p>
                  </div>
                </div>

                <Select value={selectedUser} onValueChange={setSelectedUser}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a developer to compare with" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockUsers.map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <span>{user.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button 
                  onClick={handleCompare} 
                  disabled={!selectedUser}
                  className="w-full gradient-primary shadow-elegant"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Generate AI Comparison
                </Button>
              </CardContent>
            </Card>
          ) : (
            /* Comparison Results */
            <div className="space-y-6">
              {/* Profiles Comparison Header */}
              <Card className="gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center space-y-2">
                      <Avatar className="h-16 w-16 mx-auto ring-2 ring-primary/20">
                        <AvatarImage src="/placeholder.svg" alt="You" />
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">Your Profile</p>
                    </div>

                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient mb-2">VS</div>
                      <Badge className="bg-primary/10 text-primary">AI Analysis</Badge>
                    </div>

                    <div className="text-center space-y-2">
                      <Avatar className="h-16 w-16 mx-auto ring-2 ring-primary/20">
                        <AvatarImage src="/placeholder.svg" alt="Sarah Chen" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">Sarah Chen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      Skill Overlap
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Compatibility</span>
                        <span className="font-bold text-primary">{mockComparison.skillOverlap}%</span>
                      </div>
                      <Progress value={mockComparison.skillOverlap} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Collaboration Fit
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Team Synergy</span>
                        <span className="font-bold text-primary">{mockComparison.collaborationFit}%</span>
                      </div>
                      <Progress value={mockComparison.collaborationFit} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Shared Tech Stacks */}
              <Card className="gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Shared Tech Stacks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockComparison.sharedTechStacks.map((tech) => (
                      <Badge key={tech} className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Roles */}
              <Card className="gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Recommended Project Roles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockComparison.recommendedRoles.map((role, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border/50 bg-muted/20">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-foreground">{role.role}</h3>
                        <Badge variant="outline">{role.user}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{role.reason}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Synergies */}
              <Card className="gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Collaboration Synergies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockComparison.synergies.map((synergy, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{synergy}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex justify-center space-x-4">
                <Button onClick={() => setShowComparison(false)} variant="outline">
                  Compare Another
                </Button>
                <Button className="gradient-primary shadow-elegant">
                  Invite to Collaborate
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
