import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0  text-2xl font-bold bg-orange-400 text-gray-100 w-full p-2 text-center flex justify-center'>
         <div className="w-5/6 first-letter:text-gray-200 first-letter:text-3xl first-letter:bg-gray-600 first-letter:px-4 first-letter:py-1 first-letter:rounded-full">Lazy Developer's Restourant </div>
        <div className="  bg-success rounded-full p-2 ">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 items-end justify-end">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
    </div>
  )
}

export default Navbar