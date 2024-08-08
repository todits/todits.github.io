<<<<<<< HEAD
import React, { useContext } from "react"
import "../styles/NavBar.css"
import { Link, NavLink } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"

export default function NewNavbar({ name, onSelectNav, isSelected }) {
   const { theme } = useContext(ThemeContext)
   return (
      <div
         className={`px-4 py-0 cursor-pointer rounded-md font-primary text-xl max-[1600px]:text-[15px] tracking-wider uppercase  hover:scale-100 ${
=======
import React, { useContext } from "react";
import "../styles/NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function NewNavbar({ name, onSelectNav, isSelected }) {
   const { theme } = useContext(ThemeContext);
   return (
      <div
         className={`px-4 py-0 cursor-pointer rounded-md font-primary text-xl tracking-wider uppercase  hover:scale-100 ${
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
            isSelected ? "navbarlist-active" : "navbarlist"
         } ${
            theme === "light"
               ? "hover:text-custom-secondary"
               : "hover:text-gray-900"
         } ${theme === "dark" && isSelected ? "navbarlist-activedark" : ""}`}
      >
         <button
            onClick={onSelectNav}
<<<<<<< HEAD
            className={`px-[10px] py-[5px] max-[1600px]:py-[0px] uppercase`}
=======
            className={`px-[10px] py-[5px] uppercase`}
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
         >
            {name}
         </button>
      </div>
<<<<<<< HEAD
   )
=======
   );
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
}

// para sa NavLink

{
   /* <NavLink
   to={to}
   className={`px-4 py-0 cursor-pointer font-primary text-xl tracking-wider uppercase hover:scale-105 ${
      isSelected ? "navbarlist" : "navbarlist"
   }`}
>
   <div className="navbarlink uppercase">{name}</div>
</NavLink>; */
}
