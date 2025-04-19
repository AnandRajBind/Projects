import React, { useContext } from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AdminStats from '../others/AdminStats';
import EmployeeTable from '../others/EmployeeTable';
import { AuthContext } from '../../context/AuthProvider';

function AdminDashboard(props) {
  const [userData] = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <Header changeUser={props.changeUser} />
        <AdminStats userData={userData} />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <EmployeeTable userData={userData} />
          </div>
          
          <div className="xl:col-span-1">
            <CreateTask />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;