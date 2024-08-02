import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
   const savedTheme = JSON.parse(localStorage.getItem("theme"));
   const [theme, setTheme] = useState(savedTheme || "light");

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
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeContextProvider;
