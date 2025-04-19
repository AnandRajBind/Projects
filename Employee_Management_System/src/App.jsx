import React, { useEffect, useState, useContext } from 'react';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dasboard/AdminDashboard';
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard';
import { setLocalStorage, getLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';


const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData]= useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    // const empData = localStorage.getItem('employees')
    if (loggedInUser) {
      const userType = JSON.parse(loggedInUser);
      // const userData = JSON.parse(empData);
      setUser(userType.role);
      // setLoggedInUserData(userData);
    }
  }, [user]);

  const handleLogin = (email, password) => {

    if (email == "admin@gmail.com" && password == "admin123") {
      setUser({ role: 'admin' })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData?.find((e) => email == e.email && password == e.password)
      if (employee){
        setUser({role:'employee'})
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      alert("Invalid credentials");
    }
  }


  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : " "}

      {user == "admin" ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}

      {/* <AdminDashboard />
      <EmployeeDashboard /> */}
    </>
  )
}

export default App;
