import React, { useState } from "react"
import "../styles/Skills.css"
import { Link } from "react-scroll"

export default function SkillItem({
	text,
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	skillImages,
	skill,
}) {
	const [clickSkill, setClickSkill] = useState("")
	const imagesExist = image1 || image2 || image3 || image4 || image5

	const handleClickSkill = (value) => {
		setClickSkill(value)
	}

	return (
		<div>
			{skill ? (
				<Link
					to={clickSkill}
					smooth
					duration={500}
					onClick={() => handleClickSkill(skill)}
					className="cursor-pointer skilltext select-none self-center py-10 px-5 border-8 border-custom-primary rounded-lg"
				>
					<div>{text}</div>
				</Link>
			) : (
				<div className="skilltext cursor-default select-none self-center py-10 px-5 border-8 border-custom-primary rounded-lg">
					<div>{text}</div>
				</div>
			)}

			{imagesExist && (
				<div className={skillImages}>
					{image1 && <img className="skillImage" src={image1} alt="" />}
					{image2 && <img className="skillImage" src={image2} alt="" />}
					{image3 && <img className="skillImage" src={image3} alt="" />}
					{image4 && <img className="skillImage" src={image4} alt="" />}
					{image5 && <img className="skillImage" src={image5} alt="" />}
					{image6 && <img className="skillImage" src={image6} alt="" />}
				</div>
			)}
		</div>
	)
}
