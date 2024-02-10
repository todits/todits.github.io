import React from "react"
import "../styles/Experience.css"
import { experiences } from "../records/records"

const Experience = () => {
	return (
		<div
			name="experience"
			className="flex h-screen w-full to-white bg-gradient-to-b  from-custom-background content "
		>
			<div className="max-w-screen-lg mx-auto flex-col justify-center  w-full h-full relative mt-[100px]">
				<p className="font-primary text-4xl text-custom-third inline font-bold border-b-4 border-gray-500 p-2 ">
					Work Experience
				</p>
				<p className="py-6">these are the tehc we</p>
				<div className="w-full  text-center py-8 px-12 sm:px-0 table">
					<ul>
						{experiences.map(({ id, src, title, style, rate, color }) => (
							<li
								key={id}
								className={`column-table hover:shadow-md duration-700 rounded-lg ${style}`}
							>
								<div className="table-left">
									<div
										className={` flex-col hover:scale-105 duration-500 py-2 rounded-lg icon  `}
									>
										<img src={src} alt="" className="w-12 mx-auto" />
									</div>
								</div>
								<div className="column-text">
									<p className="">{title}</p>
								</div>
								<div className="bar flex">
									<div
										className="percent"
										style={{ width: rate, background: color }}
									>
										<div className="color-percent">..</div>
									</div>
									<div className="pl-2">{rate}</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Experience
