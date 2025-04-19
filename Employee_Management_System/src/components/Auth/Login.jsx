import React, { useState } from 'react'
import { FiUser, FiLock } from 'react-icons/fi'

export default function Login({handleLogin}) {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
            <div className='w-full max-w-md p-8 space-y-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 shadow-xl'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-emerald-500 mb-2'>Welcome Back!</h2>
                    <p className='text-gray-400'>Please sign in to continue</p>
                </div>
                
                <form onSubmit={submitHandler} className='space-y-6'>
                    <div className='relative'>
                        <FiUser className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition duration-200'
                            type="email"
                            placeholder='Enter Your Email'
                        />
                    </div>
                    
                    <div className='relative'>
                        <FiLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition duration-200'
                            type="password"
                            placeholder='Enter Your Password'
                        />
                    </div>
                    
                    <button 
                        className='w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-emerald-700 transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg'
                    >
                        Sign In
                    </button>
                </form>
                
                <p className='text-center text-gray-400 text-sm'>
                    Demo Credentials:<br/>
                    Admin: admin@gmail.com / admin123<br/>
                    Employee: pragyesh@gmail.com / 123
                </p>
            </div>
        </div>
    )
}
