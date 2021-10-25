import React from 'react'

import Hero2Css from './Hero2Asset.module.css'
export default function Hero2Asset() {
    return (
        <>
  <section  className={`${Hero2Css.phantom}`}>
    <div className=" container mx-auto flex flex-col px-8 py-72 w-full justify-center items-center">
  
      <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center mt-36">
        <h1 className="title-font sm:text-4xl text-7xl mb-4 font-medium text-white">Knausgaard typewriter readymade marfa</h1>
        <p className="mb-8 leading-relaxed text-white">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>
        <div className="flex w-full justify-center items-end">
          <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <label for="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
   
      </div>
    </div>
  </section>
        </>
    )
}
