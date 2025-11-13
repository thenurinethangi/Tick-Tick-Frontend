import React from "react";
import { CalendarCheck2, SquareArrowRight, Inbox, SquareCheck, CircleX, Trash } from "lucide-react";
import { NavLink } from "react-router-dom";

function TasksNavBar() {
  return (
    <div className="h-full border-r border-gray-200 flex flex-col justify-between items-start" style={{ padding: "8px" }}>
      <div className="flex flex-col gap-0.2">
        
        {/* single nav */}
        <NavLink to={"/tasks/today"}>
          <div className="flex gap-2 items-center rounded-md" style={{ padding: "10px 14px" }}>
            <CalendarCheck2 className="w-4.5 h-4.5 text-gray-500" />
            <div className="flex items-center gap-28">
              <p className="text-[15px]">Today</p>
              <p className="text-[14px] text-gray-400">5</p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/tasks/next7days"}>
          <div className="flex gap-2 items-center" style={{ padding: "10px 14px" }}>
            <SquareArrowRight className="w-4.5 h-4.5 text-gray-500" />
            <div className="flex items-center gap-17">
              <p className="text-[15px]">Next 7 Days</p>
              <p className="text-[14px] text-gray-400">5</p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/tasks/all"}>
          <div className="flex gap-2 items-center" style={{ padding: "10px 14px" }}>
            <Inbox className="w-4.5 h-4.5 text-gray-500" />
            <div className="flex items-center gap-34">
              <p className="text-[15px]">All</p>
              <p className="text-[14px] text-gray-400">5</p>
            </div>
          </div>
        </NavLink>
        <hr className="border border-gray-100" style={{ marginBlock: "20px" }}></hr>
      </div>

      <div className="flex flex-col gap-0.2" style={{ marginBottom: "120px" }}>
        <hr className="border border-gray-100 w-[220px]" style={{ marginBlock: "10px" }}></hr>
        
        {/* single nav */}
        <NavLink to={"/tasks/complete"}>
          <div className="flex gap-2 items-center" style={{ padding: "10px 14px" }}>
            <SquareCheck className="w-4.5 h-4.5 text-gray-500" />
            <div className="flex items-center gap-28">
              <p className="text-[15px]">Completed</p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/tasks/notdo"}>
          <div className="flex gap-2 items-center" style={{ padding: "10px 14px" }}>
            <CircleX className="w-4.5 h-4.5 text-gray-500" />
            <div className="flex items-center gap-17">
              <p className="text-[15px]">Wan't Do</p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/tasks/deleted"}>
          <div className="flex gap-2 items-center" style={{ padding: "10px 14px" }}>
            <Trash className="w-4.5 h-4.5 text-gray-500" />
            <div className="flex items-center gap-34">
              <p className="text-[15px]">Trash</p>
            </div>
          </div>
        </NavLink>
        
      </div>
    </div>
  );
}

export default TasksNavBar;
