import Image from 'next/image'

const Hero = ({ children, img, img_alt }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center dark:bg-gray-900 text-black dark:text-white w-full py-4 px-2 min-h-screen gap-4">
      <div className="flex flex-col gap-4">
      {children}
      </div>
      {img && <Image src={img} alt={img_alt} />}
    </div>
  )
}

export default Hero