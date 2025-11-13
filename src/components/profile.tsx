import React from 'react'
import profiledefault from '../assets/profile-pic-default-01.jpg'
import editicon from '../assets/pen.png'
import profiledefault1 from '../assets/user (3).png'
import editicon1 from '../assets/pen (1).png'

function Profile() {
  return (
    <div style={{padding: '17px 20px 20px 22px'}}>
        <h1 className='font-bold text-[20px] tracking-[0.04em]' style={{fontFamily: 'Inter'}}>Profile</h1>
        <div className='shadow-xl rounded-[5px]' style={{padding: '15px 40px 40px 40px', marginLeft: '357px'}}>
            <form className='flex flex-col justify-center items-center gap-5 shadow-xl rounded-xl' style={{padding: '40px 34px 30px 34px'}}>
                <div className='relative'>
                    <img src={profiledefault1} width={130}></img>
                    <img src={editicon1} width={30} className='absolute right-3 top-25'></img>
                    <input type='file' accept='image/*' className='absolute top-0 w-[130px] h-[130px] opacity-0'></input>
                </div>
                <div>
                    <input type='text' value={'Thenuri Nanayakkara'} className='border-b-2 border-black w-[270px] text-center'></input>
                </div>
                <div className='flex flex-col gap-2.5'>
                    <label className='text-[15.3px]'>Email</label>
                    <input type='email' value={'thenurinethangi@gamil.com'} className='text-gray-400' style={{padding: '3px 12px 3px 0px'}}></input>
                    <label className='text-[15.3px]'>Password</label>
                    <input type='password' value={'*******'} className='text-gray-400' style={{padding: '3px 12px 3px 0px'}}></input>
                </div>
                <div className='flex justify-end'>
                    <button className='border border-gray-400 rounded-sm text-[14px] shadow-2xl tracking-[0.01em] text-gray-600' style={{padding: '7px 10px'}}>Save Changes</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Profile