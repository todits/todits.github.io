import React, { useContext, useState } from "react"
import "../styles/Skills.css"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"

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

   const { themeStyle } = useContext(ThemeContext)

   return (
      <div>
         {skill ? (
            <button
               onClick={selectedButton}
               className="duration-300 cursor-pointer skilltext skilltextpadding group flex flex-col select-none self-center px-5 max-md:border-4 border-8 border-custom-primary rounded-lg"
            >
               <div
                  className={`${themeStyle.headingColor} font-primary max-md:leading-none duration-100 text-[27px] group-hover:text-white min-[1600px]:text-[40px] max-md:text-[19px] leading-7`}
               >
                  {text}
               </div>
               <div className="min-[1600px]:text-xl  text-white text-[16px] h-[30px] font-bold tracking-wide max-md:hidden -mt-[30px] duration-300 scale-0 group-hover:-mt-[5px] group-hover:scale-100">
                  Click for Details
               </div>

               {/* <div className="opacity-0 group absolute group-hover:opacity-100 group-hover:relative duration-100 ">
                  <div className="text-[30px] min-[1600px]:text-[40px]">
                     {text}
                  </div>
                  <div className="min-[1600px]:text-xl text-[20px]  max-md:hidden ">
                     Click for Details
                  </div>
               </div> */}
            </button>
         ) : (
            <div className="skilltext font-primary skilltextpadding cursor-default select-none self-center px-5 min-[1600px]:text-[40px] text-[27px] bg-custom-primary rounded-lg">
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
      </div>
   )
}
