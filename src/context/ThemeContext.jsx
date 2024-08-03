import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
   const savedTheme = JSON.parse(localStorage.getItem("theme"));
   const [theme, setTheme] = useState(savedTheme || "light");

   const textColor = theme === "light" ? "text-black" : "text-white ";

   const backgroundColor =
      theme === "light"
         ? "to-white bg-gradient-to-b  from-custom-background"
         : "bg-gray-700 duration-300";

   useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
   }, [theme]);

   useEffect(() => {
      const savedTheme = JSON.parse(localStorage.getItem("theme"));
      if (savedTheme) {
         setTheme(savedTheme);
      }
   }, []);

   return (
      <ThemeContext.Provider
         value={{ theme, setTheme, textColor, backgroundColor }}
      >
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeContextProvider;
