import React from 'react'
// import logo from './logo4.png'
export default function Nav3Asset() {
  return (
    <>
      <header class="text-gray-600 body-font bg-red-50 mt-10 mb-10">
        <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-center">
          <img class="h-16 w-18" src="https://i.ibb.co/5BkBySM/logo4.png" alt="logo4" />
          {/* <a href={2} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">


          </a> */}
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-evenly">
            <a href={2} class="mr-5 hover:text-white  p-3 bg-red-800 rounded-md text-white font-semibold tracking-wide">Home</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-red-800 p-3 rounded-md transition text-red-800 font-semibold">Abou us</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-red-800 p-3 rounded-md transition font-semibold text-red-800">Contact us</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-red-800 p-3 rounded-md transition font-semibold text-red-800">visit</a>
          </nav>
          <a href={2}>
            <input class=" bg-red-100 p-2 rounded-md" type="search" /> <i class="fas fa-search text-red-800"></i>
            Search
          </a>
        </div>
      </header>
    </>
  )
}
