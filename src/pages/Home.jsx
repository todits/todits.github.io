import React from "react";
import Profile from "../assets/profile2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";
import "../styles/Home.css";
import facebook from "../assets/socialIcons/fb.png";
import mail from "../assets/socialIcons/mail.png";
import resume from "../assets/socialIcons/resume.png";
import linkedIn from "../assets/socialIcons/linkedIn.png";
import background from "../assets/images/background.png";

const socials = [
   {
      text: "Facebook",
      icon: facebook,
      href: "https://www.facebook.com/todits123/",
   },
   {
      text: "Mail",
      icon: mail,
      href: "mailto:onlayao@gmail.com",
   },
   {
      text: "LinkedIn",
      icon: linkedIn,
      href: "https://www.linkedin.com/in/daryl-onlayao-79a49527a/",
   },
   {
      text: "Download CV/Resume",
      icon: resume,
      download: true,
      href: "/CV and Portfolio.pdf",
   },
];

const Home = () => {
   return (
      <div
         name="home"
         className="flex h-screen w-full to-white bg-gradient-to-b from-custom-background relative content"
      >
         <img className="absolute z-0 h-full w-full" src={background} />

         <div className="w-[100%] flex items-center justify-start h-[100%]  md:flex-col pt-[10vh]">
            <div className="flex mb-[2%]">
               {/* <h1 className="font-signature text-4xl sm:text-7xl -rotate-3 text-custom-try ">
						Personal
					</h1> */}
               <h2
                  style={{ fontSize: "clamp(60px, 5vw, 100px)" }}
                  className="text-7xl pt-[20px] min-[1600px]:py-[50px] font-primary text-custom-secondary textshadow relative z-10"
               >
                  PERSONAL PORTFOLIO
               </h2>
            </div>
            <div className="w-[100%] h-[100%] flex justify-between flex-col relative">
               <div className="flex  mx-auto my-[20px] h-[auto]">
                  <div className="max-w-screen-xl flex flex-col justify-center w-[60%] max-[1600px]:my-[0] my-[20px]">
                     <h3 className=" text-outline text-[30px] font-bold -mb-[20px] z-20 text-custom-secondary">
                        Hello and welcome! I'm
                     </h3>
                     <h2 className=" text-[60px] font-bold text-custom-fourth">
                        DARYL LOUIE
                     </h2>
                     <h2 className=" text-[81px] font-bold text-custom-third -mt-12">
                        ONLAYAO
                     </h2>
                     <div className=" text-gray-800  min-[1600px]:pb-9">
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
                           <strong className="text-custom-secondary">
                              Thank you
                           </strong>{" "}
                           for joining me on this journey, and I hope you find
                           inspiration and excitement within these pages.
                        </h3>
                     </div>
                  </div>
               </div>

               <div className="  w-full flex justify-start">
                  <div className="min-w-screen-lg flex gap-5  mb-5 pl-[4%]">
                     {socials.map(({ text, icon, href, download }) => (
                        <div
                           className="flex gap-1 socialIconPair cursor-pointer"
                           key={text}
                        >
                           <img src={icon} alt="" className="w-[8vh]" />
                           <div className="socialIcon flex place-items-end">
                              <a
                                 href={href}
                                 className="text-custom-third font-primary text-[20px] whitespace-nowrap duration-300 hover:text-custom-fourth"
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
