import React from 'react'
import AcceptedTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask'

function TaskList({ data }) {
  // console.log(data);

  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 py-5 flex-nowrap w-full  mt-10'>
      {
       data?.tasks.map((elem, idx) => {
          if (elem.active) {
            return <AcceptedTask key={idx} data={elem}/>
          }
          if (elem.NewTask) {
            return <NewTask  key={idx}  data={elem}/>
          }
          if (elem.completed) {
            return <CompleteTask  key={idx}  data={elem}/>
          }
          if (elem.failed) {
            return <FailedTask key={idx}  data={elem}/>
          }
        })
      }
    </div>
  )
}

export default TaskList;