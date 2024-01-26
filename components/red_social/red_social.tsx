import Image from "next/image";

interface RedSocialProps {
    href: string;
    color: string;
    roundedType: string;
    src: string;
    alt: string;
}

const RedSocial: React.FC<RedSocialProps> = (props) => {
    const colors: { [key: string]: string } = {
        purple: "bg-purple-700 hover:bg-purple-600",
        blue: "bg-blue-700 hover:bg-blue-600",
        green: "bg-green-700 hover:bg-green-600",
    };
    const rounded: { [key: string]: string } = {
        lg: "rounded-lg",
        full: "rounded-full",
    };

    const bgClass = colors[props.color];
    const roundedClass = rounded[props.roundedType];

    return (
        <li>
            <a href={props.href} target="_blank">
                <div
                    className={`${bgClass} ${roundedClass} h-12 w-12 flex items-center justify-center`}
                >
                    <Image
                        className="invert"
                        src={`/img/${props.src}`}
                        alt={props.alt}
                        width={30}
                        height={30}
                    />
                </div>
            </a>
        </li>
    );
};

export default RedSocial;
