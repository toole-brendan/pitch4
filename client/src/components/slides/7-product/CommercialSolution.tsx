import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Eye, TrendingUp, BarChart4 } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const CommercialSolution: React.FC = () => {
  return (
    <Slide 
      title="Commercial Solution Showcase" 
      subtitle="Key advantages and measurable business impact"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Feature Cards Section */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              PLATFORM ADVANTAGES
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                icon: <Eye className="w-5 h-5 text-violet-600" />,
                title: "End-to-End Visibility",
                description: "Track parts, components, and products across your entire supply chain in real-time, with full history and provenance data for every item."
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-violet-600" />,
                title: "Inventory Optimization",
                description: "Reduce stockouts and excess inventory with ML-driven forecasting and automated reordering based on real consumption data."
              },
              {
                icon: <BarChart4 className="w-5 h-5 text-violet-600" />,
                title: "Blockchain Verification",
                description: "Immutable record-keeping ensures data integrity and supports compliance requirements with automated verification and audit trails."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-5 bg-gray-50 rounded-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h4 className="text-base font-medium text-gray-900">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 ml-8">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Metrics Section */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              BUSINESS IMPACT
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mt-6 mb-5">
            Average improvements reported by early commercial adopters
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "30%", label: "Reduced Inventory Costs" },
              { value: "40%", label: "Faster Order Fulfillment" },
              { value: "55%", label: "Less Manual Data Entry" },
              { value: "90%", label: "Fewer Counterfeit Parts" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 border-l-2 border-l-violet-300 bg-gray-50"
              >
                <p className="text-2xl font-bold text-violet-600 mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-gray-700">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CommercialSolution;
