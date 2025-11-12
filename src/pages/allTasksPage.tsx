import React from 'react'
import NavBar from '../components/navBar'
import TasksNavBar from '../components/tasksNavBar'
import AllTasksAdd from '../components/allTasksAdd'
import AllTasksNote from '../components/allTasksNote'

function AllTasksPage() {
  return (
    <div className='flex'>
      <NavBar />
      <div className='flex'>
        <TasksNavBar />
        <AllTasksAdd />
        <AllTasksNote />
      </div>
    </div>
  )
}

export default AllTasksPage