/* eslint-disable prettier/prettier */

import { Button } from "@/app/components/Button"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from "react-icons/fi"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { Link } from "@/app/components/Link"



export const ProjectDetails = () => {
    return(
        <section  className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
        <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(/images/imageFood1.png) no-repeat center/cover`,
        }}
        
        />  

<SectionTitle
        subtitle="projetos"
        title='Food Explorer'
        className="text-center items-center sm:[&>h3]:text-4xl"
      />  

      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">O Food Explorer é uma aplicação web desenvolvida com tecnologias como React.js no front-end e Node.js no back-end que proporciona uma experiência completa de navegação e compra de alimentos para clientes de um restaurante. Com funcionalidades como customização de perfil, filtragem de favoritos e carrinho 100% funcional com opções de pagamento em cartão ou Pix, o projeto oferece segurança e praticidade aos usuários.</p>

        <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center" >
            <TechBadge name="NextJs"/>
            <TechBadge name="NextJs"/>
            <TechBadge name="NextJs"/>
            <TechBadge name="NextJs"/>
            <TechBadge name="NextJs"/>
        </div>

        <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="#" target="_blank" rel="noreferrer">
        <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
        </a>

        <a href='#' target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
            < FiGlobe size={20} />
              Projeto Online
            </Button>
          </a>
        </div>
        <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>

        </section>
    )
}