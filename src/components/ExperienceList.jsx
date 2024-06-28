import React from "react";

export default function ExperienceList({
   year,
   employer,
   job,
   role1,
   role2,
   role3,
   role4,
   role5,
}) {
   return (
      <div>
         <div className="flex my-3">
            <div className="font-primary flex justify-center self-center text-[30px] w-[20%]">
               <div className="h-[100%] z-10 relative self-center text-custom-third">
                  {year}
               </div>
               <div className="absolute  z-0 flex items-center self-center bg-[#bee7e7] h-[100px] rounded-full text-center text-custom-primary w-[100px]">
                  .
               </div>
            </div>
            <div className="w-[40%] relative  self-center z-0">
               <div className=" -mx-[70px] bg-[#bee7e7] h-[20px] self-center rounded-full text-center text-custom-primary ">
                  .
               </div>
            </div>

            <div className=" w-[40%] text-xl z-10  p-3 bg-[#bee7e7] h-[100%] self-center rounded-xl text-center ">
               <div className="font-primary text-custom-third text-2xl">
                  {employer}
               </div>
               <div className="font-primary text-custom-third">{job}</div>

               <ul>
                  {role1 && <li> {role1}</li>}
                  {role2 && <li> {role2}</li>}
                  {role3 && <li> {role3}</li>}
                  {role4 && <li> {role4}</li>}
                  {role5 && <li> {role5}</li>}
               </ul>
            </div>
         </div>
      </div>
   );
}
