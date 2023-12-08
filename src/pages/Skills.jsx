import React from "react"
import SkillItem from "../components/SkillItem"

export default function Skills() {
	return (
		<div
			name="skills"
			className="flex h-screen skillsScreen w-full to-white bg-gradient-to-b  from-custom-background"
		>
			<div className="max-w-screen-xl p-4 pt-28 mx-auto flex flex-col place-content-start w-full h-full">
				<div className="pb-8">
					<p className="text-5xl font-primary  text-custom-third inline border-b-4 border-gray-500">
						Skills
					</p>
				</div>
				<div className="grid-cols-3 grid gap-16 font-primary  text-center text-custom-secondary text-4xl">
					<SkillItem
						skillImages="skillImages skillImages3 "
						image1="skills/Wordpress.png"
						image2="skills/Divi.png"
						image3="skills/ClickFunnels.png"
						text="Web Design"
						skill="webDesign"
					></SkillItem>
					<SkillItem
						skillImages="skillImages skillImages6 "
						image1="skills/CSS.png"
						image2="skills/HTML.png"
						image3="skills/Java.png"
						image4="skills/React.png"
						image5="skills/Tailwind.png"
						image6="skills/Laravel.png"
						text="Web Developing"
						skill="webDeveloping"
					></SkillItem>
					<SkillItem
						skillImages="skillImages skillImages3 "
						image1="skills/Ps.png"
						image2="skills/Ai.png"
						image3="skills/Canva.png"
						text="Photo Editing"
						skill="photoEditing"
					></SkillItem>
					<SkillItem
						skillImages="skillImages skillImages3"
						image1="skills/Gmail.png"
						image2="skills/ActiveCampaign.png"
						image4="skills/ClickFunnels.png"
						text="Email Marketing"
						skill="emailMarketing"
					></SkillItem>
					<SkillItem
						skillImages="skillImages skillImages4 "
						image1="skills/Word.png"
						image2="skills/Powerpoint.png"
						image3="skills/Publisher.png"
						image4="skills/Excel.png"
						text="MS Office"
					></SkillItem>
					<SkillItem
						skillImages="skillImages skillImages5 "
						image1="skills/Adobepro.png"
						image2="skills/Powerdirector.png"
						image3="skills/Wondershare.png"
						image4="skills/Canva.png"
						image5="skills/Capcut.png"
						text="Video Editing"
						skill="videoEditing"
					></SkillItem>
					<SkillItem
						skillImages="skillImages skillImages3 "
						image1="skills/Facebook.png"
						image2="skills/Instagram.png"
						image3="skills/Linkedin.png"
						text="Social Media Manager"
						skill="socialMediaManager"
					></SkillItem>
					<SkillItem
						skillImages="skillImages skillImages2 "
						image1="skills/Canva.png"
						image2="skills/Canva.png"
						text="Marketing Funnels"
					></SkillItem>
					<SkillItem
						skillImages="skillImages skillImages4 "
						image1="skills/Spreadsheet.png"
						image2="skills/Canva.png"
						image3="skills/Canva.png"
						image4="skills/Canva.png"
						text="Google Workspace"
					></SkillItem>
					<SkillItem
						skillImages="skillImages skillImages4 "
						image1="skills/Spreadsheet.png"
						image2="skills/Canva.png"
						image3="skills/Canva.png"
						image4="skills/Canva.png"
						text="Google Workspace"
					></SkillItem>
					<SkillItem
						skillImages="skillImages skillImages2 "
						image1="skills/Ps.png"
						image2="skills/Ai.png"
						text="Digital Art"
						skill="artgallery"
					></SkillItem>
				</div>
			</div>
		</div>
	)
}
