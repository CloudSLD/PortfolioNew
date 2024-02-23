/* eslint-disable prettier/prettier */

import Image from "next/image"



export const ProjectCard = () => {
    return(
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden group transition-all border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100">
            <div className="w-full h-48 overflow-hidden">
                <Image
                src='/images/imageFood1.png'
                alt="food-Project"
                width={380}
                height={200}
                unoptimized
                className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                
                />
            </div>

            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">Food Explorer</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">O Food Explorer é uma aplicação web desenvolvida com tecnologias como React.js no front-end e Node.js no back-end que proporciona uma experiência completa de navegação e compra de alimentos para</p>
              <span className="text-gray-300 text-sm font-medium block mt-auto truncate">REACT, REACT,  REACT,  REACT,  REACT,  REACT,  REACT,  REACT,  </span> 

            </div>
        </div>
    )
}