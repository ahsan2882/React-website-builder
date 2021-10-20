import React from 'react'

export default function Nav2Asset() {
  return (
    <>
      <header class="text-gray-600 body-font bg-green-100 mt-10 mb-10 h-20 ">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a href={2} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

            <span class=" text-3xl text-green-800">Secuiruty</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href={2} class="mr-5 hover:text-white hover:bg-green-800  p-3 uppercase text-green-800 transition-colors"> HOme</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-green-800  p-3 uppercase text-green-800 transition-colors"> Secuirty</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-green-800  p-3 uppercase text-green-800 transition-colors">Service </a>
            <a href={2} class="mr-5 hover:text-white hover:bg-green-800  p-3 uppercase text-green-800 transition-colors">About</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-green-800  p-3 uppercase text-green-800 transition-colors">sectors</a>

          </nav>
          <button class="inline-flex items-center bg-green-800 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-white text-base mt-4 md:mt-0">Learn more

          </button>
        </div>
      </header>
    </>
  )
}
