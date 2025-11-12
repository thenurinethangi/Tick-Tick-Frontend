import React from 'react'
import googlelogo from '../assets/google.png'
import applelogo from '../assets/apple-logo.png'


function SignInForm() {
  return (
    <form className='flex flex-col justify-start items-start gap-3 bg-white shadow-xl rounded-2xl' style={{marginTop: '22px', marginLeft: '30px', padding: '42px 45px'}}>
        <h1 className='text-2xl font-bold' style={{marginBottom: '15px'}}>Sign In</h1>
        <input className='w-[280px] border-[1.4px] border-gray-100 rounded-sm text-[14px] text-gray-500' style={{padding: '7.5px', marginBottom: '1px'}} type='email' placeholder='Email'></input>
        <input className='w-[280px] border-[1.4px] border-gray-100 rounded-sm text-[14px] text-gray-500' style={{padding: '7.5px', marginBottom: '2px'}} type='password' placeholder='Password'></input>
        <button className='bg-blue-500 text-[13.8px] text-white w-[280px] h-[37px] rounded-sm'>Sign In</button>
        <p className='text-gray-500 text-[12px] w-[280px] text-center'>Forgot Password</p>
        <hr className='border border-gray-100 w-[280px]' style={{marginBlock: '11px'}}></hr>
        <div className='flex flex-col justify-start items-start gap-3' style={{marginBottom: '30px'}}>
            <div className='flex justify-center items-center gap-2.5 border-[1.4px] border-gray-100 w-[280px] rounded-sm' style={{padding: '8.5px'}}>
                <img src={googlelogo} width={15}></img>
                <p className='text-[14px] font-medium'>Continue with Google</p>
            </div>
            <div className='flex justify-center items-center gap-2.5 border-[1.4px] border-gray-100 w-[280px] rounded-sm' style={{padding: '8.5px'}}>
                <img src={applelogo} width={15}></img>
                <p className='text-[14px] font-medium'>Continue with Apple</p>
            </div>
        </div>
    </form>
  )
}

export default SignInForm