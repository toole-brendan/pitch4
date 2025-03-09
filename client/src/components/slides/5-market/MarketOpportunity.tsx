import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, Target, Users, TrendingUp } from 'lucide-react';

// Motion variants from the style guide
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const marketSideVariants = {
  hidden: (custom: string) => ({
    opacity: 0,
    x: custom === 'defense' ? -30 : 30
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const MarketOpportunity: React.FC = () => {
  return (
    <Slide
      title="Market Opportunity"
      subtitle="Dual-market approach targeting both defense and commercial sectors"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full flex flex-col"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
          {/* Defense Side */}
          <motion.div
            custom="defense"
            variants={marketSideVariants}
            className="flex flex-col"
          >
            <div className="bg-white shadow-sm rounded-sm p-6 flex flex-col relative h-full">
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  DEFENSE
                </span>
              </div>

              <motion.div variants={itemVariants} className="w-full mt-6">
                <div className="bg-gray-50 rounded-sm p-4 mb-4">
                  <span className="block text-2xl font-medium text-violet-600 mb-1">$25-35B</span>
                  <span className="text-xs uppercase tracking-wider text-gray-600">
                    Global Defense Property Management Market
                  </span>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <motion.div variants={itemVariants}>
                  <div className="flex items-start gap-2">
                    <Users className="text-violet-600 w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <span className="block text-sm text-gray-900 font-medium">Serviceable Units</span>
                      <span className="block text-xl font-medium text-violet-600 my-1">1,800+</span>
                      <span className="text-xs text-gray-600">Company-level units in US military</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="text-violet-600 w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <span className="block text-sm text-gray-900 font-medium">Revenue Potential</span>
                      <span className="block text-xl font-medium text-violet-600 my-1">$300-500M</span>
                      <span className="text-xs text-gray-600">Annual revenue within 5 years</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mb-4">
                <div className="rounded-sm p-4">
                  <span className="block text-sm text-gray-900 font-medium mb-2">
                    Target Organizations
                  </span>
                  <div className="flex flex-wrap -m-1">
                    {["US Army", "US Navy", "US Marines", "US Air Force", "National Guard", "Defense Contractors"].map((org) => (
                      <span key={org} className="bg-violet-50 text-xs px-3 py-1 m-1 rounded-sm border border-violet-100 text-violet-700">
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div>
                <span className="block text-sm text-gray-900 font-medium mb-3">
                  Growth Drivers
                </span>
                
                {[
                  "CMMC 2.0 compliance requirements driving modernization",
                  "Congressional mandate for improved accountability",
                  "Military-wide digital transformation initiatives"
                ].map((driver) => (
                  <div key={driver} className="flex items-start gap-2 mb-3">
                    <Check className="w-4 h-4 text-violet-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{driver}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Commercial Side */}
          <motion.div
            custom="commercial"
            variants={marketSideVariants}
            className="flex flex-col"
          >
            <div className="bg-white shadow-sm rounded-sm p-6 flex flex-col relative h-full">
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  COMMERCIAL
                </span>
              </div>
              
              <motion.div variants={itemVariants} className="w-full mt-6">
                <div className="bg-gray-50 rounded-sm p-4 mb-4">
                  <span className="block text-2xl font-medium text-violet-600 mb-1">$70-85B</span>
                  <span className="text-xs uppercase tracking-wider text-gray-600">
                    Global Supply Chain Verification Market
                  </span>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <motion.div variants={itemVariants}>
                  <div className="flex items-start gap-2">
                    <Target className="text-violet-600 w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <span className="block text-sm text-gray-900 font-medium">Initial Target</span>
                      <span className="block text-xl font-medium text-violet-600 my-1">10,000+</span>
                      <span className="text-xs text-gray-600">SMBs in manufacturing & logistics</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="text-violet-600 w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <span className="block text-sm text-gray-900 font-medium">Revenue Potential</span>
                      <span className="block text-xl font-medium text-violet-600 my-1">$800M-1.2B</span>
                      <span className="text-xs text-gray-600">Annual revenue within 5 years</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mb-4">
                <div className="rounded-sm p-4">
                  <span className="block text-sm text-gray-900 font-medium mb-2">
                    Target Industries
                  </span>
                  <div className="flex flex-wrap -m-1">
                    {["Manufacturing", "Pharmaceutical", "Automotive", "Logistics", "Aerospace", "Electronics"].map((industry) => (
                      <span key={industry} className="bg-violet-50 text-xs px-3 py-1 m-1 rounded-sm border border-violet-100 text-violet-700">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div>
                <span className="block text-sm text-gray-900 font-medium mb-3">
                  Growth Drivers
                </span>
                
                {[
                  "40% growth in supply chain security concerns post-COVID",
                  "Increased focus on supply chain resilience",
                  "Rising demand for end-to-end visibility"
                ].map((driver) => (
                  <div key={driver} className="flex items-start gap-2 mb-3">
                    <Check className="w-4 h-4 text-violet-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{driver}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default MarketOpportunity;
