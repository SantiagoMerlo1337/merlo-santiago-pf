import React from "react";
import Trabajo from "@/components/trabajo/trabajo";
import dataPortafolio from "../../assets/data/portafolio.json";

const Portafolio = () => {
    return (
        <div className="bg-blue-400">
            Portafolio
            {/* <div className="fs-1">Portafolio</div>
            {dataPortafolio.map((item, index) => (
                <Trabajo key={index} items={item} />
            ))} */}
        </div>
    );
};

export default Portafolio;
