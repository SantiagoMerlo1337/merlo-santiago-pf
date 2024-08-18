import ProjectCard from "@/components/shared/ProjectCard"

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
        label="Dev Overflow"
        desc="Stack Overflow Clone - 2024"
        techs={['Nextjs', 'Typescript', 'MongoDB', 'Clerk', 'Tailwindcss', 'Shadcn', 'TinyMCE', 'Zod']}
        ghUrl="https://github.com/SantiagoMerlo1337/stack-overflow-clone-nextjs"
        siteUrl="https://dev-overflow-santiagomerlo.vercel.app/"
        />
        <ProjectCard
        label="ViajandoAndo"
        desc="App web de Carpooling - 2022"
        techs={['Python Django', 'Bootstrap', 'SQLite']}
        ghUrl="https://github.com/SantiagoMerlo1337/viajando-ando"
        />
        <ProjectCard
        label="Optica Merlo"
        desc="Landing Page - 2024"
        techs={['Nextjs', 'Typescript', 'Tailwindcss', 'Shadcn']}
        ghUrl="https://github.com/SantiagoMerlo1337/optica-merlo-landing-page/"
        siteUrl="https://opticamerlo.com.ar/"
        />
        <ProjectCard
        label="API Rest"
        desc="Simple CRUD API Rest - 2023"
        techs={['Nodejs', 'Express']}
        ghUrl="https://github.com/SantiagoMerlo1337/api-rest-nodejs-express"
        />
        <ProjectCard
        label="Clerk Auth"
        desc="Simple autenticación con Clerk - 2023"
        techs={['Nextjs', 'Typescript', 'Clerk', 'Tailwindcss']}
        ghUrl="https://github.com/SantiagoMerlo1337/nextjs_clerk_auth"
        />
        <ProjectCard
        label="Curriculum Vitae"
        desc="Landing Page - 2023"
        techs={['Nextjs', 'Typescript', 'Tailwindcss', 'Shadcn']}
        ghUrl="https://github.com/SantiagoMerlo1337/merlosantiago-cv"
        siteUrl="/"
        />
        <ProjectCard
        label="Portafolio"
        desc="Landing Page - 2024"
        techs={['Nextjs', 'Typescript', 'Tailwindcss', 'Shadcn']}
        ghUrl="https://github.com/SantiagoMerlo1337/merlo-santiago-pf"
        />
        <ProjectCard
        label="Pasión Tango"
        desc="Landing Page - 2022"
        techs={['HTML', 'CSS', 'Bootstrap', 'Javascript', 'PHP']}
        ghUrl="https://github.com/SantiagoMerlo1337/pasion-tango-landing-page"
        siteUrl="https://pasion-tango-landing-page.vercel.app/"
        />
      </div>
    </>
  )
}

export default Page