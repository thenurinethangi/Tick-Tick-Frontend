import React from 'react'
import {Ellipsis, Bomb, Circle} from "lucide-react";
import circle from '../assets/circle.png'

function DashboardFocusRecord() {
  return (
    <div style={{ padding: '30px 17px' }} className="shadow-2xl rounded-[12px] h-[350px] w-full overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:opacity-0 hover:[&::-webkit-scrollbar]:opacity-100 [&::-webkit-scrollbar-track]:bg-[#90CAF9] [&::-webkit-scrollbar-thumb]:bg-[#E3F2FD] [&::-webkit-scrollbar-thumb]:rounded-full transition-all duration-300">

      <div className='flex justify-between items-center' style={{marginBottom: '16px'}}>
        <h1 className='text-[14.4px] font-semibold tracking-[0.01em] text-black opacity-85'>Focus Record</h1>
        <Ellipsis className="w-5 h-5 text-gray-400" />
      </div>

      <div>
        <p className='text-[14px] text-[#9E9E9E]' style={{marginBottom: '20px'}}>Nov 13</p>

        <div className='flex flex-col gap-1.5 relative border-l-2 border-[#BBDEFB]' style={{paddingLeft: '30px', marginLeft: '8px', marginBottom: '13px', paddingBottom: '13px'}}>
          <div className='bg-[#E3F2FD] rounded-full w-5.5 h-5.5 flex justify-center items-center absolute -left-3 -top-2' style={{padding: '2px'}}>
            <Bomb strokeWidth={3} className="w-[13px] h-[13px] text-[#4772FA] opacity-95" />
          </div>
          <img src={circle} className="w-[9px] h-[9px] text-[#4772FA] absolute bottom-[17px] -left-[5px]"></img>
          <div className='flex justify-between items-center'>
            <p className='text-[12px] text-[#9E9E9E]'>15.17 - 15.38</p>
            <p className='text-[12px] text-[#9E9E9E]'>20m</p>
          </div>
          <div>
            <p className='text-[14px] font-medium opacity-80'>Develop Tick Tick frontend</p>
          </div>
        </div>

        <div className='flex flex-col gap-1.5 relative border-l-2 border-[#BBDEFB]' style={{paddingLeft: '30px', marginLeft: '8px', marginBottom: '13px', paddingBottom: '13px'}}>
          <div className='bg-[#E3F2FD] rounded-full w-5.5 h-5.5 flex justify-center items-center absolute -left-3 -top-2' style={{padding: '2px'}}>
            <Bomb strokeWidth={3} className="w-[13px] h-[13px] text-[#4772FA] opacity-95" />
          </div>
          <img src={circle} className="w-[9px] h-[9px] text-[#4772FA] absolute bottom-[17px] -left-[5px]"></img>
          <div className='flex justify-between items-center'>
            <p className='text-[12px] text-[#9E9E9E]'>15.17 - 15.38</p>
            <p className='text-[12px] text-[#9E9E9E]'>20m</p>
          </div>
          <div>
            <p className='text-[14px] font-medium opacity-80'>Develop Tick Tick frontend</p>
          </div>
        </div>

        <div className='flex flex-col gap-1.5 relative border-l-2 border-[#BBDEFB]' style={{paddingLeft: '30px', marginLeft: '8px', marginBottom: '13px', paddingBottom: '13px'}}>
          <div className='bg-[#E3F2FD] rounded-full w-5.5 h-5.5 flex justify-center items-center absolute -left-3 -top-2' style={{padding: '2px'}}>
            <Bomb strokeWidth={3} className="w-[13px] h-[13px] text-[#4772FA] opacity-95" />
          </div>
          <img src={circle} className="w-[9px] h-[9px] text-[#4772FA] absolute bottom-[17px] -left-[5px]"></img>
          <div className='flex justify-between items-center'>
            <p className='text-[12px] text-[#9E9E9E]'>15.17 - 15.38</p>
            <p className='text-[12px] text-[#9E9E9E]'>20m</p>
          </div>
          <div>
            <p className='text-[14px] font-medium opacity-80'>Develop Tick Tick frontend</p>
          </div>
        </div>

        <div className='flex flex-col gap-1.5 relative border-l-2 border-[#BBDEFB]' style={{paddingLeft: '30px', marginLeft: '8px', marginBottom: '13px', paddingBottom: '13px'}}>
          <div className='bg-[#E3F2FD] rounded-full w-5.5 h-5.5 flex justify-center items-center absolute -left-3 -top-2' style={{padding: '2px'}}>
            <Bomb strokeWidth={3} className="w-[13px] h-[13px] text-[#4772FA] opacity-95" />
          </div>
          <img src={circle} className="w-[9px] h-[9px] text-[#4772FA] absolute bottom-[17px] -left-[5px]"></img>
          <div className='flex justify-between items-center'>
            <p className='text-[12px] text-[#9E9E9E]'>15.17 - 15.38</p>
            <p className='text-[12px] text-[#9E9E9E]'>20m</p>
          </div>
          <div>
            <p className='text-[14px] font-medium opacity-80'>Develop Tick Tick frontend</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DashboardFocusRecord