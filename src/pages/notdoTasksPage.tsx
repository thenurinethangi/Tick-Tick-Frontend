import React from 'react'
import NavBar from '../components/navBar'
import TasksNavBar from '../components/tasksNavBar'
import NotdoTasks from '../components/notdoTasks'
import NotdoTasksNote from '../components/notdoTasksNote'

function NotdoTasksPage() {
  return (
    <div className='flex'>
      <NavBar />
      <div className='flex'>
        <TasksNavBar />
        <NotdoTasks />
        <NotdoTasksNote />
      </div>
    </div>
  )
}

export default NotdoTasksPage