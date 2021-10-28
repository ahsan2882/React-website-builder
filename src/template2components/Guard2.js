import React from 'react'
import Guard2moduleCss from './Guard2.module.css'
import dot from '../assets/template2images/dot.png'

export const Guard2 = () => {
    return (
     <>
 <section className={`${Guard2moduleCss['our-guards']}`}>
    <section className={`${Guard2moduleCss['head-main']}`}>
    <div className={`${Guard2moduleCss.MainHeading}`}><span className={`${Guard2moduleCss.SpanColor}`}> OUR </span> Guard</div>
      <div className={`${Guard2moduleCss.spanDesc}`}>
        <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={`${Guard2moduleCss.divMainHeading}`}>
        <div className={`${Guard2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div> <img className={`${Guard2moduleCss.dot}`} src={dot} data-aos="fade" alt="dot"/>
        <div className={`${Guard2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
      </div>
    </section>
    <div className={`${Guard2moduleCss['container-guards-wrapper']}`}>
    <div className={`${Guard2moduleCss['container-guards']}`} data-aos="fade-right">

      <div className={`${Guard2moduleCss.box1}`}>

      </div>
      <div className={`${Guard2moduleCss.box4}`}>
        <h1 className={`${Guard2moduleCss.h1}`}>Lorem Lupsum</h1>
        <p style={{fontSize:`1rem`,padding:`25px 20px`, color:`white`}}>Loremhhhh ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
          previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and
          publishing industries for
          previewing layouts and visual mockups.</p>
        <div className={`${Guard2moduleCss['icons-guards']}`}>
          <div className={`${Guard2moduleCss['span-guards']}`}></div>
          <div className={`${Guard2moduleCss['icons-g']}`}>
            <a href={2}><i style={{color:`white`,margin:`0 0.75rem`}} className="fab fa-facebook i"></i></a>
            <a href={2}><i style={{color:`white`,margin:`0 0.75rem`}} className="fab fa-twitter i"></i></a>
            <a href={2}><i style={{color:`white`,margin:`0 0.75rem`}} className="fab fa-youtube i"></i></a>
          </div>
        </div>


      </div>
      <div className={`${Guard2moduleCss.box3}`}>

      </div>
      <div className={`${Guard2moduleCss.box4}`}>
        <h1 className={`${Guard2moduleCss.h1}`}>Lorem Lupsum</h1>
        <p className={`${Guard2moduleCss.pg}`}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
          previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and
          publishing industries for
          previewing layouts and visual mockups.</p>
        <div className={`${Guard2moduleCss['icons-guards']}`}>
          <div className={`${Guard2moduleCss['span-guards']}`}></div>
          <div className={`${Guard2moduleCss['icons-g']}`}>
            <a href={2}><i style={{color:`white`,margin:`0 0.75rem`}} className="fab fa-facebook i"></i></a>
            <a href={2}><i style={{color:`white`,margin:`0 0.75rem`}} className="fab fa-twitter i"></i></a>
            <a href={2}><i style={{color:`white`,margin:`0 0.75rem`}} className="fab fa-youtube i"></i></a>
          </div>
        </div>


      </div>
      <div className={`${Guard2moduleCss.box5}`}>

      </div>
      <div className={`${Guard2moduleCss.box4}`}>
        <h1 className={`${Guard2moduleCss.h1}`}>Lorem Lupsum</h1>
        <p className={`${Guard2moduleCss.pg}`}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
          previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and
          publishing industries for
          previewing layouts and visual mockups.</p>

        <div className={`${Guard2moduleCss['icons-guards']}`}>
          <div className={`${Guard2moduleCss['span-guards']}`}></div>
          <div className={`${Guard2moduleCss['icons-g']}`}>
            <a href={2}><i style={{color:`white`,margin:`0 0.75rem`}} className="fab fa-facebook i"></i></a>
            <a href={2}><i style={{color:`white`,margin:`0 0.75rem`}} className="fab fa-twitter i"></i></a>
            <a href={2}><i style={{color:`white`,margin:`0 0.75rem`}} className="fab fa-youtube i"></i></a>
          </div>
        </div>


      </div>







    </div>
  </div>
  </section>
     </>
    )
}
