/* eslint-disable prettier/prettier */

import { TbBrandNextjs } from "react-icons/tb"
import { SectionTitle } from "../../section-title"
import { KnowTech } from "./known-tech"



export const KnownTechs = () => {
    return(
        <section className="container py-16">
            <SectionTitle title="Conhecimentos" subtitle="Competencias"/>

            <div className=" mt-[60px] grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
               {Array.from({length: 8}).map((_, index) => (
                <KnowTech key={index} tech={{
                    icon: <TbBrandNextjs/>,
                    name: 'Next.js',
                    startDate: '2024-01-01'
                }}/>
               ))}
            </div>

        </section>
    )
}