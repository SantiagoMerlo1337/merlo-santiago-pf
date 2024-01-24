import Image from "next/image";

interface RedSocialProps {
    href: string;
    color: string;
    roundedType: string;
    src: string;
    alt: string;
}

const RedSocial: React.FC<RedSocialProps> = (props) => {
    return (
        <div className="flex gap-2">
            <li>
                <a href={props.href} target="_blank">
                    <button
                        className={`bg-${props.color}-900 hover:bg-${props.color}-700 rounded-${props.roundedType} h-12 w-12 flex items-center justify-center`}
                    >
                        <Image
                            className="invert"
                            src={`/img/${props.src}`}
                            alt={props.alt}
                            width={30}
                            height={30}
                        />
                    </button>
                </a>
            </li>
        </div>
    );
};

export default RedSocial;
