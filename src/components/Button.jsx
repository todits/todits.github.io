import React from "react"

export default function Button({ selectedButton, name }) {
	return (
		<>
			<button onClick={selectedButton}>{name}</button>
		</>
	)
}
