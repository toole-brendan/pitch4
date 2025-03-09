import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  CheckCircle, 
  School, 
  Users, 
  TrendingUp, 
  Rocket, 
  Calendar, 
  DollarSign, 
  Clock, 
  Building,
  Target,
  BarChart,
  Briefcase,
  Globe,
  Settings
} from 'lucide-react';

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const milestones = [
  {
    title: "Seed Round & MVP Build",
    time: "Q2 2025",
    description: "Close $2.2M seed round and finalize core product MVP for initial deployments",
    icon: <CheckCircle size={18} />,
    objectives: [
      "Complete $2.2M seed funding with strategic investors",
      "Finalize core technology for pilot deployments",
      "Establish initial defense sector partnerships (2-3 pilots)",
      "Build core engineering team (7-9 engineers)"
    ],
    metrics: [
      { label: "Team Size", value: "10-12", icon: <Users size={14} /> },
      { label: "ARR", value: "$0", icon: <DollarSign size={14} /> },
      { label: "Monthly Burn", value: "$95-110K", icon: <BarChart size={14} /> },
      { label: "Runway", value: "24+ months", icon: <Clock size={14} /> }
    ]
  },
  {
    title: "Commercial Validation",
    time: "Q3-Q4 2025",
    description: "Launch pilot programs with defense and commercial customers to validate the technology",
    icon: <School size={18} />,
    objectives: [
      "Deploy to 2-3 defense sector customers",
      "Launch 2 commercial pilot programs",
      "Initial case studies and ROI documentation",
      "Complete security compliance and certification process"
    ],
    metrics: [
      { label: "Team Size", value: "14-16", icon: <Users size={14} /> },
      { label: "ARR", value: "$175K", icon: <DollarSign size={14} /> },
      { label: "Monthly Burn", value: "$110-130K", icon: <BarChart size={14} /> },
      { label: "Runway", value: "16-18 months", icon: <Clock size={14} /> }
    ]
  },
  {
    title: "Market Expansion",
    time: "Q1-Q2 2026",
    description: "Convert pilot customers to paying contracts and expand market presence",
    icon: <Rocket size={18} />,
    objectives: [
      "Establish sales team for both defense and commercial sectors",
      "Convert 75% of pilot customers to paying contracts",
      "Expand to 5-8 total customers",
      "Develop strategic partnerships for market expansion"
    ],
    metrics: [
      { label: "Team Size", value: "18-20", icon: <Users size={14} /> },
      { label: "ARR", value: "$1.2M", icon: <DollarSign size={14} /> },
      { label: "Monthly Burn", value: "$130-160K", icon: <BarChart size={14} /> },
      { label: "Runway", value: "10-12 months", icon: <Clock size={14} /> }
    ]
  }
];

const seriesAMetrics = [
  { label: "Annual Recurring Revenue", value: "$4M+", icon: <DollarSign size={24} /> },
  { label: "Enterprise Customers", value: "15-20", icon: <Building size={24} /> },
  { label: "Gross Margin", value: "80%+", icon: <Target size={24} /> },
  { label: "YoY Growth Rate", value: "125%+", icon: <TrendingUp size={24} /> }
];

const fundAllocation = [
  { name: "Engineering & Product", percentage: 45, icon: <Settings size={16} /> },
  { name: "Sales & Marketing", percentage: 35, icon: <Target size={16} /> },
  { name: "International Expansion", percentage: 15, icon: <Globe size={16} /> },
  { name: "Operations & G&A", percentage: 5, icon: <Briefcase size={16} /> }
];

const Roadmap: React.FC = () => {
  return (
    <Slide 
      title="Seed to Series A Roadmap" 
      subtitle="Execution plan, milestones, and success criteria"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Main Roadmap Timeline */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              EXECUTION PLAN
            </span>
          </div>
          
          <div className="mt-6 space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative flex flex-col md:flex-row gap-4"
              >
                <div className="md:w-[120px] flex md:flex-col md:items-end gap-3 flex-shrink-0">
                  <div className="hidden md:flex h-10 w-10 rounded-full bg-violet-100 items-center justify-center">
                    <div className="text-violet-600">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:flex-col md:items-end">
                    <Calendar className="w-4 h-4 text-violet-600 md:hidden" />
                    <span className="text-sm font-medium text-violet-600">{milestone.time}</span>
                  </div>
                </div>
                
                {/* Vertical timeline line */}
                <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-px bg-violet-100 z-0">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-12 bottom-0 w-full bg-violet-100"></div>
                  )}
                </div>
                
                <div className="flex-1 bg-gray-50 p-4 rounded-sm border-l-2 border-l-violet-400">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="md:hidden text-violet-600">
                      {milestone.icon}
                    </div>
                    <h4 className="text-base font-medium text-gray-900">{milestone.title}</h4>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{milestone.description}</p>
                  
                  {/* Objectives */}
                  <div className="bg-white p-4 rounded-sm border border-gray-100 mb-4">
                    <p className="text-xs font-medium text-gray-700 mb-3">Key Objectives</p>
                    <div className="space-y-2">
                      {milestone.objectives.map((objective, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-600">{objective}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {milestone.metrics.map((metric, i) => (
                      <div key={i} className="bg-white p-3 rounded-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-violet-600">{metric.icon}</div>
                          <p className="text-xs font-medium text-gray-500">{metric.label}</p>
                        </div>
                        <p className="text-base font-semibold text-violet-600">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Series A Success Criteria */}
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                SERIES A SUCCESS CRITERIA
              </span>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              {seriesAMetrics.map((metric, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-gray-50 p-4 rounded-sm border-l-2 border-l-violet-400"
                >
                  <div className="text-violet-600 mb-2">
                    {metric.icon}
                  </div>
                  <p className="text-2xl font-semibold text-violet-600">{metric.value}</p>
                  <p className="text-xs font-medium text-gray-500 mt-1">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Use of Funds */}
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                SERIES A USE OF FUNDS
              </span>
            </div>
            
            <div className="mt-6 space-y-4">
              {fundAllocation.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="text-violet-600">{item.icon}</div>
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-violet-600">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-violet-500 rounded-full"
                    />
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

export default Roadmap;
