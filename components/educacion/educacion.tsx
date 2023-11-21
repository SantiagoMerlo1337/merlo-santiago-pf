import React from "react";

const Educacion = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold my-4">Educación</h3>
            <ul className="list-disc ms-7">
                <li className="mb-2">
                    <h4 className="text-2xl font-medium">
                        Ingeniería en Informática (2019 - Actualidad)
                    </h4>
                    <p>
                        Universidad Católica de Santiago del Estero (Rafaela,
                        Santa Fe, Argentina)
                    </p>
                </li>
                <li className="mb-2">
                    <h4 className="text-2xl font-medium">
                        Modalidad de Informática (2016 - 2018)
                    </h4>
                    <p>
                        Colegio San José Rafaela (Rafaela, Santa Fe, Argentina)
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Educacion;
