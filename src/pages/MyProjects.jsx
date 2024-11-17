// src/pages/MyProjects.jsx
import React from "react";
import { Projects } from "../components";
import img1 from "../assets/imagesProject/Jobster.png";
const MyProjects = () => {
  return (
    <div className="relative mt-20" id="Projects">
      {/* Make parent div relative for absolute positioning of background */}
      <h1 className="text-center mb-11 font-bold text-[30px]">My Projects</h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
          <Projects img={img1} />
          <Projects img={img1} />
          <Projects img={img1} />
          <Projects img={img1} />
          <Projects img={img1} />
          <Projects img={img1} />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
