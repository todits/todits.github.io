import React from "react"
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"
import SocialLinks from "./SocialLinks"
import "../styles/Home.css"

const Home = () => {
	return (
		<div
			name="home"
			className="flex h-screen w-full to-white bg-gradient-to-b  from-custom-background content"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h1 className="font-signature text-4xl sm:text-7xl -rotate-3 text-custom-try ">
						Personal
					</h1>
					<h2 className="text-sm  sm:text-7xl  font-primary text-custom-secondary ">
						PORTFOLIO
					</h2>
					<h2 className="text-4xl  sm:text-7xl font-primary text-custom-third">
						DARYL LOUIE ONLAYAO
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Ipsum fuga iure aperiam iusto sunt, voluptate repudiandae ex
						quos ad in ea aspernatur! Temporibus dolores adipisci optio,
						delectus deserunt qui molestias.
					</p>
					<div>
						<Link to="about" smooth duration={500}>
							<button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
								Portfolio
								<span className="group-hover:rotate-90 duration-300">
									<MdOutlineKeyboardArrowRight
										size={25}
										className="ml-1"
									/>
								</span>
							</button>
						</Link>
					</div>
				</div>
				<div>
					<img
						src={HeroImage}
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 md:w-full "
					></img>
				</div>
			</div>
		</div>
	)
}

export default Home
