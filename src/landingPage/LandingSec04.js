import React from 'react'
import art from '../assets/landingPageAssets/art.png'



export const Sec04 = () => {
  return (

    <section className="text-gray-600 body-font mt-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-8 uppercase"> Grow your money with mutual funds
      </h1>
      <div className="w-36 h-1 m-auto rounded-full bg-UL-400 "></div>

      <div className="container px-3 py-18  flex flex-wrap justify-around mb-36 mt-12">

        <div className="lg:w-1/3 w-96 mt-4 lg:mb-0 rounded-lg overflow-hidden">
          {/* image yaha ;agaani hai */}
          <img src={art} style={{ width: `100%` }} id="nav-logo" alt="logo" className="" />
        </div>
        <div className="row">
          <div className="row-1 flex flex-wrap justify-around p-4">
            <div className="col-1 w-36 mt-8">

              <h1 className="text-xl font-bold">
                Expert Money Management
              </h1>
              <p className="mt-4">  lorem ipsum dot mark color bg dot light version text </p>
            </div>
            <div className="col-2  w-36 mt-8">

              <h1 className="text-xl font-bold">
                Easy trading transaction
              </h1>
              <p className="mt-4">  lorem ipsum dot mark color bg dot light version text </p>

            </div>




          </div>
          <div className="row-2 flex flex-wrap justify-around p-4">
            <div className="col-1 w-36 mt-8">

              <h1 className="text-xl font-bold">
                Flexible adn easy to monitor
              </h1>
              <p className="mt-4">  lorem ipsum dot mark color bg dot light version text </p>

            </div>
            <div className="col-2 w-36 mt-8">
              <h1 className="text-xl font-bold">

                Low cost and secure option
              </h1>
              <p className="mt-4">  lorem ipsum dot mark color bg dot light version text </p>

            </div>




          </div>

        </div>

      </div>
      <button className="flex mx-auto  text-white bg-UL-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg uppercase">Grow money</button>
    </section>


  );
}