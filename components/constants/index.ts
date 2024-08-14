import { SocialNetwork } from "@/types"


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

