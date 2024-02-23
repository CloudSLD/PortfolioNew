/* eslint-disable prettier/prettier */
import { HeroSection } from "./components/pages/Home/hero-section";
import { HighlightedProjects } from "./components/pages/Home/highlighted-projects";
import { WorkExperience } from "./components/pages/Home/work-experience";
import { KnownTechs } from "./components/pages/KnownTechs";

export default async function Home() {
  return (
    <>
     <HeroSection/>
     <KnownTechs/>
     <HighlightedProjects/>
     <WorkExperience/>
    </>
  )
}
