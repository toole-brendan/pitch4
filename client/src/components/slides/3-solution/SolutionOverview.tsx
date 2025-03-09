import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, ArrowRight, Smartphone, Database, GitMerge, CreditCard } from 'lucide-react';

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

const metricsVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.5
    }
  }
};

const SolutionOverview: React.FC = () => {
  return (
    <Slide 
      title="HandReceipt Solution Overview" 
      subtitle="Blockchain-secured supply chain verification with dual-market application"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
        {/* Mobile App Mockup */}
        <div className="md:col-span-4 relative flex flex-col items-center justify-center">
          <motion.div
            variants={metricsVariants}
            initial="hidden"
            animate="visible"
            className="absolute -top-5 -right-5 z-10 bg-white shadow-sm p-4 rounded-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-xl font-medium text-violet-600 mr-2">60-90</span>
                <span className="text-xs uppercase tracking-wide text-gray-600">Days reduced</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-medium text-violet-600 mr-2">100%</span>
                <span className="text-xs uppercase tracking-wide text-gray-600">Digital tracking</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-medium text-violet-600 mr-2">Real-time</span>
                <span className="text-xs uppercase tracking-wide text-gray-600">Visibility</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[280px] h-[480px] bg-gray-100 p-3 border border-gray-300 shadow-md rounded-md relative"
          >
            <div className="w-full h-full bg-white border border-gray-200 overflow-hidden flex flex-col rounded-sm">
              <div className="bg-violet-600 text-white px-4 py-3 flex justify-between items-center">
                <span className="font-medium">HandReceipt</span>
                <span className="text-xs">v1.2</span>
              </div>

              <div className="flex-1 p-4 space-y-6">
                <div className="vc-category">INVENTORY MANAGEMENT</div>

                <div className="bg-gray-50 border border-gray-200 rounded-sm h-40 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 p-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 bg-gray-200 mb-2 ${i === 4 ? 'w-2/5' : 'w-full'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-sm p-4">
                  <div className="relative w-full h-2 bg-gray-200 mb-2 overflow-hidden rounded-full">
                    <div className="absolute top-0 left-0 h-full w-4/5 bg-violet-600" />
                  </div>
                  <p className="text-sm text-violet-600 text-center font-medium">VERIFICATION: 80%</p>
                </div>

                <button className="w-full bg-violet-600 text-white rounded-sm py-2 px-4 font-medium text-sm">
                  SCAN ITEM
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="md:col-span-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="vc-category mb-2">MULTI-DOMAIN SOLUTION</div>
            <h2 className="text-xl font-medium text-gray-900">Secure verification across military and commercial domains</h2>

            {/* Process Steps */}
            <div className="relative mt-8">
              <div className="absolute top-8 left-[10%] w-[80%] h-[1px] bg-gray-200" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {[
                  { step: 1, icon: <Smartphone size={18} />, label: "QR Scan" },
                  { step: 2, icon: <Database size={18} />, label: "Blockchain Record" },
                  { step: 3, icon: <GitMerge size={18} />, label: "Smart Contract" },
                  { step: 4, icon: <CreditCard size={18} />, label: "Settlement" }
                ].map((item, index) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-violet-50 border border-violet-200 text-violet-600 rounded-full flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid - simplified to 2 key features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "Military Application",
                  description: "Secure property tracking and transfers",
                  items: [
                    "QR-code based digital transfers",
                    "Blockchain-secured records",
                    "Paper process digitization"
                  ]
                },
                {
                  title: "Commercial Integration",
                  description: "Enterprise system compatibility",
                  items: [
                    "Existing scanning infrastructure",
                    "ERP/WMS API integration",
                    "Shell token payments"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white shadow-sm rounded-sm p-6 relative">
                  <div className="absolute -top-3 left-10">
                    <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                      {index === 0 ? 'MILITARY' : 'COMMERCIAL'}
                    </span>
                  </div>
                  <div className="mt-6 mb-3">
                    <div className="flex items-center mb-2">
                      <div className="mr-3 text-violet-600">
                        {index === 0 && <Database size={20} />}
                        {index === 1 && <Smartphone size={20} />}
                      </div>
                      <h3 className="font-medium text-lg text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 ml-8">{feature.description}</p>
                  </div>
                  <div className="divider"></div>
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-violet-600 mr-2"><Check size={14} /></span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default SolutionOverview;