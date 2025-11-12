import React from 'react'
import NavBar from '../components/navBar'
import TasksNavBar from '../components/tasksNavBar'
import CompletedTasks from '../components/completedTasks'
import CompletedTasksNote from '../components/completedTasksNote'

function CompleteTasksPage() {
  return (
    <div className='flex'>
      <NavBar />
      <div className='flex'>
        <TasksNavBar />
        <CompletedTasks />
        <CompletedTasksNote />
      </div>
    </div>
  )
}

export default CompleteTasksPage