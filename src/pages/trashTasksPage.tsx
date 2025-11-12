import React from 'react'
import NavBar from '../components/navBar'
import TasksNavBar from '../components/tasksNavBar'
import NotdoTasks from '../components/notdoTasks'
import NotdoTasksNote from '../components/notdoTasksNote'
import DeletedTasks from '../components/deletedTasks'

function TrashTasksPage() {
  return (
    <div className='flex'>
      <NavBar />
      <div className='flex'>
        <TasksNavBar />
        <DeletedTasks />
        <NotdoTasksNote />
      </div>
    </div>
  )
}

export default TrashTasksPage