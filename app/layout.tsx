import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Optica Merlo",
    description:
        "Optica en Rafaela, Santa Fe con más de 65 años de experiencia.",
    authors:{
        name: "Santiago Merlo",
        url: "https://merlo-santiago-pf.vercel.app/"
    },
    creator: "Santiago Merlo",
    publisher: "Santiago Merlo",
    generator: "Next.js 14",
    referrer: "no-referrer",
    keywords:[
        "Optica",
        "Rafaela",
        "Multifocales",
        "Lentes de sol",
        "Lentes de contacto",
        "Lentes con aumento",
        "Liquidos lentes",
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.className} bg-slate-200`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}