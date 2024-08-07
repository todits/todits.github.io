<<<<<<< HEAD
import React, { useContext } from "react"
import "../../styles/Skills.css"
import { webDesignIcons } from "../../records/records"
import VideoSlide from "../../components/VideoSlide"
import Portfolio from "../Portfolio"
import wordpress from "../../assets/skillIcons/Wordpress.png"
import webImage1 from "../../assets/images/skills/webDesign/Portfolio Website.png"
import webImage2 from "../../assets/images/skills/webDesign/Portfolio Website 2.png"
import webImage3 from "../../assets/images/skills/webDesign/Portfolio Website 3.png"

import WebDesignExperience from "../../components/WebDesignExperience"
import { ThemeContext } from "../../context/ThemeContext"
=======
import React, { useContext } from "react";
import "../../styles/Skills.css";
import { webDesignIcons } from "../../records/records";
import VideoSlide from "../../components/VideoSlide";
import Portfolio from "../Portfolio";
import wordpress from "../../assets/skillIcons/Wordpress.png";
import webImage1 from "../../assets/images/skills/webDesign/Portfolio Website.png";
import webImage2 from "../../assets/images/skills/webDesign/Portfolio Website 2.png";
import webImage3 from "../../assets/images/skills/webDesign/Portfolio Website 3.png";

import WebDesignExperience from "../../components/WebDesignExperience";
import { ThemeContext } from "../../context/ThemeContext";
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d

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
      text: `As a Shopify Website Assistant, I added new products with accurate descriptions and images, created and updated blog posts to improve SEO and attract traffic, and maintained the website content for current promotions and inventory changes. `,
      link: "https://www.ladesignboutique.com/",
   },
<<<<<<< HEAD
]

export default function WebDesign() {
   const { themeStyle } = useContext(ThemeContext)
   return (
      <div name="webDesign" className="flex w-full  flex-col">
         <div
            className={`self-center font-primary max-md:text-[30px] max-[1600px]:text-[50px] text-[80px] ${themeStyle.headingColor} ${themeStyle.shadow}`}
=======
];

export default function WebDesign() {
   const { themeStyle } = useContext(ThemeContext);
   return (
      <div name="webDesign" className="flex w-full  flex-col">
         <div
            className={`self-center font-primary max-[1600px]:text-[80px] text-[50px] ${themeStyle.headingColor} ${themeStyle.shadow}`}
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
         >
            WEB DESIGN SKILLS
         </div>
         <div className="flex justify-center relative min-[1600px]:mt-6">
<<<<<<< HEAD
            <div className="flex gap-8 max-md:gap-0 z-10 ">
=======
            <div className="flex gap-8 z-10">
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
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
            <div
<<<<<<< HEAD
               className={`w-[100vw] ${themeStyle.backgroundStrip} h-[140px] max-md:h-[65px] max-md:mt-2 absolute mt-4 z-0`}
=======
               className={`w-[100vw] ${themeStyle.backgroundStrip} h-[140px] absolute mt-4 z-0`}
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
            >
               .
            </div>
         </div>
<<<<<<< HEAD
         <p className="self-center max-w-screen-lg px-[5%] py-4 min-[1600px]:py-9  shadow-lg min-[1600px]:mt-10 mt-5 shadow-custom-primary">
=======
         <div className="self-center max-w-screen-lg px-9 py-4 min-[1600px]:py-9 text-xl shadow-lg min-[1600px]:mt-10 mt-5 shadow-custom-primary">
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
            I've acquired valuable experience in elevating my current client's
            website. I practically rebranded the site, crafting a fresh version
            with additional features and functions to better cater to her
            customers and bolster her home services business.
<<<<<<< HEAD
         </p>

         <h2 className="self-center font-primary  mt-10 min-[1600px]:mt-16 bg-[#dfc7c5] py-[1%] px-[5%] rounded-lg text-custom-third">
            Previous Projects
         </h2>
         <div className="flex max-w-screen-lg self-center w-[100%] max-md:my-0  my-11 px-[20px] flex-col">
=======
         </div>

         <div className="self-center font-primary text-4xl mt-10 min-[1600px]:mt-16 bg-[#dfc7c5] py-4 px-6 rounded-lg text-custom-third">
            Previous Projects
         </div>
         <div className="flex max-w-screen-lg self-center w-[100%] my-11 flex-col">
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
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
<<<<<<< HEAD
   )
=======
   );
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
}
