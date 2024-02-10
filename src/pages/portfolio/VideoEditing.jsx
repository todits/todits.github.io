import React, { useState } from "react"
import Footer from "../../components/Footer"
import VideoSlide from "../../components/VideoSlide"
import { videoEditingIcon, videoThumbnails } from "../../records/records"

export default function VideoEditing() {
	const [videosrc, setVideosrc] = useState("")

	const handleClickVideo = (value) => {
		setVideosrc(value)
	}

	return (
		<div
			name="videoEditing"
			className=" flex h-screen skillsScreen w-full from-white bg-gradient-to-b  to-custom-background"
		>
			<div className="relative">
				<p className="portfolio font-primary inline ">Portfolio</p>
			</div>

			<div className=" md:max-w-screen-xl  p-4 pt-20 mx-auto flex flex-col place-content-start w-full h-full">
				<div>
					<p className=" text-4xl font-primary  text-custom-third inline border-b-4  border-custom-third">
						Video Editing
					</p>
					<div className="mt-8 flex gap-8">
						<div className=" flex flex-col gap-2 w-[75%]">
							<div className="z-50 rounded-s-3xl">
								<iframe
									autoPlay
									allowFullScreen
									src={
										videosrc
											? videosrc.source
											: "https://www.youtube.com/embed/IJ_14huTj6E?autoplay=1"
									}
									width="100%	"
									className="left-0 rounded-xl min-h-[450px] h-[40vh]"
								></iframe>
							</div>
							<div className="text-2xl">{videosrc.title}</div>
							<div className="w-[100%] bg-slate-200 h-[100px] rounded-xl p-3">
								asdasd
							</div>
							<div>Video Editing Background</div>
							<div className="flex  justify-between">
								{videoEditingIcon.map((videoIcon) => (
									<VideoSlide
										key={videoIcon.id}
										image={videoIcon.image}
										name={videoIcon.name}
										selectCircle={videoIcon.selectCircle}
										rate={videoIcon.rate}
									/>
								))}
							</div>
						</div>
						<div className=" w-[25%] flex flex-col z-50 gap-6">
							{videoThumbnails.map((videoThumbnail) => (
								<div
									key={videoThumbnail.id}
									className="flex flex-col cursor-pointer"
									onClick={() => handleClickVideo(videoThumbnail)}
								>
									<div>
										<img
											src={videoThumbnail.image}
											alt=""
											className="w-[100%] rounded-lg"
										/>
									</div>
									<div className="text-2xl">
										{videoThumbnail.title}
									</div>
								</div>
							))}
						</div>
					</div>
					<Footer next="socialMediaManager" />
				</div>
			</div>
		</div>
	)
}
