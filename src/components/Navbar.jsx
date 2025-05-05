import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
    <div className="text-black max-w-7xl mx-auto flex flex-wrap items-center justify-between py-5 px-4 ">
    <h2 className="text-2xl font-bold">Roy Website</h2>
    <div className="flex flex-wrap items-center gap-6 mt-4 sm:mt-0">
        <h4 className='text-xl'>Home</h4>
        <h4 className='text-xl'>About</h4>
        <h4 className='text-xl'>Contact</h4>
        <h4 className='text-xl'> Service</h4>
        <h4 className='text-xl'> Account</h4>
      </div>
    </div>  
    </nav>
    </>
  )
}

export default Navbar
