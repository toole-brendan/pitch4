import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { SearchCode, BarChart3, CreditCard, Check, Building2, Boxes, Factory } from 'lucide-react';

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

const CommercialApplication = () => {
  return (
    <Slide 
      title="Commercial Application" 
      subtitle="Supply chain solutions for enterprise businesses"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Key Features */}
          <div className="md:col-span-5">
            <div className="bg-white shadow-sm rounded-sm p-6 relative">
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  KEY CAPABILITIES
                </span>
              </div>

              <div className="flex flex-col gap-6 mt-6">
                {/* Key capabilities */}
                {[
                  { 
                    title: "Supply Chain Transparency", 
                    description: "Complete visibility from sourcing to end customer",
                    icon: <SearchCode className="w-5 h-5 text-violet-600" />,
                    points: [
                      "Authenticated chain of custody for every component",
                      "Real-time verification of authenticity and quality"
                    ]
                  },
                  { 
                    title: "Inventory Intelligence", 
                    description: "Data-driven optimization with predictive analytics",
                    icon: <BarChart3 className="w-5 h-5 text-violet-600" />,
                    points: [
                      "Reduce inventory costs by up to 25% through JIT",
                      "Minimize stockouts with ML forecasting"
                    ]
                  },
                  { 
                    title: "Payment Automation", 
                    description: "Streamlined payments with smart contract capabilities",
                    icon: <CreditCard className="w-5 h-5 text-violet-600" />,
                    points: [
                      "Reduce payment processing from 30+ days to 48 hours",
                      "Optional Shell token payments with near-zero fees"
                    ]
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    custom={index + 1}
                    className={index < 2 ? "border-b border-gray-200 pb-6" : ""}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-violet-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <h4 className="text-base font-medium text-gray-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 ml-8">
                      {item.description}
                    </p>
                    <ul className="space-y-2 ml-8">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Applications */}
          <div className="md:col-span-7">
            <div className="bg-white shadow-sm rounded-sm p-6 relative">
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  INDUSTRY APPLICATIONS
                </span>
              </div>

              <div className="mt-6 space-y-6">
                {[
                  {
                    title: "Retail Inventory Management",
                    description: "Precision inventory tracking across multiple locations",
                    icon: <Building2 className="w-5 h-5 text-violet-600" />,
                    points: [
                      "Track inventory across locations with precise accuracy",
                      "Automate reordering based on real-time sales data",
                      "Verify product authenticity instantly with QR scanning"
                    ]
                  },
                  {
                    title: "Supplier Management",
                    description: "Simplified multi-tier supplier management",
                    icon: <Boxes className="w-5 h-5 text-violet-600" />,
                    points: [
                      "Maintain immutable records of supplier performance",
                      "Dramatically simplify compliance and audit processes",
                      "Automated multi-tier supplier verification"
                    ]
                  },
                  {
                    title: "Manufacturing Operations",
                    description: "End-to-end tracking for production excellence",
                    icon: <Factory className="w-5 h-5 text-violet-600" />,
                    points: [
                      "Track in-process inventory with pinpoint accuracy",
                      "Reduce waste through precise material tracking",
                      "Create transparent records for quality control"
                    ]
                  }
                ].map((application, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 bg-gray-50 rounded-sm"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-violet-600 flex-shrink-0">
                        {application.icon}
                      </div>
                      <h4 className="text-base font-medium text-gray-900">
                        {application.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 ml-8">
                      {application.description}
                    </p>
                    <ul className="space-y-2 ml-8">
                      {application.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CommercialApplication;