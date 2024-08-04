export default function WebDesignExperience({ image, text, link }) {
   return (
      <a
         href={link}
         target="_blank"
         className="flex h-[200px] w-[100%] rounded-xl roun shadow-lg relative group shadow-custom-primary m-[20px] hover:scale-110 duration-300 border-t-2 border-custom-primary"
      >
         <img src={image} alt="" className="w-[35%]  rounded-l-xl h-[198px]" />

         <div className="w-[65%] h-[198px] p-[20px] text-lg">{text}</div>
         <div className="absolute -right-[100px] m-1 scale-0 group-hover:scale-100 group-hover:right-0 group-hover:bottom-0 duration-300 -bottom-[20px] px-5 py-2 bg-custom-fourth font-primary rounded-xl text-white">
            Click to View Site
         </div>
      </a>
   );
}
