import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { DollarSign, TrendingUp, Users, Target, BarChart, PieChart } from 'lucide-react';

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
  // Financial projections data - realistic seed stage projections
  const financialData = [
    { 
      year: 'Year 1', 
      revenue: '0', 
      customers: '0', 
      expenses: '1.2M', 
      cashflow: '-1.2M'
    },
    { 
      year: 'Year 2', 
      revenue: '500K', 
      customers: '3-5', 
      expenses: '1.8M', 
      cashflow: '-1.3M'
    },
    { 
      year: 'Year 3', 
      revenue: '2.5M', 
      customers: '8-12', 
      expenses: '3.0M', 
      cashflow: '-500K'
    },
    { 
      year: 'Year 4', 
      revenue: '7.5M', 
      customers: '15-20', 
      expenses: '5.0M', 
      cashflow: '2.5M'
    },
    { 
      year: 'Year 5', 
      revenue: '18M', 
      customers: '30-40', 
      expenses: '10M', 
      cashflow: '8M'
    }
  ];

  // Fund allocation data - how seed money will be used
  const fundAllocation = [
    { name: 'Product Development', percent: 55, amount: '412.5K' },
    { name: 'Sales & Marketing', percent: 15, amount: '112.5K' },
    { name: 'Operations', percent: 20, amount: '150K' },
    { name: 'Legal & Compliance', percent: 10, amount: '75K' }
  ];

  return (
    <Slide 
      title="Financial Projections" 
      subtitle="5-year forecast and seed funding allocation"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Financial Projections Table */}
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
                      <TrendingUp className="w-4 h-4 text-violet-600 mr-2" />
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
                      <BarChart className="w-4 h-4 text-violet-600 mr-2" />
                      Net Cash Flow
                    </div>
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-2 text-center">
                      <span className={data.cashflow.includes('-') ? "font-semibold text-red-600" : "font-semibold text-green-600"}>
                        ${data.cashflow}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Metrics and Fund Allocation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Business Metrics */}
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                KEY BUSINESS METRICS
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="bg-gray-50 rounded-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-violet-600" />
                  <p className="text-xs font-medium text-gray-700">Customer Acquisition Cost</p>
                </div>
                <p className="text-xl font-semibold text-violet-600">$30-65K</p>
                <p className="text-xs text-gray-600 mt-1">Per enterprise client</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-50 rounded-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <PieChart className="w-4 h-4 text-violet-600" />
                  <p className="text-xs font-medium text-gray-700">Gross Margin</p>
                </div>
                <p className="text-xl font-semibold text-violet-600">80-85%</p>
                <p className="text-xs text-gray-600 mt-1">Software revenue</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-50 rounded-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-violet-600" />
                  <p className="text-xs font-medium text-gray-700">Customer LTV</p>
                </div>
                <p className="text-xl font-semibold text-violet-600">$400K+</p>
                <p className="text-xs text-gray-600 mt-1">5-year value</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-50 rounded-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-violet-600" />
                  <p className="text-xs font-medium text-gray-700">Breakeven Point</p>
                </div>
                <p className="text-xl font-semibold text-violet-600">Year 4</p>
                <p className="text-xs text-gray-600 mt-1">Cash flow positive</p>
              </motion.div>
            </div>
          </div>

          {/* Fund Allocation */}
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                SEED FUNDING ALLOCATION
              </span>
            </div>

            <div className="mt-6 space-y-5">
              <p className="text-sm text-gray-600 mb-4">
                How we'll use the $750K seed investment:
              </p>
            
              {fundAllocation.map((fund, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="space-y-1"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{fund.name}</span>
                    <span className="text-sm font-medium text-violet-600">{fund.percent}% (${fund.amount})</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      variants={barVariants}
                      className="h-full bg-violet-500 rounded-full"
                      style={{ width: `${fund.percent}%` }}
                    />
                  </div>
                </motion.div>
              ))}
              
              <div className="bg-gray-50 p-4 rounded-sm mt-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Expected Runway</p>
                <p className="text-lg font-medium text-violet-600">12-18 months</p>
                <p className="text-xs text-gray-600 mt-1">
                  Sufficient time to develop MVP, demonstrate core technology, and validate with potential customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default FinancialProjections;