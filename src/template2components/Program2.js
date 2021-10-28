import React from 'react'
import Program2moduleCss from './Program2.module.css'
import dot from '../assets/template2images/dot.png'
export const Program2 = () => {
    return (
       <>
<section className={`${Program2moduleCss['head-main']}`}>
        <div className={`${Program2moduleCss.MainHeading}`}><span className={`${Program2moduleCss.SpanColor}`}> OUR </span> Programs</div>
        <div className={`${Program2moduleCss.spanDesc}`}>
          <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
        </div>
        <div className={`${Program2moduleCss.divMainHeading}`}>
          <div className={`${Program2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div> <img src={dot} className={`${Program2moduleCss.dot}`} alt="del"/>
          <div className={`${Program2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
        </div>
      </section>
      <section className={`${Program2moduleCss['our-experience']}`} data-aos="fade-up">
        <div className={`${Program2moduleCss['container-experience']}`}>
          
          <div className={`${Program2moduleCss['exp-card1']} ${Program2moduleCss.pp} ${Program2moduleCss['pp-2']}`}>
            <div className={`${Program2moduleCss['ecard-top']}`}>
           
              <h2>Insider Threat: Resilience</h2>
            </div>
    <p>Resilience allows individuals to bounce back from setbacks and stressful situations. Without this quality, some people may develop increased risks associated with an insider threat.
    </p>
    
          </div>
          <div className={`${Program2moduleCss['exp-card2']} ${Program2moduleCss.pp}`}>
            <div className={`${Program2moduleCss['card-top']}`}>
  
              <h2>Military Virtual Awareness Training</h2>
            </div>
            <p>Watch this video to see one of the Department of Defense's approaches to building cultural awareness and reducing risk in culturally diverse environments.</p>
          </div>
          <div className={`${Program2moduleCss['exp-card3']} ${Program2moduleCss.pp} ${Program2moduleCss['pp-2']}`}>
            <div className={`${Program2moduleCss['ecard-top']}`}>
     
              <h2>Cultural Awareness in the Workplace</h2>
            </div>
                      <p>Cultural Awareness is critical for any workforce that seeks to yield positive outcomes. Watch this video to learn about cultural awareness in the workplace</p>
          </div>
          <div className={`${Program2moduleCss['exp-card4']} ${Program2moduleCss.pp}`}>
            <div className={`${Program2moduleCss['ecard-top']}`}>
     
              <h2>Cultural Awareness in the Workplace</h2>
            </div>
                      <p>Cultural Awareness is critical for any workforce that seeks to yield positive outcomes. Watch this video to learn about cultural awareness in the workplace</p>
    
          </div>
          <div className={`${Program2moduleCss['exp-card5']} ${Program2moduleCss.pp} ${Program2moduleCss['pp-2']}`}>
            <div className={`${Program2moduleCss['ecard-top']}`}>
      
              <h2>Insider Threat: Resilience</h2>
            </div>
                      <p>Resilience allows individuals to bounce back from setbacks and stressful situations. Without this quality, some people may develop increased risks associated with an insider threat.</p>
    
          </div>
          <div className={`${Program2moduleCss['exp-card6']} ${Program2moduleCss.pp}`}>
            <div className={`${Program2moduleCss['ecard-top']}`}>

              <h2>Military Virtual Awareness Training</h2>
            </div>
                      <p>Watch this video to see one of the Department of Defense's approaches to building cultural awareness and reducing risk in culturally diverse environments.</p>
    
          </div>
        </div>
    
      </section>

       </>
    )
}
