import React from 'react'

function SideSignIn() {
  return (
    <div style={{marginRight: '37px', marginTop: '30px'}}>
        <div className='flex justify-end items-center gap-3.5'>
            <p className='text-[15px] text-gray-500'>Already have an account?</p>
            <button className='bg-blue-500 text-[13.8px] text-white w-[75px] h-[35px] rounded-sm'>Sign In</button>
        </div>
    </div>
  )
}

export default SideSignIn