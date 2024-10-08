'use client'

import Link from "next/link"

const PortfolioButton = () => {
    const handleText = () =>{
        const paragraph = document.getElementById('target-text');
          if(paragraph && paragraph.textContent === "Mis proyectos") {
            paragraph.textContent = "./portafolio"
          } else {
            if(paragraph && paragraph.textContent === "./portafolio") {
              paragraph.textContent = "Mis proyectos"
            }
          }
      }
  return (
    <Link onMouseOver={handleText} onMouseOut={handleText} className="flex flex-col w-full sm:w-1/3 mx-auto py-6 rounded text-black hover:text-tertiary-500 transition duration-100 bg-tertiary-500 hover:bg-secondary-500" href="/portafolio">
        <h4 id="target-text" className="h5-bold text-center">Mis proyectos</h4>
    </Link>
  )
}

export default PortfolioButton