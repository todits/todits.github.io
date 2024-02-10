import Home from "./pages/Home"
import SocialLinks from "./pages/SocialLinks"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import ArtGallery from "./pages/ArtGallery"
import Skills from "./pages/Skills"
import "./global.css"
import WebDesign from "./pages/portfolio/WebDesign"
import WebDeveloping from "./pages/portfolio/WebDeveloping"
import PhotoEditing from "./pages/portfolio/PhotoEditing"
import EmailMarketing from "./pages/portfolio/EmailMarketing"
import VideoEditing from "./pages/portfolio/VideoEditing"
import SocialMediaManager from "./pages/portfolio/SocialMediaManager"
import DigitalArt from "./pages/portfolio/DigitalArt"
import navBarList from "./records/navBar.json"
import Header from "./pages/Header"
import NewNavbar from "./components/NewNavbar"
import { useState } from "react"

function App() {
	const [selectedNavBar, setSelectedNavBar] = useState("home")

	const handleClickNavbar = (selectedtab) => {
		setSelectedNavBar(selectedtab)
	}

	return (
		<div>
			<Header>
				{navBarList.map(({ link, id }) => (
					<NewNavbar
						key={id}
						onSelectNav={() => handleClickNavbar(link)}
						name={link}
						isSelected={selectedNavBar === link}
					/>
				))}
			</Header>
			<SocialLinks />
			<div className="relative">
				{selectedNavBar === "home" ? <Home /> : undefined}
				{selectedNavBar === "about" ? <About /> : undefined}
				{selectedNavBar === "skills" ? <Skills /> : undefined}
				{selectedNavBar === "skills" ? <WebDesign /> : undefined}
				{selectedNavBar === "skills" ? <WebDeveloping /> : undefined}
				{selectedNavBar === "skills" ? <PhotoEditing /> : undefined}
				{selectedNavBar === "skills" ? <EmailMarketing /> : undefined}
				{selectedNavBar === "skills" ? <VideoEditing /> : undefined}
				{selectedNavBar === "skills" ? <DigitalArt /> : undefined}
				{selectedNavBar === "skills" ? <SocialMediaManager /> : undefined}
				{selectedNavBar === "skills" ? <Portfolio></Portfolio> : undefined}
				{selectedNavBar === "skills" ? <ArtGallery /> : undefined}
				{selectedNavBar === "experience" ? <Experience /> : undefined}
				{selectedNavBar === "contact" ? <Contact /> : undefined}
			</div>
		</div>
	)
}

export default App
