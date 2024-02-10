import React from "react"
import WebSlide from "../../components/WebSlide"
import Footer from "../../components/Footer"
import { skills } from "../../records/records"

function WebDeveloping() {
	return (
		<div
			name="webDeveloping"
			className="flex h-screen skillsScreen w-full to-white bg-gradient-to-b  from-custom-background"
		>
			<div className="relative">
				<p className="portfolio font-primary inline ">Portfolio</p>
			</div>

			<div className="max-w-screen-xl p-4 pt-20 mx-auto flex flex-col place-content-start w-full h-full">
				<div>
					<p className=" text-5xl font-primary text-custom-third inline border-b-4  border-custom-third">
						Web Developing
					</p>
					<div className=" slidecontainer mt-8">
						<div className="slidegroup">
							<div className="gap-2 z-50 slide-track">
								{skills.map(({ id, name, src, color, rate }) => (
									<WebSlide
										image={src}
										name={name}
										key={id}
										color={color}
										rate={rate}
									/>
								))}
								{skills.map(({ id, name, src, color, rate }) => (
									<WebSlide
										image={src}
										name={name}
										key={id}
										color={color}
										rate={rate}
									/>
								))}
								<WebSlide image="skills/CSS.png" name="CSS" />
								<WebSlide image="skills/Tailwind.png" name="Tailwind" />
							</div>
						</div>
					</div>
					<div className="flex justify-between mt-8">
						<div className=" relative h-[80vh] min-h-[800px] "></div>
						<div className="flex justify-between flex-col w-[70%]">
							<div className="h-[80%] flex place-items-center">
								While working as a teacher, I had the opportunity to be
								exposed to web development through my brother, who works
								as a web developer. He taught me the ropes of web
								development, which became the foundation of my knowledge
								while I pursued a job as a virtual assistant. As a
								pastime, I continue to learn and enhance my web
								development skills. Additionally, I gained practical
								experience by working part-time as a web developer
								alongside my brother for three months.
							</div>
							<Footer next="photoEditing" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WebDeveloping
