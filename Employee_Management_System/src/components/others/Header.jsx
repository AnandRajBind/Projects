import React, { useState, useEffect } from 'react';
import { FiUser, FiLogOut, FiBell, FiSettings } from 'react-icons/fi';

function Header(props) {
    const [greeting, setGreeting] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [notifications] = useState([
        { id: 1, message: "New employee task assigned" },
        { id: 2, message: "Task completion pending" }
    ]);

    // Get username from props
    const username = props.data ? props.data.firstName : 'Admin';
    const isAdmin = !props.data;

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
    }, []);

    const logOutUser = () => {
        localStorage.clear();
        props.changeUser("");
    };

    return (
        <div className='flex items-center justify-between p-6 bg-gray-800 rounded-xl shadow-lg'>
            <div className='flex items-center gap-4'>
                <div className={`p-3 rounded-xl ${isAdmin ? 'bg-purple-500/10' : 'bg-emerald-500/10'}`}>
                    <FiUser className={`text-2xl ${isAdmin ? 'text-purple-500' : 'text-emerald-500'}`} />
                </div>
                <div>
                    <h1 className='text-2xl font-medium text-gray-200'>
                        {greeting},
                        <span className={`font-bold ml-2 ${isAdmin ? 'text-purple-500' : 'text-emerald-500'}`}>
                            {username}
                        </span>
                    </h1>
                    <p className='text-gray-400 text-sm'>
                        {isAdmin ? 'Welcome to admin dashboard' : 'Welcome to your workspace'}
                    </p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                {/* Notifications */}
                <div className='relative'>
                    <button 
                        className='p-2 hover:bg-gray-700 rounded-lg transition-colors'
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <FiBell className='text-xl text-gray-300' />
                        <span className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full'></span>
                    </button>
                    
                    {/* Notifications Dropdown */}
                    {isDropdownOpen && (
                        <div className='absolute right-0 mt-2 w-72 bg-gray-700 rounded-lg shadow-xl py-2 z-50'>
                            {notifications.map(notif => (
                                <div key={notif.id} className='px-4 py-2 hover:bg-gray-600 cursor-pointer'>
                                    <p className='text-sm text-gray-200'>{notif.message}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Settings */}
                <button className='p-2 hover:bg-gray-700 rounded-lg transition-colors'>
                    <FiSettings className='text-xl text-gray-300' />
                </button>

                {/* Logout Button */}
                <button 
                    onClick={logOutUser}
                    className='flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 
                             hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg 
                             transition-all duration-200 transform hover:scale-105 active:scale-95'
                >
                    <FiLogOut className='text-white' />
                    <span className='text-white font-medium'>Logout</span>
                </button>
            </div>
        </div>
    );
}

export default Header;