import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";

// 1. Company Purpose
import CompanyOverview from "@/components/slides/1-company/CompanyOverview";
import FounderVision from "@/components/slides/1-company/FounderVision";

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
import DefenseApplication from "@/components/slides/7-product/DefenseApplication";
import CommercialApplication from "@/components/slides/7-product/CommercialApplication";
import DefenseUserExperience from "@/components/slides/7-product/DefenseUserExperience";
import CommercialSolution from "@/components/slides/7-product/CommercialSolution";
import CommercialUserExperience from "@/components/slides/7-product/CommercialUserExperience";
import TokenEconomics from "@/components/slides/7-product/TokenEconomics";
import ShellTokenArchitecture from "@/components/slides/7-product/ShellTokenArchitecture";

// 8. Business Model
import EarlyTraction from "@/components/slides/8-business/EarlyTraction";
import BusinessModel from "@/components/slides/8-business/BusinessModel";
import GoToMarketStrategy from "@/components/slides/8-business/GoToMarketStrategy";

// 9. Financials
import FinancialProjections from "@/components/slides/9-financials/FinancialProjections";
import DevelopmentProgress from "@/components/slides/9-financials/DevelopmentProgress";
import Roadmap from "@/components/slides/9-financials/Roadmap";

// 10. Closing
import CallToAction from "@/components/slides/10-closing/CallToAction";

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
        <Route path="/defense-application" component={DefenseApplication} />
        <Route path="/commercial-application" component={CommercialApplication} />
        <Route path="/defense-user-experience" component={DefenseUserExperience} />
        <Route path="/commercial-solution-showcase" component={CommercialSolution} />
        <Route path="/commercial-user-experience" component={CommercialUserExperience} />
        <Route path="/token-economics" component={TokenEconomics} />
        <Route path="/shell-token-architecture" component={ShellTokenArchitecture} />
        
        {/* 8. Business Model */}
        <Route path="/early-traction" component={EarlyTraction} />
        <Route path="/business-model" component={BusinessModel} />
        <Route path="/go-to-market-strategy" component={GoToMarketStrategy} />
        
        {/* 9. Financials */}
        <Route path="/financial-projections" component={FinancialProjections} />
        <Route path="/development-progress" component={DevelopmentProgress} />
        <Route path="/roadmap" component={Roadmap} />
        
        {/* 10. Closing */}
        <Route path="/call-to-action" component={CallToAction} />
        
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