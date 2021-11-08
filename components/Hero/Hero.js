import Image from 'next/image'

const Hero = ({ children, img, img_alt }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-start sm:items-center bg-red-400 dark:bg-gray-900 text-black dark:text-white w-full py-4 px-2 m-h-80">
      <div>
      {children}
      </div>
      {img && <Image src={img} alt={img_alt} />}
    </div>
  )
}

export default Hero