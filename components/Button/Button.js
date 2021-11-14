import Link from 'next/link'

const Button = ({ children, link }) => {
  return (
    <div className="py-3 px-2 border-2 border-gray-900 dark:border-red-800 text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-red-800 rounded-xl hover:text-gray-50 uppercase text-center text-sm w-full sm:max-w-xs cursor-pointer transition-all ease-in-out duration-500">
    {link ? 
      <Link href={link}>
        <a>{children}</a>
      </Link>
    :
      <div>
        {children}
      </div>
    }
    </div>
  )
}

export default Button