import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ReactCardFlip from "react-card-flip";

const Projects = ({ img, title, index, projectInfo, linkGIt, moreDetails }) => {
  // Utilisation de useState pour gérer l'état isFlipped
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false); // Remet la carte dans son état initial
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Face avant */}
      <div
        className="lg:h-[450px] lg:w-[400px] h-[400px] w-[350px] bg-black border-[#14008e] border-[2px] hover:shadow-custom-2.5px mb-2 rounded-2xl relative transform duration-100"
        // Ajout d'un événement pour déclencher le flip
        // Ajout pour retourner à l'état initial
      >
        <a href={linkGIt} className="flex right-0 absolute">
          <div className="rounded-full bg-black p-2 hover:bg-[#14008e] hover:shadow-custom-1.5px transition-colors">
            <FaGithub className="text-white" size={24} />
          </div>
        </a>
        <img src={img} alt={title} className="h-[60%] w-full p-2 rounded-2xl" />
        <div className="p-3 w-full">
          <h1 className="font-bold text-xl text-white pb-3">{title}</h1>
          <p className="text-[#8d85b1]">{projectInfo}</p>
          <div className="flex justify-center">
            <button
              onClick={handleFlip}
              className="bg-[#14008e] p-2 mt-2 rounded-2xl pl-5 pr-5"
            >
              See more
            </button>
          </div>
        </div>
      </div>

      {/* Face arrière */}
      <div
        className="lg:h-[450px] lg:w-[400px] h-[400px] w-[350px] bg-black border-[2px] hover:shadow-custom-2.5px mb-2 rounded-2xl relative border-b-0"
        onClick={handleFlip} // Le même événement pour revenir à la face avant
        onMouseLeave={handleMouseLeave} // Ajout pour retourner à l'état initial
      >
        <div className="p-3 w-full  flex justify-center items-center text-white">
          <div>
            <h1 className="font-bold text-xl text-center">
              More Project Details
            </h1>
            <p className="text-[15px] mt-7 text-start">{moreDetails}</p>
          </div>
        </div>
        <div className="flex justify-center align-bottom  ">
          <button
            onClick={handleFlip}
            className="bg-white text-black p-2 rounded-2xl pl-5 pr-5"
          >
            See less
          </button>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Projects;
