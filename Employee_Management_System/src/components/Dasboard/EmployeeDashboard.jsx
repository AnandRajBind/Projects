import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard(props) {
    return (
        <div className='p-20 bg-[#1C1C1C] h-screen'>
            {/* <h1>{data.id}</h1> */}
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumbers data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    )
}

export default EmployeeDashboard;
