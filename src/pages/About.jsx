import React from "react";
import gif from "../assets/images/about.gif";
import speech from "../assets/images/bubblespeach.png";

const About = () => {
   return (
      <div name="about" className="content w-full h-screen ">
         <div className="max-w-screen-xl px-[80px] pt-20 min-[1600px]:pt-28 mx-auto flex flex-col place-content-start w-full h-full">
            <div className="pb-3">
               <p className="text-[45px] font-primary  text-custom-secondary inline textshadow">
                  ABOUT
               </p>
            </div>
            <div className="flex  rounded-xl border-custom-secondary border-[8px]">
               <div className="z-20 relative flex place-items-end justify-center w-[2500px] -ml-[70px] -mr-[30px] group -mb-[1px] ">
                  <img src={gif} alt="" className="" />
                  <div className="z-10 absolute -mr-[300px] top-[250px] max-w-[400px] h-auto scale-0 group-hover:-mr-[600px] group-hover:scale-100 duration-300">
                     <div className="absolute  h-[100%] w-[100%] place-content-center text-center pr-[30px] pl-[65px]">
                        Start exploring more about my skills and previous
                        expreriences by clicking <strong>here</strong>.
                     </div>
                     <img src={speech} alt="" className="" />
                  </div>
               </div>
               <div className="py-[40px] pr-[40px]">
                  <p className="text-xl ">
                     My journey into these fields began during the pandemic.
                     Stuck at home, I was inspired by my brother, a seasoned web
                     developer. What started as a curious dive into web
                     development quickly turned into a real passion. I loved
                     discovering the endless possibilities and creating
                     impactful digital experiences, which made me decide to
                     shift my career focus entirely.
                  </p>
                  <p className="text-xl mt-[30px]">
                     Since then, I've taken on various part-time roles as a
                     virtual assistant, web developer, and web designer. Each
                     job has helped me grow my skills and understand how these
                     fields connect and complement each other.
                  </p>
                  <p className="text-xl mt-[30px]">
                     With a background in public education, I bring strong
                     communication, organization, and adaptability to my work.
                     Whether I’m coding a website, designing an interface, or
                     providing virtual support, I approach every task with
                     dedication and enthusiasm.
                  </p>
                  <p className="text-xl mt-[30px]">
                     I’m excited to work with you and bring your digital
                     projects to life, making a real impact in the online world.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
