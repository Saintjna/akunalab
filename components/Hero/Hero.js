import Image from 'next/image'

const Hero = ({ children }) => {
  return (
    <div className="flex flex-row justify-between items-center dark:bg-gray-900 text-black dark:text-white w-full py-4 px-2 min-h-screen gap-4">
      <div className="flex flex-col gap-4">
      {children}
      </div>
    </div>
  )
}

export default Hero