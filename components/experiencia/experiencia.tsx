import Image from "next/image";
import Link from "next/link";
import imgDescarga from "../../assets/img/direct-download.png";
import imgPortafolio from "../../assets/img/briefcase.png";

const Experiencia = () => {
    return (
        <section>
            <h3 className="h3">Experiencia</h3>
            <ul className="list-none md:list-disc ms-0 md:ms-7">
                <li className="mb-2">
                    <h4 className="h4">
                        Desarrollo Web Freelance (2022 - Actualidad)
                    </h4>
                    <p className="text-justify">
                        Realización de sitios web para diversos clientes,
                        enfocando el diseño en captación de usuarios, la
                        conversión del tráfico y una experiencia de usuario
                        (UX/UI) sencilla e intuitiva, siempre priorizando la
                        optimización y el SEO. Los trabajos incluyen el uso de
                        diversas tecnologías, tales como HTML, CSS, Bootstrap,
                        JavaScript, React, CMS, entre otras.
                    </p>
                    <div className="flex gap-8 pt-4 pb-2 justify-center lg:justify-start">
                        <Link href="/portafolio">
                            <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-lg">
                                <Image
                                    className="invert"
                                    src={imgPortafolio}
                                    alt="Descargar"
                                    width={28}
                                ></Image>
                                Portafolio
                            </button>
                        </Link>
                        
                        <a href="/static/pdf/Merlo-Santiago_CV.pdf" download>
                            <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-lg">
                                <Image
                                    className="invert"
                                    src={imgDescarga}
                                    alt="Descargar"
                                    width={28}
                                ></Image>
                                Descargar CV
                            </button>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Experiencia;
