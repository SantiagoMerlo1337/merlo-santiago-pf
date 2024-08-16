import { ProjectsInfo } from "@/types";
import { Inter } from "next/font/google"
import { techInfo} from "../constants";
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
    <article className="flex flex-col gap-4 bg-black w-full px-8 py-6 outline outline-1 outline-primary-500 rounded">
      
      <p className="h5-semibold">{label}</p>

      <div className="grow">
        <p className={`${inter.className} mb-2`}>{desc}</p>
        <div className="flex gap-2 flex-wrap">
          {
            techs.map((techName)=>(
              <HoverCard key={techName}>
                <HoverCardTrigger className="body-regular bg-secondary-500 text-black px-2 py-0.5 rounded">{techName}</HoverCardTrigger>
                <HoverCardContent className="bg-tertiary-500 text-black">
                  <div>
                    {techInfo[techName.replace(/ /g,"")]}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))
          }
        </div>
      </div>

      <div className="flex justify-end gap-4 body-regular">
        {ghUrl && (
          <Link href={ghUrl} className="bg-black hover:bg-blue-800 cursor-static-animation" target="_blank">Github</Link>
        )}
        {siteUrl && (
          <Link href={siteUrl} className="bg-black hover:bg-blue-800 cursor-static-animation" target="_blank">View site</Link>
        )}
      </div>
    </article>
  )
}

export default ProjectCard