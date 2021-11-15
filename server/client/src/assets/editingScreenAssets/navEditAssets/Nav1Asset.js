import React from 'react'
// import logo from './logo1.png'
export default function Nav1Asset() {
  return (
    <>
      <header className="text-gray-600 body-font bg-red-100 h-36">
        <div className="container mx-auto flex p-8 flex-row md:flex-row items-center justify-between">
          <img src="https://i.ibb.co/y68gwmt/logo-security-red-black.png" alt="logo-security-red-black" className="h-16 w-16 ml-8" />
         
          
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href={2} className="mr-5 hover:text-red text-2xl uppercase hover:border-red-900 border-b-8">Home</a>
            <a href={2} className="mr-5 hover:text-black text-2xl uppercase hover:border-gray-900 border-b-8">About</a>
            <a href={2} className="mr-5 hover:text-black text-2xl uppercase hover:border-gray-900 border-b-8">services</a>
            <a href={2} className="mr-5 hover:text-black text-2xl uppercase hover:border-gray-900 border-b-8 transition-colors">Contact us</a>
            <i className="fas fa-search text-3xl ml-4 font-thin text-red-400"></i>
            <i className="fas fa-cart-plus text-3xl ml-6 font-thin text-red-400 "></i>
            <a className="p-3 bg-red-400 text-white text-extrabold rounded-md ml-8" href={2}> 020-7946-0020</a>
          </nav>
        </div>
      </header>
    </>
  )
}
