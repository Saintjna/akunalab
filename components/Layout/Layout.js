import Navbar from "../Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className="flex flex-col justify-between w-full sm:max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Layout