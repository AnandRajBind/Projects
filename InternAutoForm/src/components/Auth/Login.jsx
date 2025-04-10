import React, { useState } from 'react'

export default function Login() {

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    // form ka ake default behavior hota hai jaise hi ham form ko submit karte hai to page reload ho jata hai.
    // usko rokne ke liye ham preventDefault() function ka use karte hai.
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email is ", email);
        console.log("Password is ", password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className='flex h-screen w-screen items-center  justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20 '>
                <form onSubmit={(e) => {
                    submitHandler(e);
                }} className=' flex flex-col item-center justify-center '>
                    <input
                        value={email} // yeh hamara state hai jo ki hamne useState se banaya hai.
                    onChange={(e)=>{
                        // console.log(e);// yeh pura event object hai jo ki hamko milta hai jab bhi ham koi input field me kuch type karte hai.
                        //console.log(e.target);// e.target karne per hamko pura input field ka object milta hai.
                        //console.log(e.target.value);// yeh hamko input field me type kiya hua value milta hai. 
                        setEmail(e.target.value);// yeh hamara state hai jo ki hamne useState se banaya hai.
                    }
                }
                    required className=' outline-none bg-transparent border-2 border-emerald-600  text-xl py-3  px-5 rounded-full placeholder:text-gray-400 ' type="email" placeholder='Enter Your Email' />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required className=' outline-none bg-transparent border-2 border-emerald-600  text-xl py-3  px-5 rounded-full mt-10 placeholder:text-gray-400 ' type="password" placeholder='Enter Your password' />
                    <button className='mt-7 text-white border-none outline-none  bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log In</button>
                </form>
            </div>
        </div>
    )
}
