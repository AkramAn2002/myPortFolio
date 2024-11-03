import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import AvatarSkil from "./AvatarSocialMedia";

const SocialMedias = () => {
  return (
    <div className="grid grid-cols-4">
      <AvatarSkil icon={<FaGithub size={30} />} />
      <AvatarSkil icon={<FaInstagram size={30} />} />
      <AvatarSkil icon={<FaLinkedin size={30} />} />
      <AvatarSkil icon={<FaFacebook size={30} />} />
    </div>
  );
};

export default SocialMedias;
