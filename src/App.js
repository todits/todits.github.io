import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import ArtGallery from "./components/ArtGallery"
import Skills from "./components/Skills"
import "./global.css"
import WebDesign from "./components/portfolio/WebDesign"
import WebDeveloping from "./components/portfolio/WebDeveloping"
import PhotoEditing from "./components/portfolio/PhotoEditing"
import EmailMarketing from "./components/portfolio/EmailMarketing"
import VideoEditing from "./components/portfolio/VideoEditing"
import SocialMediaManager from "./components/portfolio/SocialMediaManager"

function App() {
	return (
		<div>
			<NavBar></NavBar>
			<Home></Home>
			<About></About>
			<Skills />
			<WebDesign />
			<WebDeveloping />
			<PhotoEditing />
			<EmailMarketing />
			<VideoEditing />
			<SocialMediaManager />
			<Portfolio></Portfolio>
			<Experience></Experience>
			<ArtGallery></ArtGallery>
			<Contact></Contact>
		</div>
	)
}

export default App
