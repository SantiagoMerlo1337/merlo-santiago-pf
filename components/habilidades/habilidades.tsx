const Habilidades = () => {
    return (
        <section>
            <h3 className="h3">Habilidades</h3>
            <ul className="list-none md:list-disc ms-0 md:ms-7">
                <li className="mb-2">
                    <h4 className="h4">Desarrollo Web Full Stack</h4>
                    <p>
                        HTML, CSS, Bootstrap, Tailwind, JavaScript, TypeScript,
                        Nextjs, Python Django, React, Material UI
                    </p>
                </li>
                <li className="mb-2">
                    <h4 className="h4">Programación</h4>
                    <p>POO, C#, .NET, Python, MVC, API REST</p>
                </li>
                <li className="mb-2">
                    <h4 className="h4">Bases de Datos</h4>
                    <p>SQL, OQL, SQL Server, MySQL, Modelado de datos</p>
                </li>
                <li className="mb-2">
                    <h4 className="h4">Controlador de versiones</h4>
                    <p>Git, GitHub</p>
                </li>
                <li className="mb-2">
                    <h4 className="h4">Otros</h4>
                    <p>UML, Photoshop, Ilustrator, paquete Office</p>
                </li>
            </ul>
        </section>
    );
};

export default Habilidades;
