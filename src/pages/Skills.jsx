import React from "react";
import { Professionalskill, Technicalskill } from "../components";
import { Knob } from "primereact/knob";
import html from "../assets/images/sklisImages/html.png";
import js from "../assets/images/sklisImages/js.png";
import css from "../assets/images/sklisImages/css.png";
import java from "../assets/images/sklisImages/java.png";
import mySql from "../assets/images/sklisImages/mySql.png";
import mongos from "../assets/images/sklisImages/Mongos.png";
import tailwind from "../assets/images/sklisImages/Tailwind.png";
import daisyui from "../assets/images/sklisImages/DaisyUi.png";
import reactjs from "../assets/images/sklisImages/ReactJS.png";
import express from "../assets/images/sklisImages/NodeExpress.png";
import springBoot from "../assets/images/sklisImages/springBoot.png";
import laravel from "../assets/images/sklisImages/laravel10.png";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mt-96 sm:mt-40 md:mt-12 lg:mt-16 xl:mt-20"
      id="Skills"
    >
      <h1 className="text-center mb-14 font-bold text-[30px]">Skills</h1>

      <div className="grid lg:grid-row-[1fr_1fr] w-[100%] gap-14">
        <div className="flex items-center justify-center">
          <div className="rotate-90 absolute transform scale-y-[-1] scale-x-[-1] text-white sm:left-[-20px] left-0 text-2xl lg:block md:block hidden">
            Technical Skills
          </div>
          <div className="grid lg:grid-cols-4 lg:w-[80%] sm:grid-cols-2 md:grid-cols-3 gap-2">
            <Technicalskill img={html} style={"w-[350px]"} txt={"Html"} />
            <Technicalskill img={css} style={"w-[120px]"} txt={"Css"} />
            <Technicalskill img={js} style={"w-[120px]"} txt={"JavaScript"} />
            <Technicalskill img={java} style={"w-[180px]"} txt={"Java"} />
            <Technicalskill img={mySql} style={"mt-[50%]"} />
            <Technicalskill img={mongos} style={"w-[220px]"} txt={"MongoDB"} />
            <Technicalskill
              img={tailwind}
              style={"w-[180px]"}
              txt={"Tailwind Css"}
            />
            <Technicalskill img={daisyui} style={"mt-[50%]"} />
            <Technicalskill img={reactjs} style={"mt-[50%] w-[180px]"} />
            <Technicalskill img={express} style={"mt-[50%] w-[230px]"} />
            <Technicalskill img={springBoot} style={"mt-[50%] w-[230px]"} />
            <Technicalskill img={laravel} style={"w-[150px]"} txt={"Laravel"} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="rotate-90 absolute transform scale-y-[-1] scale-x-[-1] text-white left-0 text-2xl lg:block md:block sm:block hidden ">
            Professional Skills
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-2">
            <Professionalskill value={80} text={"Effective Communication"} />
            <Professionalskill value={70} text={"Stress Management"} />
            <Professionalskill value={80} text={"Project Management"} />
            <div className="hidden lg:block md:block sm:block"></div>
            <Professionalskill value={80} text={" Team Leadership"} />
            <div></div>
            <div className="hidden lg:block md:block sm:block"></div>
            <Professionalskill value={70} text={"Problem-solving"} />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
