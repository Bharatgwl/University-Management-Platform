import React from 'react';
import { Card } from '../ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
export const AttendanceChart = () => {
  const data = [{
    name: 'Present',
    value: 85
  }, {
    name: 'Absent',
    value: 10
  }, {
    name: 'Late',
    value: 5
  }];
  const COLORS = ['#4F46E5', '#EF4444', '#F59E0B'];
  return <Card className="p-5 h-80">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Attendance Overview
        </h2>
        <select className="text-xs border border-gray-300 rounded-lg px-2 py-1">
          <option>This Semester</option>
          <option>Last Semester</option>
          <option>All Time</option>
        </select>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" label={({
            name,
            percent
          }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip formatter={value => `${value}%`} />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>;
};