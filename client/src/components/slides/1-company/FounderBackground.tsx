import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { User, Briefcase, GraduationCap, Award, Lightbulb, Target } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const FounderBackground = () => {
  return (
    <Slide 
      title="Founder Background"
      subtitle="Bridging military logistics and financial expertise"
    >      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Founder Profile */}
          <div className="md:col-span-4">
            <motion.div 
              className="bg-white shadow-sm rounded-sm p-6 relative"
              variants={cardVariants}
              custom={0}
            >
              <div className="vc-category mb-6">FOUNDER</div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 border border-violet-200 bg-violet-50 rounded-sm flex items-center justify-center">
                  <User className="w-8 h-8 text-violet-600" />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-gray-900">
                    Brendan T. Toole
                  </h2>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                    FOUNDER & CEO
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="badge badge-violet">
                  Finance Expert
                </span>
                <span className="badge badge-violet">
                  Military Leadership
                </span>
                <span className="badge badge-violet">
                  Princeton Economics
                </span>
              </div>

              <div className="vc-category mb-4 mt-6">CREDENTIALS</div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-violet-600" />
                  <p className="text-sm text-gray-700">
                    Research Analyst, Point72 Asset Management
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-violet-600" />
                  <p className="text-sm text-gray-700">
                    Platoon Leader, 101st Airborne Division
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-violet-600" />
                  <p className="text-sm text-gray-700">
                    Princeton University, Economics A.B.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision & Journey */}
          <div className="md:col-span-8 space-y-8">
            <motion.div 
              className="bg-white shadow-sm rounded-sm p-6 relative"
              variants={cardVariants}
              custom={1}
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  VISION
                </span>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Building a blockchain-powered inventory and supply chain management solution that streamlines property tracking and transfers, bridging military precision with commercial agility.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Target className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    HandReceipt represents the convergence of military-grade validation adapted for commercial markets, offering immediate payment settlement through Shell token integration.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white shadow-sm rounded-sm p-6 relative"
              variants={cardVariants}
              custom={2}
            >
              <div className="vc-category mb-4">ORIGIN STORY</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l-2 border-violet-400 pl-4">
                  <h4 className="text-gray-900 font-medium text-lg mb-2">
                    Military Experience
                  </h4>
                  <p className="text-sm text-gray-600">
                    As a Platoon Leader in the 101st Airborne Division, I witnessed the inefficiencies of paper-based supply tracking and the critical need for reliable, secure inventory management.
                  </p>
                </div>

                <div className="border-l-2 border-violet-400 pl-4">
                  <h4 className="text-gray-900 font-medium text-lg mb-2">
                    Financial Insight
                  </h4>
                  <p className="text-sm text-gray-600">
                    At Point72, I analyzed supply chain dynamics across multiple sectors, recognizing a market opportunity to solve these challenges with blockchain technology.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white shadow-sm rounded-sm p-6 relative"
              variants={cardVariants}
              custom={3}
            >
              <div className="vc-category mb-4">WHY I STARTED HANDRECEIPT</div>

              <p className="text-gray-700 mb-4">
                I've personally experienced the challenges of managing critical inventory with outdated systems. The military's paper-based "hand receipt" system represents a vulnerability in national security and an inefficiency that can be solved with modern technology. These same challenges exist in commercial supply chains, and I'm uniquely positioned to bridge both worlds.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default FounderBackground; 