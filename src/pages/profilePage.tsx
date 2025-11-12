import React from 'react'
import NavBar from '../components/navBar'
import Profile from '../components/profile'

function ProfilePage() {
  return (
    <div className='flex justify-start'>
      <NavBar />
      <Profile />
    </div>
  )
}

export default ProfilePage