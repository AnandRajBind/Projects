import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dasboard/AdminDashboard';
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard';
import { setLocalStorage, getLocalStorage } from './utils/localStorage';



function App() {
  /*
    useEffect(() => {
      // setLocalStorage()
      getLocalStorage()
    })
  
    */
  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {

    if (email == "admin@me.com" && password == "123") {
      console.log("This is Admin");

    } else if (email == "user@me.com" && password == "123") {
      console.log("This is User");
    }
    else {
      alert("Invalid credentials");
    }
  }

  // handleLogin();
  handleLogin('user@me.com', '123');

  return (
    <>

      {!user ? <Login /> : " "}

      {/* <AdminDashboard />
<EmployeeDashboard /> */}

    </>
  )
}

export default App