import React, { useEffect, useState, useContext } from 'react';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dasboard/AdminDashboard';
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard';
import { setLocalStorage, getLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';


const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {

    if (email == "admin@example.com" && password == "admin123") {
      setUser({ role: 'admin' })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee)
        setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
    }
    else {
      alert("Invalid credentials");
    }
  }


  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : " "}

      {user == "admin" ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}

      {/* <AdminDashboard />
      <EmployeeDashboard /> */}
    </>
  )
}

export default App;
