import React from "react"
import "../styles/Portfolio.css"

export default function VideoSlide({ image, name }) {
	return (
		<div className="cursor-pointer videoEditing">
			<div>
				<img src={image} alt="" className="videoImage " />
			</div>
			<div className="font-primary text-center text-2xl text-custom-secondary w-[180px] absolute">
				{name}
			</div>
			<div className="videoRate">
				<div className="videoSkill">
					<div className="videoOuter">
						<div className="videoInner">
							<div className="numb" id="number"></div>
						</div>
					</div>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					width="180px"
					height="180px"
					position="absolute"
					top="0"
					left="0"
				>
					<defs>
						<linearGradient id="GradientColor">
							<stop offset="0%" stopColor="#e91e63" />
							<stop offset="100%" stopColor="#673ab7" />
						</linearGradient>
					</defs>

					<circle cx="90" cy="90" r="78" strokeLinecap="round" />
				</svg>
			</div>
		</div>
	)
}
