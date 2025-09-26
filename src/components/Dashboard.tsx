import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Activity, FileText, MapPin, MessageCircle, Heart, Shield } from "lucide-react";
import ContaminationDroplet from "./ContaminationDroplet";
import BottomNavigation from "./BottomNavigation";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  
  // Mock data
  const contamination = 45;
  const contaminationChange = -8;
  const username = "John Doe";

  const symptoms = [
    "Nausea", "Vomiting", "Diarrhea", "Fever", "Abdominal pain", 
    "Headache", "Fatigue", "Dehydration", "Loss of appetite"
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const submitSymptoms = () => {
    if (selectedSymptoms.length === 0) {
      toast({
        title: "Please select symptoms",
        description: "Choose at least one symptom to get your health report",
        variant: "destructive"
      });
      return;
    }
    
    // Mock disease prediction
    const diseases = ["Cholera", "Typhoid", "Gastroenteritis", "Hepatitis A"];
    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
    
    toast({
      title: "Health Assessment Complete",
      description: `High risk of ${randomDisease} detected!`,
      variant: "destructive"
    });
  };

  const showPrecautions = () => {
    toast({
      title: "Health Precautions",
      description: "Boil water before drinking, wash hands frequently, avoid street food",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold text-foreground">Welcome, {username}</h1>
          <p className="text-sm text-muted-foreground">Stay healthy, stay safe</p>
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Health Hero Image */}
        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-health flex items-center justify-center">
            <div className="text-white text-center">
              <Heart className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm font-medium">Clean Water, Healthy Life</p>
            </div>
          </div>
        </Card>

        {/* Contamination Score */}
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Water Quality Status</CardTitle>
            <CardDescription>Based on your location data</CardDescription>
          </CardHeader>
          <CardContent>
            <ContaminationDroplet 
              contamination={contamination} 
              change={contaminationChange}
            />
          </CardContent>
        </Card>

        {/* Health Report Section */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="w-5 h-5 mr-2 text-primary" />
              Get Your Health Report
            </CardTitle>
            <CardDescription>
              Select symptoms you're experiencing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {symptoms.map((symptom) => (
                <Badge
                  key={symptom}
                  variant={selectedSymptoms.includes(symptom) ? "default" : "outline"}
                  className="cursor-pointer text-center p-2 h-auto transition-all"
                  onClick={() => toggleSymptom(symptom)}
                >
                  {symptom}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Button onClick={submitSymptoms} className="flex-1">
                Get Report
              </Button>
              <Button variant="outline" onClick={showPrecautions}>
                Precautions
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="cursor-pointer hover:shadow-card transition-all">
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Articles</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-card transition-all">
            <CardContent className="p-4 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">AquaMap</p>
            </CardContent>
          </Card>
        </div>

        {/* Roadmap Visualization */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              Health Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm">Check water quality daily</span>
              </div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm">Monitor health symptoms</span>
              </div>
              <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-sm">Follow preventive measures</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Section */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
            <CardDescription>Help us improve AquaHealth</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              Send Feedback
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Floating Chatbot */}
      <Button
        className="fixed bottom-24 right-4 w-14 h-14 rounded-full shadow-lg bg-gradient-primary hover:scale-110 transition-all z-50"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      <BottomNavigation />
    </div>
  );
};

export default Dashboard;