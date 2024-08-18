import Image from "next/image"
import { logoImages, socialNetwork } from "../constants/index"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-black py-3 px-6 lg:px-28">
      <div className="flex-between">
        <Link href="/">
          <Image className="object-contain" width={38} height={38} src={logoImages.logoSinFondo} alt="Logo" />
        </Link>
        <ul className="flex gap-6 ">
          {socialNetwork.map((item) => (
            <Link href={item.href} key={item.label} target="_blank">
              <li>
                <Image width={28} height={28} src={item.imgUrl} alt={`${item.label} logo`} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar