import React from 'react'
import { FiPlusCircle, FiCheckCircle, FiPlay, FiAlertCircle } from 'react-icons/fi'

function TaskListNumbers({data}) {
    if(data== null || data?.taskCounts == null){
        return "Loading";
    }
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4'>
            <div className='rounded-xl p-6 bg-gradient-to-r from-red-400 to-red-500 
                hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                <div className='flex items-center gap-4'>
                    <FiPlusCircle className="text-4xl text-white" />
                    <div>
                        <h2 className='text-3xl font-bold text-white'> {data?.taskCounts.newTask}</h2>
                        <h3 className='text-lg text-white/90'>New Tasks</h3>
                    </div>
                </div>
            </div>

            <div className='rounded-xl p-6 bg-gradient-to-r from-blue-400 to-blue-500
                hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                <div className='flex items-center gap-4'>
                    <FiCheckCircle className="text-4xl text-white" />
                    <div>
                        <h2 className='text-3xl font-bold text-white'>{data?.taskCounts.completed}</h2>
                        <h3 className='text-lg text-white/90'>Completed</h3>
                    </div>
                </div>
            </div>

            <div className='rounded-xl p-6 bg-gradient-to-r from-green-400 to-green-500
                hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                <div className='flex items-center gap-4'>
                    <FiPlay className="text-4xl text-white" />
                    <div>
                        <h2 className='text-3xl font-bold text-white'>{data?.taskCounts.active}</h2>
                        <h3 className='text-lg text-white/90'>Active</h3>
                    </div>
                </div>
            </div>

            <div className='rounded-xl p-6 bg-gradient-to-r from-yellow-400 to-yellow-500
                hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                <div className='flex items-center gap-4'>
                    <FiAlertCircle className="text-4xl text-white" />
                    <div>
                        <h2 className='text-3xl font-bold text-white'>{data?.taskCounts.failed}</h2>
                        <h3 className='text-lg text-white/90'>Failed</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskListNumbers