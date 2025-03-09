import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { cn } from "@/lib/utils";
import { 
  Shield, 
  Wifi, 
  Smartphone, 
  Sword, 
  Lock, 
  Bell,
  ChevronRight
} from 'lucide-react';

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

const phoneVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
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

const DefenseUserExperience: React.FC = () => {
  const features = [
    {
      title: 'Secure Authentication',
      description: 'Multi-factor authentication with biometrics and CAC integration',
      icon: <Shield className="w-5 h-5 text-violet-600" />
    },
    {
      title: 'Offline Capability',
      description: 'Full functionality in disconnected environments with secure sync',
      icon: <Wifi className="w-5 h-5 text-violet-600" />
    },
    {
      title: 'Item Custody Chain',
      description: 'Complete history of all equipment transfers with digital signatures',
      icon: <Smartphone className="w-5 h-5 text-violet-600" />
    },
    {
      title: 'Tactical Deployment',
      description: 'Field-ready interface optimized for quick updates in operations',
      icon: <Sword className="w-5 h-5 text-violet-600" />
    },
    {
      title: 'Encrypted Data',
      description: 'AES-256 encryption for all data at rest and in transit',
      icon: <Lock className="w-5 h-5 text-violet-600" />
    },
    {
      title: 'Mission Readiness',
      description: 'Real-time equipment status reports with critical alerts',
      icon: <Bell className="w-5 h-5 text-violet-600" />
    }
  ];
  
  return (
    <Slide 
      title="Defense User Experience" 
      subtitle="Secure, reliable interfaces for military operations"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* Left Column: Phone Mockup */}
        <div className="md:col-span-5">
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                MOBILE INTERFACE
              </span>
            </div>

            <motion.div 
              variants={phoneVariants}
              className="relative w-full mt-6"
            >
              <div className="w-full bg-gray-50 rounded-xl p-3 border border-gray-200">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-violet-700 text-white p-4">
                    <h4 className="font-medium text-base">
                      HandReceipt
                    </h4>
                    <p className="text-xs text-violet-200">
                      DEFENSE PORTAL
                    </p>
                  </div>

                  <div className="p-4">
                    <h5 className="font-medium text-sm mb-4">
                      Current Inventory
                    </h5>

                    <div className="space-y-3">
                      {[
                        { id: 'MIL-1001', name: 'Radio Component', qty: 5, status: 'In Stock' },
                        { id: 'MIL-1002', name: 'Weapon System Part', qty: 10, status: 'Deployed' },
                        { id: 'MIL-1003', name: 'Aircraft Component', qty: 15, status: 'In Stock' },
                        { id: 'MIL-1004', name: 'Tactical Gear', qty: 20, status: 'Deployed' }
                      ].map((item) => (
                        <motion.div 
                          key={item.id}
                          variants={itemVariants}
                          className="flex items-center border-b border-gray-100 py-3 last:border-0"
                        >
                          <div className="w-10 h-10 bg-violet-50 rounded-md flex items-center justify-center mr-3">
                            <span className="text-xs text-violet-700 font-medium">
                              {item.id}
                            </span>
                          </div>

                          <div className="flex-1">
                            <h6 className="text-sm font-medium text-gray-900">
                              {item.name}
                            </h6>
                            <p className="text-xs text-gray-500">
                              Qty: {item.qty} • Status: {item.status}
                            </p>
                          </div>

                          <div className="w-6 h-6 bg-violet-50 rounded-full flex items-center justify-center">
                            <ChevronRight className="w-4 h-4 text-violet-600" />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-5 flex justify-center">
                      <button
                        className="bg-violet-600 text-white text-xs py-2 px-4 rounded-sm transition-colors duration-200"
                      >
                        SCAN NEW ITEM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Features */}
        <div className="md:col-span-7">
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                DEFENSE-GRADE FEATURES
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-6 mb-5">
              Specialized tools for military logistics and equipment management
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-4 bg-gray-50 rounded-sm"
                >
                  <div className="flex items-center gap-3 mb-2"> 
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
        </div>
      </motion.div>
    </Slide>
  );
};

export default DefenseUserExperience;