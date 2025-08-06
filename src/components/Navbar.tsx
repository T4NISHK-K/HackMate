import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Code2, User, LogOut } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Compare", href: "/compare" },
];

export function Navbar() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuth = () => {
    if (!isLoggedIn) {
      setIsAuthModalOpen(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <Code2 className="h-6 w-6 text-primary transition-all duration-300" />
            <span className="text-xl font-bold text-gradient">HackMate</span>
          </Link>
        </div>

        {/* Centered Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="hidden md:flex items-center space-x-1 p-1 bg-muted/50 backdrop-blur-sm rounded-full border border-border/50 transition-all duration-500 hover:bg-muted/70">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-out transform hover:scale-105 ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground shadow-glow scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="transition-all duration-300 hover:scale-110">
            <ThemeToggle />
          </div>
          
          {!isLoggedIn ? (
            <Button onClick={handleAuth} className="gradient-primary shadow-elegant transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
              Get Started
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-110 transform">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 animate-fade-in">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center transition-all duration-200 hover:bg-accent">
                    <User className="mr-2 h-4 w-4" />
                    My Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleAuth} className="flex items-center transition-all duration-200 hover:bg-accent">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  );
}