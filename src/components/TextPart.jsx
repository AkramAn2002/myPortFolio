import React, { useEffect } from "react";
import Typed from "typed.js"; // Importer la bibliothèque
import { SocialMedias, Button } from "./";
import myCV from "../assets/Docs/CvAkram_ANOU(ENG).pdf";
const TextPart = () => {
  useEffect(() => {
    // Initialiser Typed.js après le montage du composant
    const typed = new Typed("#typed-element", {
      strings: ["Full stack <span style='color:#14008e'>developer</span>"], // Color applied to "developer"
      // Les textes que tu veux afficher
      typeSpeed: 50, // Vitesse de frappe
      backSpeed: 10, // Vitesse de suppression
      startDelay: 0, // Délai avant de commencer
      showCursor: false, // Désactiver le curseur
      smartBackspace: true, // Suppression intelligente
    });

    // Nettoyage pour éviter les fuites de mémoire
    return () => {
      typed.destroy(); // Détruire l'instance de Typed.js lors du démontage
    };
  }, []);

  return (
    <div className="lg:ml-20 sm:ml-[5%] md:ml-[5%] lg:mt-[-20px] ml-2 mt-8">
      <p className="lg:text-[80px] sm:text-[40px] text-[25px] font-bold">
        Hi, it's <span className="text-[#14008e] ">ANOU Akram</span>
      </p>
      <span
        id="typed-element"
        className="lg:text-[40px] text-[35px] font-bold"
      ></span>{" "}
      <p className="lg:text-[18px] text-[15px] font-bold text-start w-[95%] mt-2">
        As a full-stack developer, I possess the expertise to manage the entire
        software development lifecycle, from design to deployment. I focus on
        building high-performance, well-architected, and maintainable
        applications by adhering to industry best practices. With a deep
        understanding of both front-end and back-end development, I ensure
        seamless integration between different system components, resulting in
        efficient and scalable solutions. I thrive on solving complex technical
        challenges while maintaining a user-centered approach. My goal is to
        deliver high-quality solutions that meet the needs of users, ensuring
        long-term sustainability and scalability.
      </p>
      <div className="lg:w-[25%] mt-6 md:w-[40%] sm:w-[50%] w-[60%]">
        <SocialMedias />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-2 w-[100%] sm400:w-[80%] sm:w-[70%] md:w-[50%] lg:[50%]">
        <a href={myCV} download target="_blank">
          <Button
            colorBg="[#14008e]"
            value="Download CV"
            colorTxt="[#010018]"
            borderColor="transparent hover:bg-[#14008e] hover:text-[#010018]"
            hover1="tracking-wider"
            hover2="shadow-custom-1.5px"
          />
        </a>
      </div>
      {/* Élément où le texte Typed.js sera inséré */}
    </div>
  );
};

export default TextPart;
