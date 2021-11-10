import React from 'react'
import ExpermoduleCss from './Experince1.module.css'
// import Service from './services11.jpg'
export default function Experince1() {
    return (
<>

<section  className={`${ExpermoduleCss['services-sec']}`}>
        <div style={{display:`flex`,justifyContent:`space-around`}} className={`${ExpermoduleCss['grid-contact']}`}>
            <div className={`${ExpermoduleCss['services-text']}`}>
                <div className="back">
                <h1 className={`${ExpermoduleCss['main-heading']}`}>
          OUR EXPERIENCE
                </h1>
                </div>
                <p className={`${ExpermoduleCss.para}`}>
                  Our security agency is committed to helping every client who is at risk. We owe our lives to save the one of a client. We know everything about security. Our staff has valuable experience, doing this job for almost twenty years.
                  <br/>
                  Each security agent goes through a set of instructions and challenges to join our professional team. We promise that we won't let you down no matter how tough a situation may be.
                </p>
        
            </div>
            <div   className={`${ExpermoduleCss['service-img']}`}>
                        <img src="https://i.ibb.co/8zsQjgJ/services11.jpg" alt="services11"/>
            </div>
        
        </div>
        </section>
</>
    )
}
