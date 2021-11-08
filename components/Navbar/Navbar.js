import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import useWindowDimensions from '../../hooks/UseWindowDimensions'

const NavLinks = () => {
  return (
    <>
    <div className="sm:hidden">
      <MenuButton/>
    </div>
    <div className="hidden sm:flex space-x-1">
      <Link href="#">
        <a className="py-4 px-2 text-gray-200">Le fab-lab</a>
      </Link>
      <Link href="#">
        <a className="py-4 px-2 text-gray-200">Projets</a>
      </Link>
      <Link href="#">
        <a className="py-4 px-2 text-gray-200">Equipements</a>
      </Link>
      <Link href="#">
        <a className="py-4 px-2 text-gray-200">Workshops</a>
      </Link>
      <Link href="#">
        <a className="py-4 px-2 text-gray-200">Contact</a>
      </Link>
    </div>
    </>
  )
}

const NavLinksMobile = () => {
  return (
    <div className="flex flex-col items-end space-x-1">
      <Link href="#">
        <a className="py-2 px-2 text-gray-200">Le fab-lab</a>
      </Link>
      <Link href="#">
        <a className="py-2 px-2 text-gray-200">Projets</a>
      </Link>
      <Link href="#">
        <a className="py-2 px-2 text-gray-200">Equipements</a>
      </Link>
      <Link href="#">
        <a className="py-2 px-2 text-gray-200">Workshops</a>
      </Link>
      <Link href="#">
        <a className="py-2 px-2 text-gray-200">Contact</a>
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
    <nav className="flex shadow-lg bg-red-500 dark:bg-gray-800 text-gray-200 dark:text-white">
      <div className="flex justify-between w-full sm:max-w-4xl mx-auto items-start sm:items-center py-4 px-2">
        <p className="font-bold">akuna lab</p>
        {/* {showMenu<540 ? <MenuButton/> : <NavLinks/>} */}
        <NavLinks/>
      </div>
    </nav>
  )
}

export default Navbar