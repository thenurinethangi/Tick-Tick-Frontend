import React from 'react'
import NavBar from '../components/navBar'
import DashboardTitle from '../components/dashboardTitle'
import DashboardOverview from '../components/dashboardOverview'
import DashboardDetails from '../components/dashboardDetails'
import DashboardFocusRecord from '../components/dashboardFocusRecord'

function DashboardPage() {
  return (
    <div className='flex'>
      <NavBar />
      <div className='w-full' style={{padding: '50px 120px 0px 120px'}}>
        <DashboardTitle />
        <DashboardOverview />
        <div className='flex gap-5'>
          <DashboardDetails />
          <DashboardFocusRecord />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage