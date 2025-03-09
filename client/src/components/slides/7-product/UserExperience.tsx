import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Smartphone, FileText, Shield, Zap, Check, ChevronRight, Building, Warehouse, Scan, ArrowRight } from 'lucide-react';

// Animation variants
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const stepVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.1 * custom
    }
  })
};

const phoneVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const appItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.1 * custom
    }
  })
};

const UserExperience: React.FC = () => {
  return (
    <Slide 
      title="User Experience"
      subtitle="Intuitive interfaces for defense and commercial applications"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* Mobile Interface Mockups */}
        <div className="md:col-span-4">
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                MOBILE INTERFACES
              </span>
            </div>
            
            <div className="mt-6 flex justify-center">
              <div className="relative">
                {/* Defense Mobile Interface */}
                <motion.div 
                  variants={phoneVariants}
                  className="w-[200px] bg-gray-100 p-3 border border-gray-300 shadow-md rounded-md absolute -left-20 top-10 z-20 transform -rotate-6"
                >
                  <div className="w-full h-[360px] bg-white border border-gray-200 overflow-hidden flex flex-col rounded-sm">
                    <div className="bg-violet-800 text-white px-4 py-3 flex justify-between items-center">
                      <div>
                        <span className="font-medium">HandReceipt</span>
                        <p className="text-xs opacity-75">DEFENSE</p>
                      </div>
                      <span className="text-xs">v1.0</span>
                    </div>

                    <div className="flex-1 p-3 space-y-3">
                      <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">INVENTORY</div>

                      <div className="bg-gray-50 border border-gray-200 rounded-sm p-2 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium">M4 Carbine</div>
                          <div className="text-xs text-gray-500">SN: 9358627</div>
                        </div>
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-sm p-2 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium">NVG-7</div>
                          <div className="text-xs text-gray-500">SN: 5571938</div>
                        </div>
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>

                      <div className="mt-4 bg-violet-50 border border-violet-200 rounded-sm p-2">
                        <div className="text-xs text-center font-medium text-violet-800">SCAN TO VERIFY</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Commercial Mobile Interface */}
                <motion.div 
                  variants={phoneVariants}
                  className="w-[200px] bg-gray-100 p-3 border border-gray-300 shadow-md rounded-md relative z-10 transform rotate-0"
                >
                  <div className="w-full h-[360px] bg-white border border-gray-200 overflow-hidden flex flex-col rounded-sm">
                    <div className="bg-violet-600 text-white px-4 py-3 flex justify-between items-center">
                      <div>
                        <span className="font-medium">HandReceipt</span>
                        <p className="text-xs opacity-75">COMMERCIAL</p>
                      </div>
                      <span className="text-xs">v1.0</span>
                    </div>

                    <div className="flex-1 p-3 space-y-3">
                      <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">DASHBOARD</div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-violet-50 border border-violet-200 p-2 rounded-sm flex flex-col items-center justify-center">
                          <div className="text-xs text-violet-700 font-medium">Scan Item</div>
                        </div>
                        <div className="bg-violet-50 border border-violet-200 p-2 rounded-sm flex flex-col items-center justify-center">
                          <div className="text-xs text-violet-700 font-medium">Verify</div>
                        </div>
                        <div className="bg-violet-50 border border-violet-200 p-2 rounded-sm flex flex-col items-center justify-center">
                          <div className="text-xs text-violet-700 font-medium">Transfer</div>
                        </div>
                        <div className="bg-violet-50 border border-violet-200 p-2 rounded-sm flex flex-col items-center justify-center">
                          <div className="text-xs text-violet-700 font-medium">Receive</div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">RECENT ACTIVITY</div>
                        <div className="bg-gray-50 border border-gray-200 rounded-sm p-2 mb-2">
                          <p className="text-xs">Received: SKU-12355</p>
                          <p className="text-xs text-gray-500">12 min ago</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-sm p-2">
                          <p className="text-xs">Verified: SKU-12340</p>
                          <p className="text-xs text-gray-500">35 min ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* User Workflows */}
        <div className="md:col-span-8">
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                USER WORKFLOW
              </span>
            </div>
            
            <div className="mt-6 mb-6">
              <div className="relative pb-6">
                <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
                
                <div className="grid grid-cols-4 gap-2 relative z-10">
                  {[
                    {
                      step: "1",
                      title: "Scan",
                      description: "Scan QR code to identify item"
                    },
                    {
                      step: "2",
                      title: "Verify",
                      description: "Blockchain verification confirms authenticity"
                    },
                    {
                      step: "3",
                      title: "Transfer",
                      description: "Securely transfer ownership"
                    },
                    {
                      step: "4",
                      title: "Record",
                      description: "Transaction recorded on blockchain"
                    }
                  ].map((step, index) => (
                    <div key={step.step} className="flex flex-col items-center">
                      <motion.div
                        variants={stepVariants}
                        custom={index + 1}
                        className="w-10 h-10 bg-white border border-violet-600 rounded-full flex items-center justify-center mb-3 font-medium text-violet-700"
                      >
                        {step.step}
                      </motion.div>
                      <h4 className="text-sm font-medium text-center">
                        {step.title}
                      </h4>
                      <p className="text-xs text-center text-gray-600 mt-1">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {/* Defense User Experience */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-violet-600" />
                  <h4 className="text-base font-medium text-gray-900">Defense UX</h4>
                </div>
                
                <ul className="space-y-2 ml-8">
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span>CAC integration for secure authentication</span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span>Offline-capable for field operations</span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-tier authorization workflows</span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span>Built for rugged field environments</span>
                  </motion.li>
                </ul>
              </motion.div>
              
              {/* Commercial User Experience */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-5 h-5 text-violet-600" />
                  <h4 className="text-base font-medium text-gray-900">Commercial UX</h4>
                </div>
                
                <ul className="space-y-2 ml-8">
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span>Intuitive dashboard for real-time tracking</span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span>ERP integration for seamless workflow</span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span>Batch processing capabilities</span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span>Role-based access control</span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* User Insights */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-sm rounded-sm p-6 relative mt-6"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                USER-CENTERED DESIGN
              </span>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-700 mb-4">
                Our design philosophy prioritizes simplicity and utility, developed with insights from military logistics experience and commercial supply chain requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-violet-50 p-3 rounded-sm border border-violet-100">
                  <h4 className="text-sm font-medium text-violet-700 mb-2">Single-Tap Operations</h4>
                  <p className="text-xs text-gray-600">
                    Critical functions accessible with minimal interaction for field efficiency
                  </p>
                </div>
                
                <div className="bg-violet-50 p-3 rounded-sm border border-violet-100">
                  <h4 className="text-sm font-medium text-violet-700 mb-2">Minimal Training Required</h4>
                  <p className="text-xs text-gray-600">
                    Intuitive interface that requires less than 15 minutes to learn
                  </p>
                </div>
                
                <div className="bg-violet-50 p-3 rounded-sm border border-violet-100">
                  <h4 className="text-sm font-medium text-violet-700 mb-2">Consistent Cross-Platform</h4>
                  <p className="text-xs text-gray-600">
                    Identical experience across mobile, tablet, and desktop interfaces
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default UserExperience; 