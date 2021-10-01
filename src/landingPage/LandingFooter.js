import React from 'react'
import LandingFooterCss from './LandingFooter.module.css'
import LandingFootIm from '../assets/landingPageAssets/footer.png'

export const Footer = () => {
  return (
    // -- first footer
    <footer className={`${LandingFooterCss.footer} mt-48 p-24`} style={{background: `url(${LandingFootIm}) no-repeat center /cover`}}>
      <div className="flex justify-around sm:justify-start">
        <h1 className="text-white text-2xl font-bold w-full"> INVEST IN NOW MUTUAL FUNDS</h1>
        <button className="inline-flex text-white bg-UL-400 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-200 rounded-3xl text-lg">Save</button>

      </div>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between mt-12 flex-wrap">
        <div>
          <button className="flex title-font font-medium items-center   text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">Tailblocks</span>
          </button>
          <p className="ml-12 text-white text-sm"> Copyright cc 2018 All right reserved</p>

        </div>


        <div>
          <span className="inline-flex sm:mt-0 mt-4 justify-center  flex-wrap ">
            <button className="text-white cursor-pointer">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </button>
            <button className="ml-3 text-white cursor-pointer">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </button>
            <button className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </button>
            <button className="ml-3 text-white cursor-pointer">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </button>
          </span>


        </div>


        <div>
          <h1 className="text-white text-xl"> Links </h1>
          <div className="flex flex-wrap justify-around">
            <p className="text-white cursor-pointer"> Home</p>
            <p className="text-white ml-2 cursor-pointer"> Contact</p>
            <p className="text-white ml-2 cursor-pointer"> About us</p>
            <p className="text-white ml-2 cursor-pointer"> Sign up</p>
            <p className="text-white ml-2 cursor-pointer"> sign in</p>
          </div>
        </div>


      </div>
    </footer>
  );
}