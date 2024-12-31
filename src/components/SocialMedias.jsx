import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import AvatarSkil from "./AvatarSocialMedia";

const SocialMedias = () => {
  return (
    <div className="grid grid-cols-4 lg:gap-2">
      <a href="https://github.com/AkramAn2002">
        <AvatarSkil icon={<FaGithub size={30} />} />
      </a>
      <a href="https://www.instagram.com/akramanou/">
        <AvatarSkil icon={<FaInstagram size={30} />} />
      </a>
      <a href="https://www.linkedin.com/in/akram-anou-9493aa252/">
        <AvatarSkil icon={<FaLinkedin size={30} />} />
      </a>
      <a href="https://www.facebook.com/akram.anou.33">
        <AvatarSkil icon={<FaFacebook size={30} />} />
      </a>
    </div>
  );
};

export default SocialMedias;
