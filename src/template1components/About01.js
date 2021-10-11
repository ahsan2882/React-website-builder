import React from 'react'
import About0101Css from './About01.module.css'
import buss from '../assets/template1images/img-commited-to-business.png'


export const About01 = () => {
    return (
       <>

<div className={`${About0101Css['text-main-text']}`}>
              <h1 style={{color:`black`}} className={`${About0101Css.headings}`}>About Our Company</h1>
              <div className={`${About0101Css.subhead}`}>
                Security was founded by a squad of retired soldiers and friends who wanted to make this world a safer place.
              </div>
            </div>
      
            <div className={`${About0101Css.container9}`}>
              <div className="container9-content">
                <span className={`${About0101Css['headline_content2']}`}><span><b>Commited To</b> Your Business</span></span>
                <p className={`${About0101Css['testimonial-text']}`}>
                  Given the complexity of forming a team including consciously or unconsciously developing team interaction norms and guidelines, ending up with an effective, functioning team is downright amazing.
                </p>
                <div className={`${About0101Css.author2}`}>
                  <a className={`${About0101Css.btna}`} href={2}>View our Portfolio</a>
                </div>
              </div>
      
              <div className={`${About0101Css['container11-image']}`}>
                <img src={buss} alt="buss" />
              </div>
            </div>


</>
    )
}