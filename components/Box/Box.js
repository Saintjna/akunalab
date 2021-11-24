const Box = ({ children, bg, colReverse, shadow }) => {

  return (
    <div className={`flex flex-col ${colReverse} sm:flex-row justify-evenly items-start w-full ${bg} min-h-96 mb-4 mt-4 ${shadow} rounded-lg`}>
      {children}
    </div>
  )
}

export default Box