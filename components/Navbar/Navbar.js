import { useState } from 'react'
import Link from 'next/link'

const NavLinks = () => {
  return (
    <>
    <div className="sm:hidden">
      <MenuButton/>
    </div>
    <div className="hidden sm:flex space-x-1">
      <Link href="/akunalab">
        <a className="py-4 px-2 text-gray-800">Le fab-lab</a>
      </Link>
      <Link href="/projets">
        <a className="py-4 px-2 text-gray-800">Projets</a>
      </Link>
      <Link href="/equipements">
        <a className="py-4 px-2 text-gray-800">Equipements</a>
      </Link>
      <Link href="/workshops">
        <a className="py-4 px-2 text-gray-800">Workshops</a>
      </Link>
      <Link href="/contact">
        <a className="py-4 px-2 text-gray-800">Contact</a>
      </Link>
    </div>
    </>
  )
}

const NavLinksMobile = () => {
  return (
    <div className="flex flex-col items-end space-x-1">
      <Link href="/akunalab">
        <a className="py-2 px-2 text-gray-800">Le fab-lab</a>
      </Link>
      <Link href="/projets">
        <a className="py-2 px-2 text-gray-800">Projets</a>
      </Link>
      <Link href="/equipements">
        <a className="py-2 px-2 text-gray-800">Equipements</a>
      </Link>
      <Link href="/workshops">
        <a className="py-2 px-2 text-gray-800">Workshops</a>
      </Link>
      <Link href="/contact">
        <a className="py-2 px-2 text-gray-800">Contact</a>
      </Link>
    </div>
  )
}

const MenuButton = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <div 
      className="flex items-end flex-col"
      onClick={() => setMenuClick(!menuClick)}>
      <button className="outline-none mobile-menu-button flex">
        <span>Menu</span>
        <svg
          className="w-6 h-6"
          x-show="!showMenu"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {menuClick && <NavLinksMobile />}
    </div>
  )
}

const Navbar = () => {
  
  return (
    <nav className="flex shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white sticky top-0 z-50">
      <div className="flex justify-between w-full sm:max-w-5xl mx-auto items-start sm:items-center py-4 px-2">
        <Link href="/"><a className="font-bold">akuna lab</a></Link>
        <NavLinks/>
      </div>
    </nav>
  )
}

export default Navbar