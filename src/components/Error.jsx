import React from 'react'

const Error = ({error}) => {
  return (
    <div className='h-screen flex  justify-center w-full items-start mt-10 '>
          <div className='bg-slate-400 h-20 px-8 rounded-3xl py-4 text-xl  sm:text-3xl  sm:ml-28 ml-10 '>{error} Try again</div>
     
    </div>
  )
}

export default Error