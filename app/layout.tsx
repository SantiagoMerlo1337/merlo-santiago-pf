import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import NombreRol from "../components/nombre_rol/nombre_rol";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
    title: "Merlo, Santiago",
    description: "Mi Curriculum Vitae 😁",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={`${ubuntu.className} antialiased `}>
                <NombreRol></NombreRol>
                <div className="mx-auto w-10/12">{children}</div>
            </body>
        </html>
    );
}
