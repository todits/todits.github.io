import Home from "./pages/Home";

import About from "./pages/About";

import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import "./global.css";
import React, { createContext } from "react";

import Header from "./pages/Header";
import NewNavbar from "./components/NewNavbar";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";
import navBarList from "./records/navBar.json";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
   const [selectedNavBar, setSelectedNavBar] = useState("home");

   const handleClickNavbar = (selectedtab) => {
      setSelectedNavBar(selectedtab);
   };

   return (
      <ThemeContextProvider>
         <div>
            <Header>
               {navBarList.map(({ link, id }) => (
                  <NewNavbar
                     key={id}
                     onSelectNav={() => handleClickNavbar(link)}
                     name={link}
                     isSelected={selectedNavBar === link}
                  />
               ))}
            </Header>
            <div className="relative to-white bg-gradient-to-b  from-custom-background  h-full backdrop-blur-0">
               {selectedNavBar === "home" && <Home />}
               {selectedNavBar === "about" && <About />}
               {selectedNavBar === "skills" && <Skills />}
               {selectedNavBar === "experience" && <Experience />}
               {selectedNavBar === "contact" && <Contact />}
            </div>
         </div>
      </ThemeContextProvider>
   );
}
//   <BrowserRouter>
//          <Header>
//             <NewNavbar name="Home" to="/" isSelected={selectedNavBar} />
//             <NewNavbar name="About" to="about" />
//             <NewNavbar name="Skills" to="skills" />
//             <NewNavbar name="Experience" to="experience" />
//             <NewNavbar name="Contact" to="contact" />
//          </Header>
//          <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/skills" element={<Skills />}>
//                {/* <Route path="webDeveloping" element={<WebDeveloping />} />
//                <Route path="videoEditing" element={<WebDesign />} /> */}
//             </Route>
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/contact" element={<Contact />} />
//          </Routes>
//       </BrowserRouter>
export default App;
