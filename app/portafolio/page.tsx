import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import Trabajo from "@/components/trabajo/trabajo";
import dataPortafolio from "../../assets/data/portafolio.json";
import imgFlechaVolver from "../../public/img/flecha-izquierda.png"

const Portafolio = () => {
    return (
        <Fragment>
            <Link href="/" className="float-left rounded-full bg-gray-600 hover:bg-gray-700 p-2 mt-10">
                <Image src={imgFlechaVolver} alt="Icono flecha volver" width={20} className="invert"></Image>
            </Link>    
            <div className="container-portafolio">
                {dataPortafolio.map((props, index) => (
                    <Trabajo
                    key={index}
                    title={props.title}
                    desc={props.desc}
                    tech={props.tech}
                    site={props.site}
                    github={props.github}
                    />
                ))}
            </div>
        </Fragment>
        
    );
};

export default Portafolio;
