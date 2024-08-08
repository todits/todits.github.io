<<<<<<< HEAD
import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Button({ children }) {
   const { theme } = useContext(ThemeContext)
=======
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Button({ children }) {
   const { theme } = useContext(ThemeContext);
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
   return (
      <button
         className={`px-3 py-[3px] ${
            theme === "light"
               ? "bg-custom-secondary text-white "
               : "bg-gray-600 text-white"
         } text-[14px] pointer rounded-md`}
      >
         {children}
      </button>
<<<<<<< HEAD
   )
=======
   );
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
}
