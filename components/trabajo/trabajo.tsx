import React from "react";
import Image from "next/image";
import RedSocial from "../red_social/red_social";
import imgGithub from "../../public/img/github.png";
import imgWeb from "../../public/img/sitio-web.png";

interface TrabajoProps {
    title: string;
    desc: string;
    tech: string;
    site?: string;
    github: string;
}

const Trabajo: React.FC<TrabajoProps> = (props) => {
    if (props.site != undefined) {
        return (
            <div className="rounded-b-3xl shadow-lg">
                <h3 className="rounded text-2xl font-semibold pt-3 pb-2 bg-yellow-300">
                    {props.title}
                </h3>
                {/* <hr className="mx-10"/> */}
                <p className="text-lg pt-3 pb-1">{props.desc}</p>
                <p className="italic">{props.tech}</p>

                <div className="flex justify-center items-center gap-5 py-4">
                    <a
                        href={props.site}
                        target="_blank"
                        className="flex text-white bg-blue-700 hover:bg-blue-600 px-2 py-1 rounded-full gap-2"
                    >
                        <Image
                            className="invert object-contain"
                            src={imgWeb}
                            alt="Icono Web"
                            width={20}
                        ></Image>
                        <p>Sitio</p>
                    </a>
                    <a
                        href={props.github}
                        target="_blank"
                        className="flex text-white bg-purple-700 hover:bg-purple-600 px-2 py-1 rounded-full gap-2"
                    >
                        <Image
                            className="invert object-contain"
                            src={imgGithub}
                            alt="Icono Github"
                            width={20}
                        ></Image>
                        <p>Proyecto</p>
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="rounded-b-3xl shadow-lg">
                <h3 className="rounded text-2xl font-semibold pt-3 pb-2 bg-yellow-300">
                    {props.title}
                </h3>
                {/* <hr className="mx-10"/> */}
                <p className="text-lg pt-3 pb-1">{props.desc}</p>
                <p className="italic">{props.tech}</p>

                <div className="flex justify-center items-center gap-5 py-4">
                    <a
                        href={props.github}
                        target="_blank"
                        className="flex text-white bg-purple-700 hover:bg-purple-600 px-2 py-1 rounded-full gap-2"
                    >
                        <Image
                            className="invert object-contain"
                            src={imgGithub}
                            alt="Icono Github"
                            width={20}
                        ></Image>
                        <p>Proyecto</p>
                    </a>
                </div>
            </div>
        );
    }
};

export default Trabajo;
