import ProjectCard from "@/components/shared/ProjectCard"

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
        label="Dev Overflow"
        desc="Stack Overflow Clone - 2024"
        techs={['Nextjs', 'Typescript', 'MongoDB', 'Clerk', 'Tailwindcss', 'Shadcn', 'TinyMCE', 'Zod']}
        ghUrl="/"
        siteUrl="/"
        />
        <ProjectCard
        label="ViajandoAndo"
        desc="App web de Carpooling - 2022"
        techs={['Python Django', 'Bootstrap', 'SQLite']}
        ghUrl="/"
        siteUrl="/"
        />
        <ProjectCard
        label="Optica Merlo"
        desc="Landing Page - 2024"
        techs={['Nextjs', 'Typescript', 'Tailwindcss', 'Shadcn']}
        ghUrl="/"
        siteUrl="/"
        />
        <ProjectCard
        label="API Rest"
        desc="Simple CRUD API Rest - 2023"
        techs={['Nodejs', 'Express']}
        ghUrl="/"
        siteUrl="/"
        />
        <ProjectCard
        label="Clerk Auth"
        desc="Simple autenticación con Clerk - 2023"
        techs={['Nextjs', 'Typescript', 'Clerk', 'Tailwindcss']}
        ghUrl="/"
        siteUrl="/"
        />
        <ProjectCard
        label="Curriculum Vitae"
        desc="Landing Page - 2023"
        techs={['Nextjs', 'Typescript', 'Tailwindcss', 'Shadcn']}
        ghUrl="/"
        siteUrl="/"
        />
        <ProjectCard
        label="Pasión Tango"
        desc="Landing Page - 2022"
        techs={['HTML', 'CSS', 'Bootstrap', 'Javascript', 'PHP']}
        ghUrl="/"
        siteUrl="/"
        />
      </div>
    </>
  )
}

export default Page