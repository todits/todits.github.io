import React from "react"
import { Link } from "react-scroll"

export default function Footer({ next }) {
	return (
		<div className="flex gap-3 justify-between font-primary uppercase text-xl">
			<Link
				className="cursor-pointer underline-offset-8 underline"
				to="skills"
				smooth
				duration={500}
			>
				back to skills
			</Link>
			<Link
				className="cursor-pointer underline-offset-8 underline"
				to={next}
				smooth
				duration={500}
			>
				next
			</Link>
		</div>
	)
}
