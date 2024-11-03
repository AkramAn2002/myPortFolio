import React from "react";

const AvatarSkil = ({ icon }) => {
  return (
    <>
      <div className="avatar placeholder">
        <div className="bg-transparent border-[5px] border-[#14008e] hover:bg-[#14008e] shadow-custom-1.5px hover:shadow-custom-3px text-neutral-content  w-14 rounded-full transition-all duration-500">
          <span className="p-2 text-[#14008e] hover:text-[#010018]">
            {icon}
          </span>
        </div>
      </div>
    </>
  );
};

export default AvatarSkil;
