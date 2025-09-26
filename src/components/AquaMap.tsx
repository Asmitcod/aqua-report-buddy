import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Droplets, AlertTriangle } from "lucide-react";
import BottomNavigation from "./BottomNavigation";
import { useState } from "react";

const AquaMap = () => {
  const [searchLocation, setSearchLocation] = useState("");

  // Mock data for demonstration
  const contaminations = [
    { location: "Bangalore Central", level: 75, status: "High", lat: 12.9716, lng: 77.5946 },
    { location: "Whitefield", level: 45, status: "Medium", lat: 12.9698, lng: 77.7500 },
    { location: "Koramangala", level: 25, status: "Low", lat: 12.9279, lng: 77.6271 },
    { location: "Electronic City", level: 60, status: "High", lat: 12.8456, lng: 77.6603 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "High": return "text-red-600 bg-red-100";
      case "Medium": return "text-yellow-600 bg-yellow-100";
      default: return "text-green-600 bg-green-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "High": return AlertTriangle;
      case "Medium": return Droplets;
      default: return Droplets;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold text-foreground">AquaMap</h1>
        <p className="text-sm text-muted-foreground">Water quality mapping for your area</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Search */}
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search location or pincode..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="bg-gradient-primary">
                <MapPin className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Regional Water Quality</CardTitle>
            <CardDescription>Live contamination data from nearby areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gradient-to-br from-primary-light/20 to-accent/20 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                {/* Mock map pins */}
                <div className="absolute top-4 left-6 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-8 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-12 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 right-12 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Interactive map will load here</p>
                <p className="text-xs text-muted-foreground mt-1">Backend integration required</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location List */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Nearby Locations</CardTitle>
            <CardDescription>Contamination levels in your area</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {contaminations.map((item, index) => {
              const StatusIcon = getStatusIcon(item.status);
              return (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${getStatusColor(item.status)}`}>
                      <StatusIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.location}</p>
                      <p className="text-xs text-muted-foreground">Contamination: {item.level}%</p>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Legend */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Map Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Low Risk (0-30%)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Medium Risk (31-60%)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm">High Risk (61-100%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default AquaMap;