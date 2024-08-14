import Image from "next/image"
import { logoImages, socialNetwork } from "../constants/index"

const Navbar = () => {
  return (
    <nav className="bg-black py-3 px-6 lg:px-28">
      <div className="flex-between">
        <Image width={32} height={32} src={logoImages.logoSinFondo} alt="Logo" />
        <ul className="flex gap-6 ">
          {socialNetwork.map((item) => (
            <li key={item.label}>
              <Image className="invert" width={28} height={28} src={item.imgUrl} alt={`${item.label} logo`} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar