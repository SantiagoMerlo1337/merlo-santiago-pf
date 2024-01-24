import Image from "next/image";
import img from "../../assets/img/profile_picture.png";

const NombreRol = () => {
    return (
        // <div className="flex flex-wrap items-center justify-center md:justify-start bg-gray-800 gap-4 sm:gap-12 px-2 md:px-48 py-7">
        <div className="grid grid-cols-12  bg-gray-800 py-7 px-10 lg:px-48 gap-5 md:gap-0">
            <div className="col-span-12 md:col-span-3 text-center mx-auto md:mx-0">
                <Image
                    src={img}
                    width={135}
                    alt="Foto carnet"
                    className="rounded-full"
                ></Image>
            </div>

            <div className="text-white self-center text-center md:text-start col-span-12 md:col-span-9">
                <h1 className="text-4xl sm:text-6xl font-medium mb-2">
                    Merlo, Santiago
                </h1>
                <h2 className="text-xl">Desarrollador Web Fullstack</h2>
            </div>
        </div>
    );
};

export default NombreRol;
