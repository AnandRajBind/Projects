import React from 'react'

export default function CompleteTask() {
    return (
        <div className=' flex-shrink-0 h-full w-[420px] p-5 bg-green-400 rounded-xl'>
            <div className=' flex justify-between items-center'>
                <h3 className='bg-red-600  text-xl px-6 py-1 rounded'>High</h3>
                <h4 className='text-xl '>20 Feb 2025</h4>
            </div>
            <h2 className='mt-7 text-2xl font-semibold '>
                Make a youtube Video
            </h2>
            <p className='mt-5 text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate atque ipsam quae error veritatis?</p>
            <div className='mt-2'>
                <button className='w-full bg-blue-500 py-1 px-2 text-sm  '>
                    Completed

                </button>
            </div>

        </div>


    )
}
