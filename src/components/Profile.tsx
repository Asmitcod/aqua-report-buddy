import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, MapPin, Phone, Calendar, Shield, Edit } from "lucide-react";
import BottomNavigation from "./BottomNavigation";

const Profile = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    username: "johndoe",
    phone: "+91 9876543210",
    dob: "1990-05-15",
    gender: "Male",
    pincode: "560001",
    isASHA: false,
    memberSince: "2024-01-15"
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAge = (dob: string) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold text-foreground">Profile</h1>
        <p className="text-sm text-muted-foreground">Manage your account information</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Header */}
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="" alt={user.name} />
                <AvatarFallback className="text-lg font-semibold bg-gradient-primary text-white">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
                <p className="text-muted-foreground">@{user.username}</p>
                {user.isASHA && (
                  <div className="flex items-center mt-2">
                    <Shield className="w-4 h-4 mr-1 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">ASHA Worker</span>
                  </div>
                )}
              </div>
              <Button variant="outline" size="icon">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2 text-primary" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <div className="flex items-center mt-1">
                  <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                  <p className="text-sm font-medium">{user.phone}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <div className="flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                  <p className="text-sm font-medium">{user.pincode}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Date of Birth</p>
                <div className="flex items-center mt-1">
                  <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                  <p className="text-sm font-medium">{formatDate(user.dob)} ({getAge(user.dob)} years)</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Gender</p>
                <p className="text-sm font-medium mt-1">{user.gender}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Statistics */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Account Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary-light/20 rounded-lg">
                <p className="text-2xl font-bold text-primary">15</p>
                <p className="text-sm text-muted-foreground">Health Reports</p>
              </div>
              <div className="text-center p-4 bg-success/20 rounded-lg">
                <p className="text-2xl font-bold text-success">89</p>
                <p className="text-sm text-muted-foreground">Days Active</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Member since</p>
              <p className="text-sm font-medium">{formatDate(user.memberSince)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Shield className="w-4 h-4 mr-2" />
            Privacy Settings
          </Button>
          <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
            <User className="w-4 h-4 mr-2" />
            Delete Account
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Profile;