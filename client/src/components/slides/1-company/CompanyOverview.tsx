'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const underlineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const valueVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.8
    }
  }
};

const CompanyOverview: React.FC = () => {
  return (
    <Slide withGridBackground={true}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center h-full w-full"
      >
        <div className="absolute top-10 left-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs text-gray-500 uppercase tracking-[0.2em]"
          >
            PRESENTATION
          </motion.div>
        </div>
      
        <motion.div className="z-10 flex flex-col items-center text-center mt-24 mb-12">
          <motion.div 
            className="section-header mb-4"
            variants={itemVariants}
          >
            BLOCKCHAIN-POWERED SUPPLY CHAIN
          </motion.div>
          
          <motion.div
            variants={logoVariants}
            className="w-[220px] h-[70px] bg-[#121212] border border-purple-800 mb-6 flex items-center justify-center text-white font-bold tracking-wider relative"
          >
            <span className="absolute left-3 text-purple-400 opacity-70 font-mono">&gt;</span>
            <span className="font-serif tracking-widest">HANDRECEIPT</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.5rem,6vw,3.5rem)] font-light text-gray-900 mb-2 leading-tight uppercase tracking-wider"
          >
            SECURE SUPPLY VERIFICATION
          </motion.h1>
          
          <motion.div
            variants={underlineVariants}
            className="w-30 h-[1px] bg-purple-600 my-8 mx-auto"
          />
          
          <motion.h2
            variants={itemVariants}
            className="text-xl font-light text-gray-600 max-w-[70%] mx-auto"
          >
            Military-grade validation adapted for commercial markets
          </motion.h2>
        </motion.div>
        
        <div className="flex-grow z-10 flex flex-col justify-center items-center w-full max-w-4xl mx-auto">
          <motion.div
            variants={valueVariants}
            className="enterprise-card relative w-full"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                CORE PROPOSITION
              </span>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              HandReceipt delivers dual-market supply chain verification for{' '}
              <span className="text-violet-600 font-medium">MILITARY</span> and{' '}
              <span className="text-violet-600 font-medium">COMMERCIAL</span> applications, providing tamper-proof inventory management with cryptographic authentication.
            </p>
            
            <div className="divider"></div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="data-value">60-90</p>
                <p className="text-sm text-gray-600">
                  Days payment delay in current supply chains
                </p>
              </div>
              
              <div className="text-center">
                <p className="data-value">$950B</p>
                <p className="text-sm text-gray-600">
                  Annual cost of inventory inaccuracies
                </p>
              </div>
              
              <div className="text-center">
                <p className="data-value">85%</p>
                <p className="text-sm text-gray-600">
                  Still use manual inventory processes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CompanyOverview;
