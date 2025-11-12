import React from 'react'
import NavBar from '../components/navBar'
import TasksNavBar from '../components/tasksNavBar'
import TodayTasksAdd from '../components/todayTasksAdd'
import TodayTasksNote from '../components/todayTasksNote'

function TodayTasksPage() {
  return (
    <div className='flex'>
      <NavBar />
      <div className='flex'>
        <TasksNavBar />
        <TodayTasksAdd />
        <TodayTasksNote />
      </div>
    </div>
  )
}

export default TodayTasksPage