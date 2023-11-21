import React from "react";

const Contacto = () => {
    return (
        <section>
            <h3 className="text-3xl font-bold my-4">Contacto</h3>
            <ul className="list-none">
                <li className="mb-1">Rafaela, Santa Fe, Argentina</li>
                <li className="mb-1">santiagomerlo1337@gmail.com</li>
                <li className="mb-1">linkedin.com/in/santiagomerlo1337</li>
                <li className="mb-1">+5403492691132</li>
            </ul>
            <ul>
                <li>
                    <button>
                        <a
                            href={"https://github.com/SantiagoMerlo1337"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default Contacto;
