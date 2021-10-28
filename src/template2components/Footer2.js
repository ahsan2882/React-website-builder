import React from 'react'
import Footer2moduleCss from './Footer2.module.css'
export const Footer2 = () => {
    return (
        <>
        <footer className={`${Footer2moduleCss.footer2}`}>
    <div className={Footer2moduleCss.footer}>
      <div className={Footer2moduleCss['row-foot']}>
       <div className={Footer2moduleCss['column-foot']}>
          <div className={Footer2moduleCss.span}></div>
          <h2 className={Footer2moduleCss.hh1}>Citrix</h2>
          <h1 className={Footer2moduleCss.hh2} >Consultancy</h1>
          <p className={Footer2moduleCss['main-para']}>Visualize quality intellectual capital without superior collaboration and idea sharing installed base portals.</p>
          <p><i className="fas fa-map-marker-alt i1 "></i> Address :4010 Feeney Way</p>
            <p> <i className="fas fa-phone-alt i1 "></i>020 7946 0020  </p>
            <p><i className="fas fa-envelope i1"></i>critrixconsultancy@gmail.com</p>
        </div>
        <div className={Footer2moduleCss['column-foot']} >
          <div className={Footer2moduleCss.span}></div>
          <h2 className={Footer2moduleCss.hh1}>Our Locations</h2>
          <h1 className={Footer2moduleCss.hh2} >Where to find us?</h1>
         <img className={Footer2moduleCss['foot-img']} src="https://i.ibb.co/L0HJLvC/img-footer-map.png" alt="img-footer-map" border="0"/>
        </div>
        <div className={Footer2moduleCss['column-foot']} style={{"background-color":"transparent"}}>
          <div className={Footer2moduleCss.col}> 
            <p><i className="fas fa-map-marker-alt i1 "></i> San Diego: 619 270 8578  </p>
              <p><i className="fas fa-map-marker-alt i1 "></i> Ontario: 613 285 5534</p> 
              <p><i className="fas fa-map-marker-alt i1 "></i>London: 020 7946 0020 </p>    
            </div>
          </div>  
     <div>
      <div className={Footer2moduleCss['column-foot']}>
          <div className={Footer2moduleCss.span}></div>
          <h2 className={Footer2moduleCss.hh1}>Get in touch</h2>
          <h1 className={Footer2moduleCss.hh2} >Citrix Social links</h1>
          <p className={Footer2moduleCss['main-para']}>Taking seamless key performance indicators offline to maximise the long tail</p>
          <p>
            <i className="fab fa-facebook i "></i>
            <i className="fab fa-twitter-square i "></i>
            <i className="fab fa-pinterest i "></i>
            <i className="fab fa-linkedin i"></i>
           </p>    
        </div>
      </div>
  </div>
  <div className={Footer2moduleCss['bottom-foot']}>
  <div className={Footer2moduleCss.copyright}>
    <p>Copyright © 2021 CITRIX CONSULTANCY. All Rights Reserved.</p>
  </div>
  </div>
  </div>
  </footer>
        </>
    )
}
