import React, { useEffect, useState } from "react";
import SkillItem from "../components/SkillItem";
import { SKILL_ITEMS } from "../records/records";
import DigitalArt from "./portfolio/DigitalArt";
import IconButton from "../components/IconButton";
import WebDeveloping from "./portfolio/WebDeveloping";
import VideoEditing from "./portfolio/VideoEditing";
import WebDesign from "./portfolio/WebDesign";
import SocialMediaManager from "./portfolio/SocialMediaManager";
import skills from "../assets/images/skills/skillIcon/skills.png";
import digitalArt from "../assets/images/skills/skillIcon/digitalArt.png";
import webDeveloping from "../assets/images/skills/skillIcon/webDeveloping.png";
import socialMedia from "../assets/images/skills/skillIcon/socialMedia.png";
import webDesign from "../assets/images/skills/skillIcon/webDesign.png";
import videoEditing from "../assets/images/skills/skillIcon/videoEditing.png";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const skillsset = [
   {
      image: skills,
      label: "Skills",
   },
   {
      image: digitalArt,
      label: "Digital Art",
   },
   {
      image: webDeveloping,
      label: "Web Developing",
   },

   {
      image: videoEditing,
      label: "Video Editing",
   },
   {
      image: webDesign,
      label: "Web Design",
   },
   {
      image: socialMedia,
      label: "Social Media Manager",
   },
];

export default function Skills() {
   const [showSkillsList, setShowSkillsList] = useState(false);
   const [selectedSkill, setSelectedSkill] = useState("Skills");

   useEffect(() => {
      console.log("Selected Skill:", selectedSkill);
   }, [selectedSkill]);

   const handleClickSkill = (skillSelect) => {
      setSelectedSkill(skillSelect);
      if (skillSelect === "Skills") {
         setShowSkillsList(false);
      }
   };

   return (
      <div
         name="skills"
         className=" content flex flex-col min-[1600px]:px-[0px] px-[20px] mx-auto  h-screen min-[1600px]:min-h-[800px] min-h-0 w-full pt-[55px] min-[1600px]:pt-[70px] pb-[20px] "
      >
         <div className="max-w-screen-xl justify-center self-center w-[100%]">
            <div className=" flex gap-3 min-[1600px]:h-[100px] h-[70px] mt-[10px] justify-between ">
               <div className="self-center flex justify-center  ">
                  <p className="text-3xl font-primary  text-custom-third inline  border-gray-500">
                     {selectedSkill}
                  </p>
               </div>
               <AnimatePresence>
                  {selectedSkill !== "Skills" ? (
                     <motion.div
                        key="box"
                        initial={{ x: "-50%", opacity: 0, scale: 0 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`flex gap-7`}
                        exit={{ x: "-50%", opacity: 0, scale: 0 }}
                     >
                        {skillsset.map(({ image, label }, index) => (
                           <IconButton
                              key={index}
                              image={image}
                              iconselect={() => handleClickSkill(label)}
                              iconName={label}
                           />
                        ))}
                     </motion.div>
                  ) : undefined}
               </AnimatePresence>
            </div>
         </div>

         {selectedSkill === "Skills" ? (
            <div className="grid-cols-3 grid gap-[5%] font-primary max-w-screen-xl self-center w-[100%] text-center text-custom-secondary text-4xl ">
               {SKILL_ITEMS.map((skill) => (
                  <SkillItem
                     key={skill.id}
                     skillImages={skill.skillImages}
                     image1={skill.image1}
                     image2={skill.image2}
                     image3={skill.image3}
                     image4={skill.image4}
                     image5={skill.image5}
                     image6={skill.image6}
                     text={skill.text}
                     selectedButton={() => handleClickSkill(skill.text)}
                     skill={skill.skill}
                  />
               ))}
            </div>
         ) : undefined}
         <AnimatePresence>
            {selectedSkill === "Web Developing" ? (
               <motion.div
                  key="webDeveloping"
                  initial={{ y: "-50%", scale: 0.5, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  exit={{ y: "-50%", scale: 0, opacity: 0 }}
                  className="h-[100%]"
               >
                  <WebDeveloping />
               </motion.div>
            ) : undefined}
            {selectedSkill === "Video Editing" ? (
               <motion.div
                  key="videoEditing"
                  initial={{ y: "-50%", scale: 0.5, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  exit={{ y: "-50%", scale: 0, opacity: 0 }}
                  className="h-[100%]"
               >
                  <VideoEditing />
               </motion.div>
            ) : undefined}
            {selectedSkill === "Web Design" ? (
               <motion.div
                  key="webDesign"
                  initial={{ y: "-50%", scale: 0.5, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  exit={{ y: "-50%", scale: 0, opacity: 0 }}
                  className="h-[100%]"
               >
                  <WebDesign />
               </motion.div>
            ) : undefined}
            {selectedSkill === "Social Media Manager" ? (
               <motion.div
                  key="socialMedia"
                  initial={{ y: "-50%", scale: 0.5, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  exit={{ y: "-50%", scale: 0, opacity: 0 }}
                  className="h-[100%]"
               >
                  <SocialMediaManager />
               </motion.div>
            ) : undefined}
            {selectedSkill === "Digital Art" ? (
               <motion.div
                  key="digitalArt"
                  initial={{ y: "-50%", scale: 0.5, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  exit={{ y: "-50%", scale: 0, opacity: 0 }}
                  className="h-[100%]"
               >
                  <DigitalArt />
               </motion.div>
            ) : undefined}
         </AnimatePresence>
      </div>
   );
}
