import React from 'react'
import Accre1Css from './Accre1.module.css'
import Img1 from './accrediation1.jpg'
import Img2 from './accrediation2.jpg'
import Img3 from './accrediation3.jpg'
import Img4 from './accrediation4.jpg'
import Img5 from './accrediation5.jpg'
import Img6 from './accrediation6.jpg'
import Img7 from './accrediation7.jpg'
export default function Accre1Asset() {
  
    return (
        <>
             <section className={Accre1Css['head-main']}>
    <div className={Accre1Css.MainHeading}><span className={Accre1Css.SpanColor}> OUR </span> Accreditation</div>
    <div className={Accre1Css.spanDesc}>
      <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
    </div>
    <div className={Accre1Css.divMainHeading}>
      <div className={Accre1Css.divMainHeadingSubDiv} data-aos="fade-left"></div> <img className="dot" src="dot.png" data-aos="fade"/>
      <div className={Accre1Css.divMainHeadingSubDiv} data-aos="fade-right"> </div>
    </div>
  </section>
  <section className={Accre1Css['our-accrediation']}>
 
 <div className={Accre1Css['text-main-text']}>
            <h1 style={{"color": "black", "margin-top": "0"}} className={Accre1Css.subhead}>OUR CLIENTS</h1>
            <div className={Accre1Css.subhead}>
              Our clients who got secured thanks to our services.
            </div>
          </div> 
    <div className={`${Accre1Css['brand-carousel']} ${Accre1Css['section-padding']} ${Accre1Css['owl-carousel']}`}>
      <div className={Accre1Css['single-logo']}>
        <div className={Accre1Css.accrediation}>
          <img src={Img1} alt="accre1"/>
          <div className={Accre1Css['accre-content']}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
          </div>
  
        </div>
      </div>
      <div className={Accre1Css['single-logo']}>
        <div className={Accre1Css.accrediation}>
          <img src={Img2} alt="accre2"/>
          <div className={Accre1Css['accre-content']}>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
          </div>
        </div>
      </div>
      <div className={Accre1Css['single-logo']}>
        <div className={Accre1Css.accrediation}>
          <img src={Img3} alt="accre3"/>
          <div className={Accre1Css['accre-content']}>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
          </div>
        </div>
      </div>
      <div className={Accre1Css['single-logo']}>
        <div className={Accre1Css.accrediation}>
          <img src={Img4} alt="accre4"/>
        <div className={Accre1Css['accre-content']}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
        </div>
        </div>
      </div>
      <div className={Accre1Css['single-logo']}>
        <div className={Accre1Css.accrediation}>
          <img src={Img5} alt="accre5"/>
          <div className={Accre1Css['accre-content']}>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
          </div>
        </div>
      </div>
      <div className={Accre1Css['single-logo']}>
        <div className={Accre1Css.accrediation}>
          <img src={Img6} alt="accre6"/>
        <div className={Accre1Css['accre-content']}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
        </div>
        </div>
      </div>
      <div className={Accre1Css['single-logo']}>
        <div className={Accre1Css.accrediation}>
          <img src={Img7} alt="accre7"/>
        <div className={Accre1Css['accre-content']}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
        </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}
