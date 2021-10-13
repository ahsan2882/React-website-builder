import React from 'react'
import Program01Css from './Program01.module.css'
import img1 from '../assets/template1images/1.svg'
import img2 from '../assets/template1images/2.svg'
import img3 from '../assets/template1images/3.svg'


export const Program01 = () => {
    return (
       <>


<div className={`${Program01Css['text-main-text']}`}>
<h1 style={{color:`black`}} className={`${Program01Css.headings}`}>Our Programs</h1>
<div className={`${Program01Css.subhead}`}>
  We are able to guarantee your safety 24/7 no matter who you are and whatever you do.
</div>
</div>
<section className={`${Program01Css.services}`}>
<div className={`${Program01Css['service-item-container']}`}>	
   <div className={`${Program01Css['service-item']}  ${Program01Css['fade-in']}`} style={{height:`auto`}}>
      <div className={`${Program01Css.bar}`}></div>
      <div className={`${Program01Css.item}`}>
       <img src={img1} alt="img"/>
      </div>
      <h1 className={`${Program01Css['pro-head']}`}>Cultural Awareness in the Workplace</h1>
      <p className={`${Program01Css['pro-para']}`}>Cultural Awareness is critical for any workforce that seeks to yield positive outcomes. Watch this video to learn about cultural awareness in the workplace</p>
      <a style={{marginBottom:`20px`}} className={`${Program01Css.btnb}`} href={2}>Read More <i className="fas fa-long-arrow-alt-right"></i></a>
   </div>
   <div className={`${Program01Css['service-item']}  ${Program01Css['fade-in']}`} style={{height:`auto`}}>
      <div className={`${Program01Css.bar}`}></div>
      <div className={`${Program01Css.item}`}>
         <img src={img2} alt="img"/>
      </div>
      <h1 className={`${Program01Css['pro-head']}`}>Military Virtual Awareness Training</h1>
      <p className={`${Program01Css['pro-para']}`}> Watch this video to see one of the Department of Defense's approaches to building cultural awareness and reducing risk in culturally diverse environments.</p>
      <a style={{marginBottom:`20px`}} className={`${Program01Css.btnb}`} href={2}>Read More <i className="fas fa-long-arrow-alt-right"></i></a>
   </div>
   <div className={`${Program01Css['service-item']}  ${Program01Css['fade-in']}`} style={{height:`auto`}}>
      <div className={`${Program01Css.bar}`}></div>
      <div className={`${Program01Css.item}`}>
       <img src={img3} alt="img"/>
      </div>
      <h1 className={`${Program01Css['pro-head']}`}>Insider Threat: Resilience</h1>
      <p className={`${Program01Css['pro-para']}`}>Resilience allows individuals to bounce back from setbacks and stressful situations. Without this quality, some people may develop increased risks associated with an insider threat.</p>
      <a style={{marginBottom:`20px`}} className={`${Program01Css.btnb}`} href={2}>Read More <i className="fas fa-long-arrow-alt-right"></i></a>
   </div>
</div>
</section>
</>
    )
}