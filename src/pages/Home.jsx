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
      icon: <FaFacebookSquare size={60} className="  z-20" />,
      href: "https://www.facebook.com/todits123/",
   },
   {
      text: "Mail",
      icon: <IoMdMail size={60} className=" z-20" />,
      href: "mailto:onlayao@gmail.com",
   },
   {
      text: "LinkedIn",
      icon: <FaLinkedin size={60} className="z-20" />,
      href: "https://www.linkedin.com/in/daryl-onlayao-79a49527a/",
   },
   {
      text: "Git",
      icon: <FaGithub size={55} className="self-center  z-20" />,
      href: "https://github.com/todits",
   },
   {
      text: "Download CV/Resume",
      icon: <FaFileAlt size={55} className="self-center  z-20" />,
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
         className={`flex h-screen w-full relative content ${textcolor}`}
      >
         <img
            className="absolute z-0 h-full w-full object-cover opacity-70 "
            src={background}
         />

         <div className="w-[100%] flex items-center justify-start h-[100%]  md:flex-col pt-[10vh]">
            <div className="flex mb-[2%]">
               {/* <h1 className="font-signature text-4xl sm:text-7xl -rotate-3 text-custom-try ">
						Personal
					</h1> */}
               <h2
                  style={{ fontSize: "clamp(60px, 5vw, 100px)" }}
                  className={`text-7xl pt-[20px] min-[1600px]:py-[50px] font-primary  relative z-10 ${
                     theme === "light"
                        ? "text-custom-secondary duration-300 textshadow"
                        : "text-white duration-300 textshadowdark"
                  }`}
               >
                  PERSONAL PORTFOLIO
               </h2>
            </div>
            <div className="w-[100%] h-[100%] flex justify-between flex-col relative">
               <div className="flex  mx-auto my-[20px] h-[auto]">
                  <div className="max-w-screen-xl flex flex-col justify-center w-[60%] ">
                     <h3
                        className={`text-outline duration-300 text-[30px] font-bold -mb-[20px] z-20 ${
                           theme === "light"
                              ? "text-custom-secondary"
                              : "text-gray-100"
                        } `}
                     >
                        Hello and welcome! I'm
                     </h3>
                     <h2
                        className={`text-[60px] font-bold duration-300 text-custom-fourth ${
                           theme === "light"
                              ? "text-custom-fourth"
                              : "text-custom-primary"
                        }`}
                     >
                        DARYL LOUIE
                     </h2>
                     <h2
                        className={`text-[81px] font-bold text-custom-third -mt-12 ${backgroundtext}`}
                     >
                        ONLAYAO
                     </h2>
                     <div className={`${fontcolor} pb-7`}>
                        <h3 className="pb-4 ">
                           In this portfolio, I'm excited to showcase my journey
                           and the work that I've poured my heart into.
                        </h3>
                        <h3 className="pb-4 ">
                           Each project you'll find here is a testament to my
                           commitment to excellence and my drive to exceed
                           expectations.
                        </h3>
                        <h3 className="">
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
                     <div className="flex flex-wrap gap-2">
                        {SKILL_ITEMS.map(({ text, id, skill }) =>
                           skill ? <Button key={id}>{text}</Button> : null
                        )}
                     </div>
                  </div>
               </div>

               <div className="  w-full flex justify-start">
                  <div className="min-w-screen-lg flex gap-5  mb-5 pl-[4%]">
                     {socials.map(({ text, icon, href, download }) => (
                        <div
                           className={`flex gap-1 socialIconPair cursor-pointer relative ${backgroundtext}`}
                           key={text}
                        >
                           {icon}

                           <div className="socialIcon flex place-items-end z-0">
                              <a
                                 href={href}
                                 className={`font-bold text-[20px] whitespace-nowrap duration-300 ${
                                    theme === "light"
                                       ? "text-custom-third hover:text-custom-fourth"
                                       : "text-custom-background"
                                 }`}
                                 download={download}
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 {text}
                              </a>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className=" absolute max-w-[2150px] w-[100%] self-center bottom-0">
                  <img
                     src={Profile}
                     alt="my profile"
                     className="mx-auto min-[1600px]:min-w-none min-[1600px]:w-[80vh] w-[600px] absolute bottom-[0] right-[0]"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
