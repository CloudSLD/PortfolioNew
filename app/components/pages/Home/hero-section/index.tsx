/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
'use client'

import { Button } from "@/app/components/Button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import {HiArrowNarrowRight} from 'react-icons/hi'
import {TbBrandGithub, TbBrandLinkedin} from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/CloudSLD',
        icon: <TbBrandGithub/>
    },
    {
        url: 'https://github.com/CloudSLD',
        icon: <TbBrandLinkedin/>
    },
]


/* eslint-disable prettier/prettier */
export const HeroSection  =  () => {
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

                    
                        <p className=" text-gray-400 my-6 text-sm  sm:text-base">Busco Oportunidade como Front-End Developer após concluir o quarto semestre na Universidade Paulista (UNIP). Possuo certificações em desenvolvimento Web. Pela RocketSeat, além de outros cursos que fiz de Python, Linux e Infraestrutura de Redes, além de React e React native. Demonstro trabalho através de Projetos no meu Portfólio GitHub.</p>

                    <div  className="flex flex-wrap gap-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({length: 7}).map((_, index) => (
                            <TechBadge name="Nextjs"/>
                        ))}
                    </div>
                    <div className="flex sm:items-center mt-6 lg:mt-10 sm:gap-5 flex-col sm:flex-row">
                        <Button onClick={() => handleContact()} className=" w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18}/>
                        </Button>

                        <div  className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                           {MOCK_CONTACTS.map((contact, index) => (
                            <a 
                            target="_blank" 
                            key={`contact-${index}`}
                             href={contact.url}
                            className="hover:text-gray-100 transition-colors"
                             >

                                {contact.icon}

                            </a>
                           ))}             
                        </div>

                    </div>
                    
                </div>
                <Image
                    width={420}
                    
                    height={404} src='/images/profile-pic.png'
                     alt='Foto de Perfil'
                     className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                                    />

            </div>

        </section>    
    )
}