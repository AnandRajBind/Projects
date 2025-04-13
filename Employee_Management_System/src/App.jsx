import React, { useEffect, useState, useContext } from 'react';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dasboard/AdminDashboard';
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard';
import { setLocalStorage, getLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';


const App = () => {
  /*
    useEffect(() => {
      // setLocalStorage()
      getLocalStorage()
    })

    */

   const [user, setUser] = useState(null)

    const data = useContext(AuthContext);
    console.log(data);


    
  const handleLogin = (email, password) => {

    if (email == "admin@me.com" && password == "123") {
      setUser('admin')

    } else if (email == "user@me.com" && password == "123") {
      setUser('employee')
    }
    else {
      alert("Invalid credentials");
    }
  }


  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : " "}

      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}

      {/* <AdminDashboard />
      <EmployeeDashboard /> */}
    </>
  )
}

export default App;
