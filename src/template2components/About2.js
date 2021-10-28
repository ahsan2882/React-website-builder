import React from 'react'
import About2moduleCss from './About2.module.css'
import  service from '../assets/template2images/service_05-1280x960.jpg'
import logo from '../assets/template2images/dot.png'
export const About2 = () => {
    return (
    <>
     <section class={`${About2moduleCss['head-main']}`}>
        <div class={`${About2moduleCss.MainHeading}`}><span class={`${About2moduleCss.SpanColor}`}> About </span> Us</div>
        <div class={`${About2moduleCss.spanDesc}`}>
          <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
        </div>
        <div class={`${About2moduleCss.divMainHeading}`}>
          <div class={`${About2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div><img className={`${About2moduleCss.dot}`} src={logo} data-aos="fade" alt="this is"/>
          <div class={`${About2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
        </div>
      </section>
 <section className={`${About2moduleCss['about-sec']}`} data-aos="fade">
    <div className={`${About2moduleCss['about-post']}`}>
      <div className={`${About2moduleCss['about-post-img']}`}>
        <img className={`${About2moduleCss['about-img']}`} src={service} alt="this is "/>
      </div>
      <div className={`${About2moduleCss['about-content']}`}>
        <h1 className={`${About2moduleCss['about-title']}`}> <span> Commited To </span>
          Your Business</h1>
        <p className={`${About2moduleCss['about-para']}`}>Given the complexity of forming a team including consciously or unconsciously developing team interaction norms and guidelines, ending up with an effective, functioning team is downright amazing.</p>
        <a href={2} className={`${About2moduleCss.btnb}`}>View Our Portfolio</a>
      </div>
    </div>
  </section>


    </>
    )
}
