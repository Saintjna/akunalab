import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

const NavLinks = () => {
  return (
    <div className="md:flex items-center space-x-1">
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
      <button className="outline-none mobile-menu-button">
        <svg
          className="w-6 h-6 text-gray-200"
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
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState(true);

  const handleResize = () => {
    setShowMenu(540>ref.current.offsetWidth);
    console.log(ref.current.offsetWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  

  return (
    <nav className="flex justify-between bg-white items-start sm:items-center shadow-lg max-w-6xl mx-auto py-4 px-2 bg-green-500 " ref={ref}>
      <p className="text-black font-bold text-gray-200">akuna lab</p>
      { showMenu ? <MenuButton /> : <NavLinks /> }
      
    </nav>
  )
}

export default Navbar