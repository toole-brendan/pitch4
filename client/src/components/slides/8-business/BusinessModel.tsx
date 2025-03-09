import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, Building2, Settings, RefreshCcw, Truck, Sword, Flag, Factory } from 'lucide-react';

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

const BusinessModel: React.FC = () => {  
  return (
    <Slide 
      title="Business Model & Pricing Strategy" 
      subtitle="Subscription-based model with tiered approach for different markets"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full flex flex-col"
      >
        {/* Revenue Streams */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Defense Tier */}
            <motion.div
              variants={itemVariants}
              className="bg-white shadow-sm rounded-sm border border-gray-200"
            >
              <div className="bg-violet-50 p-4 border-b border-gray-200 flex items-center">
                <Sword className="text-violet-600 mr-2" />
                <h4 className="font-medium">Defense Tier</h4>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <p className="text-2xl font-medium text-violet-600 mb-1">$250K - $1M</p>
                  <p className="text-sm text-gray-600">Annual license per deployment</p>
                  <p className="text-xs text-gray-500">Based on scale and customization</p>
                </div>
                
                <div className="divider"></div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium">Enterprise-grade deployment</p>
                      <p className="text-sm text-gray-600">Full security compliance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium">Custom integrations</p>
                      <p className="text-sm text-gray-600">Works with existing systems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium">Dedicated support team</p>
                      <p className="text-sm text-gray-600">24/7 mission-critical support</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Enterprise Tier */}
            <motion.div
              variants={itemVariants}
              className="bg-white shadow-sm rounded-sm border border-gray-200"
            >
              <div className="bg-violet-50 p-4 border-b border-gray-200 flex items-center">
                <Building2 className="text-violet-600 mr-2" />
                <h4 className="font-medium">Commercial Enterprise</h4>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <p className="text-2xl font-medium text-violet-600 mb-1">$75K - $150K</p>
                  <p className="text-sm text-gray-600">Annual license</p>
                  <p className="text-xs text-gray-500">Per business unit/facility</p>
                </div>
                
                <div className="divider"></div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium">Full platform capabilities</p>
                      <p className="text-sm text-gray-600">Customizable dashboard</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium">ERP integration suite</p>
                      <p className="text-sm text-gray-600">Works with existing systems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium">Priority support</p>
                      <p className="text-sm text-gray-600">Business hours + emergency</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Additional Services */}
            <motion.div
              variants={itemVariants}
              className="bg-white shadow-sm rounded-sm border border-gray-200"
            >
              <div className="bg-violet-50 p-4 border-b border-gray-200 flex items-center">
                <Settings className="text-violet-600 mr-2" />
                <h4 className="font-medium">Additional Services</h4>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <p className="text-2xl font-medium text-violet-600 mb-1">$25K - $150K</p>
                  <p className="text-sm text-gray-600">Additional service fees</p>
                  <p className="text-xs text-gray-500">Implementation & consulting</p>
                </div>
                
                <div className="divider"></div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium">Implementation services</p>
                      <p className="text-sm text-gray-600">Customized onboarding</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium">Custom development</p>
                      <p className="text-sm text-gray-600">Specialized integrations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium">Training & certification</p>
                      <p className="text-sm text-gray-600">User and admin training</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Target Markets & Unit Economics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Target Markets */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                TARGET MARKETS
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: "Defense",
                  description: "Military logistics units, defense contractors",
                  icon: Flag,
                },
                {
                  title: "Manufacturing",
                  description: "Precision manufacturing, aerospace",
                  icon: Factory,
                },
                {
                  title: "Logistics",
                  description: "3PL providers, warehousing operations",
                  icon: Truck,
                },
                {
                  title: "Maintenance",
                  description: "Aviation MRO, industrial equipment",
                  icon: RefreshCcw,
                }
              ].map((market, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-sm">
                  <div className="flex items-center mb-2">
                    <market.icon className="text-violet-600 w-5 h-5 mr-2" />
                    <h4 className="font-medium">{market.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{market.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Unit Economics */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                UNIT ECONOMICS
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6 mt-6">
              <div className="p-4 bg-gray-50 rounded-sm border-l-4 border-l-violet-500">
                <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">CUSTOMER ACQUISITION</p>
                <p className="text-xl font-medium text-gray-900">$50K - $75K</p>
                <p className="text-sm text-gray-600">CAC for defense & enterprise</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-sm border-l-4 border-l-violet-500">
                <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">CUSTOMER LTV</p>
                <p className="text-xl font-medium text-gray-900">$750K - $3M</p>
                <p className="text-sm text-gray-600">5-year contract value</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "GROSS MARGIN",
                  value: "85%",
                  description: "Software revenue"
                },
                {
                  label: "SERVICES MARGIN",
                  value: "65%",
                  description: "Implementation & consulting"
                },
                {
                  label: "LTV:CAC RATIO",
                  value: "10:1",
                  description: "Target ratio at scale"
                },
                {
                  label: "NET RETENTION",
                  value: "120%",
                  description: "Projected annual retention"
                }
              ].map((metric, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-sm">
                  <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">{metric.label}</p>
                  <p className="text-xl font-medium text-violet-600">{metric.value}</p>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default BusinessModel;
