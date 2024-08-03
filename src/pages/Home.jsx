import React, { useContext } from "react";
import Profile from "../assets/profile2.png";
import "../styles/Home.css";
import background from "../assets/images/background.png";
import {
   FaFacebookSquare,
   FaLinkedin,
   FaFileAlt,
   FaGithub,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Button from "../components/Button";
import { SKILL_ITEMS } from "../records/records";
import { ThemeContext } from "../context/ThemeContext";

const socials = [
   {
      text: "Facebook",
      icon: <FaFacebookSquare size={60} className="  z-20 max-md:w-[30px]" />,
      href: "https://www.facebook.com/todits123/",
   },
   {
      text: "Mail",
      icon: <IoMdMail size={60} className=" z-20 max-md:w-[30px]" />,
      href: "mailto:onlayao@gmail.com",
   },
   {
      text: "LinkedIn",
      icon: <FaLinkedin size={60} className="z-20 max-md:w-[30px]" />,
      href: "https://www.linkedin.com/in/daryl-onlayao-79a49527a/",
   },
   {
      text: "Git",
      icon: (
         <FaGithub size={55} className="self-center  z-20 max-md:w-[30px]" />
      ),
      href: "https://github.com/todits",
   },
   {
      text: "Download CV/Resume",
      icon: (
         <FaFileAlt size={55} className="self-center  z-20 max-md:w-[25px]" />
      ),
      download: true,
      href: "/CV and Portfolio.pdf",
   },
];

const Home = () => {
   const { theme } = useContext(ThemeContext);
   const backgroundtext =
      theme === "light"
         ? "text-custom-secondary duration-300"
         : "text-white duration-300";

   const textcolor =
      theme === "light" ? "bg-white duration-300" : "bg-black duration-300";

   const fontcolor =
      theme === "light"
         ? "text-gray-800 duration-300"
         : "text-white duration-300";

   return (
      <div
         name="home"
         className={`flex h-screen w-full max-sm:h-full relative content ${textcolor}`}
      >
         <img
            className="absolute z-0 h-full w-full object-cover opacity-70 "
            src={background}
            lazyloading
         />

         <div className="w-[100%] max-md:pt-[40px] flex items-center justify-start h-[100%] flex-col pt-[10vh]">
            {/* <h1 className="font-signature text-4xl sm:text-7xl -rotate-3 text-custom-try ">
						Personal
					</h1> */}
            <h2
               style={{ fontSize: "clamp(35px, 5vw, 100px)" }}
               className={`max-md:text-[20px] max-md:px-[20px] flex mb-[2%] pt-[20px] min-[1600px]:py-[50px] font-primary text-center leading-[35px] relative z-10 ${
                  theme === "light"
                     ? "text-custom-secondary duration-300 textshadow"
                     : "text-white duration-300 textshadowdark"
               }`}
            >
               PERSONAL PORTFOLIO
            </h2>
            <div className="w-[100%] h-[100%] flex justify-between max-md:gap-[45px] flex-col relative">
               <div className="flex px-[25px] mx-auto  h-[auto] max-md:my-[10px]">
                  <div className="max-w-screen-xl flex flex-col justify-center w-[60%] max-md:w-[100%] ">
                     <h3
                        className={`text-outline max-md:text-[20px] duration-300 text-[30px] font-bold -mb-[20px] z-20 ${
                           theme === "light"
                              ? "text-custom-secondary"
                              : "text-gray-100"
                        } `}
                     >
                        Hello and welcome! I'm
                     </h3>
                     <h2
                        className={`text-[60px] max-md:text-[35px] font-bold duration-300 text-custom-fourth ${
                           theme === "light"
                              ? "text-custom-fourth"
                              : "text-custom-primary"
                        }`}
                     >
                        DARYL LOUIE
                     </h2>
                     <h2
                        className={`text-[81px] font-bold max-md:text-[47px] max-md:-mt-7 text-custom-third -mt-12 ${backgroundtext}`}
                     >
                        ONLAYAO
                     </h2>
                     <div className={`${fontcolor}   pb-7`}>
                        <h3 className="pb-4 max-md:text-[15px] max-md:pb-2 max-md:leading-4">
                           In this portfolio, I'm excited to showcase my journey
                           and the work that I've poured my heart into.
                        </h3>
                        <h3 className="pb-4 max-md:text-[15px] max-md:pb-2 max-md:leading-4">
                           Each project you'll find here is a testament to my
                           commitment to excellence and my drive to exceed
                           expectations.
                        </h3>
                        <h3 className="max-md:text-[15px] max-md:leading-4">
                           <strong
                              className={`duration-300 ${
                                 theme === "light"
                                    ? "text-custom-secondary"
                                    : "text-custom-primary"
                              }`}
                           >
                              Thank you
                           </strong>{" "}
                           for joining me on this journey, and I hope you find
                           inspiration and excitement within these pages.
                        </h3>
                     </div>
                     <div className="flex flex-wrap gap-2 w-[70%] max-md:w-[60%]">
                        {SKILL_ITEMS.map(({ text, id, skill }) =>
                           skill ? <Button key={id}>{text}</Button> : null
                        )}
                     </div>
                  </div>
               </div>

               <div className="w-full flex justify-start">
                  <div className="min-w-screen-lg flex gap-5 max-md:mb-0 mb-5 pl-[4%]">
                     {socials.map(({ text, icon, href, download }) => (
                        <a
                           href={href}
                           download={download}
                           target="_blank"
                           rel="noreferrer"
                           className={`flex gap-1 socialIconPair cursor-pointer relative ${backgroundtext}`}
                           key={text}
                        >
                           {icon}

                           <div
                              className={`socialIcon flex place-items-end z-0 max-md:hidden font-bold text-[20px] whitespace-nowrap duration-300 ${
                                 theme === "light"
                                    ? "text-custom-third hover:text-custom-fourth"
                                    : "text-custom-background"
                              }`}
                           >
                              {text}
                           </div>
                        </a>
                     ))}
                  </div>
               </div>
               <div className="absolute max-w-[2150px] w-[100%]  self-center bottom-0">
                  <img
                     src={Profile}
                     alt="my profile"
                     className="max-md:w-[70%] max-md:max-w-[300px] mx-auto min-[1600px]:min-w-none  min-[1600px]:w-[800px] w-[600px] absolute bottom-[0] right-[0]"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
