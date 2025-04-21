import React from 'react'
import { FiCheck, FiX, FiClock } from 'react-icons/fi'

function AcceptTask({ data, onStatusUpdate }) {
  return (
    <div className='flex-shrink-0 h-full w-[420px] p-5 bg-gradient-to-br from-red-400 to-red-500 
                    rounded-xl transform transition-all duration-300 hover:shadow-2xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600/80 backdrop-blur-sm text-xl px-6 py-1 rounded-full 
                      flex items-center gap-2 transition-all hover:bg-red-700'>
          <FiClock className="w-4 h-4" />
          {data.category}
        </h3>
        <h4 className='text-xl font-medium'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-7 text-2xl font-bold tracking-tight'>{data.taskTitle}</h2>
      <p className='mt-5 text-xl text-white/90'>{data.taskDescription}</p>

      <div className='flex justify-between mt-6 gap-4'>
        <button 
          onClick={() => onStatusUpdate(data.taskTitle, 'completed')}
          className='flex-1 bg-green-500 py-2 px-4 rounded-lg text-sm font-medium
                       flex items-center justify-center gap-2 transition-all duration-200
                       hover:bg-green-600 active:scale-95'>
          <FiCheck className="w-4 h-4" />
          Mark as Completed
        </button>

        <button 
          onClick={() => onStatusUpdate(data.taskTitle, 'failed')}
          className='flex-1 bg-red-600 py-2 px-4 rounded-lg text-sm font-medium
                       flex items-center justify-center gap-2 transition-all duration-200
                       hover:bg-red-700 active:scale-95'>
          <FiX className="w-4 h-4" />
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask;