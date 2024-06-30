import React from "react";
import Profile from "../assets/profile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";
import "../styles/Home.css";
import facebook from "../assets/socialIcons/fb.png";
import mail from "../assets/socialIcons/mail.png";
import resume from "../assets/socialIcons/resume.png";
import linkedIn from "../assets/socialIcons/linkedIn.png";

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
         className="flex h-screen w-full to-white bg-gradient-to-b from-custom-background content"
      >
         <div className="w-[100%] flex items-center justify-start h-[100%]  md:flex-col pt-[10vh]">
            <div className="flex mb-[2%]">
               {/* <h1 className="font-signature text-4xl sm:text-7xl -rotate-3 text-custom-try ">
						Personal
					</h1> */}
               <h2
                  style={{ fontSize: "clamp(60px, 5vw, 100px)" }}
                  className="text-7xl pt-[20px] 2xl:py-[50px] font-primary text-custom-secondary textshadow"
               >
                  PERSONAL PORTFOLIO
               </h2>
            </div>
            <div className="w-[100%] h-[100%] flex justify-between flex-col ">
               <div className="bg-[#bee7e7] ">
                  <div className="flex max-w-screen-lg mx-auto my-[20px] h-[auto]">
                     <div className="flex flex-col justify-center w-[60%] shadow-md  rounded-lg shadow-custom-secondary p-[20px] bg-white 2xl:my-[5%] my-[20px]">
                        <h2 className="2xl:text-7xl  text-[45px]  font-primary text-custom-third">
                           DARYL LOUIE ONLAYAO
                        </h2>
                        <p className="text-gray-500 py-4">
                           Hello and welcome! I'm thrilled to have you here.
                        </p>
                        <p className="text-gray-500 pb-4 pr-[20px]">
                           In this portfolio, I'm excited to showcase my journey
                           and the work that I've poured my heart into.
                        </p>
                        <p className="text-gray-500 pb-4 pr-[30px]">
                           Each project you'll find here is a testament to my
                           commitment to excellence and my drive to exceed
                           expectations.
                        </p>
                        <p className="text-gray-500 pb-4 pr-[20px] 2xl:contents hidden">
                           Thank you for joining me on this journey, and I hope
                           you find inspiration and excitement within these
                           pages.
                        </p>
                     </div>
                  </div>
               </div>

               <div className=" py-[5px] w-full flex justify-center">
                  <div className="max-w-screen-lg flex gap-5 w-[50%] mb-5 pl-[4%]">
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
                  <div className=" relative max-w-screen-sm w-[100%]">
                     <img
                        src={Profile}
                        alt="my profile"
                        className="rounded-2xl mx-auto  w-[60vh] min absolute bottom-[-20%] 2xl:right-[15%] right-[30px] min-w-[450px]"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
