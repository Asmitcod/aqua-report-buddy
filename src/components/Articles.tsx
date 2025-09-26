import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Droplets, Bug, Thermometer, AlertTriangle } from "lucide-react";
import BottomNavigation from "./BottomNavigation";

const Articles = () => {
  const diseases = [
    {
      name: "Cholera",
      icon: Droplets,
      severity: "High",
      description: "Waterborne bacterial infection causing severe diarrhea",
      symptoms: ["Watery diarrhea", "Vomiting", "Dehydration"],
      color: "bg-red-500"
    },
    {
      name: "Typhoid",
      icon: Thermometer,
      severity: "High",
      description: "Bacterial infection affecting the intestinal tract",
      symptoms: ["High fever", "Headache", "Abdominal pain"],
      color: "bg-orange-500"
    },
    {
      name: "Diarrhea",
      icon: AlertTriangle,
      severity: "Medium",
      description: "Common digestive condition from contaminated water",
      symptoms: ["Loose stools", "Cramping", "Nausea"],
      color: "bg-yellow-500"
    },
    {
      name: "Hepatitis A",
      icon: Bug,
      severity: "High",
      description: "Viral liver infection from contaminated food/water",
      symptoms: ["Fatigue", "Jaundice", "Nausea"],
      color: "bg-red-600"
    },
    {
      name: "Giardiasis",
      icon: Bug,
      severity: "Medium",
      description: "Parasitic infection of the small intestine",
      symptoms: ["Diarrhea", "Gas", "Stomach cramps"],
      color: "bg-amber-500"
    },
    {
      name: "Malaria",
      icon: Bug,
      severity: "High",
      description: "Mosquito-borne disease common in stagnant water areas",
      symptoms: ["Fever", "Chills", "Headache"],
      color: "bg-red-700"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      default: return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold text-foreground">Health Articles</h1>
        <p className="text-sm text-muted-foreground">Learn about waterborne diseases</p>
      </div>

      <div className="p-4 space-y-4">
        {diseases.map((disease) => (
          <Card key={disease.name} className="cursor-pointer hover:shadow-card transition-all group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-full ${disease.color.replace('bg-', 'bg-').replace('-500', '-100')} ${disease.color.replace('bg-', 'text-')}`}>
                    <disease.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{disease.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {disease.description}
                    </CardDescription>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between mb-3">
                <Badge className={getSeverityColor(disease.severity)}>
                  {disease.severity} Risk
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Common Symptoms:</p>
                <div className="flex flex-wrap gap-1">
                  {disease.symptoms.map((symptom) => (
                    <Badge key={symptom} variant="outline" className="text-xs">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Prevention Tips Card */}
        <Card className="bg-gradient-health text-white shadow-health">
          <CardHeader>
            <CardTitle className="text-white">Prevention Tips</CardTitle>
            <CardDescription className="text-white/90">
              Stay safe from waterborne diseases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Boil water for at least 1 minute before drinking</li>
              <li>• Wash hands frequently with soap</li>
              <li>• Avoid eating raw or undercooked food</li>
              <li>• Use bottled or properly treated water</li>
              <li>• Keep food covered and refrigerated</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Articles;