import React, { useState, useEffect, useCallback } from "react";
import { ImageCircle, TextPart } from "../components";
import Particles from "react-tsparticles";

import { loadSlim } from "tsparticles-slim";

const HomePage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    // Function to handle screen resizing
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="h-auto">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false, // Désactiver le clic
              },
              onHover: {
                enable: false, // Désactiver l'interaction au survol
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#007BFF", // Couleur des hexagones
            },
            links: {
              enable: true,
              color: "#007BFF",
              distance: 75, // Diminuer la distance des liens
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              speed: 1, // Vitesse de mouvement lente pour un effet plus doux
              outModes: {
                default: "out",
              },
              random: false,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40, // Réduire le nombre de particules
            },
            opacity: {
              value: 0.6, // Opacité pour un effet subtil
            },
            shape: {
              type: "polygon",
              polygon: {
                nb_sides: 6, // Nombre de côtés pour hexagone
              },
            },
            size: {
              value: { min: 1, max: 3 }, // Taille réduite des hexagones
            },
          },
          detectRetina: true,
        }}
      />

      <div className="grid sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-[2fr_1fr]">
        {isLargeScreen ? (
          <>
            <TextPart />
            <ImageCircle />
          </>
        ) : (
          <>
            <ImageCircle />
            <TextPart />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
