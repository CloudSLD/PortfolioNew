/* eslint-disable prettier/prettier */

import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { ProjectDetails } from "../../components/pages/project/project-details/index";



export default function Project() {
    return(
        <>
         <ProjectDetails/>
         <ProjectSections/>
         </>
    )
}