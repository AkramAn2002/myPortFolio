// src/pages/MyProjects.jsx
import React from "react";
import { Projects } from "../components";
import img1 from "../assets/images/projects/chatApp.png";
import img2 from "../assets/images/projects/ComfyStore.png";
import img3 from "../assets/images/projects/flightSimulation.png";
const MyProjects = () => {
  return (
    <div className="relative mt-20" id="Projects">
      {/* Make parent div relative for absolute positioning of background */}
      <h1 className="text-center mb-11 font-bold text-[30px]">My Projects</h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
          <Projects
            img={img1}
            title={"Akan chat"}
            linkGIt={"https:github.com/AkramAn2002/ChatApp.git"}
            projectInfo={
              "A real-time chat application designed to enable seamless communication between users. "
            }
            moreDetails={
              "The back-end is built using Jakarta EE and Spring Boot, providing efficient management of message exchanges. Asynchronous communication is implemented to ensure a smooth and responsive user experience, allowing for instant messaging without delays."
            }
          />
          <Projects
            img={img2}
            title={"Comfy store"}
            linkGIt={" https://github.com/AkramAn2002/ComfyStore.git"}
            projectInfo={
              "An e-commerce website built using the MERN stack to deliver a dynamic and seamless shopping experience."
            }
            moreDetails={
              "The back-end API is powered by Express and Node.js, managing product and user data in MongoDB. The front-end is developed in React, featuring integrated navigation, search functionality, and a shopping cart for an intuitive user experience."
            }
          />
          <Projects
            img={img3}
            title={"Flight Simulation"}
            linkGIt={"https://github.com/AkramAn2002/FlightSimulation.git"}
            projectInfo={
              "Developed a team-based flight ticket reservation application using Java and Java Swing for an interactive graphical interface"
            }
            moreDetails={
              "The application allows users to search, book, and manage flights. MySQL is used to store flight schedules, customer details, and reservations, ensuring efficient data retrieval and booking operations."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
