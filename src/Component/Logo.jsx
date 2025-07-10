import React from 'react'

function logo({width = '100px'}) {
  return (
    <div className='flex justify-center items-center text-white'>
      <span className='bg-sky-700 w-10 text-center text-2xl animate-bounce delay-100 rounded-xl'>B</span>
      <span className='bg-gray-400 w-10 text-center text-2xl animate-bounce delay-400 rounded-xl'>L</span>
      <span className='bg-red-500 w-10 text-center text-2xl animate-bounce delay-500 rounded-xl'>O</span>
      <span className='bg-yellow-300 w-10 text-center text-2xl animate-bounce delay-200 rounded-xl'>G</span>
    </div>
  )
}

export default logo