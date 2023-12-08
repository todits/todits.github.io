import NavBar from "./components/NavBar"
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
