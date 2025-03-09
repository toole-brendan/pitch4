import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { PieChart, TrendingUp, Target, RefreshCw, BarChart3, Users } from 'lucide-react';

// Motion variants
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

const MarketOpportunity: React.FC = () => {
  return (
    <Slide
      title="Market Opportunity"
      subtitle="TAM, SAM, and SOM analysis for supply chain verification"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Market Size Breakdown */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              MARKET SIZE ANALYSIS
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TAM */}
            <motion.div
              variants={itemVariants}
              className="p-4 bg-gray-50 rounded-sm border-l-4 border-l-violet-400"
            >
              <div className="flex items-center gap-2 mb-3">
                <PieChart className="w-5 h-5 text-violet-600" />
                <h3 className="text-base font-medium text-gray-900">TAM</h3>
              </div>
              <p className="text-2xl font-semibold text-violet-600 mb-1">$110B</p>
              <p className="text-sm text-gray-600 mb-3">Total Addressable Market</p>
              <p className="text-xs text-gray-600">
                The combined global military and commercial supply chain verification markets
              </p>
            </motion.div>
            
            {/* SAM */}
            <motion.div
              variants={itemVariants}
              className="p-4 bg-gray-50 rounded-sm border-l-4 border-l-violet-400"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-violet-600" />
                <h3 className="text-base font-medium text-gray-900">SAM</h3>
              </div>
              <p className="text-2xl font-semibold text-violet-600 mb-1">$25B</p>
              <p className="text-sm text-gray-600 mb-3">Serviceable Available Market</p>
              <p className="text-xs text-gray-600">
                U.S. defense logistics and mid-to-large commercial enterprises with complex supply chains
              </p>
            </motion.div>
            
            {/* SOM */}
            <motion.div
              variants={itemVariants}
              className="p-4 bg-gray-50 rounded-sm border-l-4 border-l-violet-400"
            >
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-violet-600" />
                <h3 className="text-base font-medium text-gray-900">SOM</h3>
              </div>
              <p className="text-2xl font-semibold text-violet-600 mb-1">$500M</p>
              <p className="text-sm text-gray-600 mb-3">Serviceable Obtainable Market</p>
              <p className="text-xs text-gray-600">
                Initial target: U.S. military units and defense contractors with high-value asset tracking needs
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Target Market Segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Defense Market */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                DEFENSE MARKET
              </span>
            </div>
            
            <div className="mt-6 space-y-5">
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Target Customers</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 ml-8">
                  <li>• U.S. Army, Navy, Air Force, Marines units</li>
                  <li>• Defense Logistics Agency</li>
                  <li>• Military contractors and suppliers</li>
                  <li>• Forward operating bases and deployment units</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <RefreshCw className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Market Dynamics</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 ml-8">
                  <li>• Critical need for enhanced security and auditability</li>
                  <li>• $1.2B+ annual inventory loss current problem</li>
                  <li>• Paper-based processes still dominate</li>
                  <li>• Growing mandate for digital transformation</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Commercial Market */}
          <motion.div
            variants={itemVariants} 
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                COMMERCIAL MARKET
              </span>
            </div>
            
            <div className="mt-6 space-y-5">
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Target Industries</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 ml-8">
                  <li>• Aerospace and automotive manufacturing</li>
                  <li>• Pharmaceutical supply chains</li>
                  <li>• Electronics and high-value components</li>
                  <li>• Retail with complex distribution networks</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Growth Drivers</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 ml-8">
                  <li>• 60-90 day payment delays in current chains</li>
                  <li>• $950B+ annual inventory inaccuracy costs</li>
                  <li>• 85% still using manual processes</li>
                  <li>• Post-pandemic focus on resilience</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Market Entry Strategy */}
        <motion.div
          variants={itemVariants}
          className="bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              MARKET ENTRY STRATEGY
            </span>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-700 mb-4">
              Our initial focus will be on U.S. defense applications, where our founder's expertise provides a strategic advantage. This establishes credibility and security validation that will then be leveraged for commercial market expansion.
            </p>
            
            <div className="flex items-center gap-4 justify-center">
              <div className="text-center">
                <div className="w-32 h-16 bg-violet-50 border border-violet-200 flex items-center justify-center mb-2">
                  <span className="text-violet-700 font-medium">Phase 1</span>
                </div>
                <p className="text-xs text-gray-600">Defense Pilots</p>
              </div>
              
              <div className="w-8 h-[2px] bg-violet-300"></div>
              
              <div className="text-center">
                <div className="w-32 h-16 bg-violet-50 border border-violet-200 flex items-center justify-center mb-2">
                  <span className="text-violet-700 font-medium">Phase 2</span>
                </div>
                <p className="text-xs text-gray-600">Defense Scale</p>
              </div>
              
              <div className="w-8 h-[2px] bg-violet-300"></div>
              
              <div className="text-center">
                <div className="w-32 h-16 bg-violet-50 border border-violet-200 flex items-center justify-center mb-2">
                  <span className="text-violet-700 font-medium">Phase 3</span>
                </div>
                <p className="text-xs text-gray-600">Commercial Entry</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default MarketOpportunity;
