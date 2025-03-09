import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, Shield, Zap, Award, Lock } from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { 
      delay: custom * 0.1,
      duration: 0.5 
    }
  })
};

const CompetitiveLandscape: React.FC = () => {
  const competitors = [
    { 
      id: "us", 
      name: "HandReceipt", 
      x: 0.85, 
      y: 0.85, 
      key_advantages: [
        "Dual market approach (defense & commercial)",
        "Blockchain verification for authenticity",
        "Mobile-first user experience",
        "Military-grade security & compliance"
      ],
      color: "bg-violet-600"
    },
    { 
      id: "comp1", 
      name: "Legacy ERP", 
      x: 0.2, 
      y: 0.3, 
      key_disadvantages: [
        "Expensive on-premise deployments",
        "Complex user interfaces",
        "Limited mobile capabilities",
        "High training requirements"
      ],
      color: "bg-gray-500"
    },
    { 
      id: "comp2", 
      name: "Blockchain Startups", 
      x: 0.7, 
      y: 0.4, 
      key_disadvantages: [
        "Lack of industry expertise",
        "Unproven in defense applications",
        "Limited integration capabilities",
        "High technical barriers to adoption"
      ],
      color: "bg-orange-500"
    },
    { 
      id: "comp3", 
      name: "Traditional SCM", 
      x: 0.4, 
      y: 0.6, 
      key_disadvantages: [
        "Limited traceability capabilities",
        "Weak authentication mechanisms",
        "Poor adaptability to new requirements",
        "Generic solutions not tailored to specific needs"
      ],
      color: "bg-emerald-500"
    }
  ];

  const differentiators = [
    {
      title: "Technical Superiority",
      description: "Patentable blockchain verification algorithms with 3x performance improvement",
      icon: <Lock className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Dual Market Strategy",
      description: "Unique positioning across defense and commercial markets with shared technology",
      icon: <Shield className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Domain Expertise",
      description: "Team with combined 35+ years of defense and supply chain experience",
      icon: <Award className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Compliance Excellence",
      description: "Built-in compliance with NIST, CMMC, and FDA regulatory requirements",
      icon: <Zap className="w-5 h-5 text-violet-600" />
    }
  ];

  return (
    <Slide 
      title="Competitive Landscape"
      subtitle="Market positioning and key differentiators"
    >
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full h-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Competition Matrix */}
          <div className="md:col-span-8">
            <motion.div 
              variants={slideUp}
              custom={1}
              className="bg-white shadow-sm rounded-sm relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  COMPETITIVE MATRIX
                </span>
              </div>
              
              <div className="p-6 pt-8 relative">
                <div className="relative w-full h-[350px] border-l-2 border-b-2 border-gray-300">
                  {/* Grid Lines */}
                  <div className="absolute inset-0">
                    {[25, 50, 75].map((pos) => (
                      <React.Fragment key={pos}>
                        <div className="absolute w-full h-px bg-gray-200" style={{ top: `${pos}%` }} />
                        <div className="absolute h-full w-px bg-gray-200" style={{ left: `${pos}%` }} />
                      </React.Fragment>
                    ))}
                  </div>
                  
                  {/* Axis Labels */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-600 font-medium">
                    TECHNICAL CAPABILITY →
                  </span>
                  <span className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-sm text-gray-600 font-medium">
                    MARKET FIT →
                  </span>
                  
                  {/* Quadrant Labels */}
                  <span className="absolute top-[15%] left-[15%] text-xs text-gray-400 opacity-70">
                    LOW CAPABILITY / LOW FIT
                  </span>
                  <span className="absolute top-[15%] right-[10%] text-xs text-gray-400 opacity-70 text-right">
                    HIGH CAPABILITY / LOW FIT
                  </span>
                  <span className="absolute bottom-[10%] left-[15%] text-xs text-gray-400 opacity-70">
                    LOW CAPABILITY / HIGH FIT
                  </span>
                  <span className="absolute bottom-[10%] right-[10%] text-xs text-gray-400 opacity-70 text-right">
                    HIGH CAPABILITY / HIGH FIT
                  </span>
                  
                  {/* Competitors */}
                  {competitors.map((competitor, index) => (
                    <motion.div
                      key={competitor.id}
                      variants={slideUp}
                      custom={index + 3}
                      whileHover={{ scale: 1.05 }}
                      className={`absolute ${competitor.color} ${competitor.id === 'us' ? 'w-[90px] h-[90px] border-4 border-white' : 'w-20 h-20'} rounded-full flex items-center justify-center text-center text-white font-medium text-sm shadow-sm p-2 leading-tight z-10`}
                      style={{
                        top: `${(1 - competitor.y) * 100}%`,
                        left: `${competitor.x * 100}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {competitor.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Our Advantages */}
          <div className="md:col-span-4 space-y-6">
            <motion.div
              variants={slideUp}
              custom={2}
              className="bg-white shadow-sm rounded-sm p-6 relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  OUR ADVANTAGES
                </span>
              </div>
              
              <div className="space-y-3 mt-6">
                {competitors.find(c => c.id === 'us')?.key_advantages?.map((advantage, index) => (
                  <motion.div
                    key={index}
                    variants={slideUp}
                    custom={index + 5}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-violet-600 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={slideUp}
              custom={9}
              className="bg-white shadow-sm rounded-sm p-6 relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  COMPETITOR WEAKNESSES
                </span>
              </div>
              
              <div className="space-y-4 mt-6">
                {competitors.filter(c => c.id !== 'us').map((competitor, index) => (
                  <div key={competitor.id}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-3 h-3 rounded-full ${competitor.color}`} />
                      <h4 className="font-medium text-sm">
                        {competitor.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-5">
                      {competitor.key_disadvantages?.[0]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Key Differentiators */}
          <div className="md:col-span-12">
            <motion.div
              variants={slideUp}
              custom={10}
              className="bg-white shadow-sm rounded-sm p-6 relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  KEY DIFFERENTIATORS
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {differentiators.map((diff, index) => (
                  <motion.div
                    key={index}
                    variants={slideUp}
                    custom={index + 12}
                    className="p-4 bg-gray-50 rounded-sm"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {diff.icon}
                      <h3 className="font-medium text-gray-900">
                        {diff.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {diff.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CompetitiveLandscape;
