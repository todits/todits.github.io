import React from "react"
import "../styles/NavBar.css"
import { Link, NavLink } from "react-router-dom"

export default function NewNavbar({ name, onSelectNav, isSelected, to }) {
	return (
		<NavLink
			to={to}
			className={`px-4 py-0 cursor-pointer font-primary text-xl tracking-wider uppercase hover:scale-105 ${
				isSelected ? "navbarlist" : "navbarlist"
			}`}
		>
			<div className="navbarlink uppercase">{name}</div>
		</NavLink>
	)
}
