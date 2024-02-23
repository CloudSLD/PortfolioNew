/* eslint-disable prettier/prettier */

import { Link } from "@/app/components/Link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"



export const ProjectCard = () => {
    return(
        <div className="flex ga-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                width={420}
                 height={304}
                alt="projeto"
                className=" w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full   object-cover rounded-lg"
                src='/images/imageFood1.png'/>
            </div>

            <div>
                <h3  className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image
                    width={20}
                    height={20}
                    alt=""
                    src='/images/icons/project-title-icon.svg'
                    />
                    Food Explorer
                
                </h3>

                <p  className="text-gray-400 my-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero debitis odit magnam autem atque non ipsa, necessitatibus officia sed quod.</p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.Js"/>
                    <TechBadge name="Next.Js"/>
                    <TechBadge name="Next.Js"/>
                    <TechBadge name="Next.Js"/>
                    <TechBadge name="Next.Js"/>
                    <TechBadge name="Next.Js"/>
                    <TechBadge name="Next.Js"/>
                </div>
                <Link href='/projects/food-explorer'>
                Ver projetos
                <HiArrowNarrowRight/>
                </Link>
            </div>
        </div>
    )
}