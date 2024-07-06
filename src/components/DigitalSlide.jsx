import React from "react"

function DigitalSlide({ name, onSelect, isSelected }) {
   return (
      <div className="flex justify-center">
         <button onClick={onSelect}>
            <div
               className={`${
                  isSelected
                     ? "border-solid border-2 border-custom-secondary selectedicon max-[1600px]:w-[85px] max-[1600px]:h-[85px] h-[65px] w-[65px] from-custom-background bg-gradient-to-b  to-custom-fourth"
                     : "max-[1600px]:w-[80px] max-[1600px]:h-[80px] h-[60px] w-[60px]   m-[2px]  from-custom-background bg-gradient-to-b  to-custom-primary"
               }  rounded-[5px]  `}
            >
               <img
                  className="showImage h-[auto] max-h-[80px] "
                  src={name}
                  alt="Selected Digital Art"
               />
            </div>
         </button>
      </div>
   )
}

export default DigitalSlide
