import React from 'react'
import NavBar from '../components/navBar'
import TasksNavBar from '../components/tasksNavBar'
import Next7DaysTasksAdd from '../components/next7daysTasksAdd'
import Next7DaysTasksNote from '../components/next7DaysTasksNote'

function Next7DaysTasksPage() {
  return (
    <div className='flex'>
      <NavBar />
      <div className='flex'>
        <TasksNavBar />
        <Next7DaysTasksAdd />
        <Next7DaysTasksNote />
      </div>
    </div>
  )
}

export default Next7DaysTasksPage