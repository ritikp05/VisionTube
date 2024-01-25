import React from 'react'
import { Link } from 'react-router-dom'
const Page404 = () => {
  return (
    <div className="  text-center my-16 flex flex-col items-center justify-center gap-2 mt-40">
    <h1 className="text-4xl text-gray-800 mb-4">404 - Not Found</h1>
    <p className="text-lg text-gray-600 mb-8">Oops! The page you are looking for might be in another castle.</p>
    <Link to="/" className="text-blue-500  text-lg">Go Home</Link>
   </div>
  )
}

export default Page404