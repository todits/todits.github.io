import React, { useEffect, useState } from "react";
import "../styles/Portfolio.css";

export default function VideoSlide({ image, name, selectCircle, rate }) {
   return (
      <div className="cursor-pointer videoEditing flex flex-col">
         <div className="flex justify-center">
            <img src={image} alt="" className="videoImage " />
         </div>
         <div className="font-primary text-center leading-6 text-2xl text-custom-secondary w-[160px] ">
            {name}
         </div>
         <div className="videoRate absolute">
            <div className="videoSkill ">
               <div className="videoOuter">
                  <div className="videoInner">
                     <div
                        id="number"
                        className="font-primary text-2xl text-custom-third"
                     >
                        {rate}%
                     </div>
                  </div>
               </div>
            </div>

            <svg
               className="percent"
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
                  className={selectCircle}
               />
            </svg>
         </div>
      </div>
   );
}
