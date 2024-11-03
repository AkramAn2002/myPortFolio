import React from "react";
import { motion } from "framer-motion";

const EducationInfos = ({
  title1,
  value,
  info,
  position1,
  height,
  maxWidth,
}) => {
  // Define variants to combine the animations
  const variants = {
    initial: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      boxShadow: [
        "0px 0px 10px rgba(20, 0, 142, 0.5)",
        "0px 0px 30px rgba(20, 0, 142, 1)",
      ],
      transition: {
        duration: 0.8,
        ease: "easeOut",
        boxShadow: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse", // Allows for back and forth transition
        },
      },
    },
  };

  return (
    <motion.div
      className={`bg-black border-[#14008e] border-[5px] ${height} max-w-[50vh] rounded-full shadow-custom-2.5px sm:ml-0 md:ml-0 lg:ml-0 ml-8`}
      variants={variants} // Use the variants
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className={`m-4 font-bold text-[20px] ${position1} mr-[34px]`}>
        {title1} {title1 === "Internship" ? ":" : ""}
        <span className="text-[#14008e]"> {value} </span>
      </h1>
      <p className={`${maxWidth} ${position1}`}>{info}</p>
    </motion.div>
  );
};

export default EducationInfos;
