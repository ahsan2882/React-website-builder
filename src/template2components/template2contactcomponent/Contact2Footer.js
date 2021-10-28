import React from 'react'
import Contact2footerCss from './Contact2Footer.module.css'
export default function Contact2Footer() {
    return (
        <footer>
    <div className={Contact2footerCss.footer}>
      <div className={Contact2footerCss['row-foot']}>
       <div className={Contact2footerCss['column-foot']}>
          <div className={Contact2footerCss.span}></div>
          <h2 className={Contact2footerCss.hh1}>Citrix</h2>
          <h1 className={Contact2footerCss.hh2} >Consultancy</h1>
          <p className={Contact2footerCss['main-para']}>Visualize quality intellectual capital without superior collaboration and idea sharing installed base portals.</p>
          <p><i className="fas fa-map-marker-alt i1 "></i> Address :4010 Feeney Way</p>
            <p> <i className="fas fa-phone-alt i1 "></i>020 7946 0020  </p>
            <p><i className="fas fa-envelope i1"></i>critrixconsultancy@gmail.com</p>
        </div>
        <div className={Contact2footerCss['column-foot']} >
          <div className={Contact2footerCss.span}></div>
          <h2 className={Contact2footerCss.hh1}>Our Locations</h2>
          <h1 className={Contact2footerCss.hh2} >Where to find us?</h1>
         <img className={Contact2footerCss['foot-img']} src="https://i.ibb.co/L0HJLvC/img-footer-map.png" alt="img-footer-map" border="0"/>
        </div>
        <div className={Contact2footerCss['column-foot']} style={{"background-color":"transparent"}}>
          <div className={Contact2footerCss.col}> 
            <p><i className="fas fa-map-marker-alt i1 "></i> San Diego: 619 270 8578  </p>
              <p><i className="fas fa-map-marker-alt i1 "></i> Ontario: 613 285 5534</p> 
              <p><i className="fas fa-map-marker-alt i1 "></i>London: 020 7946 0020 </p>    
            </div>
          </div>  
     <div>
      <div className={Contact2footerCss['column-foot']}>
          <div className={Contact2footerCss.span}></div>
          <h2 className={Contact2footerCss.hh1}>Get in touch</h2>
          <h1 className={Contact2footerCss.hh2} >Citrix Social links</h1>
          <p className={Contact2footerCss['main-para']}>Taking seamless key performance indicators offline to maximise the long tail</p>
          <p>
            <i className="fab fa-facebook i "></i>
            <i className="fab fa-twitter-square i "></i>
            <i className="fab fa-pinterest i "></i>
            <i className="fab fa-linkedin i"></i>
           </p>    
        </div>
      </div>
  </div>
  <div className={Contact2footerCss['bottom-foot']}>
  <div className={Contact2footerCss.copyright}>
    <p>Copyright © 2021 CITRIX CONSULTANCY. All Rights Reserved.</p>
  </div>
  </div>
  </div>
  </footer>
    )
}
 