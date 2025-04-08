import React from 'react'

function Header() {
    return (
        <div className='flex items-end  justify-between  p-5'>
            <h1 className='text-2xl font-medium '> Hello <br />  <span className=' text-3xl font-semibold'>Anand Raj Bind  👋</span></h1>
            <button className='bg-red-500 text-lg text-white px-5 py-2 rounded-small'> Log Out </button>
        </div>
    )
}

export default Header;