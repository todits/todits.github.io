import React from "react"

export default function SocialMediaManager() {
	return (
		<div
			name="socialMediaManager"
			className="flex h-screen skillsScreen w-full from-white bg-gradient-to-b  to-custom-background"
		>
			<div className="relative">
				<p className="portfolio font-primary inline ">Portfolio</p>
			</div>

			<div className="max-w-screen-xl p-4 pt-20 mx-auto flex flex-col place-content-start w-full h-full">
				<div className="relative">
					<p className=" text-5xl font-primary  text-custom-third inline border-b-4  border-custom-third">
						Social Media Manager
					</p>
					<div>
						<a
							href="https://www.facebook.com/profile.php?id=100066757001153"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="cursor-pointer">
								<img src="/socialmedia/Laptop.png" alt="" />
							</div>
							<div className="overflow-y-scroll no-scrollbar h-[579px] phone left-[160px] top-[95px] absolute">
								<img
									src="/socialmedia/Facebook.png"
									alt=""
									className="w-[936px] cursor-pointer"
								/>
							</div>
						</a>
					</div>
					<a
						href="https://www.instagram.com/nestedbaby/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex justify-center flex-col place-items-center absolute top-[350px] right-[0px] ">
							<div className="phone overflow-y-scroll no-scrollbar h-[463px] z-[2] rounded-[20px]">
								<img
									src="/socialmedia/Instagram.png"
									alt=""
									className="w-[215px] cursor-pointer"
								/>
							</div>
							<div className="mt-[-477px;]">
								<img
									src="/socialmedia/Phone.png"
									alt=""
									className="w-[250px] cursor-pointer"
								/>
							</div>
						</div>
					</a>
					<div className="absolute top-[380px] w-[650px]  h-full">
						<div className="w-[570px] bg-white absolute z-[2] left-[42px] top-[36px] h-[390px]">
							asdasd
						</div>
						<div className="phone absolute top-[0px]  overflow-y-scroll no-scrollbar h-[463px] rounded-[20px]">
							<img
								src="/socialmedia/Tablet.png"
								alt=""
								className=" cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
