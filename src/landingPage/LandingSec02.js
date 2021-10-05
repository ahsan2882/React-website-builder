import React from 'react'
import Sec02img from '../assets/landingPageAssets/complete_720.png'
import LandingSec02Css from './LandingSec02.module.css'

export const Sec02 = () => {
  return (
<>
    <section className={`${LandingSec02Css.design}`}>
     <div className={`${LandingSec02Css['row-3']}`}>
<div className={`${LandingSec02Css['col-3']}`}>
  <h1> Amazing Websites </h1>
  </div>




<div className={`${LandingSec02Css['col-4']}`}>
<img src={Sec02img} alt="image02" />

  </div>







     </div>

    </section>

</>
  );
}