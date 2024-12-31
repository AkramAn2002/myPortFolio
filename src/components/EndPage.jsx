import React from "react";
import SocialMedias from "./SocialMedias";
import AvatarSocialMediaWhite from "./AvatarSocialMediaWhite";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const EndPage = () => {
  return (
    <div className="w-full flex justify-center items-center bottom-0">
      <div className="bg-[#09041d] h-32 w-full flex justify-center  py-4 shadow-2xl shadow-white">
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          <a href="https://github.com/AkramAn2002">
            <AvatarSocialMediaWhite icon={<FaGithub size={20} />} />
          </a>
          <a href="https://www.instagram.com/akramanou/">
            <AvatarSocialMediaWhite icon={<FaInstagram size={20} />} />
          </a>
          <a href="https://www.linkedin.com/in/akram-anou-9493aa252/">
            <AvatarSocialMediaWhite icon={<FaLinkedin size={20} />} />
          </a>
          <a href="https://www.facebook.com/akram.anou.33">
            <AvatarSocialMediaWhite icon={<FaFacebook size={20} />} />
          </a>
        </div>
        <div className="absolute flex justify-center space-x-3 text-white mt-[55px] text-[10px] sm:text-[13px] md:text-[15px]">
          <span className="cursor-pointer">FAQ</span>
          <span className="cursor-pointer">ABOUT ME</span>
          <span className="cursor-pointer">SERVICES</span>
          <span className="cursor-pointer">CONTACT ME</span>
        </div>
        <div className="absolute bottom-0 text-[10px] sm:text-[12px]">
          Copyright © Anouakram 2024. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default EndPage;
