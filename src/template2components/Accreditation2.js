import React from 'react'
import Accreditation2moduleCss from './Accreditation2.module.css'
import Acc1 from '../assets/template2images/accrediation1.jpg'
import dot from '../assets/template2images/dot.png'

import Acc2 from '../assets/template2images/accrediation2.jpg'
import Acc3 from '../assets/template2images/accrediation3.jpg'
import Acc4 from '../assets/template2images/accrediation4.jpg'
import Acc5 from '../assets/template2images/accrediation5.jpg'
import Acc6 from '../assets/template2images/accrediation6.jpg'
import Acc7 from '../assets/template2images/accrediation7.jpg'



export const Accreditation2 = () => {
    return (
       <>
        <section className={`${Accreditation2moduleCss['head-main']}`}>
          <div className={`${Accreditation2moduleCss.MainHeading}`}><span className={`${Accreditation2moduleCss.SpanColor}`}> OUR </span> Accreditation</div>
          <div className={`${Accreditation2moduleCss.spanDesc}`}>
            <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={`${Accreditation2moduleCss.divMainHeading}`}>
            <div className={`${Accreditation2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left" /> <img className={`${Accreditation2moduleCss.dot}`} src={dot} data-aos="fade" alt="Dot"/>
            <div className={`${Accreditation2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
          </div>
        </section>
        <section className={`${Accreditation2moduleCss['our-accrediation']}`}>
      
          <div className={`${Accreditation2moduleCss['brand-carousel']} ${Accreditation2moduleCss['section-padding']} ${Accreditation2moduleCss['owl-carousel']}`}>
          <div className={`${Accreditation2moduleCss['single-logo']}`}>
          <div className={`${Accreditation2moduleCss.accrediation}`}>
                <img src={Acc1} alt="acce" />
                <div className={`${Accreditation2moduleCss['accre-content']}`}>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
                </div>
              </div>
            </div>
            <div className={`${Accreditation2moduleCss['single-logo']}`}>
            <div className={`${Accreditation2moduleCss.accrediation}`}>
                <img src={Acc2} alt="" />
                <div className={`${Accreditation2moduleCss['accre-content']}`}>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
                </div>
              </div>
            </div>
            <div className={`${Accreditation2moduleCss['single-logo']}`}>
            <div className={`${Accreditation2moduleCss.accrediation}`}>
                <img src={Acc3} alt="" />
                <div className={`${Accreditation2moduleCss['accre-content']}`}>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
                </div>
              </div>
            </div>
            <div className="single-logo">
            <div className={`${Accreditation2moduleCss.accrediation}`}>
                <img src={Acc4} alt="" />
                <div className={`${Accreditation2moduleCss['accre-content']}`}>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
                </div>
              </div>
            </div>
            <div className={`${Accreditation2moduleCss['single-logo']}`}>
            <div className={`${Accreditation2moduleCss.accrediation}`}>
                <img src={Acc5} alt="" />
                <div className={`${Accreditation2moduleCss['accre-content']}`}>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
                </div>
              </div>
            </div>
            <div className={`${Accreditation2moduleCss['single-logo']}`}>
            <div className={`${Accreditation2moduleCss.accrediation}`}>
                <img src={Acc6} alt="" />
                <div className={`${Accreditation2moduleCss['accre-content']}`}>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>
                </div>
              </div>
            </div>
            <div className={`${Accreditation2moduleCss['single-logo']}`}>
              <div className={`${Accreditation2moduleCss.accrediation}`}>
                <img src={Acc7} alt="" />
                <div className={`${Accreditation2moduleCss['accre-content']}`}>
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
