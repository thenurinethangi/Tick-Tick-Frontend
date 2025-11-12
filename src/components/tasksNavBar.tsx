import React from 'react'
import {CalendarCheck2, SquareArrowRight, Inbox, SquareCheck, CircleX, Trash} from "lucide-react";

function TasksNavBar() {
  return (
    <div className='h-full border-r border-gray-200 flex flex-col justify-between items-start' style={{padding: '8px'}}>
        
        <div className='flex flex-col gap-0.2'>
            {/* single nav */}
            <div className='flex gap-2 items-center bg-gray-100 rounded-md' style={{padding: '10px 14px'}}>
                <CalendarCheck2 className="w-4.5 h-4.5 text-gray-500" />
                <div className='flex items-center gap-28'>
                    <p className='text-[15px]'>Today</p>
                    <p className='text-[14px] text-gray-400'>5</p>
                </div>
            </div>
            <div className='flex gap-2 items-center' style={{padding: '10px 14px'}}>
                <SquareArrowRight className="w-4.5 h-4.5 text-gray-500" />
                <div className='flex items-center gap-17'>
                    <p className='text-[15px]'>Next 7 Days</p>
                    <p className='text-[14px] text-gray-400'>5</p>
                </div>
            </div>
            <div className='flex gap-2 items-center' style={{padding: '10px 14px'}}>
                <Inbox className="w-4.5 h-4.5 text-gray-500" />
                <div className='flex items-center gap-34'>
                    <p className='text-[15px]'>All</p>
                    <p className='text-[14px] text-gray-400'>5</p>
                </div>
            </div>
            <hr className='border border-gray-100' style={{marginBlock: '20px'}}></hr>
        </div>

        <div className='flex flex-col gap-0.2' style={{marginBottom: '120px'}}>
            <hr className='border border-gray-100 w-[220px]' style={{marginBlock: '10px'}}></hr>
            {/* single nav */}
            <div className='flex gap-2 items-center' style={{padding: '10px 14px'}}>
                <SquareCheck className="w-4.5 h-4.5 text-gray-500" />
                <div className='flex items-center gap-28'>
                    <p className='text-[15px]'>Completed</p>
                </div>
            </div>
            <div className='flex gap-2 items-center' style={{padding: '10px 14px'}}>
                <CircleX className="w-4.5 h-4.5 text-gray-500" />
                <div className='flex items-center gap-17'>
                    <p className='text-[15px]'>Wan't Do</p>
                </div>
            </div>
            <div className='flex gap-2 items-center' style={{padding: '10px 14px'}}>
                <Trash className="w-4.5 h-4.5 text-gray-500" />
                <div className='flex items-center gap-34'>
                    <p className='text-[15px]'>Trash</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TasksNavBar