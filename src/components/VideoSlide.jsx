<<<<<<< HEAD
import React, { useContext } from "react"
import "../styles/Portfolio.css"
import { ThemeContext } from "../context/ThemeContext"

export default function VideoSlide({ image, name, selectCircle, rate }) {
   const { themeStyle } = useContext(ThemeContext)
   return (
      <div className="cursor-pointer videoEditing flex max-md:w-[80px] flex-col">
         <div className="flex justify-center">
            <img
               src={image}
               alt=""
               className="videoImage max-md:hover:scale-100"
            />
         </div>
         <div
            className={`font-bold tracking-wide text-center max-md:text-[15px] max-md:leading-4 leading-6 text-2xl ${themeStyle.headingColor} w-auto`}
         >
            {name}
         </div>
         <div className="videoRate absolute max-md:hidden">
=======
import React, { useContext } from "react";
import "../styles/Portfolio.css";
import { ThemeContext } from "../context/ThemeContext";

export default function VideoSlide({ image, name, selectCircle, rate }) {
   const { themeStyle } = useContext(ThemeContext);
   return (
      <div className="cursor-pointer videoEditing flex flex-col">
         <div className="flex justify-center">
            <img src={image} alt="" className="videoImage " />
         </div>
         <div
            className={`font-bold tracking-wide text-center leading-6 text-2xl ${themeStyle.headingColor} w-[160px]`}
         >
            {name}
         </div>
         <div className="videoRate absolute">
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
            <div className="videoSkill ">
               <div className="videoOuter">
                  <div className="videoInner">
                     <div
                        id="number"
                        className={`${themeStyle.brownHeading} font-primary text-2xl text-custom-third`}
                     >
                        {rate}%
                     </div>
                  </div>
               </div>
            </div>

            <svg
<<<<<<< HEAD
               className="percent max-md:w-[100px] max-md:h-[100px] "
=======
               className="percent"
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
               xmlns="http://www.w3.org/2000/svg"
               version="1.1"
               width="150"
               height="150"
               position="absolute"
               top="0"
               left="0"
            >
               <defs>
                  <linearGradient id="GradientColor">
                     <stop offset="0%" stopColor="#e91e63" />
                     <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
               </defs>

               <circle
                  cx="70"
                  cy="70"
                  r="60"
                  stroke-linecap="round"
<<<<<<< HEAD
                  className={`${selectCircle}`}
=======
                  className={selectCircle}
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
               />
            </svg>
         </div>
      </div>
<<<<<<< HEAD
   )
=======
   );
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
}
