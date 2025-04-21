import React, { useState } from 'react'
import AcceptedTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({ data, onTaskUpdate }) {
  const [hoveredTask, setHoveredTask] = useState(null);

  return (
    <div className='relative'>
      <div id='tasklist' 
           className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 py-5 
                     flex-nowrap w-full mt-10 snap-x snap-mandatory scroll-smooth'>
        {data?.tasks.map((elem, idx) => (
          <div key={idx}
               className='snap-start transform transition-all duration-300 hover:scale-105'
               onMouseEnter={() => setHoveredTask(idx)}
               onMouseLeave={() => setHoveredTask(null)}>
            {elem.active && (
              <div className={`transition-all duration-300 ${hoveredTask === idx ? 'shadow-2xl' : 'shadow-lg'}`}>
                <AcceptedTask data={elem} onStatusUpdate={onTaskUpdate}/>
              </div>
            )}
            {elem.NewTask && (
              <div className={`transition-all duration-300 ${hoveredTask === idx ? 'shadow-2xl' : 'shadow-lg'}`}>
                <NewTask data={elem}/>
              </div>
            )}
            {elem.completed && (
              <div className={`transition-all duration-300 ${hoveredTask === idx ? 'shadow-2xl' : 'shadow-lg'}`}>
                <CompleteTask data={elem}/>
              </div>
            )}
            {elem.failed && (
              <div className={`transition-all duration-300 ${hoveredTask === idx ? 'shadow-2xl' : 'shadow-lg'}`}>
                <FailedTask data={elem}/>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scroll indicators */}
      <div className='absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#1C1C1C] to-transparent'/>
      <div className='absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-l from-[#1C1C1C] to-transparent'/>
    </div>
  )
}

export default TaskList;