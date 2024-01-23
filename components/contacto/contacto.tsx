import RedSocial from "../red_social/red_social";

const Contacto = () => {
    return (
        <section className="text-center lg:text-start">
            <h3 className="h3 ">Contacto</h3>
            <ul className="list-none pb-2">
                <li className="mb-1">Rafaela, Santa Fe, Argentina</li>
                <li className="mb-1">santiagomerlo1337@gmail.com</li>
                <li className="mb-1">linkedin.com/in/santiagomerlo1337</li>
                <li className="mb-1">+5403492691132</li>
            </ul>
            <ul className="flex gap-2 items-center justify-center lg:items-start lg:justify-start">
                <RedSocial
                    href="https://github.com/SantiagoMerlo1337"
                    color="purple"
                    src="github.png"
                    alt="GitHub"
                ></RedSocial>
                <RedSocial
                    href="https://www.linkedin.com/in/santiagomerlo1337/"
                    color="blue"
                    src="linkedin.png"
                    alt="LinkedIn"
                ></RedSocial>
                <RedSocial
                    href="https://wa.me/5403492691132"
                    color="green"
                    src="whatsapp.png"
                    alt="WhatsApp"
                ></RedSocial>
            </ul>
        </section>
    );
};

export default Contacto;
