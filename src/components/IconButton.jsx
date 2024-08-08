<<<<<<< HEAD
import React from "react"
=======
import React from "react";
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d

export default function IconButton({ iconselect, image, iconName }) {
   return (
      <button onClick={iconselect} className="flex place-items-center group">
         <img
            src={image}
            alt="not available"
<<<<<<< HEAD
            className="h-[50px] max-md:h-auto max-md:max-h-[50px] max-h-[80px] group-hover:scale-125 max-md:group-hover:scale-100 duration-500 "
         />
         <div className="self-center ml-[-110px] text-[18px] scale-0 group-hover:scale-100 max-md:hidden group-hover:ml-0 duration-500 w-[110px] whitespace-nowrap font-bold text-custom-third hover:text-custom-secondary">
            {iconName === "Skills" ? "Back to Skills" : iconName}
         </div>
      </button>
   )
=======
            className="h-[50px] max-h-[80px] group-hover:h-[80px] duration-500 "
         />
         <div className="self-center ml-[-110px] text-[18px] scale-0 group-hover:scale-100 group-hover:ml-0 duration-500 w-[110px] whitespace-nowrap font-bold text-custom-third hover:text-custom-secondary">
            {iconName === "Skills" ? "Back to Skills" : iconName}
         </div>
      </button>
   );
>>>>>>> 532a447af784ecb4d3387302bb03dd124afa074d
}
