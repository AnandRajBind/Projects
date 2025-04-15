import React, { useState } from 'react';
import { setLocalStorage } from '../../utils/localStorage';

function Header(props) {
    // console.log(data);
    //     const [username, setUsername]=useState('')


    //     if(!data){
    // setUsername('Admin')
    //     }else{
    //         setUsername(data.firstName)
    //     }
    const logOutUser = () => {
        localStorage.setItem('loggedInuser', " ")
        // window.location.reload()
        props.changeUser(" ");        
    }

    return (
        <div className='flex items-end  justify-between  p-5'>
            <h1 className='text-2xl font-medium '> Hello <br />  <span className=' text-3xl font-semibold'>username👋</span></h1>
            <button onClick={logOutUser} className='bg-red-500 text-lg text-white px-5 py-2 rounded-small'> Log Out </button>
        </div>
    )
}

export default Header;