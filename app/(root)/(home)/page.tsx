import Skill from "@/components/shared/Skill"
import Image from "next/image"
import { Inter } from "next/font/google"
import PortfolioButton from "@/components/shared/PortfolioButton";

const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  return (
    <>
      <h1 className="h3-bold sm:h2-bold md:h1-bold mb-12 md:mb-16 text-center text-pretty">Hola! Soy <span className="text-secondary-500">Santiago Merlo</span>, <span className="block">desarrollador web</span> <span className="cursor-animation mx-auto">fullstack.</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 justify-center items-center md:items-start">
        <section className={`${inter.className}`}>
          <h2 className={`base-regular mb-6 text-center md:text-start`}>Soy un desarrollador web <strong className="font-bold">fullstack</strong> con experiencia en diversas tecnologías y habilidades relacionadas con el desarrollo de aplicaciones web y la programación. Me apasiona crear <strong className="font-bold">soluciones</strong> que mejoren la experiencia del usuario y aporten valor a los clientes.</h2>
          <ul>
            <Skill 
            title="Desarrollo Web Fullstack"
            desc="HTML, CSS, Bootstrap, Tailwind, JavaScript, TypeScript, React, Nextjs, Astro, Python Django"
            />
            <Skill 
            title="Programación"
            desc="POO, C#, .NET, Python, MVC, API REST"
            />
            <Skill 
            title="Bases de Datos"
            desc="SQL, OQL, SQL Server, MySQL, MongoDB, Modelado de datos"
            />
            <Skill 
            title="Controlador de Versiones"
            desc="Git, Github"
            />
            <Skill 
            title="Otros"
            desc="UML, Photoshop, Illustrator, paquete Office"
            />
          </ul>
        </section>
        <Image className="object-cover w-full h-full max-w-[468px] max-h-[610px] mx-auto rounded" src="/assets/images/santiago-merlo.jpg" width={468} height={610} alt="Santiago Merlo"/>
      </div>

        <Image className="updown-animation mx-auto mb-6" src="/assets/icons/double-bottom-arrow.svg" width={75} height={75} alt="Doble flecha hacia abajo" />

        <PortfolioButton/>
    </>
  )
}

export default Page