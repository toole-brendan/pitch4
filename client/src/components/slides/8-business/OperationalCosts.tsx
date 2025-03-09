import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Database, Code, Server, Users, Scale, BookOpen } from 'lucide-react';

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
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

const OperationalCosts: React.FC = () => {
  return (
    <Slide 
      title="Operational Costs" 
      subtitle="Breakdown of blockchain infrastructure and development expenses"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Monthly Operating Costs */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              MONTHLY OPERATING COSTS
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Infrastructure Costs */}
            <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
              <div className="bg-gray-50 p-4 rounded-sm h-full">
                <div className="flex items-center gap-2 mb-3">
                  <Server className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Infrastructure</h3>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Blockchain Nodes</span>
                    <span className="text-sm font-medium text-gray-900">$600-800/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Database Storage</span>
                    <span className="text-sm font-medium text-gray-900">$200-300/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Cloud Hosting</span>
                    <span className="text-sm font-medium text-gray-900">$300-500/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Network Costs</span>
                    <span className="text-sm font-medium text-gray-900">$100-200/mo</span>
                  </li>
                  <li className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">Subtotal</span>
                      <span className="text-sm font-medium text-violet-600">$1,200-1,800/mo</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Development Costs */}
            <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
              <div className="bg-gray-50 p-4 rounded-sm h-full">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Development</h3>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Contract Developer</span>
                    <span className="text-sm font-medium text-gray-900">$8,000-10,000/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Development Tools</span>
                    <span className="text-sm font-medium text-gray-900">$300-500/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Testing/QA</span>
                    <span className="text-sm font-medium text-gray-900">$500-1,000/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Design Resources</span>
                    <span className="text-sm font-medium text-gray-900">$200-400/mo</span>
                  </li>
                  <li className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">Subtotal</span>
                      <span className="text-sm font-medium text-violet-600">$9,000-12,000/mo</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Operations Costs */}
            <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
              <div className="bg-gray-50 p-4 rounded-sm h-full">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Operations</h3>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Legal & Compliance</span>
                    <span className="text-sm font-medium text-gray-900">$2,000-3,000/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Minimal Office Space</span>
                    <span className="text-sm font-medium text-gray-900">$500-1,000/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Marketing & BD</span>
                    <span className="text-sm font-medium text-gray-900">$1,500-2,500/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-gray-600">Admin & Insurance</span>
                    <span className="text-sm font-medium text-gray-900">$800-1,200/mo</span>
                  </li>
                  <li className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">Subtotal</span>
                      <span className="text-sm font-medium text-violet-600">$4,800-7,700/mo</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Monthly Burn Rate & Runway */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              BURN RATE & RUNWAY
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Burn Rate Analysis */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-50 p-4 rounded-sm h-full">
                <h3 className="text-base font-medium text-gray-900 mb-4">Monthly Burn Rate</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Infrastructure</span>
                    <span className="text-sm font-medium text-gray-900">$1,200-1,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Development</span>
                    <span className="text-sm font-medium text-gray-900">$9,000-12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Operations</span>
                    <span className="text-sm font-medium text-gray-900">$4,800-7,700</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">Total Monthly Burn</span>
                      <span className="text-sm font-medium text-violet-600">$15,000-21,500</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Runway Analysis */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-50 p-4 rounded-sm h-full">
                <h3 className="text-base font-medium text-gray-900 mb-4">Seed Funding Runway</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Seed Funding</span>
                      <span className="text-sm font-medium text-gray-900">$750,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-violet-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Best Case (Lower Burn)</span>
                      <span className="text-sm font-medium text-violet-600">15 months</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-green-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Expected Case</span>
                      <span className="text-sm font-medium text-violet-600">12 months</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="bg-blue-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Conservative Case (Higher Burn)</span>
                      <span className="text-sm font-medium text-violet-600">10 months</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '50%' }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="bg-yellow-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Founder Contribution */}
        <motion.div
          variants={itemVariants}
          className="bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              CAPITAL EFFICIENCY
            </span>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-700 mb-4">
              As the technical founder, I'll be leading development myself, significantly reducing our costs compared to startups that need to hire a full engineering team. My military and finance background also allows us to target our initial customer acquisition efforts with precision, further optimizing our capital use.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-violet-50 p-4 rounded-sm">
                <h4 className="text-base font-medium text-violet-700 mb-2">Development-Focused</h4>
                <p className="text-sm text-gray-600">Over 55% of funding directly to product development, with minimal overhead expenses</p>
              </div>
              
              <div className="bg-violet-50 p-4 rounded-sm">
                <h4 className="text-base font-medium text-violet-700 mb-2">Scalable Infrastructure</h4>
                <p className="text-sm text-gray-600">Cloud-native architecture allows for variable costs that scale with usage</p>
              </div>
              
              <div className="bg-violet-50 p-4 rounded-sm">
                <h4 className="text-base font-medium text-violet-700 mb-2">Founder Investment</h4>
                <p className="text-sm text-gray-600">I've invested my own time and capital to develop the initial concept and architecture</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default OperationalCosts; 