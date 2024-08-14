import type { Metadata } from "next";
import { Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "santiagoMerlo dev",
    description:
        "Soy un desarrollador web fullstack con experiencia en diversas tecnologías y habilidades relacionadas con el desarrollo de aplicaciones web y la programación.",
    authors:{
        name: "Santiago Merlo",
        url: "https://merlo-santiago-pf.vercel.app/"
    },
    creator: "Santiago Merlo",
    publisher: "Santiago Merlo",
    generator: "Next.js 14",
    referrer: "no-referrer",
    keywords:[
        "Portafolio",
        "Santiago Merlo",
        "Curriculum Vitae",
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${robotoMono.className} bg-black`}>
                <Navbar />
                <Image className="absolute min-h-svh opacity-15 z-0" src="/assets/images/custom-background.png" width={1920} height={1080} alt="Background Image" />
                <main className="container my-20 z-10 relative text-tertiary-500">
                    {children}
                </main>
            </body>
        </html>
    );
}