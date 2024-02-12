import React, { useState } from "react"
import SkillItem from "../components/SkillItem"
import { skillItems } from "../records/records"
import DigitalArt from "./portfolio/DigitalArt"
import Button from "../components/Button"
import WebDeveloping from "./portfolio/WebDeveloping"
import VideoEditing from "./portfolio/VideoEditing"
import WebDesign from "./portfolio/WebDesign"

export default function Skills() {
	const [showSkillsList, setShowSkillsList] = useState(false)
	const [selectedSkill, setSelectedSkill] = useState("Skills")

	const handleClickSkill = (skillSelect) => {
		setSelectedSkill(skillSelect)
		setShowSkillsList(false)
	}

	const handleClickShowSkills = () => {
		setShowSkillsList((showSkillsList) => !showSkillsList)
	}

	return (
		<div
			name="skills"
			className=" flex h-screen skillsScreen w-full to-white bg-gradient-to-b  from-custom-background"
		>
			<div className="max-w-screen-xl p-4 pt-28 mx-auto flex flex-col place-content-start w-full h-full">
				<div className="pb-8">
					{showSkillsList && (
						<div>
							<Button
								name="Skills"
								selectedButton={() => handleClickSkill("Skills")}
							/>
							<Button
								name="Digital Art"
								selectedButton={() => handleClickSkill("Digital Art")}
							/>
						</div>
					)}

					{selectedSkill === "Skills" ? (
						<div>
							<p className="text-5xl font-primary  text-custom-third inline border-b-4 border-gray-500">
								{selectedSkill}
							</p>
						</div>
					) : (
						<button onClick={handleClickShowSkills}>
							<p className="text-5xl font-primary  text-custom-third inline border-b-4 border-gray-500">
								{selectedSkill}
							</p>
						</button>
					)}
				</div>
				{selectedSkill === "Skills" ? (
					<div className="grid-cols-3 grid gap-[2vw] font-primary  text-center text-custom-secondary text-4xl">
						{skillItems.map((skill) => (
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
				{selectedSkill === "Digital Art" ? <DigitalArt /> : undefined}
				{selectedSkill === "Web Developing" ? <WebDeveloping /> : undefined}
				{selectedSkill === "Video Editing" ? <VideoEditing /> : undefined}
				{selectedSkill === "Web Design" ? <WebDesign /> : undefined}
				{selectedSkill === "Social Media Manager" ? (
					<DigitalArt />
				) : undefined}
			</div>
		</div>
	)
}
