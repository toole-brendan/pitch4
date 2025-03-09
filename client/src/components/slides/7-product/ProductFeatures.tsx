import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Shield, Database, Smartphone, Zap, Lock, BarChart3, ArrowRight, Check, FileText } from 'lucide-react';

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

const ProductFeatures: React.FC = () => {
  return (
    <Slide 
      title="Product Features" 
      subtitle="Core blockchain capabilities across defense and commercial applications"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Core Technology */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              CORE TECHNOLOGY
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Blockchain Verification",
                icon: <Database className="w-5 h-5 text-violet-600" />,
                description: "Cryptographic authentication for immutable records with multi-signature verification",
                features: [
                  "Tamper-proof history",
                  "Cryptographic signing",
                  "Distributed ledger"
                ]
              },
              {
                title: "Mobile-First Design",
                icon: <Smartphone className="w-5 h-5 text-violet-600" />,
                description: "Intuitive scanning interface for field operators with offline capability",
                features: [
                  "QR code scanning",
                  "Offline sync capability",
                  "Minimalist interface"
                ]
              },
              {
                title: "Smart Contracts",
                icon: <FileText className="w-5 h-5 text-violet-600" />,
                description: "Automated workflows triggered by supply chain events with conditional logic",
                features: [
                  "Automatic payments",
                  "Compliance verification",
                  "Event-driven triggers"
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="bg-gray-50 p-4 rounded-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-medium text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Defense and Commercial Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Defense Features */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                DEFENSE APPLICATION
              </span>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">Digital Hand Receipts</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Replacing paper-based property tracking with digital authentication, solving a critical military logistics challenge.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        CAC integration for secure military authentication
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Complete audit trail for sensitive equipment
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Field-ready with offline synchronization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">Military-Grade Security</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Built to defense standards with enhanced security protocols for sensitive operations.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        NIST 800-171 and CMMC compliant architecture
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Multi-factor authentication with biometrics
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        End-to-end encryption for all data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Commercial Features */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                COMMERCIAL APPLICATION
              </span>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">Accelerated Payments</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Smart contracts for automatic payment processing upon delivery confirmation, reducing traditional 60-90 day delays.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Instant payment settlement through Shell tokens
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Automated escrow and release on delivery
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Streamlined reconciliation and accounting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">Supply Chain Intelligence</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Real-time analytics and insights for inventory optimization and supply chain efficiency.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Predictive inventory management
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Supplier performance tracking
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Custom reporting and dashboards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Development Timeline */}
        <motion.div
          variants={itemVariants}
          className="bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              DEVELOPMENT ROADMAP
            </span>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-700 mb-5">
              Our development approach prioritizes a functioning core platform with blockchain verification first, followed by application-specific features.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full h-16 bg-violet-50 border border-violet-200 flex items-center justify-center mb-2 relative">
                  <span className="text-violet-700 font-medium">Phase 1</span>
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <ArrowRight className="text-violet-300 w-6 h-6" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">Core Blockchain Platform</p>
                <p className="text-xs text-gray-500 text-center">3-4 months</p>
              </div>
              
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full h-16 bg-violet-50 border border-violet-200 flex items-center justify-center mb-2 relative">
                  <span className="text-violet-700 font-medium">Phase 2</span>
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <ArrowRight className="text-violet-300 w-6 h-6" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">Defense Application</p>
                <p className="text-xs text-gray-500 text-center">3-4 months</p>
              </div>
              
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full h-16 bg-violet-50 border border-violet-200 flex items-center justify-center mb-2">
                  <span className="text-violet-700 font-medium">Phase 3</span>
                </div>
                <p className="text-sm text-gray-600 text-center">Commercial Expansion</p>
                <p className="text-xs text-gray-500 text-center">4-6 months</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default ProductFeatures; 