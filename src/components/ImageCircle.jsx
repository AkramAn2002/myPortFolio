import React, { useEffect, useState } from "react";
import akramImage from "../assets/images/akramPhoto2.png";
import akramImage2 from "../assets/images/akramPhoto3.png";

const ImageCircle = () => {
  const [img, setImg] = useState(akramImage); // Définir l'image par défaut

  useEffect(() => {
    // Tu peux gérer ici une logique si tu veux changer l'image automatiquement avec setTimeout par exemple
  }, []);

  const handleMouseEnter = () => {
    setImg(akramImage2); // Changer d'image au hover
  };

  const handleMouseLeave = () => {
    setImg(akramImage); // Revenir à l'image originale
  };

  return (
    <div className="flex lg:block justify-center items-center h-full relative lg:mt-0 md:mt-8 sm:mt-8 mt-14">
      <div className="avatar placeholder">
        <div
          className="bg-transparent hover:bg-[#14008e]  hover:shadow-custom-3px border-[#14008e] border-[5px] text-neutral-content lg:w-[450px] md:w-[40px] sm:w-[430px] w-[300px] rounded-full shadow-[#14008e] shadow-custom-2px"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="absolute flex items-center justify-center mt-[-110px] lg:w-[415px] md:w-[400px] sm:w-[400px]">
            <img
              src={img} // Utilisation du state pour changer l'image
              alt="AkramImage"
              className="rounded-br-[170px] rounded-bl-[170px] blue-tint transition-all duration-500 z-[99px]"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCircle;
