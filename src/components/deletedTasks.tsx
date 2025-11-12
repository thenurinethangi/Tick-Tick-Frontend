import React from 'react'
import {ListCollapse, Ellipsis, ChevronDown, X, Paintbrush, CircleMinus, SquareMinus} from "lucide-react";

function DeletedTasks() {
  return (
    <div className='w-[580px]' style={{padding: '17px 21px'}}>

        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <ListCollapse className="w-5.5 h-5.5 text-gray-500" />
                <h1 className='text-[20px] font-bold tracking-[0.03em] text-black opacity-95'>Trash</h1>
            </div>
            <div className='flex items-center gap-2'>
                <Paintbrush className="w-5 h-5 text-gray-500" />
            </div>
        </div>

        <div style={{marginBottom: '15px', marginTop: '12px'}}>

            {/* single tasks */}
            <div className='flex flex-col gap-2 bg-[#F5F5F5] rounded-sm' style={{paddingTop: '8px'}}>
                <div className='flex justify-between items-center' style={{paddingInline: '15px 5px'}}>
                    <div className='flex items-center gap-2 relative'>
                        {/* <SquareMinus className="w-4.5 h-4.5 text-gray-500" /> */}
                        <X className="w-4.5 h-4.5 text-gray-500" />
                        <p className='text-[14.5px] text-[#BDBDBD]'>Develop TickTick Frondend</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[13.1px] text-[#BDBDBD]'>Today</p>
                        <Ellipsis className="w-3 h-3 text-gray-300" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <hr className='text-[#EEEEEE] w-[90%]'></hr>
                </div>
            </div>

            <div className='flex flex-col gap-2 rounded-sm' style={{paddingTop: '8px'}}>
                <div className='flex justify-between items-center' style={{paddingInline: '15px 5px'}}>
                    <div className='flex items-center gap-2 relative'>
                        {/* <SquareMinus className="w-4.5 h-4.5 text-gray-500" /> */}
                        <X className="w-4.5 h-4.5 text-gray-500" />
                        <p className='text-[14.5px] text-[#BDBDBD]'>Develop TickTick Frondend</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[13.1px] text-[#BDBDBD]'>Today</p>
                        <Ellipsis className="w-3 h-3 text-gray-300" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <hr className='text-[#EEEEEE] w-[90%]'></hr>
                </div>
            </div>

            <div className='flex flex-col gap-2 rounded-sm' style={{paddingTop: '8px'}}>
                <div className='flex justify-between items-center' style={{paddingInline: '15px 5px'}}>
                    <div className='flex items-center gap-2 relative'>
                        {/* <SquareMinus className="w-4.5 h-4.5 text-gray-500" /> */}
                        <X className="w-4.5 h-4.5 text-gray-500" />
                        <p className='text-[14.5px] text-[#BDBDBD]'>Develop TickTick Frondend</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[13.1px] text-[#BDBDBD]'>Today</p>
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

export default DeletedTasks