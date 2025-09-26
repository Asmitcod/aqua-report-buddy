import { CircularButton } from "@/components/ui/circular-button";
import { Users, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-background to-accent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-primary-dark animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-accent animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-primary">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Aqua<span className="text-primary">Health</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Monitor water contamination and protect your health with real-time insights
          </p>
        </div>

        {/* Role Selection */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-center">
            <CircularButton
              size="xl"
              variant="primary"
              onClick={() => navigate("/user")}
              className="mb-4"
            >
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 mb-2" />
                <span className="text-sm font-semibold">User</span>
              </div>
            </CircularButton>
            <p className="text-sm text-muted-foreground">Access health monitoring</p>
          </div>

          <div className="text-center">
            <CircularButton
              size="xl"
              variant="outline"
              onClick={() => navigate("/admin")}
              className="mb-4"
            >
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 mb-2" />
                <span className="text-sm font-semibold">Admin</span>
              </div>
            </CircularButton>
            <p className="text-sm text-muted-foreground">Manage system data</p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 text-center">
          <p className="text-xs text-muted-foreground">
            Protecting communities through water quality awareness
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;