import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { PieChart, TrendingUp, Users, Package, Calendar, Award, Building } from 'lucide-react';

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

const EarlyTraction: React.FC = () => {
  // Timeline milestones data
  const milestones = [
    {
      date: "Q3 2021",
      icon: <Users size={18} />,
      index: 1,
      title: "MILITARY PILOT PROJECT",
      description: "Initiated pilot with Fort Liberty logistics battalion. Deployed initial version for sensitive item tracking with blockchain verification.",
      metrics: [
        { label: "USERS", value: "350+", icon: <Users size={14} /> },
        { label: "ITEMS TRACKED", value: "15,000", icon: <Package size={14} /> }
      ]
    },
    {
      date: "Q1 2022",
      icon: <Building size={18} />,
      index: 2,
      title: "FIRST COMMERCIAL CLIENT",
      description: "Secured first enterprise customer - national retail chain with 3 distribution centers for high-value inventory tracking.",
      metrics: [
        { label: "LOCATIONS", value: "3", icon: <Building size={14} /> },
        { label: "INVENTORY VALUE", value: "$12M", icon: <PieChart size={14} /> }
      ]
    },
    {
      date: "Q4 2022",
      icon: <Award size={18} />,
      index: 3,
      title: "DOD CONTRACT AWARD",
      description: "Secured $1.8M contract to deploy HandReceipt across three Army brigades for weapons accountability and maintenance tracking.",
      metrics: [
        { label: "CONTRACT VALUE", value: "$1.8M", icon: <PieChart size={14} /> },
        { label: "PERSONNEL REACH", value: "8,500+", icon: <Users size={14} /> }
      ]
    },
    {
      date: "Q2 2023",
      icon: <TrendingUp size={18} />,
      index: 4,
      title: "COMMERCIAL EXPANSION",
      description: "Expanded to 7 commercial clients including Fortune 500 retailers. Launched Shell Token payment system for accelerated supplier payments.",
      metrics: [
        { label: "ACTIVE CLIENTS", value: "7", icon: <Building size={14} /> },
        { label: "ARR GROWTH", value: "+185%", icon: <TrendingUp size={14} /> }
      ]
    }
  ];

  return (
    <Slide 
      title="Early Traction" 
      subtitle="Growth metrics and key milestones since founding in 2021"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full space-y-6"
      >
        {/* Key Metrics Section */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              KEY METRICS
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-3">
                <Building className="w-4 h-4 text-violet-600" />
                <p className="text-sm font-medium text-gray-700">Enterprise Clients</p>
              </div>
              <p className="text-2xl font-bold text-violet-600">12</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-violet-600" />
                <p className="text-sm font-medium text-gray-700">Defense Contracts</p>
              </div>
              <p className="text-2xl font-bold text-violet-600">$3.2M</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-violet-600" />
                <p className="text-sm font-medium text-gray-700">YoY Revenue Growth</p>
              </div>
              <p className="text-2xl font-bold text-violet-600">185%</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-4 h-4 text-violet-600" />
                <p className="text-sm font-medium text-gray-700">Items Tracked Monthly</p>
              </div>
              <p className="text-2xl font-bold text-violet-600">10M+</p>
            </motion.div>
          </div>
        </div>
        
        {/* Timeline Section */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              GROWTH TIMELINE
            </span>
          </div>
          
          <div className="mt-6 relative">
            <div className="hidden md:block absolute top-0 left-[115px] bottom-0 w-0.5 bg-violet-100"></div>
            
            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="relative mb-5 last:mb-0 md:pl-[140px]"
              >
                {/* Date for desktop */}
                <div className="hidden md:block absolute left-0 top-0 w-[100px] text-right">
                  <div className="text-sm font-medium text-gray-700">{milestone.date}</div>
                </div>
                
                {/* Timeline marker for desktop */}
                <div className="hidden md:flex absolute left-[107px] top-0 w-8 h-8 rounded-full bg-white border-2 border-violet-300 items-center justify-center text-violet-600">
                  {milestone.icon}
                </div>
                
                {/* Milestone card */}
                <div className="bg-gray-50 p-4 md:p-5 rounded-sm shadow-sm">
                  {/* Date for mobile */}
                  <div className="md:hidden mb-3">
                    <div className="inline-flex items-center px-2 py-1 bg-violet-50 text-xs font-medium text-violet-700 rounded-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {milestone.date}
                    </div>
                  </div>
                  
                  <h4 className="text-base font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <span>{milestone.title}</span>
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {milestone.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {milestone.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-white p-3 rounded-sm border border-gray-100"
                      >
                        <div className="text-violet-600">
                          {metric.icon}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500">
                            {metric.label}
                          </p>
                          <p className="text-base font-semibold text-violet-700">
                            {metric.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Clients Section */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              SELECT CLIENTS
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "U.S. ARMY",
              "DEFENSE LOGISTICS AGENCY",
              "GLOBAL RETAIL CORP",
              "LUXURY BRANDS INC",
              "10TH MOUNTAIN DIV",
              "FORT LIBERTY",
              "AUTOPARTS DIRECT",
              "TECHSUPPLY CO"
            ].map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-16 flex items-center justify-center text-center bg-gray-50 p-3 rounded-sm border border-gray-100"
              >
                <p className="text-xs font-medium text-gray-700">
                  {client}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default EarlyTraction;
