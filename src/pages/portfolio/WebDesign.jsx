import React from "react"
import "../../styles/Skills.css"

export default function WebDesign() {
	return (
		<div
			name="webDesign"
			className="flex h-screen skillsScreen w-full from-white bg-gradient-to-b  to-custom-background"
		>
			<div className="relative">
				<p className="portfolio font-primary inline ">Portfolio</p>
			</div>

			<div className="max-w-screen-xl p-4 pt-20 mx-auto flex flex-col place-content-start w-full h-full">
				<div>
					<p className=" text-5xl font-primary  text-custom-third inline border-b-4  border-custom-third">
						Web Design
					</p>
				</div>
				<div className="relative mt-6">
					<div>
						<img src="" alt="" />
					</div>
					<div>
						<div className="h-[400px] mt-[100px] w-[900px] absolute rounded-[30px] bg-fuchsia-100"></div>
						<div>
							<img
								src="/webdesign/house.png"
								alt=""
								className="h-[600px] absolute z-[1] right-0"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
