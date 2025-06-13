import React from 'react';
import { Card } from '../../components/ui/Card';
import { DownloadIcon, SearchIcon, FilterIcon, ArrowDownIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
export const Fees = () => {
  const fees = [{
    id: 1,
    type: 'Tuition Fee',
    amount: 8500,
    dueDate: 'Sep 15, 2023',
    status: 'paid',
    paidDate: 'Sep 10, 2023'
  }, {
    id: 2,
    type: 'Hostel Fee',
    amount: 2500,
    dueDate: 'Sep 15, 2023',
    status: 'paid',
    paidDate: 'Sep 10, 2023'
  }, {
    id: 3,
    type: 'Library Fee',
    amount: 500,
    dueDate: 'Sep 15, 2023',
    status: 'paid',
    paidDate: 'Sep 10, 2023'
  }, {
    id: 4,
    type: 'Examination Fee',
    amount: 750,
    dueDate: 'Nov 10, 2023',
    status: 'unpaid'
  }, {
    id: 5,
    type: 'Lab Fee',
    amount: 1200,
    dueDate: 'Nov 10, 2023',
    status: 'unpaid'
  }];
  const fines = [{
    id: 1,
    reason: 'Late Library Book Return',
    amount: 15,
    dueDate: 'Oct 5, 2023',
    status: 'unpaid'
  }, {
    id: 2,
    reason: 'Lab Equipment Damage',
    amount: 50,
    dueDate: 'Sep 30, 2023',
    status: 'paid',
    paidDate: 'Sep 28, 2023'
  }];
  const paymentHistory = [{
    id: 1,
    date: 'Sep 10, 2023',
    amount: 11500,
    method: 'Credit Card',
    items: 'Tuition, Hostel, Library fees',
    receipt: 'REC-2023-001'
  }, {
    id: 2,
    date: 'May 12, 2023',
    amount: 10800,
    method: 'Bank Transfer',
    items: 'Previous semester fees',
    receipt: 'REC-2023-002'
  }, {
    id: 3,
    date: 'Sep 28, 2023',
    amount: 50,
    method: 'Credit Card',
    items: 'Lab Equipment Fine',
    receipt: 'REC-2023-003'
  }];
  const totalFees = fees.reduce((sum, fee) => sum + fee.amount, 0);
  const paidFees = fees.filter(fee => fee.status === 'paid').reduce((sum, fee) => sum + fee.amount, 0);
  const pendingFees = totalFees - paidFees;
  const totalFines = fines.reduce((sum, fine) => sum + fine.amount, 0);
  const paidFines = fines.filter(fine => fine.status === 'paid').reduce((sum, fine) => sum + fine.amount, 0);
  const pendingFines = totalFines - paidFines;
  return <div className="space-y-6 pb-16">
      <h1 className="text-2xl font-bold text-gray-900">Fees & Fines</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-600">Total Fees</p>
          <p className="text-2xl font-bold text-gray-800">
            ${totalFees.toLocaleString()}
          </p>
          <div className="mt-1 flex items-center text-xs text-gray-500">
            <span>Fall Semester 2023</span>
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600">Paid Fees</p>
          <p className="text-2xl font-bold text-green-600">
            ${paidFees.toLocaleString()}
          </p>
          <div className="mt-1 flex items-center text-xs text-gray-500">
            <span>{Math.round(paidFees / totalFees * 100)}% of total</span>
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600">Pending Fees</p>
          <p className="text-2xl font-bold text-amber-600">
            ${pendingFees.toLocaleString()}
          </p>
          <div className="mt-1 flex items-center text-xs text-gray-500">
            <span>Due by Nov 10, 2023</span>
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600">Pending Fines</p>
          <p className="text-2xl font-bold text-red-600">
            ${pendingFines.toLocaleString()}
          </p>
          <div className="mt-1 flex items-center text-xs text-gray-500">
            <span>Due by Oct 5, 2023</span>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Fee Details
              </h2>
              <div className="flex items-center">
                <div className="relative mr-2">
                  <input type="text" placeholder="Search fees..." className="pl-8 pr-4 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                  <SearchIcon size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button className="p-1 text-gray-500 hover:text-gray-700">
                  <FilterIcon size={18} />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        Fee Type
                        <ArrowDownIcon size={14} className="ml-1" />
                      </div>
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Due Date
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {fees.map(fee => <tr key={fee.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-800">
                          {fee.type}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-800">
                          ${fee.amount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {fee.dueDate}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {fee.status === 'paid' ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Paid
                          </span> : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                            Unpaid
                          </span>}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {fee.status === 'paid' ? <button className="text-indigo-600 hover:text-indigo-800">
                            Receipt
                          </button> : <button className="text-indigo-600 hover:text-indigo-800">
                            Pay Now
                          </button>}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Payment History
            </h2>
            <div className="space-y-4">
              {paymentHistory.map(payment => <div key={payment.id} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <CheckCircleIcon size={16} className="text-green-500 mr-2" />
                        <p className="text-sm font-medium text-gray-800">
                          Payment of ${payment.amount.toLocaleString()}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-6">
                        {payment.date} • {payment.method}
                      </p>
                      <p className="text-xs text-gray-600 mt-2 ml-6">
                        Items: {payment.items}
                      </p>
                    </div>
                    <button className="flex items-center text-xs text-indigo-600 hover:text-indigo-800">
                      <DownloadIcon size={14} className="mr-1" />
                      Receipt #{payment.receipt}
                    </button>
                  </div>
                </div>)}
            </div>
          </Card>
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Fines</h2>
            <div className="space-y-4">
              {fines.map(fine => <div key={fine.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      {fine.status === 'paid' ? <CheckCircleIcon size={16} className="text-green-500 mr-2 mt-0.5" /> : <XCircleIcon size={16} className="text-red-500 mr-2 mt-0.5" />}
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {fine.reason}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Due by {fine.dueDate}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-800">
                        ${fine.amount}
                      </p>
                      <span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full ${fine.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {fine.status === 'paid' ? 'Paid' : 'Unpaid'}
                      </span>
                    </div>
                  </div>
                  {fine.status !== 'paid' && <div className="mt-3 ml-6">
                      <button className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg">
                        Pay Now
                      </button>
                    </div>}
                </div>)}
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Payment Methods
            </h2>
            <div className="space-y-3">
              <div className="border border-gray-200 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-12 bg-blue-500 rounded-md mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Visa ending in 4832
                    </p>
                    <p className="text-xs text-gray-500">Expires 09/2025</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                  Default
                </span>
              </div>
              <div className="border border-gray-200 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-12 bg-orange-500 rounded-md mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Mastercard ending in 6745
                    </p>
                    <p className="text-xs text-gray-500">Expires 11/2024</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full py-2 text-sm text-indigo-600 hover:text-indigo-800 border border-indigo-600 rounded-xl">
              Add New Payment Method
            </button>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Need Help?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              If you have any questions about your fees or payment options,
              please contact our finance department.
            </p>
            <div className="space-y-2">
              <button className="w-full py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
                Contact Finance Department
              </button>
              <button className="w-full py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl">
                View Fee Policy
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>;
};