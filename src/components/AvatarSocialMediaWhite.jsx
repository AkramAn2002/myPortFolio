import React from "react";

const AvatarSocialMediaWhite = ({ icon }) => {
  return (
    <div>
      <div className="avatar placeholder">
        <div className="bg-transparent border-[4px] border-white hover:bg-white text-neutral-content  w-10 rounded-full transition-all duration-500">
          <span className="p-2 text-white hover:text-[#010018]">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default AvatarSocialMediaWhite;
