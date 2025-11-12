import React from 'react'
import LogoLarge from '../components/logoLarge'
import SideSignIn from '../components/sideSignIn'
import SignUpForm from '../components/signUpForm'

function SignUpPage() {
  return (
    <div className='flex justify-between'>
      <LogoLarge />
      <SignUpForm />
      <SideSignIn />
    </div>
  )
}

export default SignUpPage