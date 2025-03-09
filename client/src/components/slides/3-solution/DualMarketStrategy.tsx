import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, DollarSign, TrendingUp, Shield, Laptop, Database } from 'lucide-react';

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
      ease: 'easeOut'
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.15 + 0.4,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const DualMarketStrategy = () => {
  return (
    <Slide 
      title="Dual Market Strategy" 
      subtitle="Leveraging shared infrastructure across defense and commercial sectors"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Technical Diagram Section */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              MARKET PLATFORM ARCHITECTURE
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Defense Platform */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-4"
            >
              <div className="bg-gray-50 p-4 rounded-sm h-full">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Defense Platform</h3>
                </div>
                <div className="space-y-2 ml-8">
                  {["Military-grade encryption", "Secure authentication", "Robust chain of custody"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Shared Core */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-4"
            >
              <div className="bg-violet-50 p-4 rounded-sm h-full border-l-2 border-l-violet-300">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Shared Infrastructure</h3>
                </div>
                <div className="space-y-2 ml-8">
                  {["Smart contracts", "Distributed ledger", "Immutable records", "Asset tracking"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Commercial Platform */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-4"
            >
              <div className="bg-gray-50 p-4 rounded-sm h-full">
                <div className="flex items-center gap-3 mb-3">
                  <Laptop className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Commercial Platform</h3>
                </div>
                <div className="space-y-2 ml-8">
                  {["Payment processing", "Supply chain tracking", "Vendor management"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Defense Market Card */}
          <motion.div variants={cardVariants} custom={0} className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                DEFENSE MARKET
              </span>
            </div>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Shield className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">
                    Lower Implementation Risk
                  </h4>
                  <p className="text-sm text-gray-600">
                    Stable, long-term contracts with predictable revenue
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <TrendingUp className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">
                    High Barriers to Entry
                  </h4>
                  <p className="text-sm text-gray-600">
                    Military expertise creates strong competitive moat
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Commercial Market Card */}
          <motion.div variants={cardVariants} custom={1} className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                COMMERCIAL MARKET
              </span>
            </div>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <TrendingUp className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">
                    Higher Growth Potential
                  </h4>
                  <p className="text-sm text-gray-600">
                    Larger addressable market with recurring revenue
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <DollarSign className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">
                    Transaction Fee Upside
                  </h4>
                  <p className="text-sm text-gray-600">
                    Exponential revenue growth through Shell token payments
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategic Advantages */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              STRATEGIC ADVANTAGES
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Shared infrastructure reduces development and maintenance costs",
              "Military-grade security enhances commercial offering credibility",
              "Dual revenue streams provide stability through market cycles",
              "Network effects amplify value across both platforms"
            ].map((advantage, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  {advantage}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default DualMarketStrategy;