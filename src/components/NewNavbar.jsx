import React, { useContext } from "react"
import "../styles/NavBar.css"
import { Link, NavLink } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"

export default function NewNavbar({ name, onSelectNav, isSelected }) {
   const { theme } = useContext(ThemeContext)
   return (
      <div
         className={`px-4 py-0 cursor-pointer rounded-md font-primary text-xl max-[1600px]:text-[15px] tracking-wider uppercase  hover:scale-100 ${
            isSelected ? "navbarlist-active" : "navbarlist"
         } ${
            theme === "light"
               ? "hover:text-custom-secondary"
               : "hover:text-gray-900"
         } ${theme === "dark" && isSelected ? "navbarlist-activedark" : ""}`}
      >
         <button
            onClick={onSelectNav}
            className={`px-[10px] py-[5px] max-[1600px]:py-[0px] uppercase`}
         >
            {name}
         </button>
      </div>
   )
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
