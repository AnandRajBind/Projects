import React from 'react'

function AcceptTask({ data }) {

  console.log(data);
  return (
    <div className=' flex-shrink-0 h-full w-[420px] p-5 bg-red-400 rounded-xl'>
      <div className=' flex justify-between items-center'>
        <h3 className='bg-red-600  text-xl px-6 py-1 rounded'>{data.category}</h3>
        <h4 className='text-xl '>{data.taskDate}</h4>
      </div>
      <h2 className='mt-7 text-2xl font-semibold '>
        {data.taskTitle}      </h2>
      <p className='mt-5 text-xl'> {data.taskDescription}</p>

      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm '>  Mark as Completed
        </button>

        <button className='bg-red-500 py-1 px-2 text-sm '>
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask;