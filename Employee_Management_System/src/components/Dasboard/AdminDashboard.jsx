import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

function AdminDashboard() {
  return (
    <div className='min-h-screen w-full bg-[#1C1C1C] p-20'>
      <Header />
      <div className='mt-10'>
        <CreateTask />
      </div>
      <div className='mt-10'>
        <AllTask />
      </div>
    </div>
  )
}
export default AdminDashboard;