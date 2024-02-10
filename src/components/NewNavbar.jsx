import React from "react"
import "../styles/NavBar.css"

export default function NewNavbar({ name, onSelectNav, isSelected }) {
	return (
		<li
			className={`px-4 py-0 cursor-pointer font-primary text-xl tracking-wider uppercase hover:scale-105 ${
				isSelected ? "navbarlist-active" : "navbarlist"
			}`}
		>
			<button onClick={onSelectNav} className="navbarlink uppercase">
				{name}
			</button>
		</li>
	)
}
