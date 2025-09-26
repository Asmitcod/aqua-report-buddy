import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, UserPlus, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserSection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-background to-accent p-6">
      <div className="max-w-md mx-auto pt-16">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome to AquaHealth
          </h1>
          <p className="text-muted-foreground">
            Choose how you'd like to get started
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <Card className="cursor-pointer transition-all duration-300 hover:shadow-card hover:scale-105" onClick={() => navigate("/register")}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-primary">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Create Account</CardTitle>
              <CardDescription>
                Join AquaHealth to monitor water quality and protect your health
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all duration-300 hover:shadow-card hover:scale-105" onClick={() => navigate("/login")}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                <LogIn className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Sign In</CardTitle>
              <CardDescription>
                Already have an account? Access your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" size="lg">
                Sign In
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserSection;