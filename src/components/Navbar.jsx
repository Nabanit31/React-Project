import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
    <div className="w-full bg-green-500 text-black flex flex-wrap items-center justify-between py-5 px-4">
    <h2 className="text-2xl font-bold">Roy Website</h2>
    <div className="flex flex-wrap items-center gap-6 mt-4 sm:mt-0">
        <Link to ='/home' className='text-xl'>Home</Link>
        <Link to ='/about' className='text-xl'>About</Link>
        <Link to ='/contact' className='text-xl'>Contact</Link>
        <Link to ='/service' className='text-xl'> Service</Link>
        <Link to ='/account' className='text-xl'> Account</Link>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
