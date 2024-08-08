<<<<<<< HEAD
import React, { useContext } from "react"
import "../styles/Portfolio.css"
import { ThemeContext } from "../context/ThemeContext"
=======
import React from "react";
import "../styles/Portfolio.css";
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d

export default function WebSlide({
   image,
   name,
   image3,
   image4,
   image5,
   image6,
   color,
   rate,
}) {
<<<<<<< HEAD
   const { themeStyle } = useContext(ThemeContext)
   return (
      <div className="flex mt-6 max-md:mt-3 justify-start place-items-center skill">
         <img className="slideimage w-36 max-md:w-16 " src={image} alt="" />
         <div className="hoverbar flex flex-col gap-2">
            <h3
               className={`${themeStyle.headingColor} slidetext font-primary text-left text-custom-secondary`}
            >
               {name}
            </h3>
            <div className="skillbar ml-7 bg-gray-500 h-[20px] max-md:h-[15px]  rounded-full">
               <div
                  className={`${color} h-[100%] skillpercent max-md:text-[12px]  text-right leading-[1.7]`}
=======
   return (
      <div className="flex mt-6 justify-start place-items-center skill">
         <img className="slideimage w-36" src={image} alt="" />
         <div className="hoverbar flex flex-col gap-2">
            <div className=" slidetext font-primary text-left text-custom-secondary text-3xl">
               {name}
            </div>
            <div className="skillbar ml-7 bg-gray-500 h-[30px] rounded-full  ">
               <div
                  className={`${color} h-[100%] skillpercent text-right leading-[1.7]`}
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
                  style={{ width: rate }}
               >
                  {rate}
               </div>
            </div>
         </div>
      </div>
<<<<<<< HEAD
   )
=======
   );
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
}
