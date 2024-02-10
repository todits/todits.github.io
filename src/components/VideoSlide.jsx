import React, { useEffect, useState } from "react"
import "../styles/Portfolio.css"

export default function VideoSlide({ image, name, selectCircle, rate }) {
	return (
		<div className="cursor-pointer videoEditing">
			<div>
				<img src={image} alt="" className="videoImage " />
			</div>
			<div className="font-primary text-center text-2xl text-custom-secondary w-[180px] absolute">
				{name}
			</div>
			<div className="videoRate ">
				<div className="videoSkill">
					<div className="videoOuter">
						<div className="videoInner">
							<div
								id="number"
								className="font-primary text-2xl text-custom-third"
							>
								{rate}%
							</div>
						</div>
					</div>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					width="160"
					height="160"
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

					<circle
						cx="80"
						cy="80"
						r="70"
						stroke-linecap="round"
						className={selectCircle}
					/>
				</svg>
			</div>
		</div>
	)
}
