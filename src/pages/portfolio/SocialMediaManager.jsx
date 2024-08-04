import React, { useContext } from "react";
import laptop from "../../assets/images/skills/socialmedia/Laptop.png";
import facebook from "../../assets/images/skills/socialmedia/Facebook.png";
import instagram from "../../assets/images/skills/socialmedia/Instagram.png";
import phone from "../../assets/images/skills/socialmedia/Phone.png";
import tablet from "../../assets/images/skills/socialmedia/Tablet.png";
import { socialMediaManagerIcons } from "../../records/records";
import VideoSlide from "../../components/VideoSlide";
import { ThemeContext } from "../../context/ThemeContext";

export default function SocialMediaManager() {
   const { themeStyle } = useContext(ThemeContext);
   return (
      <div
         name="socialMediaManager"
         className="flex flex-col skillsScreen w-full"
      >
         {/* from-white bg-gradient-to-b  to-custom-background */}

         <div className=" p-4 pt-5  flex flex-col place-content-start  h-full">
            <div className="relative h-[550px] min-[1600px]:h-[730px]  max-w-screen-xl mx-auto w-full self-center">
               <div className="flex min-[1600px]:w-[1010px] w-[800px]  flex-col place-items-center absolute min-[1600px]:right-[7%] right-[15%]">
                  <img src={laptop} alt="" className="" />

                  <div className="overflow-y-scroll no-scrollbar min-[1600px]:h-[480px] h-[370px] min-[1600px]:w-[765px] w-[600px] ml-[10px] phone  top-[30px]  absolute z-0">
                     <a
                        href="https://www.facebook.com/profile.php?id=100066757001153"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img
                           src={facebook}
                           alt=""
                           className=" cursor-pointer"
                        />
                     </a>
                  </div>
               </div>
               <a
                  href="https://www.instagram.com/nestedbaby/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <div className="flex justify-center flex-col place-items-center absolute z-[11] top-[100px] min-[1600px]:top-[215px] right-[0px] ">
                     <img
                        src={phone}
                        alt=""
                        className="w-[200px] cursor-pointer min-[1600px]:w-[250px]"
                     />
                     <div className="phone absolute overflow-y-scroll no-scrollbar h-[375px] min-[1600px]:h-[463px] z-[2] rounded-[20px] top-[10px] min-[1600px]:top-[15px]">
                        <img
                           src={instagram}
                           alt=""
                           className="w-[175px] cursor-pointer min-[1600px]:w-[215px]"
                        />
                     </div>
                  </div>
               </a>
               <div className="absolute min-[1600px]:top-[280px] top-[180px] min-[1600px]:w-[600px] w-[500px] h-full">
                  <div className="min-[1600px]:w-[530px] w-[440px] flex flex-col justify-between text-justify text-xl bg-[#dcf3f3]  absolute z-[2] left-[35px] top-[25px] px-[30px] py-[20px] min-[1600px]:h-[370px] h-[300px]">
                     <div className="leading-5 text-black min-[1600px]:leading-tight min-[1600px]:text-[20px] text-[18px]">
                        With my experience managing social media accounts for
                        various clients and my own previous business, I bring a
                        strategic approach to digital marketing that drives
                        engagement and growth across platforms. My skills
                        include crafting compelling content, utilizing analytics
                        to optimize performance, and developing effective
                        advertising campaigns. I excel at creating visually
                        appealing content that resonates with target audiences.
                     </div>
                     <div className="font-bold self-center text-white px-10 py-2 rounded-lg bg-custom-third text-[15px] min-[1600px]:text-[20px]">
                        CLICK THE IMAGES TO ACCESS THE PAGE
                     </div>
                  </div>
                  <div className="phone absolute top-[0px] ">
                     <img src={tablet} alt="" className=" cursor-pointer" />
                  </div>
               </div>
            </div>
            <div
               className={`${themeStyle.headingColor} ${themeStyle.shadow}  self-center font-primary min-[1600px]:text-[75px] min-[1600px]:py-[20px] text-[45px]`}
            >
               SOCIAL MEDIA MANAGER BACKGROUND
            </div>
            <div className="flex justify-center relative mt-6">
               <div className="flex gap-8 z-10">
                  {socialMediaManagerIcons.map((webIcon) => (
                     <VideoSlide
                        key={webIcon.id}
                        image={webIcon.image}
                        name={webIcon.name}
                        selectCircle={webIcon.selectCircle}
                        rate={webIcon.rate}
                     />
                  ))}
               </div>
               <div
                  className={`${themeStyle.backgroundStrip} w-[100vw] bg-[#bee7e7] h-[140px] absolute mt-4 z-0`}
               >
                  .
               </div>
            </div>
         </div>
      </div>
   );
}
