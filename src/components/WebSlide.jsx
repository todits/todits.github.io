import React from "react";
import "../styles/Portfolio.css";

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
   return (
      <div className="flex mt-6 justify-start place-items-center skill">
         <img className="slideimage w-52" src={image} alt="" />
         <div className="hoverbar flex flex-col gap-2">
            <div className=" slidetext font-primary text-left text-custom-secondary text-3xl">
               {name}
            </div>
            <div className="skillbar ml-7 bg-gray-500 h-[30px] rounded-full  ">
               <div
                  className={`${color} h-[100%] skillpercent text-right leading-[1.7]`}
                  style={{ width: rate }}
               >
                  {rate}
               </div>
            </div>
         </div>
      </div>
   );
}
