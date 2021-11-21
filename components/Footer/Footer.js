import Link from 'next/link'
import Image from 'next/image'
import linkedinIcon from '../../public/linkedin.png'
import instaIcon from '../../public/instagram.png'

const Footer = () => {
  return (
    <div className="flex bg-gray-300 dark:bg-gray-800 text-black dark:text-white">
      <div className="flex justify-between w-full sm:max-w-5xl mx-auto items-start sm:items-center py-4 px-2">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-gray-500">Explorez {`d'avantage`}</p>
          <Link href="/akunalab">
            <a className="hover:underline transition-all ease-in-out duration-500">A propos</a>
          </Link>
          <Link href="/contact">
            <a className="hover:underline transition-all ease-in-out duration-500">Nous contacter</a>
          </Link>
          <Link href="/projets">
            <a className="hover:underline transition-all ease-in-out duration-500">Nos projets</a>
          </Link>
          <Link href="#">
            <a className="hover:underline transition-all ease-in-out duration-500">Evènements</a>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
              <Image
                src={linkedinIcon}
                alt="LinkedIn Icon"
                height="16"
                width="16"
              />
              {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
              <Image
                src={instaIcon}
                alt="LinkedIn Icon"
                height="16"
                width="16"
              />
          </div>
          <p>akuna lab 2021 - present</p>
          <p>Institut National Polytechnique Houphouët Boigny de Yamoussoukro</p>
        </div>
      </div>
    </div>
  )
}

export default Footer