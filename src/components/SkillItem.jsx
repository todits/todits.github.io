import React, { useState } from "react"
import "../styles/Skills.css"
import { NavLink } from "react-router-dom"

export default function SkillItem({
   text,
   image1,
   image2,
   image3,
   image4,
   image5,
   image6,
   skillImages,
   skill,
   selectedButton,
}) {
   const [clickSkill, setClickSkill] = useState("")
   const imagesExist = image1 || image2 || image3 || image4 || image5 || image6

   const handleClickSkill = (value) => {
      setClickSkill(value)
   }

   return (
      <NavLink>
         {skill ? (
            <button
               onClick={selectedButton}
               className="cursor-pointer skilltext group flex flex-col select-none self-center px-5 border-8 border-custom-primary rounded-lg"
            >
               <div className="group-hover:opacity-0 group-hover:absolute duration-100 sm:text-3xl">
                  {text}
               </div>
               <div className="opacity-0 group absolute group-hover:opacity-100 group-hover:relative duration-100 ">
                  <div className="sm:text-3xl">{text}</div>
                  <div className="sm:text-base">Click for Details</div>
               </div>
            </button>
         ) : (
            <div className="skilltext cursor-default select-none self-center px-5 sm:text-3xl bg-custom-primary rounded-lg">
               <div>{text}</div>
            </div>
         )}

         {imagesExist && (
            <div className={skillImages}>
               {image1 && <img className="skillImage" src={image1} alt="" />}
               {image2 && <img className="skillImage" src={image2} alt="" />}
               {image3 && <img className="skillImage" src={image3} alt="" />}
               {image4 && <img className="skillImage" src={image4} alt="" />}
               {image5 && <img className="skillImage" src={image5} alt="" />}
               {image6 && <img className="skillImage" src={image6} alt="" />}
            </div>
         )}
      </NavLink>
   )
}
