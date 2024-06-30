import React from "react";
import "../styles/NavBar.css";
import { Link, NavLink } from "react-router-dom";

export default function NewNavbar({ name, onSelectNav, isSelected }) {
   return (
      <div
         className={`px-4 py-0 cursor-pointer font-primary text-xl tracking-wider uppercase hover:scale-105 ${
            isSelected ? "navbarlist-active" : "navbarlist"
         }`}
      >
         <button onClick={onSelectNav} className={`navbarlink uppercase`}>
            {name}
         </button>
      </div>
   );
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
