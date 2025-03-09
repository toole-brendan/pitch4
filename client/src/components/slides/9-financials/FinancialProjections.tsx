import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { cn } from "@/lib/utils";
import { 
  DollarSign, 
  Users, 
  Lock, 
  ArrowUp, 
  ArrowRightLeft,
  PieChart,
  BarChart,
  Percent,
  Flame,
  Shield,
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

const barVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const FinancialProjections: React.FC = () => {
  const financialData = [
    { 
      year: 'Year 1', 
      revenue: '175K', 
      customers: '2-3', 
      expenses: '1.2M', 
      cashflow: '-1.0M',
      tokenStaking: '10K'
    },
    { 
      year: 'Year 2', 
      revenue: '1.2M', 
      customers: '5-8', 
      expenses: '1.9M', 
      cashflow: '-700K',
      tokenStaking: '50K'
    },
    { 
      year: 'Year 3', 
      revenue: '4.2M', 
      customers: '15-20', 
      expenses: '3.2M', 
      cashflow: '1.0M',
      tokenStaking: '100K'
    },
    { 
      year: 'Year 4', 
      revenue: '9.6M', 
      customers: '28-35', 
      expenses: '6.5M', 
      cashflow: '3.1M',
      tokenStaking: '500K'
    },
    { 
      year: 'Year 5', 
      revenue: '18.5M', 
      customers: '45-55', 
      expenses: '12.0M', 
      cashflow: '6.5M',
      tokenStaking: '1M'
    }
  ];

  const fundAllocation = [
    { name: 'Engineering & Product', percent: 55, amount: '1.21M' },
    { name: 'Sales & Marketing', percent: 25, amount: '550K' },
    { name: 'Operations', percent: 15, amount: '330K' },
    { name: 'Legal & Compliance', percent: 5, amount: '110K' }
  ];

  return (
    <Slide 
      title="Financial Projections" 
      subtitle="Five-year forecast with token economy integration"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Financial Overview Section */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              FIVE-YEAR PROJECTIONS
            </span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-2 text-left text-xs font-medium text-gray-500 tracking-wider"></th>
                  {financialData.map((data, index) => (
                    <th key={index} className="p-2 text-center text-xs font-medium text-gray-500 tracking-wider">
                      {data.year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-2 text-xs font-medium text-gray-500 whitespace-nowrap">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-violet-600 mr-2" />
                      Revenue
                    </div>
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-2 text-center font-semibold text-violet-600">
                      ${data.revenue}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2 text-xs font-medium text-gray-500 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-violet-600 mr-2" />
                      Customers
                    </div>
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-2 text-center text-gray-800">
                      {data.customers}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2 text-xs font-medium text-gray-500 whitespace-nowrap">
                    <div className="flex items-center">
                      <Lock className="w-4 h-4 text-violet-600 mr-2" />
                      Token Staking
                    </div>
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-2 text-center text-violet-600 font-semibold">
                      {data.tokenStaking} SHL
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2 text-xs font-medium text-gray-500 whitespace-nowrap">
                    <div className="flex items-center">
                      <ArrowUp className="w-4 h-4 text-violet-600 mr-2" />
                      Expenses
                    </div>
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-2 text-center text-gray-800">
                      ${data.expenses}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2 text-xs font-medium text-gray-500 whitespace-nowrap">
                    <div className="flex items-center">
                      <ArrowRightLeft className="w-4 h-4 text-violet-600 mr-2" />
                      Net Cash Flow
                    </div>
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-2 text-center">
                      <span className={cn(
                        "font-semibold",
                        data.cashflow.includes('-') ? "text-red-600" : "text-green-600"
                      )}>
                        ${data.cashflow}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Metrics and Token Economics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Token Economics */}
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                TOKEN ECONOMICS
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="bg-gray-50 rounded-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="w-4 h-4 text-violet-600" />
                  <p className="text-xs font-medium text-gray-700">Transaction Fee</p>
                </div>
                <p className="text-xl font-semibold text-violet-600">0.1%</p>
                <p className="text-xs text-gray-600 mt-1">Per transaction value</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-50 rounded-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-4 h-4 text-violet-600" />
                  <p className="text-xs font-medium text-gray-700">Fee Burn Rate</p>
                </div>
                <p className="text-xl font-semibold text-violet-600">40%</p>
                <p className="text-xs text-gray-600 mt-1">Of transaction fees</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-50 rounded-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-violet-600" />
                  <p className="text-xs font-medium text-gray-700">Validator Share</p>
                </div>
                <p className="text-xl font-semibold text-violet-600">30%</p>
                <p className="text-xs text-gray-600 mt-1">Of transaction fees</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-50 rounded-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <PieChart className="w-4 h-4 text-violet-600" />
                  <p className="text-xs font-medium text-gray-700">Development Fund</p>
                </div>
                <p className="text-xl font-semibold text-violet-600">30%</p>
                <p className="text-xs text-gray-600 mt-1">Of transaction fees</p>
              </motion.div>
            </div>
          </div>

          {/* Staking Requirements */}
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                STAKING REQUIREMENTS
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { name: 'Suppliers', percent: 25, amount: '10,000 SHL', icon: <Briefcase size={16} /> },
                { name: 'Retailers', percent: 50, amount: '50,000 SHL', icon: <BarChart size={16} /> },
                { name: 'Financial Institutions', percent: 100, amount: '100,000 SHL', icon: <DollarSign size={16} /> }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="text-violet-600">{item.icon}</div>
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-violet-600">{item.amount}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      variants={barVariants}
                      className="h-full bg-violet-500 rounded-full"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fund Allocation */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              FUND ALLOCATION
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {fundAllocation.map((fund, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-sm text-center"
              >
                <p className="text-lg font-semibold text-violet-600">{fund.percent}%</p>
                <p className="text-xs font-medium text-gray-700 mb-1">{fund.name}</p>
                <p className="text-sm text-gray-600">${fund.amount}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default FinancialProjections;