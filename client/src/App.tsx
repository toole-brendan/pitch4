import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";

// 1. Company Purpose
import CompanyOverview from "@/components/slides/1-company/CompanyOverview";
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
import ShellTokenArchitecture from "@/components/slides/appendix/ShellTokenArchitecture";
import TokenEconomics from "@/components/slides/appendix/TokenEconomics";

// Navigation
import Navigation from "@/components/Navigation";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        {/* Main Presentation - exact order as specified (16 slides) */}
        <Route path="/" component={CompanyOverview} />
        <Route path="/founder-background" component={FounderBackground} />
        <Route path="/supply-chain-challenges" component={SupplyChainChallenges} />
        <Route path="/solution-overview" component={SolutionOverview} />
        <Route path="/dual-market-strategy" component={DualMarketStrategy} />
        <Route path="/why-now" component={WhyNow} />
        <Route path="/market-opportunity" component={MarketOpportunity} />
        <Route path="/competitive-landscape" component={CompetitiveLandscape} />
        <Route path="/product-features" component={ProductFeatures} />
        <Route path="/user-experience" component={UserExperience} />
        <Route path="/business-model" component={BusinessModel} />
        <Route path="/go-to-market-strategy" component={GoToMarketStrategy} />
        <Route path="/financial-projections" component={FinancialProjections} />
        <Route path="/operational-costs" component={OperationalCosts} />
        <Route path="/funding-request" component={FundingRequest} />
        <Route path="/team-and-roadmap" component={TeamAndRoadmap} />
        
        {/* Appendix - exact order as specified (2 slides) */}
        <Route path="/shell-token-architecture" component={ShellTokenArchitecture} />
        <Route path="/token-economics" component={TokenEconomics} />
        
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