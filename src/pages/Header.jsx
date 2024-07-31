import Image from "../assets/images/logo2.png";
import "../styles/NavBar.css";
import React from "react";
import logo from "../assets/images/icon.png";

export default function Header({ children }) {
   return (
      <div className=" flex justify-between items-center w-full min-[1600px]:h-[80px] h-[60px] text-black fixed bg-custom-secondary px-[5%] navbarbackground">
         {/* <div className="">
            <button
               style={{ fontSize: "clamp(30px, 2.5vw, 40px)" }}
               className="transitionObject font-primary  text-outline "
            >
               <div className="scale-0">DARYL LOUIE</div>
            </button>

            <img src={Image} alt="" className="imageHover" />
         </div> */}
         <img src={logo} className="w-[50px] drop-shadow-2xl" />
         <ul className="hidden md:flex">{children}</ul>
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
