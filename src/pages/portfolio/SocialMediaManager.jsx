import React from "react";
import Footer from "../../components/Footer";

export default function SocialMediaManager() {
   return (
      <div
         name="socialMediaManager"
         className="flex h-screen skillsScreen w-full"
      >
         {/* from-white bg-gradient-to-b  to-custom-background */}

         <div className="max-w-screen-xl p-4 pt-5 mx-auto flex flex-col place-content-start w-full h-full">
            <div className="relative">
               <div>
                  <a
                     href="https://www.facebook.com/profile.php?id=100066757001153"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <div className="flex justify-center flex-col place-items-center absolute">
                        <div>
                           <img
                              src="/socialmedia/Laptop.png"
                              alt=""
                              className="w-[50vw]"
                           />
                        </div>

                        <div className="overflow-y-scroll no-scrollbar h-[480px] w-[765px] ml-[10px] phone top-[30px] absolute z-10">
                           <img
                              src="/socialmedia/Facebook.png"
                              alt=""
                              className="w-[936px] cursor-pointer"
                           />
                        </div>
                     </div>
                  </a>
               </div>
               <a
                  href="https://www.instagram.com/nestedbaby/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <div className="flex justify-center flex-col place-items-center absolute z-[11] top-[350px] right-[0px] ">
                     <div className="phone overflow-y-scroll no-scrollbar h-[463px] z-[2] rounded-[20px]">
                        <img
                           src="/socialmedia/Instagram.png"
                           alt=""
                           className="w-[215px] cursor-pointer"
                        />
                     </div>
                     <div className="mt-[-477px;]">
                        <img
                           src="/socialmedia/Phone.png"
                           alt=""
                           className="w-[250px] cursor-pointer"
                        />
                     </div>
                  </div>
               </a>
               <div className="absolute top-[380px] w-[650px]  h-full">
                  <div className="w-[570px] bg-white absolute z-[2] left-[42px] top-[36px] h-[390px]">
                     asdasd
                  </div>
                  <div className="phone absolute top-[0px]  overflow-y-scroll no-scrollbar h-[463px] rounded-[20px]">
                     <img
                        src="/socialmedia/Tablet.png"
                        alt=""
                        className=" cursor-pointer"
                     />
                  </div>
               </div>
            </div>
            <Footer />
         </div>
      </div>
   );
}
