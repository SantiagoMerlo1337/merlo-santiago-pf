import { SocialNetwork, TechInfo } from "@/types"


// Images

export const logoImages = {
    logo: "/assets/images/logo.png",
    logoSinFondo: "/assets/images/logo-sin-fondo.png"
}

export const socialNetworkImages = {
    linkedin: "/assets/images/social_network/linkedin.png",
    github: "/assets/images/social_network/github.png",
    whatsapp: "/assets/images/social_network/whatsapp.png",
}

export const techImages = {

}


// Data

export const socialNetwork: SocialNetwork[] = [
    {
        imgUrl: socialNetworkImages.linkedin,
        label: "LinkedIn",
        href: "/"
    },
    {
        imgUrl: socialNetworkImages.github,
        label: "Github",
        href: "/"
    },
    {
        imgUrl: socialNetworkImages.whatsapp,
        label: "WhatsApp",
        href: "/"
    },
]

export const techInfo: TechInfo = {
    Nextjs: 'Next Description',
    Typescript: 'Typescript Description',
    MongoDB: 'MongoDB Description',
    Clerk: 'Clerk Description',
    Shadcn: 'Shadcn Description',
    TinyMCE: 'TinyMCE Description',
    Zod: 'Zod Description',
    PythonDjango: 'Django Description',
    Javascript: 'Javascript Description',
    HTML: 'HTML Description',
    CSS: 'CSS Description',
    PHP: 'PHP Description',
    Nodejs: 'Nodejs Description',
    Express: 'Express Description',
    Bootstrap: 'Bootstrap Description',
    SQLite: 'SQLite Description',
    Tailwindcss: 'Tailwindcss Description',
}
