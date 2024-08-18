export interface SocialNetwork {
    imgUrl: string,
    label: string,
    href: string,
}

export type TechInfo = {
    [techName: string]: string[]
}

export interface ProjectsInfo {
    label: string,
    desc: string,
    techs: string[]
    ghUrl?: string,
    siteUrl?: string,
}