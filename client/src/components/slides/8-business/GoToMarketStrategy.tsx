import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  ExternalLink, 
  MessageSquare, 
  Building2, 
  Shield, 
  TrendingUp, 
  Coins,
  Calendar,
  Check,
  Globe,
  Zap,
  Briefcase,
  BarChart3,
  Network
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

const cardVariants = {
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

const GoToMarketStrategy = () => {
  const timelineItems = [
    // Based on ShellToken.md Phase 1-4 timeline
    { quarter: 'Q4 2025', event: 'Launch HandReceipt with 2-3 defense customers', icon: <Shield size={18} /> },
    { quarter: 'Q1 2026', event: 'First commercial pilot deployment', icon: <Building2 size={18} /> },
    { quarter: 'Q2 2026', event: 'Integrate financial institutions for supply chain financing', icon: <Briefcase size={18} /> },
    { quarter: 'Q3 2026', event: 'Open network to broader retail ecosystem', icon: <Globe size={18} /> }
  ];

  return (
    <Slide 
      title="Go-to-Market Strategy" 
      subtitle="Multi-phase approach to platform and token ecosystem growth"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full space-y-6"
      >
        {/* Phased Approach */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              PHASED APPROACH
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Phase 1 */}
            <motion.div
              variants={cardVariants}
              custom={1}
              className="bg-gray-50 p-4 rounded-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-violet-600" />
                <h3 className="text-base font-medium text-gray-900">Phase 1: Pilot Network</h3>
              </div>
              
              <div className="space-y-3 pl-7">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Launch with 2-3 major defense customers</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Implement core Shell token functionality</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Establish HandReceipt-WMS integration</p>
                </div>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              variants={cardVariants}
              custom={2}
              className="bg-gray-50 p-4 rounded-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Network className="w-5 h-5 text-violet-600" />
                <h3 className="text-base font-medium text-gray-900">Phase 2: Ecosystem Expansion</h3>
              </div>
              
              <div className="space-y-3 pl-7">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Add financial institutions for supply chain financing</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Implement dynamic payment terms</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Expand HandReceipt capabilities</p>
                </div>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              variants={cardVariants}
              custom={3}
              className="bg-gray-50 p-4 rounded-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-violet-600" />
                <h3 className="text-base font-medium text-gray-900">Phase 3: Full Ecosystem</h3>
              </div>
              
              <div className="space-y-3 pl-7">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Open network to broader retail ecosystem</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Add third-party developers platform</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Integrate with traditional banking systems</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              EXECUTION TIMELINE
            </span>
          </div>
          
          <div className="mt-6 relative">
            <div className="hidden md:block absolute left-[100px] top-4 bottom-4 w-0.5 bg-violet-100"></div>
            <div className="grid md:grid-cols-2 gap-4">
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative md:pl-[120px]"
                >
                  {/* Timeline marker for desktop */}
                  <div className="hidden md:flex absolute left-[92px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full 
                      bg-white border-2 border-violet-300 items-center justify-center text-violet-600 z-10">
                    {item.icon}
                  </div>
                  
                  {/* Quarter label for desktop */}
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[85px] text-right">
                    <p className="text-sm font-medium text-violet-600">{item.quarter}</p>
                  </div>
                  
                  {/* Event card */}
                  <div className="bg-gray-50 p-4 rounded-sm">
                    {/* Quarter label for mobile */}
                    <div className="md:hidden flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-violet-600" />
                      <p className="text-sm font-medium text-violet-600">{item.quarter}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="md:hidden">{item.icon}</div>
                      <p className="text-sm text-gray-700">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              TARGET STRATEGIC PARTNERSHIPS
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                title: "ERP Providers",
                description: "SAP, NetSuite, Oracle",
                icon: <BarChart3 size={18} />
              },
              {
                title: "Defense Contractors",
                description: "Tier 1 DOD suppliers",
                icon: <Shield size={18} />
              },
              {
                title: "WMS Providers",
                description: "Manhattan, JDA Software",
                icon: <Briefcase size={18} />
              },
              {
                title: "Financial Services",
                description: "Supply chain financing",
                icon: <Coins size={18} />
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-sm"
              >
                <div className="flex items-center gap-2 mb-2 justify-center">
                  <div className="text-violet-600">{partner.icon}</div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {partner.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default GoToMarketStrategy;