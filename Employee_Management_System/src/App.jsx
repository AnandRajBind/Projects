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
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData]);


  const handleLogin = (email, password) => {

    if (email == "admin@me.com" && password == "123") {
      setUser({ role: 'admin' })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee)
        setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
    }
    else {
      alert("Invalid credentials");
    }
  }


  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : " "}

      {user == "admin" ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null) }

      {/* <AdminDashboard />
      <EmployeeDashboard /> */}
    </>
  )
}

export default App;
