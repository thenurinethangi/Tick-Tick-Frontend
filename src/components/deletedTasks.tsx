import React from 'react'
import {ListCollapse, Ellipsis, ChevronDown, X} from "lucide-react";

function DeletedTasks() {
  return (
    <div className='w-[580px]' style={{padding: '17px 21px'}}>

        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <ListCollapse className="w-5.5 h-5.5 text-gray-500" />
                <h1 className='text-[20px] font-bold tracking-[0.03em] text-black opacity-95'>Wan't Do</h1>
            </div>
        </div>

        <div style={{marginBlock: '13px 14px'}} className='flex gap-2'>
            <select className='text-[13px] text-[#BDBDBD] border-[1.5px] border-gray-200 rounded-md' style={{padding: '3px 4px'}}>
                <option>All Dates</option>
                <option>This Week</option>
                <option>Last Week</option>
                <option>This Month</option>
                <option>This Year</option>
            </select>
            <select className='text-[13px] text-[#BDBDBD] border-[1.5px] border-gray-200 rounded-md' style={{padding: '3px 4px'}}>
                <option>All Won't Do</option>
                <option>Won't Do By Me</option>
            </select>
        </div>

        <div style={{marginBottom: '15px'}}>
            <div className='flex items-center gap-1.5' style={{marginBottom: '5px'}}>
                <ChevronDown className="w-4 h-4 text-gray-500" />
                <p className='text-[12.8px] font-medium'>Today</p>
                <p className='text-[12.8px] font-normal text-gray-400'>5</p>
            </div>

            {/* single tasks */}
            <div className='flex flex-col gap-2 bg-[#F5F5F5] rounded-sm' style={{paddingTop: '8px'}}>
                <div className='flex justify-between items-center' style={{paddingInline: '15px 5px'}}>
                    <div className='flex items-center gap-2 relative'>
                        <input type='checkbox' className='w-3.5 h-3.5 accent-[#E0E0E0]'></input>
                        <X className="w-3.5 h-3.5 text-gray-500 absolute" />
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
                        <input type='checkbox' className='w-3.5 h-3.5 accent-[#E0E0E0]'></input>
                        <X className="w-3.5 h-3.5 text-gray-500 absolute" />
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
                        <input type='checkbox' className='w-3.5 h-3.5 accent-[#E0E0E0]'></input>
                        <X className="w-3.5 h-3.5 text-gray-500 absolute" />
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

        <div style={{marginBottom: '15px'}}>
            <div className='flex items-center gap-1.5' style={{marginBottom: '5px'}}>
                <ChevronDown className="w-4 h-4 text-gray-500" />
                <p className='text-[12.8px] font-medium'>Today</p>
                <p className='text-[12.8px] font-normal text-gray-400'>5</p>
            </div>

            {/* single tasks */}
            <div className='flex flex-col gap-2 rounded-sm' style={{paddingTop: '8px'}}>
                <div className='flex justify-between items-center' style={{paddingInline: '15px 5px'}}>
                    <div className='flex items-center gap-2 relative'>
                        <input type='checkbox' className='w-3.5 h-3.5 accent-[#E0E0E0]'></input>
                        <X className="w-3.5 h-3.5 text-gray-500 absolute" />
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
                        <input type='checkbox' className='w-3.5 h-3.5 accent-[#E0E0E0]'></input>
                        <X className="w-3.5 h-3.5 text-gray-500 absolute" />
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
                        <input type='checkbox' className='w-3.5 h-3.5 accent-[#E0E0E0]'></input>
                        <X className="w-3.5 h-3.5 text-gray-500 absolute" />
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