import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { ShieldCheck, Layers, Code, Wallet, Settings, Network, Lock, Database, CircuitBoard, Cpu, Check } from 'lucide-react';

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const ShellTokenArchitecture: React.FC = () => {
  // Architecture components for the visualization
  const architectureComponents = [
    {
      title: "Core Blockchain",
      icon: <Layers className="h-5 w-5 text-violet-600" />,
      description: "DPoSC consensus with 21-30 validators and 3-5 second block times",
      details: [
        "PBFT-inspired finality mechanism",
        "Full, validator, and light nodes",
        "UTXO-based transaction model"
      ]
    },
    {
      title: "Token Economics",
      icon: <Wallet className="h-5 w-5 text-violet-600" />,
      description: "Fixed supply of 100M tokens with 8 decimal places",
      details: [
        "Minimal transaction fees",
        "Validator rewards from fees",
        "Supply chain incentives"
      ]
    },
    {
      title: "Smart Contracts",
      icon: <Code className="h-5 w-5 text-violet-600" />,
      description: "Custom VM optimized for supply chain operations",
      details: [
        "Payment and escrow contracts",
        "Service level agreements",
        "Multi-party trade contracts"
      ]
    },
    {
      title: "HandReceipt Integration",
      icon: <Database className="h-5 w-5 text-violet-600" />,
      description: "Cross-chain communication protocol",
      details: [
        "Event verification bridge",
        "State synchronization",
        "Standardized data exchange"
      ]
    },
    {
      title: "Wallet Infrastructure",
      icon: <ShieldCheck className="h-5 w-5 text-violet-600" />,
      description: "Multi-signature corporate wallets with role-based access",
      details: [
        "Batch operations",
        "Scheduled payments",
        "ERP system integration"
      ]
    },
    {
      title: "Governance System",
      icon: <Settings className="h-5 w-5 text-violet-600" />,
      description: "On-chain weighted voting system based on stake",
      details: [
        "Parameter governance",
        "Proposal mechanism",
        "Automated implementation"
      ]
    }
  ];
  
  // Innovations array
  const innovations = [
    {
      title: "Supply Chain Verification Proofs",
      icon: <Cpu className="h-5 w-5 text-violet-600" />
    },
    {
      title: "Delegated Proof of Supply Chain Consensus",
      icon: <Network className="h-5 w-5 text-violet-600" />
    },
    {
      title: "Conditional Payment Channels",
      icon: <CircuitBoard className="h-5 w-5 text-violet-600" />
    },
    {
      title: "Cross-Chain Verification Protocol",
      icon: <Lock className="h-5 w-5 text-violet-600" />
    }
  ];

  return (
    <Slide 
      title="Shell Token Architecture" 
      subtitle="Technical foundation for supply chain cryptocurrency"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Architecture Grid */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              BLOCKCHAIN COMPONENTS
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {architectureComponents.map((component, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                custom={index}
                className="p-4 bg-gray-50 rounded-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0">
                    {component.icon}
                  </div>
                  <h3 className="text-base font-medium text-gray-900">{component.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3 ml-8">{component.description}</p>
                <ul className="space-y-2 ml-8">
                  {component.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Innovations */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              TECHNICAL INNOVATIONS
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-sm"
              >
                <div className="flex-shrink-0 mt-0.5">
                  {innovation.icon}
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">{innovation.title}</h4>
                  <p className="text-sm text-gray-600">
                    {index === 0 ? "Cryptographic proof of physical goods handling in the supply chain" :
                     index === 1 ? "Modified consensus algorithm prioritizing supply chain validators" :
                     index === 2 ? "Payment channels triggered by validated supply chain events" :
                     "Secure mechanism for validating events across different blockchains"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default ShellTokenArchitecture;