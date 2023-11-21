import React from "react";
import Image from "next/image";
import img from "../../assets/img/profile_picture.png";

const NombreRol = () => {
    return (
        <div className="flex flex-wrap items-center justify-center md:justify-start bg-gray-800 gap-4 md:gap-14 px-10 lg:px-48 py-7">
            <Image
                src={img}
                width={140}
                alt="Foto carnet"
                className="rounded-full"
            ></Image>
            <div className="text-white text-center sm:text-start">
                <h1 className="text-4xl sm:text-6xl font-medium mb-2">
                    Merlo, Santiago
                </h1>
                <h2 className="text-xl">Desarrollador Web Fullstack</h2>
            </div>
        </div>
    );
};

export default NombreRol;
