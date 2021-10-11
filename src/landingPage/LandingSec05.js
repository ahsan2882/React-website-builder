/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LandingSec05Css from './LandingSec05.module.css'

export const Sec05 = () => {
    return (
  
     <>
 <section className={LandingSec05Css.cta}>
    <div className={LandingSec05Css['cta__bg']}>
      <div className={LandingSec05Css['circle-1']}></div>
    </div>
    <div className={`container my-0 mx-auto`}>
      <div className="row">
        <div className={LandingSec05Css['cta__info']}>
          <h1 className={`${LandingSec05Css['h1-heading']} ${LandingSec05Css['dark']}`}>Interested in Collaboration?</h1>
          <a href="#" className={LandingSec05Css.button}><span>LET'S TALK</span></a>
        </div>
      </div>
    </div>
  </section>

     </>
    )
}