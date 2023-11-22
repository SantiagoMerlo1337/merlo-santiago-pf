import "tailwindcss/tailwind.css";
import Contacto from "../components/contacto/contacto";
import Habilidades from "../components/habilidades/habilidades";
import Eduacion from "../components/educacion/educacion";
import Experiencia from "../components/experiencia/experiencia";

export default function Home() {
    return (
        <main>
            <div className="grid grid-cols-12 lg:grid-cols-6">
                <div className="col-span-12 lg:col-span-2 order-last lg:order-first">
                    <div className="order-1 lg:order-2">
                        <Contacto></Contacto>
                    </div>
                    <hr className="block md:hidden" />
                    <div className="order-2 lg:order-1">
                        <Habilidades></Habilidades>
                    </div>
                </div>
                <hr className="block md:hidden col-span-12" />
                <div className="col-span-12 lg:col-span-4 order-first lg:order-last">
                    <Eduacion></Eduacion>
                    <hr />
                    <Experiencia></Experiencia>
                </div>
            </div>
        </main>
    );
}
