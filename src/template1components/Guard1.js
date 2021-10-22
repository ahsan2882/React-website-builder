import React from 'react'
import Guard1Css from './Guard1.module.css'
import ourteam from '../assets/template1images/ourteam.jpg'
import ourteam2 from '../assets/template1images/ourteam2.jpg'
import ourteam3 from '../assets/template1images/ourteam3.jpg'




export const Guard1 = () => {
    return (
<>
<div id="ourteam" className={`${Guard1Css['cards-contain']}`}>
        <h1 className={`${Guard1Css.headings}`}>Our Guards</h1>
        <div className={`${Guard1Css.subhead}`}>
          <p>Team That you can Rely on</p>
        </div>
        <div className={`${Guard1Css.wrapper2}`}>
          <div className={`${Guard1Css.blog2}`}>
            <div className={`${Guard1Css['single-blog']}`}>
              <div className={`${Guard1Css['blog-img']}`}>
                <img src={ourteam} alt="team" />
               
              </div>

              <div className={`${Guard1Css['blog-content']}`}>
                <h4>Bianca B.Rooney</h4>
                <p>Head Of Security Team</p>
                
              </div>
            </div>
            <div className={`${Guard1Css['single-blog']}`}>
              <div className={`${Guard1Css['blog-img']}`}>
                <img src={ourteam2} alt="team" />
        
              </div>

              <div className={`${Guard1Css['blog-content']}`}>
                <h4>ADALBERTO</h4>
                <p>Senior Guard</p>
                
              </div>
            </div>
            <div className={`${Guard1Css['single-blog']}`}>
              <div className={`${Guard1Css['blog-img']}`}>
                <img src={ourteam3} alt="team" />
               
              </div>

              <div className={`${Guard1Css['blog-content']}`}>
                <h4>AMBROSE</h4>
                <p>Private Investigator</p>

              </div>
            </div>
          </div>
        </div>
      </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
</>
    );
    }