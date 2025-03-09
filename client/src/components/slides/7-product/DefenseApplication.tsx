import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Shield, FileText, Lock, Check } from 'lucide-react';

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

const MotionDiv = motion.div;

const DefenseApplication: React.FC = () => {
  return (
    <Slide 
      title="Defense Application" 
      subtitle="Military-grade supply chain management solutions"
    >
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full"
      >        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Key Features */}
          <div className="md:col-span-5">
            <div className="bg-white shadow-sm rounded-sm p-6 relative mb-6">
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  KEY CAPABILITIES
                </span>
              </div>
              
              <div className="grid gap-6 mt-6">
                {[
                  { 
                    num: 1, 
                    title: "Digital Hand Receipts", 
                    description: "Replace paper forms with blockchain-backed digital records",
                    icon: <FileText className="w-5 h-5 text-violet-600" />,
                    points: [
                      "Eliminate lost paperwork, reducing property loss by 80%",
                      "Tamper-proof signatures authenticated through DoD credentials"
                    ]
                  },
                  { 
                    num: 2, 
                    title: "Inventory Accountability", 
                    description: "Complete audit trail with immutable record-keeping",
                    icon: <Shield className="w-5 h-5 text-violet-600" />,
                    points: [
                      "Real-time property status visibility across command levels",
                      "Reduce inventory time by 75% with QR code scanning"
                    ]
                  },
                  { 
                    num: 3, 
                    title: "Security & Compliance", 
                    description: "Military-grade security standards with full compliance",
                    icon: <Lock className="w-5 h-5 text-violet-600" />,
                    points: [
                      "FedRAMP, IL4 & IL5 compliant platform",
                      "End-to-end encryption with zero-knowledge proofs"
                    ]
                  }
                ].map((item, index) => (
                  <MotionDiv
                    key={item.num}
                    variants={cardVariants}
                    custom={index + 1}
                  >
                    <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-violet-600 flex-shrink-0">
                          {item.icon}
                        </div>
                        <h3 className="text-base font-medium text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 ml-8">
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
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column: Field Applications */}
          <div className="md:col-span-7">
            <div className="bg-white shadow-sm rounded-sm p-6 relative">
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  FIELD APPLICATIONS
                </span>
              </div>
              
              <div className="mt-6">
                {[
                  {
                    title: 'Forward Deployment Inventory',
                    description: 'Streamlines equipment tracking for units in combat zones with limited connectivity',
                    points: [
                      'Offline-capable mobile app with sync mechanism',
                      'Secure transfer of responsibility during relief-in-place',
                      'Reduced equipment loss rate by 87% in field tests'
                    ]
                  },
                  {
                    title: 'Readiness Reporting',
                    description: 'Enhances unit readiness with automated status reporting',
                    points: [
                      'Real-time equipment status tracking across all echelons',
                      'Automated GCSS-Army integration for maintenance data',
                      '92% reduction in administrative overhead for reporting'
                    ]
                  },
                  {
                    title: 'Supply Chain Security',
                    description: 'Ensures equipment authenticity and origin verification',
                    points: [
                      'Cryptographic verification of equipment provenance',
                      'Counterfeit detection for critical parts and components',
                      'Tamper-evident supply chain with audit capabilities'
                    ]
                  }
                ].map((section, index) => (
                  <MotionDiv
                    key={section.title}
                    variants={cardVariants}
                    custom={index + 4}
                    className="mb-6 last:mb-0"
                  >
                    <div className="p-4 bg-gray-50 rounded-sm mb-4">
                      <h3 className="font-medium text-gray-900 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {section.description}
                      </p>
                      <ul className="space-y-2">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </Slide>
  );
};

export default DefenseApplication;
