import React from "react"

function DigitalSlide({ name, onSelect, isSelected }) {
	return (
		<div className="flex justify-center">
			<button onClick={onSelect}>
				<div
					className={`${
						isSelected
							? "border-solid border-2 border-custom-secondary selectedicon w-[85px] h-[85px]  from-custom-background bg-gradient-to-b  to-custom-fourth"
							: "w-[80px] h-[80px] mx-[5px]  from-custom-background bg-gradient-to-b  to-custom-primary"
					}  rounded-[5px]  `}
				>
					<img
						className="showImage h-[auto] max-h-[680px] "
						src={name}
						alt="Selected Digital Art"
					/>
				</div>
			</button>
		</div>
	)
}

export default DigitalSlide
