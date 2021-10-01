import React from 'react'
import Sec02img from '../assets/landingPageAssets/cube_of_rubik_1.svg'
import Sec03img from '../assets/landingPageAssets/WE-WONT-PAY.svg'

export const Sec02 = () => {
  return (

    <section className="text-gray-600 body-font">
      {/* <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "10%", width: "100%"}}><path d="M-1.41,82.39 C57.84,16.28 570.26,139.63 507.05,9.38 L500.84,-3.45 L-4.22,-2.45 Z" style={{stroke: "none", fill: "#2563EB"}}></path></svg> */}

      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-8"> Know about tax saving
        </h1>
        <div className="w-36 h-1 m-auto rounded-full bg-UL-400"></div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-12 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex mt-12">

            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">invest in ELSS</h2>
              <p className="leading-relaxed text-base  flex text-left mt-4">Blue bottle crucifix vinyl post-ironic four dollar toast .</p>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-4 mt-8">Lowest lock-in of 3 days</h2>
              <p className="leading-relaxed text-base  flex text-left mb-4">Blue bottle crucifix vinyl post-ironic four dollar toast .</p>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2 mt-8">Heigher inerest rate</h2>
              <p className="leading-relaxed text-base  flex text-left">Blue bottle crucifix vinyl post-ironic four dollar toast .</p>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">

            <div className="flex-grow pl-36 mt-12">
              <img src={Sec02img} id="nav-logo" alt="logo" className="w-24" />
              <img src={Sec03img} id="nav-logo" alt="logo" className="w-24 mt-8" />


            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">

            <div className="flex-grow pr-6 text-right">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">When is tax aplicable</h2>
              <p className="leading-relaxed text-base   mt-4">Blue bottle crucifix vinyl post-ironic four dollar toast .</p>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-4 mt-8">Begin from $1000</h2>
              <p className="leading-relaxed text-base   mb-4">Blue bottle crucifix vinyl post-ironic four dollar toast .</p>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2 mt-8">Other benifits</h2>
              <p className="leading-relaxed text-base ">Blue bottle crucifix vinyl post-ironic four dollar toast .</p>

            </div>


          </div>
        </div>
      </div>
    </section>


  );
}