import Home from "./pages/Home";

import About from "./pages/About";

import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import "./global.css";
import React from "react";

import Header from "./pages/Header";
import NewNavbar from "./components/NewNavbar";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
   const [selectedNavBar, setSelectedNavBar] = useState("home");

   const handleClickNavbar = (selectedtab) => {
      setSelectedNavBar(selectedtab);
   };

   return (
      <div className="to-white bg-gradient-to-b  from-custom-background ">
         <BrowserRouter>
            <Header>
               <NewNavbar name="Home" to="/" isSelected={selectedNavBar} />
               <NewNavbar name="About" to="about" />
               <NewNavbar name="Skills" to="skills" />
               <NewNavbar name="Experience" to="experience" />
               <NewNavbar name="Contact" to="contact" />
            </Header>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/skills" element={<Skills />}>
                  {/* <Route path="webDeveloping" element={<WebDeveloping />} />
                  <Route path="videoEditing" element={<WebDesign />} /> */}
               </Route>
               <Route path="/experience" element={<Experience />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
