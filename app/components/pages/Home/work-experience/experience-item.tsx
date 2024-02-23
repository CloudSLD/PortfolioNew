/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */

import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"



export const ExperienceItem = () => {
    return(
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
            <div className="rounded-full border border-gray-500 p-0.5">
                <Image
                 src='/images/RocketSeat.jpg'
                 width={40}
                 height={40}
                 className="rounded-full"
                 alt="rocketseat"
                 
                 />
            </div>
            <div className="h-full w-[1px] bg-gray-800"/>
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a className="text-gray-500 hover:text-emerald-500 transition-colors" target="_blank" href="https://www.rocketseat.com.br/">
                    @RocketSeat
                    </a>
                    <h4  className="text-gray-300">
                    RocketSeat Ignite
                    </h4>
                    <span  className="text-gray-500">
                    out 2023 • Em andamento
                    </span>
                    <p className="text-gray-400">
                    O curso Rocketseat Explorer oferece uma ampla variedade de conteúdos e tecnologias essenciais para quem deseja iniciar sua jornada no mundo da programação e desenvolvimento de software. Os alunos têm a oportunidade de aprender linguagens de programação como JavaScript, TypeScript além de explorar frameworks populares como ReactJS, React Native e Node.js.

                    </p>
                    <div>
                        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competencias</p>
                    </div>
                    <div  className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                        <TechBadge name="React"/>
                        <TechBadge name="React"/>
                        <TechBadge name="React"/>
                        <TechBadge name="React"/>
                        
                        
                    </div>

                </div>
            </div>
        </div>
    )
}