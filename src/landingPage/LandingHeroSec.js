import React from 'react'
import { Link } from 'react-router-dom'
import cover from '../assets/landingPageAssets/local--1.png'
import LandingHeroCss from './LandingHeroSec.module.css'
import showcaseIm from '../assets/landingPageAssets/backgrouned.svg';


export const HeroSec = () => {
  return (
    <section className={LandingHeroCss.showcase} style={{ background: `url(${showcaseIm}) no-repeat center/cover`}}>
      <div className="container px-12 py-36 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-bold text-5xl leading-tight mb-2 text-white"> Create a Website You’re Proud Of
            </h1>
            <h2 className="text-gray-100 text-4xl "> No Coding Required </h2>
            <div className="mb-12 leading-relaxed text-white mt-12">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
            <Link to="/select-template">
              <button className="m-1 inline-flex text-white bg-UL-400 border-0 py-2 px-12 focus:outline-none hover:bg-gray-200 rounded-3xl text-lg"> Launch builder</button>
            </Link>
          </div>





        </div>
        <div className="lg:w-2/5 sm:w-3/6 w-18 rounded-lg   sm:mt-0 px-8">
          <img src={cover} alt="logo" className={`w-w-screen ${LandingHeroCss.hero}`} style={{ transform: `scale(2)` }} />
        </div>
      </div>

    </section>

  )
}
