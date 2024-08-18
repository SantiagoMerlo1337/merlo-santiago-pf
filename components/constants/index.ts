import { SocialNetwork, TechInfo } from "@/types"


// Images

export const logoImages = {
    logo: "/assets/images/logo.png",
    logoSinFondo: "/assets/images/logo-sin-fondo.png"
}

export const socialNetworkImages = {
    linkedin: "/assets/icons/social_network/linkedin.svg",
    github: "/assets/icons/social_network/github.svg",
    whatsapp: "/assets/icons/social_network/whatsapp.svg",
}

export const techImages = {
    Nextjs: '/assets/icons/tech/nextjs.svg',
    Typescript: '/assets/icons/tech/typescript.svg',
    MongoDB: '/assets/icons/tech/mongodb.svg',
    Clerk: '/assets/icons/tech/clerk.svg',
    Shadcn: '/assets/icons/tech/shadcn.svg',
    TinyMCE: '/assets/icons/tech/tinymce.svg',
    Zod: '/assets/icons/tech/zod.svg',
    PythonDjango: '/assets/icons/tech/python.svg',
    Javascript: '/assets/icons/tech/javascript.svg',
    HTML: '/assets/icons/tech/html.svg',
    CSS: '/assets/icons/tech/css.svg',
    PHP: '/assets/icons/tech/php.svg',
    Nodejs: '/assets/icons/tech/nodejs.svg',
    Express: '/assets/icons/tech/expressjs.svg',
    Bootstrap: '/assets/icons/tech/bootstrap.svg',
    SQLite: '/assets/icons/tech/sqlite.svg',
    Tailwindcss: '/assets/icons/tech/tailwindcss.svg',
}


// Data

export const socialNetwork: SocialNetwork[] = [
    {
        imgUrl: socialNetworkImages.linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/santiagomerlo1337/"
    },
    {
        imgUrl: socialNetworkImages.github,
        label: "Github",
        href: "https://github.com/SantiagoMerlo1337"
    },
    {
        imgUrl: socialNetworkImages.whatsapp,
        label: "WhatsApp",
        href: "https://api.whatsapp.com/send?phone=5493492691132"
    },
]

export const techInfo: TechInfo = {
    Nextjs: ['Framework de React que permite la creación de aplicaciones web.', techImages.Nextjs],
    Typescript: ['Superset de JavaScript que añade tipado estático, mejorando la robustez y la mantenibilidad del código.', techImages.Typescript],
    MongoDB: ['Base de datos NoSQL orientada a documentos, ideal para manejar datos flexibles y escalables.', techImages.MongoDB],
    Clerk: ['Plataforma de autenticación y gestión de usuarios para aplicaciones web.', techImages.Clerk],
    Shadcn: ['Colección de componentes UI accesibles y personalizables para React.', techImages.Shadcn],
    TinyMCE: ['Editor de texto enriquecido WYSIWYG para la creación y edición de contenido HTML.', techImages.TinyMCE],
    Zod: ['Biblioteca de validación y tipado de datos para TypeScript, centrada en la seguridad y simplicidad.', techImages.Zod],
    PythonDjango: ['Framework web de alto nivel en Python, desarrollo rápido y pragmático.', techImages.PythonDjango],
    Javascript: ['Esencial para la web, usado para añadir interactividad en las páginas.', techImages.Javascript],
    HTML: ['Lenguaje de marcado que estructura el contenido de las páginas web.', techImages.HTML],
    CSS: ['Lenguaje de estilos que controla la presentación y el diseño visual de las páginas web.', techImages.CSS],
    PHP: ['Lenguaje de programación del lado del servidor.', techImages.PHP],
    Nodejs: ['Entorno de ejecución para JavaScript en el servidor.', techImages.Nodejs],
    Express: ['Framework minimalista para Node.js que facilita la construcción de aplicaciones web y APIs.', techImages.Express],
    Bootstrap: ['Framework de CSS para diseñar sitios web responsivos y móviles con rapidez.', techImages.Bootstrap],
    SQLite: ['Base de datos ligera.', techImages.SQLite],
    Tailwindcss: ['Framework de CSS para diseñar sitios web responsivos y móviles con rapidez.', techImages.Tailwindcss],
}
