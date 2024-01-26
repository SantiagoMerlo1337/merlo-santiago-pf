import React from "react";

interface TrabajoProps {
    title: string;
    desc: string;
    tech: string;
    site: string;
    github: string;
}

const Trabajo: React.FC<TrabajoProps> = (props) => {
    return (
        <div className="flex">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <p>{props.tech}</p>
            <a href={`${props.site}`}></a>
            <a href={`${props.github}`}></a>
        </div>
    );
};

export default Trabajo;
