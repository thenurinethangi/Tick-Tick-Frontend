import React from 'react'
import {ChevronLeft, ChevronRight} from "lucide-react";

function DashboardDetails() {
  return (
    <div style={{padding: '30px 17px'}} className='shadow-2xl rounded-[12px] h-[350px]'>

      <div className='flex justify-between items-center'>
        <h1 className='text-[14.5px] font-semibold tracking-[0.01em] text-black opacity-85'>Details</h1>
        <div className='flex items-center gap-1'>
          <ChevronLeft className="w-5 h-5 text-gray-400" />
          <p className='text-[13.8px] opacity-90'>Today</p>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className='flex gap-12' style={{padding: '40px 0px 0px 30px'}}>

        <div className='relative'>
          <div className='w-[210px] h-[210px] border-16 border-[#4772FA] rounded-full'></div>
          <div className='flex flex-col items-center gap-0.5 absolute top-18 bottom-0 left-0 right-0 m-auto'>
            <p className='text-[25px] font-bold'>3h55m</p>
            <p className='text-[15px] text-gray-500'>Focus Duration</p>
          </div>
        </div>

        <div className='w-[280px] flex flex-col justify-center'>

          <div className='flex justify-between items-center'>
            <p className='text-[14px]'>Inbox</p>
            <p className='text-[14px] text-[#757575]'>3h55m  &nbsp;100%</p>
          </div>

          <div className='h-1.5 bg-[#4772FA] rounded-2xl'></div>

        </div>

      </div>

    </div>
  )
}

export default DashboardDetails