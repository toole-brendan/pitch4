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
  ArrowRight,
  Mail
} from 'lucide-react';

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.6, ease: "easeOut" }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

const FundingRequest: React.FC = () => {
  return (
    <Slide 
      title="Funding Request" 
      subtitle="Seed investment opportunity and next steps"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Investment Opportunity */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div
            variants={itemVariants}
            className="md:col-span-7 bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                INVESTMENT OPPORTUNITY
              </span>
            </div>

            <div className="mt-6">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-semibold mb-4"
              >
                $750K Seed Round
                <span className="block text-violet-600">Now Open</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 mb-5 text-sm"
              >
                HandReceipt is developing a blockchain-powered supply chain verification solution with military-grade security adapted for both defense and commercial markets. Your investment will help us build our MVP, conduct initial customer interviews, and develop our first pilot implementation.
              </motion.p>

              <motion.div variants={itemVariants}>
                <h3 className="font-medium text-gray-900 mb-3">Key Investment Highlights</h3>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  {[
                    "Founder-led development (efficient capital use)",
                    "Military expertise creates competitive moat",
                    "Lean startup approach with quick iterations",
                    "12-18 month runway to demonstrate product-market fit"
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>

                <motion.button 
                  variants={buttonVariants}
                  className="px-6 py-2 bg-violet-600 text-white text-sm font-medium rounded-sm flex items-center hover:bg-violet-700 transition-colors"
                >
                  Request Detailed Financials
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-5 bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                SEED ROUND DETAILS
              </span>
            </div>

            <div className="mt-6">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "Target Raise", value: "$750K" },
                  { label: "Instrument", value: "SAFE" },
                  { label: "Valuation Cap", value: "$5 Million" },
                  { label: "Min Investment", value: "$25,000" }
                ].map((detail, index) => (
                  <div key={index} className={index < 2 ? "border-b border-gray-100 pb-3" : ""}>
                    <p className="text-sm text-gray-600 mb-1">{detail.label}</p>
                    <p className="text-base font-medium text-gray-900">{detail.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Seed Funding Milestones</h3>

                <div className="space-y-2">
                  {[
                    "Working prototype (3-4 months)",
                    "Alpha version with core features (6-8 months)",
                    "User testing with potential defense clients (9-10 months)",
                    "Production-ready MVP (12 months)"
                  ].map((milestone, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{milestone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div
            variants={itemVariants}
            className="md:col-span-6 bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                NEXT STEPS
              </span>
            </div>

            <div className="mt-6">
              <p className="text-gray-600 mb-4 text-sm">
                Join us in revolutionizing supply chain management with blockchain technology.
              </p>

              <div className="mb-5">
                <p className="font-medium text-gray-900 mb-3">Available Information:</p>

                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Detailed financial model and projections",
                    "Technical architecture overview",
                    "Military-commercial market strategy",
                    "Potential investor term sheet"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button 
                variants={buttonVariants}
                className="px-6 py-2 border border-violet-600 text-violet-600 text-sm font-medium rounded-sm flex items-center justify-center hover:bg-violet-50 transition-colors"
              >
                Schedule Technical Review
                <Calendar className="ml-2 w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-6 bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                CONTACT US
              </span>
            </div>

            <div className="mt-6">
              <p className="text-gray-600 mb-5 text-sm">
                Ready to discuss how HandReceipt can transform supply chain management in both defense and commercial sectors?
              </p>

              <div className="space-y-3 mb-5">
                <div className="p-3 bg-gray-50 rounded-sm">
                  <p className="text-sm text-gray-600 mb-1">Brendan Toole, Founder & CEO</p>
                  <p className="font-medium text-gray-900">brendan@handreceipt.com</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-sm">
                  <p className="text-sm text-gray-600 mb-1">Investor Relations</p>
                  <p className="font-medium text-gray-900">investors@handreceipt.com</p>
                </div>
              </div>

              <motion.button 
                variants={buttonVariants}
                className="px-6 py-2 bg-violet-600 text-white text-sm font-medium rounded-sm flex items-center justify-center hover:bg-violet-700 transition-colors"
              >
                Contact Team
                <Mail className="ml-2 w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default FundingRequest; 