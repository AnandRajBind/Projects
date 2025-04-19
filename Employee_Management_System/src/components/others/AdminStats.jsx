import React from 'react';
import { FiUsers, FiCheckCircle, FiClock, FiAlertTriangle } from 'react-icons/fi';

function AdminStats({ userData }) {
  const getTotalStats = () => {
    if (!userData) return { employees: 0, completed: 0, pending: 0, failed: 0 };
    
    return {
      employees: userData.length,
      completed: userData.reduce((acc, emp) => acc + emp.taskCounts.completed, 0),
      pending: userData.reduce((acc, emp) => acc + emp.taskCounts.active, 0),
      failed: userData.reduce((acc, emp) => acc + emp.taskCounts.failed, 0)
    };
  };

  const stats = getTotalStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-white/20">
            <FiUsers className="w-6 h-6 text-white" />
          </div>
          <div className="ml-4">
            <p className="text-white/80 text-sm">Total Employees</p>
            <h3 className="text-white text-2xl font-bold">{stats.employees}</h3>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-white/20">
            <FiCheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="ml-4">
            <p className="text-white/80 text-sm">Completed Tasks</p>
            <h3 className="text-white text-2xl font-bold">{stats.completed}</h3>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-white/20">
            <FiClock className="w-6 h-6 text-white" />
          </div>
          <div className="ml-4">
            <p className="text-white/80 text-sm">Pending Tasks</p>
            <h3 className="text-white text-2xl font-bold">{stats.pending}</h3>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-white/20">
            <FiAlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div className="ml-4">
            <p className="text-white/80 text-sm">Failed Tasks</p>
            <h3 className="text-white text-2xl font-bold">{stats.failed}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStats;
