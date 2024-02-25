/* eslint-disable prettier/prettier */

import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/Link"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Project } from "@/app/types/projects"


type HighlightProjectsProps = {
    projects : Project[]
}



export const HighlightedProjects = ({projects}:HighlightProjectsProps ) => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="Destaques" title="Projetos em destaques"/>
            <HorizontalDivider className="mb-16"/>

            <div>
                {projects?.map((project) => (
                    <div key={project.slug}>
                        <ProjectCard project={project}/>
                <HorizontalDivider className="my-16"/>
                    </div>
                ))}
               

                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Se interessou?</span>
                    <Link href='/projects' className="inline-flex ">
                    Ver todos
                    <HiArrowNarrowRight/>
                    </Link>
                </p>
            </div>
        </section>
    )
}