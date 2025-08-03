import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Eye, Upload, Github, Linkedin, Trash2, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const initialProfile = {
  name: "John Doe",
  bio: "Passionate full-stack developer with 3+ years of experience building scalable web applications. Love working on innovative projects that solve real-world problems.",
  githubUrl: "https://github.com/johndoe",
  linkedinUrl: "https://linkedin.com/in/johndoe",
  skills: ["React", "Node.js", "TypeScript", "Python", "PostgreSQL", "Docker"],
  avatar: "/placeholder.svg"
};

export default function Dashboard() {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account deleted",
      description: "Your account has been permanently deleted.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient">My Dashboard</h1>
              <p className="text-muted-foreground">Manage your profile and settings</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/profile/me">
                <Eye className="h-4 w-4 mr-2" />
                View Public Profile
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar Upload */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20 ring-2 ring-primary/20">
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback className="text-lg">
                        {profile.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                      <p className="text-sm text-muted-foreground mt-1">
                        JPG, PNG or GIF. Max size 2MB.
                      </p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub URL</Label>
                      <div className="relative">
                        <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="github"
                          value={profile.githubUrl}
                          onChange={(e) => setProfile(prev => ({ ...prev, githubUrl: e.target.value }))}
                          disabled={!isEditing}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="linkedin"
                        value={profile.linkedinUrl}
                        onChange={(e) => setProfile(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                      disabled={!isEditing}
                      rows={4}
                      placeholder="Tell us about yourself, your interests, and what you're passionate about..."
                    />
                  </div>

                  <div className="flex space-x-3">
                    {!isEditing ? (
                      <Button onClick={() => setIsEditing(true)} className="gradient-primary shadow-elegant">
                        Edit Profile
                      </Button>
                    ) : (
                      <>
                        <Button onClick={handleSave} className="gradient-primary shadow-elegant">
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills Preview */}
              <Card className="gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>AI-Generated Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Skills automatically extracted from your GitHub and LinkedIn profiles
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill) => (
                        <Badge key={skill} className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Skills update automatically when you connect new repositories
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Profile Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Profile Views</span>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Collaboration Requests</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Skills Matched</span>
                    <span className="font-semibold">8</span>
                  </div>
                </CardContent>
              </Card>

              {/* Danger Zone */}
              <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-destructive">Danger Zone</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Once you delete your account, there is no going back. This action cannot be undone.
                    </p>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={handleDeleteAccount} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                            Delete Account
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}