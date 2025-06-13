import React from 'react';
import { Card } from '../ui/Card';
import { ArrowRightIcon } from 'lucide-react';
export const FeesSummary = () => {
  const totalFees = 12500;
  const paidFees = 9000;
  const pendingFees = totalFees - paidFees;
  const percentage = Math.round(paidFees / totalFees * 100);
  return <Card className="p-5 h-80">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Fees Summary</h2>
        <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1">
          Fall 2023
        </span>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Payment Progress</span>
          <span className="text-sm font-medium text-gray-800">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{
          width: `${percentage}%`
        }}></div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-600">Paid Amount</p>
          <p className="text-xl font-bold text-gray-800">
            ${paidFees.toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-600">Pending Amount</p>
          <p className="text-xl font-bold text-red-600">
            ${pendingFees.toLocaleString()}
          </p>
        </div>
      </div>
      <button className="mt-6 w-full py-2 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center transition-colors">
        <span className="mr-2">View Complete Details</span>
        <ArrowRightIcon size={16} />
      </button>
    </Card>;
};