import React from 'react'
import Service01Css from './Service01.module.css'

import serv1 from '../assets/template1images/serv-1.png'
import serv2 from '../assets/template1images/serv-2.png'
import serv3 from '../assets/template1images/serv-3.png'


export const Service01 = () => {
    return (
<>
<div id="services" className={`${Service01Css['text-main-text']}`}>
        <h1 className={`${Service01Css.headings}`}>Services</h1>
        <div className={`${Service01Css.subhead}`}>Our services are best in town and premium</div>
      </div>
      <div className={`${Service01Css['wrapper-flex']}`}>
        <div className={`${Service01Css['container-services']}  ${Service01Css['fade-in']}`}>
          <div className={`${Service01Css['banner-img']}`}></div>
          {/* <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script> */}
          {/* <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script> */}
        
            <img src={serv1} alt="profileimage" className={`${Service01Css['profile-img']}`}
          />
          <h1 className={`${Service01Css.name}`}>Private Security</h1>
          <p className={`${Service01Css.description}`}>
            Our bodyguards are strong men and professionals who served in
            military forces.
          </p>

          <a style={{marginBottom:`20px`}} className={`${Service01Css.btnb}`} href={2}
            >Sign Up <i className={`${Service01Css['fas fa-long-arrow-alt-right']}`}></i
          ></a>
        </div>

        <div className={`${Service01Css['container-services']} ${Service01Css['fade-in']}`}>
          <div className={`${Service01Css['banner-img']}`}></div>
         
            <img src={serv2} alt="profileimage" className={`${Service01Css['profile-img']}`}
          />
          <h1 className={`${Service01Css.name}`}>Guard House</h1>
          <p className={`${Service01Css.description}`}>
            Settle a guard house behind your facility and we'll monitor the
            activity around the house.
          </p>

          <a style={{marginBottom:`20px`}} className={`${Service01Css.btnb}`} href={2}
            >Sign Up <i className={`${Service01Css['fas fa-long-arrow-alt-right']}`}></i
          ></a>
        </div>
        <div className={`${Service01Css['container-services']} ${Service01Css['fade-in']}`}>
          <div className={`${Service01Css['banner-img']}`}></div>
         
            <img src={serv3} alt="profileImage" className={`${Service01Css['profile-img']}`}
          />
          <h1 className={`${Service01Css.name}`}>24/7 Surveillance</h1>
          <p className={`${Service01Css.description}`}>
            our strong men and professionals will do 24/7 security surveillance
            of your house with focus .
          </p>

          <a style={{marginBottom:`20px`}} className={`${Service01Css.btnb}`} href={2}
            >Sign Up <i className={`${Service01Css['fas fa-long-arrow-alt-right']}`}></i
          ></a>
        </div>
      </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
</>
    );
    }
