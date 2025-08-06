import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Code2, Mail, Lock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleGoogleAuth = () => {
    // Handle Google authentication
    console.log("Google auth triggered");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 border-0 bg-transparent shadow-none">
        <div className="relative">
          {/* Glass morphism container */}
          <div className="backdrop-blur-md bg-card/10 border border-white/10 rounded-2xl shadow-elegant p-8">
            <DialogHeader className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {isLogin ? "Welcome Back" : "Join HackMate"}
              </DialogTitle>
              <p className="text-muted-foreground text-sm">
                {isLogin 
                  ? "Sign in to continue your coding journey" 
                  : "Connect with developers through AI-powered matching"
                }
              </p>
            </DialogHeader>

            {/* Google Auth Button */}
            <Button
              onClick={handleGoogleAuth}
              variant="outline"
              className="w-full h-12 mb-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-elegant"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            <div className="relative mb-6">
              <div className="flex items-center justify-center">
                <div className="flex-grow h-px bg-white/10"></div>
                <span className="px-3 text-xs text-muted-foreground">OR</span>
                <div className="flex-grow h-px bg-white/10"></div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="relative">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground/90">
                    Full Name
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10 h-12 bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>
                </div>
              )}

              <div className="relative">
                <Label htmlFor="email" className="text-sm font-medium text-foreground/90">
                  Email Address
                </Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12 bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="relative">
                <Label htmlFor="password" className="text-sm font-medium text-foreground/90">
                  Password
                </Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10 h-12 bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 gradient-primary hover:shadow-glow transition-all duration-300 font-semibold"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl -z-10" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl -z-10" />
        </div>
      </DialogContent>
    </Dialog>
  );
};