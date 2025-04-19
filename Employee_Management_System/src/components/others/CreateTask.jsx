import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { FiFileText, FiCalendar, FiUser, FiTag, FiEdit3, FiPlus } from 'react-icons/fi';

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);
  const [formData, setFormData] = useState({
    taskTitle: '',
    taskDescription: '',
    taskDate: '',
    assignTo: '',
    taskCategory: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      ...formData,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    const updatedData = userData.map(elem => {
      if (formData.assignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        };
      }
      return elem;
    });

    setUserData(updatedData);
    setFormData({
      taskTitle: '',
      taskDescription: '',
      taskDate: '',
      assignTo: '',
      taskCategory: ''
    });
  };

  return (
    <div className='bg-gray-800 rounded-xl shadow-lg'>
      <div className='p-6 border-b border-gray-700'>
        <h2 className='text-xl font-semibold text-white flex items-center gap-2'>
          <FiPlus className="text-emerald-500" />
          Create New Task
        </h2>
      </div>

      <form onSubmit={submitHandler} className='p-6 space-y-4'>
        <div>
          <label className='text-sm text-gray-400 mb-1 block'>Task Title</label>
          <div className='relative'>
            <FiFileText className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              name="taskTitle"
              value={formData.taskTitle}
              onChange={handleChange}
              className='w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-white'
              type="text"
              placeholder='Enter task title'
              required
            />
          </div>
        </div>

        <div>
          <label className='text-sm text-gray-400 mb-1 block'>Due Date</label>
          <div className='relative'>
            <FiCalendar className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              name="taskDate"
              value={formData.taskDate}
              onChange={handleChange}
              className='w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-white'
              type="date"
              required
            />
          </div>
        </div>

        <div>
          <label className='text-sm text-gray-400 mb-1 block'>Assign To</label>
          <div className='relative'>
            <FiUser className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              name="assignTo"
              value={formData.assignTo}
              onChange={handleChange}
              className='w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-white'
              type="text"
              placeholder='Employee name'
              required
            />
          </div>
        </div>

        <div>
          <label className='text-sm text-gray-400 mb-1 block'>Category</label>
          <div className='relative'>
            <FiTag className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              name="taskCategory"
              value={formData.taskCategory}
              onChange={handleChange}
              className='w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-white'
              type="text"
              placeholder='e.g. Design, Development'
              required
            />
          </div>
        </div>

        <div>
          <label className='text-sm text-gray-400 mb-1 block'>Description</label>
          <div className='relative'>
            <FiEdit3 className='absolute left-3 top-3 text-gray-400' />
            <textarea
              name="taskDescription"
              value={formData.taskDescription}
              onChange={handleChange}
              className='w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-white'
              rows="4"
              placeholder='Task description'
              required
            ></textarea>
          </div>
        </div>

        <button 
          type="submit"
          className='w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-medium 
            hover:from-emerald-600 hover:to-emerald-700 transition duration-200 transform hover:scale-[1.02] 
            active:scale-[0.98] shadow-lg flex items-center justify-center gap-2'
        >
          <FiPlus className="w-5 h-5" />
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;