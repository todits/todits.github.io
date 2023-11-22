import React from "react"
import Footer from "../../props/Footer"
import VideoSlide from "../../props/VideoSlide"

export default function VideoEditing() {
	return (
		<div
			name="videoEditing"
			className="flex h-screen skillsScreen w-full from-white bg-gradient-to-b  to-custom-background"
		>
			<div className="relative">
				<p className="portfolio font-primary inline ">Portfolio</p>
			</div>

			<div className="max-w-screen-2xl p-4 pt-20 mx-auto flex flex-col place-content-start w-full h-full">
				<div>
					<p className=" text-5xl font-primary  text-custom-third inline border-b-4  border-custom-third">
						Video Editing
					</p>
					<div className="mt-8 flex gap-8">
						<div className=" flex flex-col gap-2 w-[75%]">
							<div className="z-50 rounded-s-3xl">
								<iframe
									src="https://drive.google.com/file/d/1N1JIP0GqiUW2JpiC3C5wEjT3djgJphCM/preview"
									width="100%	"
									allow="autoplay"
									className="left-0 rounded-xl min-h-[500px] h-[45vh]"
								></iframe>
							</div>
							<div className="text-2xl">Sample Video</div>
							<div className="w-[100%] bg-slate-200 h-[100px] rounded-xl p-3">
								asdasd
							</div>
							<div>Video Editing Background</div>
							<div className="flex gap-[4%] justify-center">
								<VideoSlide image="skills/Canva.png" name="Canva" />
								<VideoSlide
									image="skills/Powerdirector.png"
									name="Power Director"
								/>
								<VideoSlide
									image="skills/Adobepro.png"
									name="Adobe Premier Pro"
								/>
								<VideoSlide
									image="skills/Wondershare.png"
									name="Filmora Wondershare"
								/>
								<VideoSlide image="skills/Capcut.png" name="Capcut" />
							</div>
						</div>
						<div className=" w-[25%] flex flex-col z-50 gap-6">
							<div className="flex flex-col cursor-pointer">
								<div>
									<img
										src="video/sample_video1.png"
										alt=""
										className="w-[100%] rounded-lg"
									/>
								</div>
								<div className="text-2xl">ass</div>
							</div>
							<div className="flex flex-col cursor-pointer">
								<div>
									<img
										src="video/sample_video1.png"
										alt=""
										className="w-[100%] rounded-lg"
									/>
								</div>
								<div className="text-2xl">ass</div>
							</div>
						</div>
					</div>
					<Footer next="socialMediaManager" />
				</div>
			</div>
		</div>
	)
}
