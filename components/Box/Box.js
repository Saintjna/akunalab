const Box = ({ children, bg, illustration, direction, aside, height }) => {
  // return (
  //   <div className={`flex flex-col sm:flex-row justify-evenly items-start sm:items-center w-full py-4 px-2 gap-4 ${bg} dark:bg-gray-800 dark:text-white ${height}`}>
  //     <div className={`flex justify-evenly items-start w-full py-4 px-2 gap-4 ${direction ? `flex-col sm:${direction}` : 'flex-col'}`}>
  //       {children}
  //     </div>
  //     <div>
  //       {illustration}
  //       {aside}
  //     </div>
  //   </div>
  // )

  return (
    <div className={`flex flex-col sm:flex-row justify-evenly items-start w-full ${bg} min-h-96 mb-4 mt-4`}>
      {children}
    </div>
  )
}

export default Box