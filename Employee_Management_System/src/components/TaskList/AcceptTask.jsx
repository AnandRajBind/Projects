import React from 'react'

function AcceptTask() {
  return (
    <div className=' flex-shrink-0 h-full w-[420px] p-5 bg-red-400 rounded-xl'>
      <div className=' flex justify-between items-center'>
        <h3 className='bg-red-600  text-xl px-6 py-1 rounded'>High</h3>
        <h4 className='text-xl '>20 Feb 2025</h4>
      </div>
      <h2 className='mt-7 text-2xl font-semibold '>
        Make a youtube Video
      </h2>
      <p className='mt-5 text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate atque ipsam quae error veritatis?</p>

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

export default AcceptTask