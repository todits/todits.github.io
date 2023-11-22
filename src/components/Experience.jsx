import React from "react"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import graphql from "../assets/graphql.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import "../styles/Experience.css"

const Experience = () => {
   const experiences = [
      {
         id: 1,
         src: html,
         title: "HTML",
         style: "shadow-orange-500",
         rate: "80%",
         color: "orange",
      },
      {
         id: 2,
         src: css,
         title: "CS",
         style: "shadow-blue-500",
         rate: "90%",
         color: "blue",
      },
      {
         id: 3,
         src: javascript,
         title: "JavaScript",
         style: "shadow-yellow-500",
         rate: "85%",
         color: "yellow",
      },
      {
         id: 4,
         src: reactImage,
         title: "React",
         style: "shadow-blue-500",
         rate: "85%",
         color: "blue",
      },
      {
         id: 5,
         src: tailwind,
         title: "Tailwind",
         style: "shadow-sky-500",
         rate: "85%",
         color: "skyblue",
      },

      {
         id: 6,
         src: github,
         title: "GitHub",
         style: "shadow-gray-500",
         rate: "80%",
         color: "gray",
      },
   ]
   return (
      <div
         name="experience"
         className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
      >
         <div className="max-w-screen-lg mx-auto p-4 flex-col justify-center  w-full h-full text-white">
            <p className="text-4xl inline font-bold border-b-4 border-gray-500 p-2 ">
               Experience
            </p>
            <p className="py-6">these are the tehc we</p>
            <div className="w-full  text-center py-8 px-12 sm:px-0 table">
               <ul>
                  {experiences.map(({ id, src, title, style, rate, color }) => (
                     <li
                        key={id}
                        className={`column-table hover:shadow-md duration-700 rounded-lg ${style}`}
                     >
                        <div className="table-left">
                           <div
                              className={` flex-col hover:scale-105 duration-500 py-2 rounded-lg icon  `}
                           >
                              <img src={src} alt="" className="w-12 mx-auto" />
                           </div>
                        </div>
                        <div className="column-text">
                           <p className="">{title}</p>
                        </div>
                        <div className="bar flex">
                           <div
                              className="percent"
                              style={{ width: rate, background: color }}
                           >
                              <div className="color-percent">..</div>
                           </div>
                           <div className="pl-2">{rate}</div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Experience
