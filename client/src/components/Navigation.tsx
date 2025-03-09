import { useLocation, useRoute } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Navigation = () => {
  const [location, setLocation] = useLocation();

  // Define the navigation order with the exact specified order
  const routes = [
    // Main Presentation (16 slides)
    { path: "/", name: "COMPANY OVERVIEW" },
    { path: "/founder-background", name: "FOUNDER BACKGROUND" },
    { path: "/supply-chain-challenges", name: "SUPPLY CHAIN CHALLENGES" },
    { path: "/solution-overview", name: "SOLUTION OVERVIEW" },
    { path: "/dual-market-strategy", name: "DUAL MARKET STRATEGY" },
    { path: "/why-now", name: "WHY NOW" },
    { path: "/market-opportunity", name: "MARKET OPPORTUNITY" },
    { path: "/competitive-landscape", name: "COMPETITIVE LANDSCAPE" },
    { path: "/product-features", name: "PRODUCT FEATURES" },
    { path: "/user-experience", name: "USER EXPERIENCE" },
    { path: "/business-model", name: "BUSINESS MODEL" },
    { path: "/go-to-market-strategy", name: "GO TO MARKET STRATEGY" },
    { path: "/financial-projections", name: "FINANCIAL PROJECTIONS" },
    { path: "/operational-costs", name: "OPERATIONAL COSTS" },
    { path: "/funding-request", name: "FUNDING REQUEST" },
    { path: "/team-and-roadmap", name: "TEAM & ROADMAP" },
    
    // Appendix (2 slides)
    { path: "/shell-token-architecture", name: "SHELL TOKEN ARCHITECTURE (APPENDIX)" },
    { path: "/token-economics", name: "TOKEN ECONOMICS (APPENDIX)" }
  ];

  // Find current index
  const currentIndex = routes.findIndex(route => route.path === location);

  // Calculate prev/next paths
  const prevPath = currentIndex > 0 ? routes[currentIndex - 1].path : routes[routes.length - 1].path;
  const nextPath = currentIndex < routes.length - 1 ? routes[currentIndex + 1].path : routes[0].path;

  const navigateToPrev = () => setLocation(prevPath);
  const navigateToNext = () => setLocation(nextPath);

  return (
    <nav className="fixed inset-x-0 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button 
          onClick={navigateToPrev}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:border-purple-400"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button 
          onClick={navigateToNext}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:border-purple-400"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      
      <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center">
        <div className="bg-white border border-gray-200 py-2 px-4 text-xs text-gray-600 font-mono tracking-wider shadow-sm">
          {currentIndex + 1} / {routes.length}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;