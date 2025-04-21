import React, { useState } from 'react'
import { FiUser, FiLock, FiLoader, FiEye, FiEyeOff, FiAlertCircle } from 'react-icons/fi'

export default function Login({handleLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
            await handleLogin(email, password);
            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
            }
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
            <div className='w-full max-w-md p-8 space-y-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 shadow-xl'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-emerald-500 mb-2'>Welcome Back!</h2>
                    <p className='text-gray-400'>Please sign in to continue</p>
                </div>
                
                <form onSubmit={submitHandler} className='space-y-6'>
                    {error && (
                        <div className='flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg animate-shake'>
                            <FiAlertCircle />
                            <p className='text-sm'>{error}</p>
                        </div>
                    )}

                    <div className='relative group'>
                        <FiUser className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 
                            group-hover:text-emerald-500 transition-colors' />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 
                                rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                                outline-none text-white placeholder-gray-400 transition-all duration-300
                                group-hover:border-emerald-500/50'
                            type="email"
                            placeholder='Enter Your Email'
                        />
                    </div>
                    
                    <div className='relative group'>
                        <FiLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 
                            group-hover:text-emerald-500 transition-colors' />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            className='w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600 
                                rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                                outline-none text-white placeholder-gray-400 transition-all duration-300
                                group-hover:border-emerald-500/50'
                            type={showPassword ? "text" : "password"}
                            placeholder='Enter Your Password'
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 
                                hover:text-emerald-500 transition-colors"
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 rounded border-gray-600 text-emerald-500 
                                    focus:ring-emerald-500 bg-gray-700"
                            />
                            <span className="text-sm text-gray-400">Remember me</span>
                        </label>
                    </div>
                    
                    <button 
                        disabled={isLoading}
                        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 
                            flex items-center justify-center space-x-2
                            ${isLoading 
                                ? 'bg-gray-600 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
                            } transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none`}
                    >
                        {isLoading ? (
                            <>
                                <FiLoader className="animate-spin" />
                                <span>Signing in...</span>
                            </>
                        ) : 'Sign In'}
                    </button>
                </form>

                <div className='space-y-4'>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center'>
                            <div className='w-full border-t border-gray-700'></div>
                        </div>
                        <div className='relative flex justify-center'>
                            <span className='px-2 bg-gray-900 text-sm text-gray-400'>Demo Credentials</span>
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-2 gap-4 text-sm'>
                        <div className='p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-emerald-500/30 transition-colors'>
                            <p className='text-emerald-500 font-medium'>Admin</p>
                            <p className='text-gray-400'>demo@gmail.com</p>
                            <p className='text-gray-500'>demo123</p>
                        </div>
                        <div className='p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-emerald-500/30 transition-colors'>
                            <p className='text-emerald-500 font-medium'>Employee</p>
                            <p className='text-gray-400'>Id: anand@gmail.com</p>
                            <p className='text-gray-500'>pw: 123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
