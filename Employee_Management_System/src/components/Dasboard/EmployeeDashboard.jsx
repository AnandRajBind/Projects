import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

function EmployeeDashboard(props) {
    const [userData, setUserData] = useContext(AuthContext);

    const handleTaskStatusUpdate = (taskTitle, newStatus) => {
        const updatedUserData = userData.map(user => {
            if (user.id === props.data.id) {
                const updatedTasks = user.tasks.map(task => {
                    if (task.taskTitle === taskTitle) {
                        return {
                            ...task,
                            active: false,
                            completed: newStatus === 'completed',
                            failed: newStatus === 'failed',
                            newTask: false
                        };
                    }
                    return task;
                });

                // Update task counts
                const newTaskCounts = {
                    active: updatedTasks.filter(t => t.active).length,
                    newTask: updatedTasks.filter(t => t.newTask).length,
                    completed: updatedTasks.filter(t => t.completed).length,
                    failed: updatedTasks.filter(t => t.failed).length
                };

                return {
                    ...user,
                    tasks: updatedTasks,
                    taskCounts: newTaskCounts
                };
            }
            return user;
        });

        setUserData(updatedUserData);
        localStorage.setItem('employees', JSON.stringify(updatedUserData));
    };

    return (
        <div className='p-20 bg-[#1C1C1C] h-screen'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumbers data={props.data}/>
            <TaskList data={props.data} onTaskUpdate={handleTaskStatusUpdate}/>
        </div>
    );
}

export default EmployeeDashboard;
