import React from 'react'
import Services2moduleCss from './Services2.module.css'
import dot from '../assets/template2images/dot.png'
export const Services2 = () => {
    return (
       <>

<section className={`${Services2moduleCss['section-serv']}`}>
    <section className={`${Services2moduleCss['head-main']}`}>
      <div className={`${Services2moduleCss.MainHeading}`}><span className={`${Services2moduleCss.SpanColor}`}> OUR </span> SERVICES</div>
      <div className={`${Services2moduleCss.spanDesc}`}>
        <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={`${Services2moduleCss.divMainHeading}`}>
        <div className={`${Services2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div> 
        <img src={dot} alt="dot images"/>
        <div className={`${Services2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
      </div>
    </section>
    <div className={`${Services2moduleCss.wrapperflex}`}>
      <div className={`${Services2moduleCss['container-services']}`} data-aos="fade-right">
          
   
      
        <div className={`${Services2moduleCss['container-text']}`}>

          <h1 className={`${Services2moduleCss.name}`}>Private Security</h1>
          <p className={`${Services2moduleCss.description}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto natus facere quae provident aut
            officiis iste similique optio animi nostrum.
          </p>

          <a className={`${Services2moduleCss.btnb}`} href={2}>learn more <i className="fas fa-long-arrow-alt-right"></i></a>

        </div>
      </div>

      <div className={`${Services2moduleCss['container-services']}`} data-aos="zoom-in">
       
        <div className={`${Services2moduleCss['container-text']} ${['container-text-2']}`}>
          <h1 className={`${Services2moduleCss.name} ${Services2moduleCss.name-2}}`}>Guard House</h1>
          <p className={`${Services2moduleCss.description}  ${Services2moduleCss.description-2}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto natus facere quae provident aut
            officiis iste similique optio animi nostrum.
          </p>

          <a className={`${Services2moduleCss['btnb-2']}`} href={2}>learn more <i className="fas fa-long-arrow-alt-right"></i></a>
        </div>
      </div>
      <div className={`${Services2moduleCss['container-services']}`} data-aos="fade-left">
        
        <div className={`${Services2moduleCss['container-text']}`}>
          <h1 className={`${Services2moduleCss.name}`}>24/7 Surveillance</h1>
          <p className={`${Services2moduleCss.description}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto natus facere quae provident aut
            officiis iste similique optio animi nostrum.
          </p>

          <a className={`${Services2moduleCss.btnb}`} href={2}>learn more <i className="fas fa-long-arrow-alt-right"></i></a>
        </div>
      </div>
    </div>
  </section>

       </>
    )
}
