import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LogOut, 
  Phone, 
  Settings, 
  HelpCircle, 
  Shield, 
  Bell,
  MessageCircle,
  Star,
  Download
} from "lucide-react";
import BottomNavigation from "./BottomNavigation";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Others = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const emergencyNumbers = [
    { name: "Emergency Services", number: "108", description: "Medical Emergency" },
    { name: "Police", number: "100", description: "Law & Order" },
    { name: "Fire Department", number: "101", description: "Fire Emergency" },
    { name: "Women Helpline", number: "1091", description: "Women Safety" },
  ];

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "Thank you for using AquaHealth",
    });
    navigate("/");
  };

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: "This feature will be available soon",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold text-foreground">More Options</h1>
        <p className="text-sm text-muted-foreground">Settings and additional features</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Emergency Numbers */}
        <Card className="shadow-card border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Numbers
            </CardTitle>
            <CardDescription>Quick access to emergency services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {emergencyNumbers.map((emergency, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <div>
                  <p className="font-medium text-sm">{emergency.name}</p>
                  <p className="text-xs text-muted-foreground">{emergency.description}</p>
                </div>
                <Button
                  size="sm"
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => handleEmergencyCall(emergency.number)}
                >
                  {emergency.number}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* App Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>App Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => handleAction("Settings")}
            >
              <Settings className="w-4 h-4 mr-3" />
              General Settings
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => handleAction("Notifications")}
            >
              <Bell className="w-4 h-4 mr-3" />
              Notification Settings
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => handleAction("Privacy")}
            >
              <Shield className="w-4 h-4 mr-3" />
              Privacy & Security
            </Button>
          </CardContent>
        </Card>

        {/* Support & Feedback */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Support & Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => handleAction("Help")}
            >
              <HelpCircle className="w-4 h-4 mr-3" />
              Help & FAQ
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => handleAction("Contact Support")}
            >
              <MessageCircle className="w-4 h-4 mr-3" />
              Contact Support
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => handleAction("Rate App")}
            >
              <Star className="w-4 h-4 mr-3" />
              Rate AquaHealth
            </Button>
          </CardContent>
        </Card>

        {/* App Info */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>App Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <span className="text-sm">Version</span>
              <span className="text-sm font-medium">1.0.0</span>
            </div>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => handleAction("Download Report")}
            >
              <Download className="w-4 h-4 mr-3" />
              Download Health Report
            </Button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="shadow-card border-red-200">
          <CardContent className="pt-6">
            <Button 
              variant="destructive" 
              className="w-full"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Others;