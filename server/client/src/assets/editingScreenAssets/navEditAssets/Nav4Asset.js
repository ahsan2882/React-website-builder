import React from 'react'
// import logo from './logo3.png'
export default function Nav4Asset() {
  return (
    <>
      <header class="text-gray-600 body-font bg-black">
        <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          {/* <a href={2} class="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0"> */}

          <img class="h-20 w-30" src="https://i.ibb.co/5LDWfPq/logo3.png" alt="logo3"/>
          {/* </a> */}
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a href={2} class="mr-5 cursor-pointer hover:text-2xl text-white">Home</a>
            <a href={2} class="mr-5 cursor-pointer hover:text-2xl text-white">Manufacturing</a>
            <a href={2} class="mr-5 cursor-pointer hover:text-2xl text-white">Contact us</a>
            <a href={2} class="mr-5 cursor-pointer hover:text-2xl text-white">About us</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-3  px-4 focus:outline-none hover:bg-black transition hover:text-white rounded-3xl text-base mt-4 md:mt-0">Learn more
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}
