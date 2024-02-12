import React, { useState } from "react"
import Footer from "../../components/Footer"
import DigitalSlide from "../../components/DigitalSlide"
import Images from "../../records/imageRecords.json"
import VideoSlide from "../../components/VideoSlide"

function DigitalArt() {
	const [image, setImage] = useState("sample")
	const [showImage, setShowImage] = useState(true)
	const handleClickImage = (getimage) => {
		setImage(getimage.picture)
		setShowImage(false)

		setTimeout(() => {
			setShowImage(true)
		}, 0)
	}

	return (
		<div
			name="digitalArt"
			className="flex h-screen skillsScreen w-full from-white bg-gradient-to-b  to-custom-background"
		>
			<div className="absolute z-0">
				<p className="portfolio font-primary inline z-0 ">Portfolio</p>
			</div>

			<div className="max-w-screen-xl p-4 pt-20 mx-auto flex flex-col place-content-start w-full h-full">
				<div className="">
					<p className=" text-5xl font-primary  text-custom-third inline border-b-4  border-custom-third">
						Digital Art
					</p>
					<div className="relative mt-6 flex flex-col justify-center">
						<div className="flex justify-center border-[7px] border-solid rounded-lg  border-custom-primary">
							<div className="grid grid-flow-col grid-rows-2 gap-[5px] overflowscroll p-[5px]">
								{Images.map(({ id, icon, picture }) => {
									return (
										<DigitalSlide
											key={id}
											onSelect={() => handleClickImage({ picture })}
											name={icon}
											isSelected={image === picture}
										/>
									)
								})}
							</div>
						</div>
						<div className="flex justify-between my-[20px] gap-3">
							<div className="h-[700px] w-[40%] bg-custom-background border-[7px] border-solid border-custom-primary rounded-lg flex justify-center place-items-center ">
								<div className="content h-[auto] flex place-content-center">
									{showImage && (
										<img
											className="showImage h-[auto] max-h-[680px] "
											src={image}
											alt="Selected Digital Art"
										/>
									)}
								</div>
							</div>

							<div className="w-[60%] flex flex-col bg-custom-background border-[7px] border-solid border-custom-primary rounded-lg justify-between p-[20px] ">
								<p className="text-justify px-[20px] h-[50%] place-items-center flex">
									Having previously served as both a Division and
									National illustrator for the Department of Education,
									I have created artwork that has gained national
									recognition and been prominently featured in schools
									and on various social media platforms. This
									experience has not only allowed me to develop and
									refine my skills in digital art but has also sparked
									an interest in pursuing a career as a virtual
									assistant within my field.
								</p>
								<div className="h-[45%] flex flex-col">
									<p className="font-primary  text-custom-third text-[25px] text-center p-[10px]">
										Digital art software background
									</p>
									<div className="flex justify-center gap-3">
										<VideoSlide
											image="skills/Ai.png "
											name="Power Director"
										/>
										<VideoSlide
											image="skills/ps.png "
											name="Power Director"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between mt-[10px] z-50">
						<Footer className="z-50" next="socialMedia" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default DigitalArt
