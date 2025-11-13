import React from 'react'
import NavBar from '../components/navBar'
import UrgentTasks from '../components/urgentTasks'
import NotUrgentTasks from '../components/notUrgentTasks'
import ImportantTasks from '../components/importantTasks'
import UnimportantTasks from '../components/unimportantTasks'

function TasksStatusPage() {
  return (
    <div className='flex h-full overflow-hidden'>
      <NavBar />
      <div style={{padding: '17px 18px'}} className='w-full'>
        <h1 className='text-[20px] font-bold tracking-[0.03em] text-black opacity-95'>Eisenhower Metrix</h1>
        <div className='w-full h-full grid grid-cols-2 grid-rows-2 gap-4.5' style={{marginTop: '8px'}}>
          <UrgentTasks />
          <NotUrgentTasks />
          <ImportantTasks />
          <UnimportantTasks />
        </div>
      </div>
    </div>
  )
}

export default TasksStatusPage