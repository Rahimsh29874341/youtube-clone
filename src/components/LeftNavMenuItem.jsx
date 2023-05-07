import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
  return (
    <div
      className={`text-white text-[18px] cursor-pointer h-10 flex items-center px-3 mb-[2px] md:mb-[5px] rounded-lg hover:bg-white/[0.15] ${className}`}
      onClick={action}
    >
      <span className="text-2xl md:text-[29px] mr-5 md:mr-0">{icon}</span>
      <span className="md:hidden">{text}</span>
    </div>
  );
};

export default LeftNavMenuItem;
