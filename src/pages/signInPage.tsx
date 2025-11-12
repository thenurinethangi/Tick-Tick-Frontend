import React from 'react'
import LogoLarge from '../components/logoLarge'
import SideSignUp from '../components/sideSignUp'
import SignInForm from '../components/signInForm'

function SigninPage() {
  return (
    <div className='flex justify-between'>
      <LogoLarge />
      <SignInForm />
      <SideSignUp />
    </div>
  )
}

export default SigninPage