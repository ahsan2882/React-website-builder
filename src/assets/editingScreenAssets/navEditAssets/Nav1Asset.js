import React from 'react'

export default function Nav1Asset() {
    return (
        <>
            <header class="text-gray-600 body-font bg-red-100 h-36">
<div class="container mx-auto flex  p-12 flex-row md:flex-row items-center justify-between space-x-2">
  <a href={2} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   <span class="ml-3 text-3xl font-bold">SECURITY</span>
  </a>
  <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <a href={2} class="mr-5 hover:text-red text-2xl uppercase hover:border-red-900 border-b-8">Home</a>
    <a href={2} class="mr-5 hover:text-black text-2xl uppercase hover:border-gray-900 border-b-8">About</a>
    <a href={2} class="mr-5 hover:text-black text-2xl uppercase hover:border-gray-900 border-b-8">services</a>
    <a href={2} class="mr-5 hover:text-black text-2xl uppercase hover:border-gray-900 border-b-8 transition-colors">Contact us</a>
    <i class="fas fa-search text-3xl ml-4 font-thin text-red-400"></i>
    <i class="fas fa-cart-plus text-3xl ml-6 font-thin text-red-400 "></i>
    <a class="p-3 bg-red-400 text-white text-extrabold rounded-md ml-8" href={2}> 020-7946-0020</a>
  </nav>
</div>
</header>
        </>
    )
}
