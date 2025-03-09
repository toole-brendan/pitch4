import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Clock, Zap, TrendingUp, Shield, Wallet, BarChart3 } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const WhyNow: React.FC = () => {
  const timingFactors = [
    {
      title: "Regulatory Momentum",
      icon: <Shield className="h-5 w-5 text-violet-600" />,
      description: "Recent DoD and SEC regulations now mandate improved supply chain traceability, creating an immediate compliance need."
    },
    {
      title: "Blockchain Maturity",
      icon: <Zap className="h-5 w-5 text-violet-600" />,
      description: "Infrastructure scaling and energy efficiency improvements have made blockchain truly enterprise-ready for the first time."
    },
    {
      title: "Market Readiness",
      icon: <TrendingUp className="h-5 w-5 text-violet-600" />,
      description: "Post-pandemic supply chain disruptions have created unprecedented demand for resilient solutions."
    },
    {
      title: "Payment Innovation",
      icon: <Wallet className="h-5 w-5 text-violet-600" />,
      description: "The rise of stablecoins and digital payments has created the foundation for instant settlement systems."
    },
    {
      title: "Economic Pressure",
      icon: <BarChart3 className="h-5 w-5 text-violet-600" />,
      description: "Tightening margins across industries have made cost efficiencies from supply chain optimization mission-critical."
    },
    {
      title: "First-Mover Advantage",
      icon: <Clock className="h-5 w-5 text-violet-600" />,
      description: "We've reached the critical inflection point where adoption is accelerating, creating a limited window for market leadership."
    }
  ];

  return (
    <Slide 
      title="Why Now" 
      subtitle="Market, technological and regulatory forces creating a perfect storm"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Urgency Statement */}
        <motion.div
          variants={cardVariants}
          custom={0}
          className="bg-white shadow-sm rounded-sm p-6 relative mb-6"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              MARKET INFLECTION POINT
            </span>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            The convergence of <span className="text-violet-600 font-medium">blockchain maturity</span>, 
            <span className="text-violet-600 font-medium"> supply chain vulnerabilities</span>, and 
            <span className="text-violet-600 font-medium"> digital payment innovation</span> has created 
            an unprecedented window for disruption. Early movers who solve these challenges now will secure 
            dominant market positions for the next decade.
          </p>
        </motion.div>

        {/* Timing Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {timingFactors.map((factor, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              custom={index + 1}
              className="p-4 bg-white shadow-sm rounded-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 p-2 bg-violet-50 rounded-full">
                  {factor.icon}
                </div>
                <h3 className="text-base font-medium text-gray-900">{factor.title}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {factor.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Market Timing Chart - Placeholder */}
        <motion.div
          variants={cardVariants}
          custom={7}
          className="bg-white shadow-sm rounded-sm p-6 relative mt-6"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              ADOPTION TIMING
            </span>
          </div>
          
          <div className="h-[140px] mt-6 flex items-end justify-between px-4 relative">
            {/* S-Curve Adoption Graph */}
            <div className="absolute inset-0 flex items-center">
              <svg viewBox="0 0 100 50" className="w-full">
                <path 
                  d="M0,45 C10,45 20,45 30,40 C40,35 50,15 70,10 C90,5 95,5 100,5" 
                  fill="none" 
                  stroke="#8b5cf6" 
                  strokeWidth="2"
                />
                {/* Current position marker */}
                <circle cx="50" cy="15" r="2.5" fill="#8b5cf6" />
                <text x="50" y="10" fontSize="3" fill="#6b21a8" textAnchor="middle">We are here</text>
              </svg>
            </div>
            
            {/* X-Axis Markers */}
            <div className="w-full flex justify-between absolute bottom-0 left-0 right-0">
              <div className="text-xs text-gray-500">2020</div>
              <div className="text-xs text-violet-600 font-medium">2024</div>
              <div className="text-xs text-gray-500">2028</div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8 px-4 text-sm">
            <div>
              <p className="text-gray-600">Early Adoption</p>
            </div>
            <div>
              <p className="text-violet-600 font-medium">Acceleration</p>
            </div>
            <div>
              <p className="text-gray-600">Maturity</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default WhyNow; 