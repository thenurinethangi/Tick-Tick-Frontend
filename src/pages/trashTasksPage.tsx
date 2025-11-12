import React from 'react'
import NavBar from '../components/navBar'
import TasksNavBar from '../components/tasksNavBar'
import DeletedTasks from '../components/deletedTasks'
import DeletedTasksNote from '../components/deletedTasksNote'

function TrashTasksPage() {
  return (
    <div className='flex'>
      <NavBar />
      <div className='flex'>
        <TasksNavBar />
        <DeletedTasks />
        <DeletedTasksNote />
      </div>
    </div>
  )
}

export default TrashTasksPage