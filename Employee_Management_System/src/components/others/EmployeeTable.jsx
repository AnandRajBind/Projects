import React, { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

function EmployeeTable({ userData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('firstName');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredData = userData?.filter(emp => 
    emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...(filteredData || [])].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-4 sm:mb-0">Employee Overview</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search employees..."
            className="pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-700 text-gray-200">
            <tr>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('firstName')}>
                Employee Name
                <FiFilter className="inline ml-2" />
              </th>
              <th className="px-6 py-3">New Tasks</th>
              <th className="px-6 py-3">Active Tasks</th>
              <th className="px-6 py-3">Completed</th>
              <th className="px-6 py-3">Failed</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData?.map((emp, idx) => (
              <tr key={idx} className="border-b border-gray-700 hover:bg-gray-700/50">
                <td className="px-6 py-4">{emp.firstName}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                    {emp.taskCounts.newTask}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">
                    {emp.taskCounts.active}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">
                    {emp.taskCounts.completed}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">
                    {emp.taskCounts.failed}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-emerald-500 hover:text-emerald-400">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;
