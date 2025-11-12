import React from 'react'
import {ListCollapse, ArrowDownUp, Ellipsis, CalendarDays, ChevronDown} from "lucide-react";

function Next7DaysTasksAdd() {
  return (
    <div className='w-[580px]' style={{padding: '17px 21px'}}>

        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <ListCollapse className="w-5.5 h-5.5 text-gray-500" />
                <h1 className='text-[20px] font-bold tracking-[0.03em] text-black opacity-95'>Next 7 Days</h1>
            </div>
            <div className='flex items-center gap-2'>
                <ArrowDownUp className="w-5.5 h-5.5 text-gray-500" />
                <Ellipsis className="w-5.5 h-5.5 text-gray-500" />
            </div>
        </div>

        <form style={{marginBlock: '18px 15px'}} className='relative'>
            <input type='text' placeholder='Add task' className='w-full bg-[#f5f5f5c3] rounded-sm text-[15px] font-700 tracking-[0.01em]' style={{padding: '6px 15px'}}></input>
            <CalendarDays className="w-4 h-4 text-[#4772FA] absolute right-7 bottom-2" />
            <input type='date' className='absolute hidden'></input>
            <select className='absolute right-1 bottom-1'>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </form>

        <div className='flex items-center gap-1.5' style={{marginBottom: '5px'}}>
            <ChevronDown className="w-4 h-4 text-gray-500" />
            <p className='text-[12.8px] font-medium'>Today</p>
            <p className='text-[12.8px] font-normal text-gray-400'>5</p>
        </div>

        <div>
            {/* single tasks */}
            <div className='flex flex-col gap-2 bg-[#F5F5F5] rounded-sm' style={{paddingTop: '8px'}}>
                <div className='flex justify-between items-center' style={{paddingInline: '15px 5px'}}>
                    <div className='flex items-center gap-2'>
                        <input type='checkbox' className='w-3.5 h-3.5'></input>
                        <p className='text-[14.7px]'>Develop TickTick Frondend</p>
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
                        <p className='text-[14.7px]'>Develop TickTick Frondend</p>
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
                        <p className='text-[14.7px]'>Develop TickTick Frondend</p>
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
    </div>
  )
}

export default Next7DaysTasksAdd