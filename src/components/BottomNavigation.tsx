import { Home, FileText, User, Map, MoreHorizontal } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: FileText, label: "Articles", path: "/articles" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Map, label: "AquaMap", path: "/aquamap" },
    { icon: MoreHorizontal, label: "Others", path: "/others" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-40">
      <div className="flex">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex-1 py-3 px-2 flex flex-col items-center justify-center transition-all",
                isActive 
                  ? "text-primary bg-primary-light/20" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("w-5 h-5 mb-1", isActive && "scale-110")} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;