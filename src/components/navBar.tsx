import React from "react";
import {House, UserCog, SquareCheck, Disc, Search, Layers2, RotateCw, CircleQuestionMark, Bell} from "lucide-react";

function NavBar() {
  return (
    <div className="w-[60px] h-screen bg-white border-r border-gray-200 flex flex-col justify-between items-center" style={{paddingBlock: '17px'}}>
      <div className="flex flex-col justify-start items-center gap-5">
        <House className="w-5.5 h-5.5 text-gray-500" />
        <UserCog className="w-5.5 h-5.5 text-gray-500" />
        <SquareCheck className="w-5.5 h-5.5 text-gray-500" />
        <Disc className="w-5.5 h-5.5 text-gray-500" />
        <Layers2 className="w-5.5 h-5.5 text-gray-500" />
        <Search className="w-5.5 h-5.5 text-gray-500" />
      </div>
      <div className="flex flex-col justify-start items-center gap-4">
        <RotateCw className="w-5.5 h-5.5 text-gray-500" />
        <Bell className="w-5.5 h-5.5 text-gray-500" />
        <CircleQuestionMark className="w-5.5 h-5.5 text-gray-500" />
      </div>
    </div>
  );
}

export default NavBar;
