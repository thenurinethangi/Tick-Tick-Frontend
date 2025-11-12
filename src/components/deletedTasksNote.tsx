import React from 'react'
import {CalendarRange, Flag, Minus, Timer, ListStart, X} from "lucide-react";

function DeletedTasksNote() {
  return (
    <div className='w-[400px] bg-white border-l border-gray-200'>
        <div className='border-b border-gray-100 flex justify-between items-center' style={{padding: '15px 20px'}}>
            <div className='flex items-center gap-2.5 relative'>
                <input type='checkbox' className='w-4 h-4 accent-[#E0E0E0]'></input>
                <X className="w-4 h-4 text-gray-500 absolute" />
                <Minus className="w-5 h-5 text-gray-300 rotate-90" />
                <CalendarRange className="w-5 h-5 text-[#4772FA]" />
                <p className='text-[15px] text-[#4772FA]'>Nov 11, Today</p>
            </div>
            <div>
                <Flag className="w-5 h-5 text-gray-500" />
            </div>
        </div>
        <div style={{padding: '18px 20px'}}>
            <div className='flex gap-1'>
                <p className='text-[12px] text-gray-400'>Focused for</p>
                <Timer className="w-4 h-4 text-[#4772FA]" />
                <p className='text-[12.5px] text-[#4772FA] font-medium'>5h31m</p>
            </div>
            <div className='flex justify-between items-center' style={{marginBlock: '4px 9px'}}>
                <h1 className='text-[18px] tracking-[0.04em] text-black opacity-95 font-semibold'>Develop TickTick Frondend</h1>
                <ListStart className="w-5 h-5 text-gray-500" />
            </div>
            <div>
                <textarea className='w-full text-[14px] text-gray-400' rows={20} placeholder='Description'></textarea>
            </div>
        </div>
    </div>
  )
}

export default DeletedTasksNote