import "tailwindcss/tailwind.css";
import Contacto from "../components/contacto/contacto";
import Habilidades from "../components/habilidades/habilidades";
import Eduacion from "../components/educacion/educacion";
import Experiencia from "../components/experiencia/experiencia";

export default function Home() {
    return (
        <main>
            <div className="grid grid-cols-12 lg:grid-cols-6">
                <div className="col-span-12 lg:col-span-2">
                    <div className="flex flex-wrap">
                        <div className="m-auto lg:m-0 pb-6 lg:p-0">
                            <Contacto></Contacto>
                        </div>
                        <hr className="block md:hidden" />
                        <div className="order-first lg:order-last">
                            <Habilidades></Habilidades>
                            <hr className="block lg:hidden" />
                        </div>
                    </div>
                </div>
                <hr className="block md:hidden col-span-12" />
                <div className="col-span-12 lg:col-span-4 order-first lg:order-last">
                    <Eduacion></Eduacion>
                    <hr />
                    <Experiencia></Experiencia>
                    <hr className="block lg:hidden" />
                </div>
            </div>
        </main>
    );
}
