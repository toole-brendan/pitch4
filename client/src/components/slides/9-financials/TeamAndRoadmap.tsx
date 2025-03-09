import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  User, 
  Users, 
  Calendar, 
  Code, 
  Shield, 
  Globe, 
  Server,
  HeartHandshake,
  LineChart,
  Clock,
  CheckCircle2,
  Target,
  GraduationCap,
  Briefcase
} from 'lucide-react';

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

const TeamAndRoadmap: React.FC = () => {
  return (
    <Slide 
      title="Team & Roadmap" 
      subtitle="Leadership, development timeline, and growth strategy"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Core Team */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              FOUNDING TEAM
            </span>
          </div>
          
          <div className="mt-6">
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-6"
            >
              {/* Founder Profile */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 border border-violet-200 bg-violet-50 rounded-sm flex items-center justify-center">
                    <User className="w-8 h-8 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">
                      Brendan T. Toole
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                      FOUNDER & CEO
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    Technical founder with unique dual expertise in military logistics and financial markets. Leading product development and strategic vision.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-violet-600" />
                    <p className="text-sm text-gray-700">Princeton Economics</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-violet-600" />
                    <p className="text-sm text-gray-700">Point72 Alumni</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-violet-600" />
                    <p className="text-sm text-gray-700">Military Officer</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-violet-600" />
                    <p className="text-sm text-gray-700">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Hiring Plan */}
              <div className="flex-1 bg-gray-50 rounded-sm p-4">
                <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-violet-600" />
                  Post-Seed Hiring Plan
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-violet-100 text-violet-600 text-xs font-medium h-5 w-5 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Senior Blockchain Developer</p>
                      <p className="text-xs text-gray-600">Smart contract development & infrastructure</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-violet-100 text-violet-600 text-xs font-medium h-5 w-5 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">UX/UI Designer</p>
                      <p className="text-xs text-gray-600">Mobile & web interface optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-violet-100 text-violet-600 text-xs font-medium h-5 w-5 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Defense Industry Advisor</p>
                      <p className="text-xs text-gray-600">Military procurement & relationship management</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    Initial team will remain lean to extend runway, with strategic advisors and contractors supplementing core capabilities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Development Roadmap */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              DEVELOPMENT ROADMAP
            </span>
          </div>
          
          <div className="mt-6">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[113px] top-8 bottom-8 w-[2px] bg-gray-200 hidden md:block"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                {[
                  {
                    quarter: 'Q2 2024',
                    title: 'Core Platform Development',
                    description: 'Develop foundational blockchain verification architecture with smart contracts and database structure.',
                    icon: <Server className="w-5 h-5 text-violet-600" />,
                    milestones: [
                      'Blockchain node infrastructure setup',
                      'Smart contract architecture',
                      'API foundation'
                    ],
                    status: 'Upcoming'
                  },
                  {
                    quarter: 'Q3 2024',
                    title: 'Mobile Interface & Defense MVP',
                    description: 'Build military-focused user interface with CAC integration and QR scanning capability.',
                    icon: <Shield className="w-5 h-5 text-violet-600" />,
                    milestones: [
                      'Mobile scanning application',
                      'Property transfer workflow',
                      'Defense authentication integration'
                    ],
                    status: 'Planned'
                  },
                  {
                    quarter: 'Q1 2025',
                    title: 'Commercial Beta Launch',
                    description: 'Adapt platform for commercial supply chain use cases with payment settlement features.',
                    icon: <HeartHandshake className="w-5 h-5 text-violet-600" />,
                    milestones: [
                      'Commercial authentication model',
                      'Inventory dashboard',
                      'Shell token integration'
                    ],
                    status: 'Planned'
                  },
                  {
                    quarter: 'Q2 2025',
                    title: 'Series A Preparation',
                    description: 'Scale initial customers and prepare for growth financing to accelerate adoption.',
                    icon: <LineChart className="w-5 h-5 text-violet-600" />,
                    milestones: [
                      'Onboard 3-5 early adopters',
                      'Platform performance optimization',
                      'Series A fundraising'
                    ],
                    status: 'Planned'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    custom={index}
                    className="relative md:pl-[140px] flex flex-col md:flex-row md:items-center gap-4"
                  >
                    {/* Quarter and status indicators - desktop */}
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[110px] text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-medium text-violet-600">{item.quarter}</span>
                        <span className="text-xs text-gray-500 mt-1">{item.status}</span>
                      </div>
                    </div>
                    
                    {/* Timeline marker */}
                    <div className="hidden md:flex absolute left-[112px] top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-white border-2 border-violet-300 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                      </div>
                    </div>
                    
                    {/* Quarter - mobile */}
                    <div className="flex items-center gap-2 md:hidden">
                      <Calendar className="w-4 h-4 text-violet-600" />
                      <span className="text-sm font-medium text-violet-600">{item.quarter}</span>
                      <span className="text-xs text-gray-500">({item.status})</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-gray-50 p-4 rounded-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 mt-1">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="pl-8 space-y-2">
                        {item.milestones.map((milestone, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Success Metrics */}
        <motion.div
          variants={itemVariants}
          className="bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              SUCCESS METRICS
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-violet-600" />
                <h3 className="text-base font-medium text-gray-900">Development Milestones</h3>
              </div>
              <ul className="space-y-2 pl-7 text-sm text-gray-700">
                <li>• Complete MVP within 6 months</li>
                <li>• First pilot implementation by month 9</li>
                <li>• Production-ready platform by month 12</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-violet-600" />
                <h3 className="text-base font-medium text-gray-900">Customer Acquisition</h3>
              </div>
              <ul className="space-y-2 pl-7 text-sm text-gray-700">
                <li>• 1-2 defense pilot customers</li>
                <li>• 2-3 commercial pilots</li>
                <li>• First recurring revenue by Q1 2025</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-violet-600" />
                <h3 className="text-base font-medium text-gray-900">Product Expansion</h3>
              </div>
              <ul className="space-y-2 pl-7 text-sm text-gray-700">
                <li>• Defense core features (Q3 2024)</li>
                <li>• Commercial adaptation (Q4 2024)</li>
                <li>• API integration suite (Q1 2025)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default TeamAndRoadmap; 