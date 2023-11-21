import React from "react";

const Habilidades = () => {
    return (
        <section>
            <h3 className="text-3xl font-bold my-4">Habilidades</h3>
            <ul className="list-disc ms-7">
                <li className="mb-2">
                    <h4 className="text-2xl font-medium">
                        Desarrollo Web Full Stack
                    </h4>
                    <p>
                        HTML, CSS, Bootstrap, Tailwind, JavaScript, TypeScript,
                        Nextjs, Python Django, React, Material UI
                    </p>
                </li>
                <li className="mb-2">
                    <h4 className="text-2xl font-medium">Programación</h4>
                    <p>POO, C#, .NET, Python, MVC, API REST</p>
                </li>
                <li className="mb-2">
                    <h4 className="text-2xl font-medium">Bases de Datos</h4>
                    <p>SQL, OQL, SQL Server, MySQL, Modelado de datos</p>
                </li>
                <li className="mb-2">
                    <h4 className="text-2xl font-medium">
                        Controlador de versiones
                    </h4>
                    <p>Git, GitHub</p>
                </li>
                <li className="mb-2">
                    <h4 className="text-2xl font-medium">Otros</h4>
                    <p>UML, Photoshop, Ilustrator, paquete Office</p>
                </li>
            </ul>
        </section>
    );
};

export default Habilidades;
