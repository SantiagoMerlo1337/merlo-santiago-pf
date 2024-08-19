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
            <li key={item.label}>
              <Link  href={item.href} target="_blank">
                  <Image className="hover:brightness-50 transition duration-150" width={28} height={28} src={item.imgUrl} alt={`${item.label} logo`} />
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}

export default Navbar