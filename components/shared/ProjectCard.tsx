import { ProjectsInfo } from "@/types";
import { Inter } from "next/font/google"
import { techInfo } from "../constants";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

const ProjectCard = ({label, desc, techs, ghUrl, siteUrl} : ProjectsInfo) => {

  return (
    <article className="flex flex-col gap-4 bg-black w-full px-8 py-6 outline outline-1 outline-primary-500/75 rounded">
      
      <p className="h5-bold">{`// `}{label}</p>

      <div className="grow">
        <p className={`${inter.className} mb-2`}>{desc}</p>
        <div className="flex gap-2 flex-wrap">
          {
            techs.map((techName)=>(
              <HoverCard key={techName}>
                <HoverCardTrigger className="body-regular bg-secondary-500 text-black font-bold px-2 py-0.5 rounded">{techName}</HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex gap-5 h-full">
                  <Image src={techInfo[techName.replace(/ /g,"")][1]} width={32} height={32} alt={`${techInfo[techName.replace(/ /g,"")][0]} Logo`}/>
                    <p className="text-shadow">
                      {techInfo[techName.replace(/ /g,"")][0]}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))
          }
        </div>
      </div>

      <div className="flex justify-end gap-4 body-regular">
        {ghUrl && (
            <Link href={ghUrl} className="flex gap-1 hover:underline underline-offset-2" target="_blank">
              <p>Github</p>
              <Image src="/assets/icons/code.svg" width={16} height={16} alt="Link externo icono"/>
            </Link>
        )}
        {siteUrl && (
            <Link href={siteUrl} className="flex gap-1 hover:underline underline-offset-2" target="_blank">
              <p>View site</p>
              <Image src="/assets/icons/external-link.svg" width={16} height={16} alt="Link externo icono"/>
            </Link>
        )}
      </div>
    </article>
  )
}

export default ProjectCard