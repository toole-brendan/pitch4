import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";

// 1. Company Purpose
import CompanyOverview from "@/components/slides/1-company/CompanyOverview";
import FounderVision from "@/components/slides/1-company/FounderVision";
import FounderBackground from "@/components/slides/1-company/FounderBackground";

// 2. Current Problem
import SupplyChainChallenges from "@/components/slides/2-problem/SupplyChainChallenges";

// 3. Solution 
import SolutionOverview from "@/components/slides/3-solution/SolutionOverview";
import DualMarketStrategy from "@/components/slides/3-solution/DualMarketStrategy";

// 4. Why Now
import WhyNow from "@/components/slides/4-why-now/WhyNow";

// 5. Market Size
import MarketOpportunity from "@/components/slides/5-market/MarketOpportunity";

// 6. Competition
import CompetitiveLandscape from "@/components/slides/6-competition/CompetitiveLandscape";

// 7. Product in more detail
import ProductFeatures from "@/components/slides/7-product/ProductFeatures";
import UserExperience from "@/components/slides/7-product/UserExperience";

// 8. Business Model
import BusinessModel from "@/components/slides/8-business/BusinessModel";
import GoToMarketStrategy from "@/components/slides/8-business/GoToMarketStrategy";
import OperationalCosts from "@/components/slides/8-business/OperationalCosts";

// 9. Financials
import FinancialProjections from "@/components/slides/9-financials/FinancialProjections";
import FundingRequest from "@/components/slides/9-financials/FundingRequest";
import TeamAndRoadmap from "@/components/slides/9-financials/TeamAndRoadmap";

// Appendix
import TokenEconomics from "@/components/slides/appendix/TokenEconomics";
import ShellTokenArchitecture from "@/components/slides/appendix/ShellTokenArchitecture";

// Navigation
import Navigation from "@/components/Navigation";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        {/* 1. Company Purpose */}
        <Route path="/" component={CompanyOverview} />
        <Route path="/founder-vision" component={FounderVision} />
        <Route path="/founder-background" component={FounderBackground} />
        
        {/* 2. Current Problem */}
        <Route path="/supply-chain-challenges" component={SupplyChainChallenges} />
        
        {/* 3. Solution */}
        <Route path="/solution-overview" component={SolutionOverview} />
        <Route path="/dual-market-strategy" component={DualMarketStrategy} />
        
        {/* 4. Why Now */}
        <Route path="/why-now" component={WhyNow} />
        
        {/* 5. Market Size */}
        <Route path="/market-opportunity" component={MarketOpportunity} />
        
        {/* 6. Competition */}
        <Route path="/competitive-landscape" component={CompetitiveLandscape} />
        
        {/* 7. Product in more detail */}
        <Route path="/product-features" component={ProductFeatures} />
        <Route path="/user-experience" component={UserExperience} />
        
        {/* 8. Business Model */}
        <Route path="/business-model" component={BusinessModel} />
        <Route path="/go-to-market-strategy" component={GoToMarketStrategy} />
        <Route path="/operational-costs" component={OperationalCosts} />
        
        {/* 9. Financials */}
        <Route path="/financial-projections" component={FinancialProjections} />
        <Route path="/funding-request" component={FundingRequest} />
        <Route path="/team-and-roadmap" component={TeamAndRoadmap} />
        
        {/* Appendix */}
        <Route path="/token-economics" component={TokenEconomics} />
        <Route path="/shell-token-architecture" component={ShellTokenArchitecture} />
        
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;