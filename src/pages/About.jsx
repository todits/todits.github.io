import React from "react";

const About = () => {
   return (
      <div name="about" className="content w-full h-screen ">
         <div className="max-w-screen-lg p-4 pt-28 mx-auto flex flex-col place-content-start w-full h-full">
            <div className="pb-8">
               <p className="text-4xl font-primary  text-custom-third inline border-b-4 border-gray-500">
                  About
               </p>
            </div>
            <div>
               <p className="text-xl mt-[30px]">
                  My journey into these fields began during the pandemic. Stuck
                  at home, I was inspired by my brother, a seasoned web
                  developer. What started as a curious dive into web development
                  quickly turned into a real passion. I loved discovering the
                  endless possibilities and creating impactful digital
                  experiences, which made me decide to shift my career focus
                  entirely.
               </p>
               <p className="text-xl mt-[30px]">
                  Since then, I've taken on various part-time roles as a virtual
                  assistant, web developer, and web designer. Each job has
                  helped me grow my skills and understand how these fields
                  connect and complement each other.
               </p>
               <p className="text-xl mt-[30px]">
                  With a background in public education, I bring strong
                  communication, organization, and adaptability to my work.
                  Whether I’m coding a website, designing an interface, or
                  providing virtual support, I approach every task with
                  dedication and enthusiasm.
               </p>
               <p className="text-xl mt-[30px]">
                  I’m excited to work with you and bring your digital projects
                  to life, making a real impact in the online world.
               </p>
            </div>
         </div>
      </div>
   );
};

export default About;
