import React from "react";
import "../../styles/Skills.css";
import { webDesignIcons, videoThumbnails } from "../../records/records";
import VideoSlide from "../../components/VideoSlide";
import Portfolio from "../Portfolio";
import wordpress from "../../assets/skillIcons/Wordpress.png";
import webImage1 from "../../assets/images/skills/webDesign/Portfolio Website.png";
import webImage2 from "../../assets/images/skills/webDesign/Portfolio Website 2.png";
import webImage3 from "../../assets/images/skills/webDesign/Portfolio Website 3.png";

import WebDesignExperience from "../../components/WebDesignExperience";

const experiences = [
   {
      id: 1,
      image: webImage1,
      text: `I've gained valuable experience improving my client's website, who
            runs a home and interior design business. Using WordPress and Divi
            themes, I rebranded the site and created a new version with more
            features and better functionality. The new site design and added
            functions have made her business look more professional and
            user-friendly.`,
      link: "https://lifthomedesign.ca/",
   },
   {
      id: 2,
      image: webImage2,
      text: `I have hands-on experience developing a landing page for my client's virtual training, which prompted me to extend my expertise in web design across various platforms, including Wix.`,
      link: "https://www.lavonmorrisgrant.com/training-page",
   },
   {
      id: 3,
      image: webImage3,
      text: `I have hands-on experience developing a landing page for my client's virtual training, which prompted me to extend my expertise in web design across various platforms, including Wix.`,
      link: "https://www.ladesignboutique.com/",
   },
];

export default function WebDesign() {
   return (
      <div name="webDesign" className="flex w-full  flex-col">
         <div className="self-center font-primary 2xl:text-[80px] text-[60px] text-custom-secondary textshadow">
            WEB DESIGN SKILLS
         </div>
         <div className="flex justify-center relative mt-6">
            <div className="flex gap-8 z-10">
               {webDesignIcons.map((webIcon) => (
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
         <div className="self-center max-w-screen-lg p-9 text-xl shadow-lg mt-10 shadow-custom-primary">
            I've acquired valuable experience in elevating my current client's
            website. I practically rebranded the site, crafting a fresh version
            with additional features and functions to better cater to her
            customers and bolster her home services business.
         </div>

         <div className="self-center font-primary text-4xl mt-16 bg-[#dfc7c5] py-4 px-6 rounded-lg text-custom-third ">
            Previous Projects
         </div>
         <div className="flex max-w-screen-lg self-center w-[100%] my-11 flex-col">
            {experiences.map(({ image, text, id, link }) => (
               <WebDesignExperience
                  image={image}
                  text={text}
                  key={id}
                  link={link}
               />
            ))}
         </div>
      </div>
   );
}
