/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
'use client'

import { Button } from "@/app/components/Button"
import { CMSIcon } from "@/app/components/cms-icon"
import { RichText } from "@/app/components/rich-text"
import { TechBadge } from "@/app/components/tech-badge"
import { HomePageInfo } from "@/app/types/page-info"
import Image from "next/image"
import {HiArrowNarrowRight} from 'react-icons/hi'




type HomeSectionProps = {
    homeInfo: HomePageInfo
}


/* eslint-disable prettier/prettier */
export const HeroSection  =  ({homeInfo}: HomeSectionProps) => {
    const handleContact = () => {
        const contactSection = document.querySelector('#contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }


    return(
        <section className=" pb-10 sm:pb-32 py-32 lg:pb-[110px] flex flex-col justify-end bg-cover bg-center bg-no-repeat bg-hero-image w-full lg:h-[755px] ">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">

                <div  className="w-full lg:max-w-[530px] ">
                    <p  className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Victor Hugo</h2>

                    
                        <div className=" text-gray-400 my-6 text-sm  sm:text-base">
                            <RichText content={homeInfo.introduction.raw} />

                        </div>

                    <div  className="flex flex-wrap gap-2 gap-y-3 lg:max-w-[340px]">
                        {homeInfo.technologies.map((tech) => (
                            <TechBadge name={tech.name}/>
                        ))}
                    </div>
                    <div className="flex sm:items-center mt-6 lg:mt-10 sm:gap-5 flex-col sm:flex-row">
                        <Button onClick={() => handleContact()} className=" w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18}/>
                        </Button>

                        <div  className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                           {homeInfo.socials.map((contact, index) => (
                            <a 
                            target="_blank" 
                            key={`contact-${index}`}
                             href={contact.url}
                            className="hover:text-gray-100 transition-colors"
                             >
                                <CMSIcon icon={contact.iconSvg}/>
                                

                            </a>
                           ))}             
                        </div>

                    </div>
                    
                </div>
                <Image
                    width={420}
                    
                    height={404} src={homeInfo.profilePicture.url}
                     alt='Foto de Perfil'
                     className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                                    />

            </div>

        </section>    
    )
}