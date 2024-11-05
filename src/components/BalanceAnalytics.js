import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';

const data = [
  { month: 'Jan', income: 0, expense: 50 },
  { month: 'Feb', income: 43, expense: 70 },
  { month: 'Mar', income: 76, expense: 60 },
  { month: 'Apr', income: 43, expense: 30 },
  { month: 'May', income: 0, expense: 40 },
  { month: 'Jun', income: 25, expense: 60 },
  { month: 'Jul', income: 50, expense: 45 },
  { month: 'Aug', income: 40, expense: 30 },
  { month: 'Sep', income: 25, expense: 35 },
  { month: 'Oct', income: 60, expense: 50 },
  { month: 'Nov', income: 75, expense: 55 },
  { month: 'Dec', income: 30, expense: 40 },
];

const BalanceAnalytics = () => {
  return (
    <div className="bg-white rounded-2xl p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Balance Analytics</h3>
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 cursor-pointer">
          <span className="text-gray-700 text-sm">Month</span>
          <span className="ml-2 text-gray-700">▾</span>
        </div>
      </div>
      
      <div className="flex space-x-4 mb-6">
        <div className="flex items-center text-sm text-gray-700">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>
          Expense <span className="font-bold ml-1">1.245</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>
          Income <span className="font-bold ml-1">1.356</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" tick={{ fill: '#B6B6C0' }} />
          <YAxis domain={[0, 100]} tick={{ fill: '#B6B6C0' }} />
          <Tooltip
            formatter={(value) => [`$${value}`, '']}
            contentStyle={{ backgroundColor: '#534ED3', color: '#FFFFFF' }}
            labelStyle={{ color: '#FFFFFF' }}
            itemStyle={{ color: '#FFFFFF' }}
          />
          <Line type="monotone" dataKey="expense" stroke="#F2A43A" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="income" stroke="#F96C6C" strokeWidth={3} dot={false} />
          <ReferenceDot x="Jul" y={45} r={5} fill="#F96C6C" stroke="none" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceAnalytics;
