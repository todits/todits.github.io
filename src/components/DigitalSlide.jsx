import React from "react"

function DigitalSlide({ name, onSelect, isSelected }) {
	return (
		<div>
			<button onClick={onSelect}>
				<div
					className={`${
						isSelected
							? "border-solid border-4 border-custom-secondary selectedicon"
							: undefined
					} w-[80px] h-[80px] rounded-[5px]  bg-slate-300`}
				>
					{name || "icons"}
				</div>
			</button>
		</div>
	)
}

export default DigitalSlide
