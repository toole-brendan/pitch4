import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { cn } from "@/lib/utils";
import { 
  CheckCircle, 
  Circle, 
  Calendar, 
  Code, 
  Server, 
  Database, 
  Shield, 
  CheckSquare 
} from "lucide-react";

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

const timelineMilestones = [
  { 
    date: 'Q3 2023', 
    title: 'Initial Concept Development',
    description: 'Core architecture design and feasibility study'
  },
  { 
    date: 'Q4 2023', 
    title: 'Frontend Architecture Complete',
    description: 'User interface components and workflow design'
  },
  { 
    date: 'Q1 2024', 
    title: 'Backend Systems Development',
    description: 'API integration and database structure implementation'
  },
  { 
    date: 'Present', 
    title: 'Blockchain Integration In Progress', 
    description: 'Smart contract development and token implementation',
    current: true 
  }
];

const developmentMetrics = [
  { name: 'Frontend Development', percent: 100, icon: <Code size={18} /> },
  { name: 'Backend Systems', percent: 85, icon: <Server size={18} /> },
  { name: 'Blockchain Integration', percent: 70, icon: <Database size={18} /> },
  { name: 'Security Implementation', percent: 90, icon: <Shield size={18} /> }
];

const DevelopmentProgress: React.FC = () => {
  return (
    <Slide 
      title="Development Progress" 
      subtitle="Current technical implementation status and roadmap"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Development Metrics */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              IMPLEMENTATION STATUS
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {developmentMetrics.map((metric, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-violet-600">{metric.icon}</div>
                  <h3 className="text-sm font-medium text-gray-700">{metric.name}</h3>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div 
                        className="h-full bg-violet-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.percent}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-violet-600">{metric.percent}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Technical Validation */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              TECHNICAL VALIDATION
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">Proof-of-Concept Completed</h4>
                  <p className="text-sm text-gray-600">
                    Successfully tested core blockchain tracking functionality with simulated supply chain data
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">Architecture Review</h4>
                  <p className="text-sm text-gray-600">
                    System design and security protocols validated by third-party security consultants
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">Smart Contract Audit</h4>
                  <p className="text-sm text-gray-600">
                    Token economics and smart contract logic reviewed by blockchain specialists
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">UI/UX Testing</h4>
                  <p className="text-sm text-gray-600">
                    Conducted user acceptance testing with supply chain professionals
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Development Timeline */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              DEVELOPMENT TIMELINE
            </span>
          </div>
          
          <div className="mt-6 relative">
            <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-0.5 bg-violet-100"></div>
            
            <div className="space-y-6">
              {timelineMilestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="relative md:pl-[140px]"
                >
                  {/* Date label for desktop */}
                  <div className="hidden md:block absolute left-0 top-0 w-[110px] text-right">
                    <span className={cn(
                      "text-sm font-medium",
                      milestone.current ? "text-violet-600" : "text-gray-500"
                    )}>
                      {milestone.date}
                    </span>
                  </div>
                  
                  {/* Timeline marker */}
                  <div className="hidden md:flex absolute left-[112px] top-0 w-8 h-8 rounded-full 
                      bg-white border-2 border-violet-300 items-center justify-center z-10">
                    {milestone.current ? (
                      <div className="w-3 h-3 bg-violet-600 rounded-full" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-violet-600" />
                    )}
                  </div>
                  
                  {/* Milestone card */}
                  <div className={cn(
                    "bg-gray-50 p-4 rounded-sm",
                    milestone.current && "border-l-2 border-l-violet-500"
                  )}>
                    {/* Date for mobile */}
                    <div className="md:hidden flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-violet-600" />
                      <span className={cn(
                        "text-sm font-medium",
                        milestone.current ? "text-violet-600" : "text-gray-500"
                      )}>
                        {milestone.date}
                      </span>
                    </div>
                    
                    <h4 className={cn(
                      "text-base font-medium",
                      milestone.current ? "text-violet-700" : "text-gray-900"
                    )}>
                      {milestone.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600 mt-1">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default DevelopmentProgress;
