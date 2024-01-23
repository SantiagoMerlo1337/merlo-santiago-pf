import Redes_Sociales from "../redes_sociales/redes_sociales";

const Contacto = () => {
    return (
        <section className="text-center lg:text-start">
            <h3 className="h3 ">Contacto</h3>
            <ul className="list-none">
                <li className="mb-1">Rafaela, Santa Fe, Argentina</li>
                <li className="mb-1">santiagomerlo1337@gmail.com</li>
                <li className="mb-1">linkedin.com/in/santiagomerlo1337</li>
                <li className="mb-1">+5403492691132</li>
            </ul>
            <ul>
                <li>
                    <a
                        href={"https://github.com/SantiagoMerlo1337"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Contacto;
