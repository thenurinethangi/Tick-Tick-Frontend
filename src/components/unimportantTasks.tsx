import React from 'react'
import {Ellipsis, Plus, ChevronDown} from "lucide-react";

function UnimportantTasks() {
  return (
    <div style={{padding: '15px'}} className='shadow-xl rounded-[5px] flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-[14.5px] font-bold tracking-[0.03em] text-green-500 opacity-95'>Unimportant</h1>
            </div>
            <div className='flex items-center gap-1.5'>
                <Plus className="w-4.5 h-4.5 text-gray-500" />
                <Ellipsis className="w-4.5 h-4.5 text-gray-500" />
            </div>
        </div>

        <div>
            <div className='flex items-center gap-1.5' style={{marginBottom: '5px'}}>
                <ChevronDown className="w-4 h-4 text-gray-500" />
                <p className='text-[12.8px] font-medium'>Today</p>
                <p className='text-[12.8px] font-normal text-gray-400'>5</p>
            </div>

            {/* single tasks */}
            <div className='flex flex-col gap-2 rounded-sm' style={{paddingTop: '8px'}}>
                <div className='flex justify-between items-center' style={{paddingInline: '15px 5px'}}>
                    <div className='flex items-center gap-2'>
                        <input type='checkbox' className='w-3.5 h-3.5'></input>
                        <p className='text-[14.5px]'>Develop TickTick Frondend</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[13.1px] text-[#4772FA]'>Today</p>
                        <Ellipsis className="w-3 h-3 text-gray-300" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <hr className='text-[#EEEEEE] w-[90%]'></hr>
                </div>
            </div>

            <div className='flex flex-col gap-2 rounded-sm' style={{paddingTop: '8px'}}>
                <div className='flex justify-between items-center' style={{paddingInline: '15px 5px'}}>
                    <div className='flex items-center gap-2'>
                        <input type='checkbox' className='w-3.5 h-3.5'></input>
                        <p className='text-[14.5px]'>Develop TickTick Frondend</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[13.1px] text-[#4772FA]'>Today</p>
                        <Ellipsis className="w-3 h-3 text-gray-300" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <hr className='text-[#EEEEEE] w-[90%]'></hr>
                </div>
            </div>

            <div className='flex flex-col gap-2 rounded-sm' style={{paddingTop: '8px'}}>
                <div className='flex justify-between items-center' style={{paddingInline: '15px 5px'}}>
                    <div className='flex items-center gap-2'>
                        <input type='checkbox' className='w-3.5 h-3.5'></input>
                        <p className='text-[14.5px]'>Develop TickTick Frondend</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[13.1px] text-[#4772FA]'>Today</p>
                        <Ellipsis className="w-3 h-3 text-gray-300" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <hr className='text-[#EEEEEE] w-[90%]'></hr>
                </div>
            </div>
        </div>

        <div>
            <p className='text-[12px] text-[#9E9E9E] relative left-2'>View More</p>
        </div>
    </div>
  )
}

export default UnimportantTasks