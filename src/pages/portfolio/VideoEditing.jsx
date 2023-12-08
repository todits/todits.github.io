import React, { useState } from "react"
import Footer from "../../components/Footer"
import VideoSlide from "../../components/VideoSlide"

export default function VideoEditing() {
	const [videosrc, setVideosrc] = useState("")

	const videoThumbnails = [
		{
			id: 1,
			source:
				"https://drive.google.com/file/d/1N1JIP0GqiUW2JpiC3C5wEjT3djgJphCM/preview",
			image: "video/sample_video1.png",
			title: "sample",
		},
		{
			id: 2,
			source:
				"https://drive.google.com/file/d/1PPOAd0tWroNJjez1hdXFja_a2QPJh0p3/preview",
			image: "video/sample_video1.png",
			title: "Graduation Teaser",
		},
		{
			id: 3,
			source: "https://www.youtube.com/embed/IJ_14huTj6E?autoplay=1",
			image: "video/sample_video1.png",
			title: "sample3",
		},
	]

	const handleClickVideo = (value) => {
		setVideosrc(value)
	}

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
									autoPlay
									allowFullScreen
									src={
										videosrc
											? videosrc.source
											: "https://www.youtube.com/embed/IJ_14huTj6E?autoplay=1"
									}
									width="100%	"
									className="left-0 rounded-xl min-h-[500px] h-[45vh]"
								></iframe>
							</div>
							<div className="text-2xl">{videosrc.title}</div>
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
