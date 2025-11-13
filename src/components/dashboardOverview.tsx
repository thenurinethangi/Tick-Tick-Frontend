import React from 'react'

function DashboardOverview() {
  return (
    <div style={{padding: '30px 17px', marginBottom: '16px'}} className='shadow-xl rounded-[12px]'>
        <h1 className='text-[14.5px] font-semibold tracking-[0.01em] text-black opacity-85'>Overview</h1>
        <div className='flex justify-around items-center'>

            <div className='flex flex-col items-center gap-2'>
                <p className='text-[#4772FA] text-[28px] font-semibold'>2</p>
                <p className='text-[#757575] text-[13.8px]'>Today's Promos</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <p className='text-[#4772FA] text-[28px] font-semibold'>2299</p>
                <p className='text-[#757575] text-[13.8px]'>Total Promos</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <p className='text-[#4772FA] text-[28px] font-semibold'>7h50m</p>
                <p className='text-[#757575] text-[13.8px]'>Today's Focus</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <p className='text-[#4772FA] text-[28px] font-semibold'>3906h10m</p>
                <p className='text-[#757575] text-[13.8px]'>Total Focus Duration</p>
            </div>

        </div>
    </div>
  )
}

export default DashboardOverview