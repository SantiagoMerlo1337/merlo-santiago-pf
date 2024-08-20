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
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

const ProjectCard = ({label, desc, techs, ghUrl, siteUrl} : ProjectsInfo) => {

  return (
    <article className="flex flex-col gap-4 background-pattern2 w-full px-8 py-6 outline-tertiary-500 rounded">
      
      <p className="h5-bold">{`// `}{label}</p>

      <div className="grow">
        <p className={`${inter.className} mb-2`}>{desc}</p>
        <div className="flex gap-2 flex-wrap">
          {
            techs.map((techName)=>(
              <HoverCard key={techName}>
                <HoverCardTrigger className="body-regular bg-secondary-500 text-black font-bold px-2 py-0.5 rounded">{techName}</HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex h-full">
                    <div className="w-24 flex-center">
                      <Suspense>
                        <Image src={techInfo[techName.replace(/ /g,"")][1]} width={32} height={32} alt={`${techName} Logo`} placeholder="blur"/>
                      </Suspense>
                    </div>
                    <p className="ms-4 text-shadow">
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
              <p>Sitio web</p>
              <Image src="/assets/icons/external-link.svg" width={16} height={16} alt="Link externo icono"/>
            </Link>
        )}
      </div>
    </article>
  )
}

export default ProjectCard