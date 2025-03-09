import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, ChevronRight, Building, Warehouse } from 'lucide-react';

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

const CommercialUserExperience: React.FC = () => {
  return (
    <Slide 
      title="Commercial User Experience"
      subtitle="Intuitive retail and warehouse management interfaces"
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
              className="max-w-[300px] mx-auto relative mt-6"
            >
              <div className="w-full bg-gray-100 rounded-xl p-3 border border-gray-200">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-violet-700 text-white p-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-base">HandReceipt</p>
                      <p className="text-xs opacity-75">RETAIL PORTAL</p>
                    </div>
                    <p className="text-xs opacity-75">v2.1.0</p>
                  </div>
                  
                  <div className="p-3">
                    <motion.div 
                      variants={itemVariants}
                      className="bg-white rounded p-3 mb-3 border border-gray-200"
                    >
                      <h4 className="font-medium text-sm text-violet-700 mb-2">
                        Recent Shipments
                      </h4>
                      
                      {[
                        { id: "A12345", status: "VERIFIED" },
                        { id: "B67890", status: "IN TRANSIT" },
                        { id: "C45678", status: "PENDING" }
                      ].map((shipment, index) => (
                        <motion.div
                          key={shipment.id}
                          variants={appItemVariants}
                          custom={index + 1}
                          className="bg-gray-50 rounded p-2 mb-2 flex justify-between text-sm"
                        >
                          <span>Order #{shipment.id}</span>
                          <span className="font-medium text-violet-700">{shipment.status}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.div
                      variants={itemVariants}
                      className="bg-white rounded p-3 mb-3 border border-gray-200"
                    >
                      <h4 className="font-medium text-sm text-violet-700 mb-2">
                        Inventory Status
                      </h4>
                      
                      {[
                        { category: "Men's Apparel", level: "94%" },
                        { category: "Women's Footwear", level: "76%" }
                      ].map((item, index) => (
                        <motion.div
                          key={item.category}
                          variants={appItemVariants}
                          custom={index + 4}
                          className="bg-gray-50 rounded p-2 mb-2 flex justify-between text-sm"
                        >
                          <span>{item.category}</span>
                          <span className="font-medium text-violet-700">{item.level}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.button
                      variants={itemVariants}
                      className="w-full py-2 bg-violet-600 text-white text-sm font-medium rounded transition-colors"
                    >
                      SCAN PRODUCT
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Right Column: User Workflow */}
        <div className="md:col-span-7">
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
                      description: "Scan product QR code with smartphone app"
                    },
                    {
                      step: "2",
                      title: "Verify",
                      description: "Blockchain verification confirms authenticity"
                    },
                    {
                      step: "3",
                      title: "Update",
                      description: "Inventory systems automatically updated"
                    },
                    {
                      step: "4",
                      title: "Analyze",
                      description: "Supply chain analytics and reporting"
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {[
                {
                  title: "Retail Managers",
                  icon: <Building className="w-5 h-5 text-violet-600" />,
                  benefits: [
                    "Reduce inventory shrinkage by 43%",
                    "Process shipments 2.5x faster",
                    "Real-time stock visibility across locations"
                  ]
                },
                {
                  title: "Warehouse Staff",
                  icon: <Warehouse className="w-5 h-5 text-violet-600" />,
                  benefits: [
                    "Reduce manual data entry by 87%",
                    "Batch process large shipments with accuracy"
                  ]
                }
              ].map((role, index) => (
                <motion.div
                  key={role.title}
                  variants={itemVariants}
                  className="p-4 bg-gray-50 rounded-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0">
                      {role.icon}
                    </div>
                    <h4 className="text-base font-medium text-gray-900">
                      {role.title}
                    </h4>
                  </div>
                  
                  <ul className="space-y-2 ml-8">
                    {role.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CommercialUserExperience;
