import "tailwindcss/tailwind.css";
import Contacto from "../components/contacto/contacto";
import Habilidades from "../components/habilidades/habilidades";
import Eduacion from "../components/educacion/educacion";
import Experiencia from "../components/experiencia/experiencia";

export default function Home() {
    return (
        <main>
            <div className="grid grid-cols-6">
                <div className="col-span-2">
                    <Contacto></Contacto>
                    <Habilidades></Habilidades>
                </div>
                <div className="col-span-4">
                    <Eduacion></Eduacion>
                    <hr />
                    <Experiencia></Experiencia>
                </div>
            </div>
        </main>
    );
}
