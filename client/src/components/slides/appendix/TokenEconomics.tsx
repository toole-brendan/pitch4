import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  ArrowUpDown,
  Server,
  Shield, 
  Users,
  Check,
  Network,
  Banknote,
  Building,
  Package,
  Store
} from 'lucide-react';

// Animation variants
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
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const TokenEconomics: React.FC = () => {
  return (
    <Slide 
      title="Shell Token (SHL) Economics"
      subtitle="Incentive structure and utility for supply chain participants"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Token Utility Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={cardVariants}
            className="col-span-1 md:col-span-2 bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                TOKEN UTILITY
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              <div className="flex items-start gap-3">
                <ArrowUpDown className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1 text-gray-900">Transaction Medium</p>
                  <p className="text-sm text-gray-600">Facilitates payments between retailers and suppliers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Server className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1 text-gray-900">Smart Contract Fuel</p>
                  <p className="text-sm text-gray-600">Powers conditional inventory-based payments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1 text-gray-900">Data Verification</p>
                  <p className="text-sm text-gray-600">Validates supply chain events and transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1 text-gray-900">Governance Rights</p>
                  <p className="text-sm text-gray-600">Token-weighted voting on protocol updates</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="col-span-1 bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                FEE DISTRIBUTION
              </span>
            </div>
            
            <div className="space-y-4 mt-6">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Burned</span>
                    <span className="font-medium text-gray-900">40%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '40%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-violet-600 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Validators</span>
                    <span className="font-medium text-gray-900">30%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '30%' }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-violet-600 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Development</span>
                    <span className="font-medium text-gray-900">30%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '30%' }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="h-full bg-violet-600 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Tiers */}
        <motion.div
          variants={cardVariants}
          className="bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              SERVICE TIERS
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-6">
            {[
              {
                name: "Basic Tier",
                tokens: "0-99K",
                icon: <Shield className="w-5 h-5 text-violet-600" />,
                features: [
                  "Real-time inventory tracking",
                  "Standard payment terms",
                  "Basic analytics"
                ]
              },
              {
                name: "Premium Tier",
                tokens: "100K+",
                icon: <Network className="w-5 h-5 text-violet-600" />,
                features: [
                  "15% faster payments",
                  "Advanced analytics",
                  "Priority support"
                ]
              },
              {
                name: "Enterprise Tier",
                tokens: "500K+",
                icon: <Building className="w-5 h-5 text-violet-600" />,
                features: [
                  "Custom smart contracts",
                  "Integration support",
                  "Dedicated account manager"
                ]
              },
              {
                name: "Institutional Tier",
                tokens: "1M+",
                icon: <Banknote className="w-5 h-5 text-violet-600" />,
                features: [
                  "Banking integration",
                  "Custom financing",
                  "White-glove service"
                ]
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 bg-gray-50 rounded-sm border-l-2 border-l-violet-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  {tier.icon}
                  <h4 className="font-medium text-gray-900">{tier.name}</h4>
                </div>
                <p className="text-sm text-violet-600 mb-3 font-medium">{tier.tokens} SHL</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Staking Requirements */}
        <motion.div
          variants={cardVariants}
          className="bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              STAKING REQUIREMENTS
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                role: "Suppliers",
                requirement: "10,000 tokens or 1% of monthly volume",
                icon: <Package className="w-5 h-5 text-violet-600" />
              },
              {
                role: "Retailers",
                requirement: "50,000 tokens or 2% of monthly volume",
                icon: <Building className="w-5 h-5 text-violet-600" />
              },
              {
                role: "Financial Institutions",
                requirement: "100,000 tokens or 3% of loan portfolio",
                icon: <Banknote className="w-5 h-5 text-violet-600" />
              }
            ].map((stake, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  {stake.icon}
                  <p className="font-medium text-gray-900">{stake.role}</p>
                </div>
                <p className="text-sm text-gray-700">{stake.requirement}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default TokenEconomics;