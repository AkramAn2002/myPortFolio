import React from "react";
import { Tilt } from "react-tilt";

const Technicalskill = ({ img, style, txt }) => {
  // const [value, setValue] = useState(10);

  // // Function to calculate the position of the black box
  // const calculatePosition = (val) => {
  //   // Example logic: Adjust the multiplier and offset based on your slider's width and design
  //   const maxPosition = 320; // Adjust this based on your full slider width
  //   const newPosition = (val / 100) * maxPosition;
  //   return newPosition;
  // };
  return (
    <Tilt
      options={{
        max: 45,
        scal: 1,
        speed: 450,
      }}
    >
      <div className="mb-10">
        <div className="w-[18rem] h-[14.3rem] md:w-[12rem] lg:w-[18rem] bg-black border-[#14008e] border-[3px] hover:shadow-custom-2.5px rounded-2xl relative grid grid-cols-1 justify-items-center">
          <span className="absolute flex items-center justify-center w-full h-full">
            <img
              src={img} // Utilisation du state pour changer l'image
              alt="AkramImage"
              className={`transition-all z-[99px] translate-y-[-5rem] ${style}`}
            />
          </span>
          <div className="mt-[50%] text-white font-extrabold text-[24px] tracking-wider">
            {txt}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Technicalskill;

{
  /* <div className=" w-[75%]"> */
}
{
  /* value==10 ====> ml==152px 
                    flesh ml-169px*/
}
{
  /* <div className="w-11 h-5 bg-black ml-[152px] absolute mt-[-12px] border-[1px] border-[#14008e] shadow-custom-2.5px">
  <p className="text-[10px] text-center mt-0.5">80%</p>
</div>
<div class="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-black mt-1.5 absolute ml-[169px]"></div>
<input
  type="range"
  min="0"
  max="100"
  value="10"
  className="range range-slider h-2 rounded-2xl"
/>
</div> */
}
