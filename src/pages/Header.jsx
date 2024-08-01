import Image from "../assets/images/logo2.png";
import "../styles/NavBar.css";
import React, { useState } from "react";
import logo from "../assets/images/icon.png";
import light from "../assets/images/light.png";
import dark from "../assets/images/dark.png";

export default function Header({ children }) {
   const [mode, setMode] = useState("light");
   console.log(mode);

   const handleClickMode = () => {
      setMode((prev) => (prev === "light" ? "dark" : "light"));
   };
   return (
      <div className=" flex justify-between items-center w-full min-[1600px]:h-[80px] h-[60px] text-black fixed bg-custom-secondary px-[4%] navbarbackground">
         {/* <div className="">
            <button
               style={{ fontSize: "clamp(30px, 2.5vw, 40px)" }}
               className="transitionObject text-outline font-primary   "
            >
               <div className="scale-0">DARYL LOUIE</div>
            </button>

            <img src={Image} alt="" className="imageHover" />
         </div> */}
         <img src={logo} className="w-[50px] drop-shadow-2xl" />
         <div className="flex relative">
            <ul className="hidden md:flex mr-12 h-10 self-center">
               {children}
            </ul>
            <button onClick={handleClickMode}>
               {mode === "light" && (
                  <img src={light} className="w-10 duration-200 showImage" />
               )}
               {mode === "dark" && (
                  <img src={dark} className="w-10 duration-200 showImage" />
               )}
            </button>
         </div>
      </div>
   );
}

/* <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
         >
            {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
         </div>

         {nav && (
            <ul className="absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 items-center flex flex-col justify-center">
               {links.map(({ id, link }) => (
                  <li
                     key={id}
                     className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  >
                     {link}
                  </li>
               ))}
            </ul>
         )} */
