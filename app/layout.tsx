import type { Metadata } from "next";
import { Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "santiagoMerlo dev",
    description:
        "Soy un desarrollador web fullstack con experiencia en diversas tecnologías y habilidades relacionadas con el desarrollo de aplicaciones web y la programación.",
    authors:{
        name: "Santiago Merlo",
        url: "https://merlosantiago-pf.vercel.app/"
    },
    creator: "Santiago Merlo",
    publisher: "Santiago Merlo",
    generator: "Next.js 14",
    referrer: "no-referrer",
    keywords:[
        "Portafolio",
        "Santiago Merlo",
        "Curriculum Vitae",
        "Desarrollador Fullstack",
        "React",
        "Next.js",
        "Node.js",
        "JavaScript",
        "MongoDB",
        "PostgreSQL",
        "CSS",
        "HTML",
        "Frontend Developer",
        "Backend Developer",
        "Desarrollo Web",
        "Aplicaciones Web",
        "Programación",
    ],
    applicationName: "Santiago Merlo Portfolio",
    robots: "index, follow",
    themeColor: "#000000",
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
        title: "santiagoMerlo dev",
        description: "Soy un desarrollador web fullstack con experiencia en diversas tecnologías y habilidades relacionadas con el desarrollo de aplicaciones web y la programación.",
        url: "https://merlosantiago-pf.vercel.app/",
        siteName: "santiagoMerlo dev",
        images: [
            {
                url: "https://github.com/SantiagoMerlo1337/merlo-santiago-pf/blob/main/public/assets/images/preview.png",
                width: 1200,
                height: 630,
                alt: "Santiago Merlo Portafolio",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${robotoMono.className} bg-black`}>
                <header>
                    <Navbar />
                </header>
                <main className="container my-20 z-10 relative text-tertiary-500">
                    {children}
                </main>
            </body>
        </html>
    );
}