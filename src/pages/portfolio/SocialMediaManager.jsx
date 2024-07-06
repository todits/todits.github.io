import React from "react"
import laptop from "../../assets/images/skills/socialmedia/Laptop.png"
import facebook from "../../assets/images/skills/socialmedia/Facebook.png"
import instagram from "../../assets/images/skills/socialmedia/Instagram.png"
import phone from "../../assets/images/skills/socialmedia/Phone.png"
import tablet from "../../assets/images/skills/socialmedia/Tablet.png"
import { socialMediaManagerIcons } from "../../records/records"
import VideoSlide from "../../components/VideoSlide"

export default function SocialMediaManager() {
   return (
      <div
         name="socialMediaManager"
         className="flex flex-col skillsScreen w-full"
      >
         {/* from-white bg-gradient-to-b  to-custom-background */}

         <div className=" p-4 pt-5  flex flex-col place-content-start  h-full">
            <div className="relative h-[730px] max-w-screen-xl mx-auto w-full self-center">
               <div>
                  <div className="flex max-[1600px]:w-[1010px] w-[800px]  flex-col place-items-center absolute max-[1600px]:right-[7%] right-[15%]">
                     <img src={laptop} alt="" className="" />

                     <div className="overflow-y-scroll no-scrollbar max-[1600px]:h-[480px] h-[370px] max-[1600px]:w-[765px] w-[600px] ml-[10px] phone  top-[30px]  absolute z-0">
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
               </div>
               <a
                  href="https://www.instagram.com/nestedbaby/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <div className="flex justify-center flex-col place-items-center absolute z-[11] top-[215px] right-[0px] ">
                     <div className="phone overflow-y-scroll no-scrollbar h-[463px] z-[2] rounded-[20px]">
                        <img
                           src={instagram}
                           alt=""
                           className="w-[215px] cursor-pointer"
                        />
                     </div>
                     <div className="mt-[-477px;]">
                        <img
                           src={phone}
                           alt=""
                           className="w-[250px] cursor-pointer"
                        />
                     </div>
                  </div>
               </a>
               <div className="absolute max-[1600px]:top-[280px] top-[180px] w-[500px] h-full">
                  <div className="max-[1600px]:w-[530px] w-[435px] flex flex-col justify-between text-justify text-xl bg-[#dcf3f3]  absolute z-[2] left-[35px] top-[25px] px-[30px] py-[20px] h-[370px]">
                     <div className="leading-6 min-[1600px]:leading-none">
                        With my experience managing social media accounts for
                        various clients and my own previous business, I bring a
                        strategic approach to digital marketing that drives
                        engagement and growth across platforms. My skills
                        include crafting compelling content, utilizing analytics
                        to optimize performance, and developing effective
                        advertising campaigns. I excel at creating visually
                        appealing content that resonates with target audiences.
                     </div>
                     <div className="font-bold self-center text-white px-10 py-2 rounded-lg bg-custom-third">
                        CLICK THE IMAGES TO ACCESS THE PAGE
                     </div>
                  </div>
                  <div className="phone absolute top-[0px] ">
                     <img src={tablet} alt="" className=" cursor-pointer" />
                  </div>
               </div>
            </div>
            <div className="self-center font-primary max-[1600px]:text-[75px] max-[1600px]:py-[20px] text-[45px] text-custom-secondary textshadow">
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
               <div className="w-[100vw] bg-[#bee7e7] h-[140px] absolute mt-4 z-0">
                  .
               </div>
            </div>
         </div>
      </div>
   )
}
