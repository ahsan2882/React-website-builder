import React from 'react'
import Footer1Css from './Footer1.module.css'





export const Footer1 = () => {
  return (
    <>
      <footer>
        <div className={`${Footer1Css.footer}`}>


        <div className={`${Footer1Css['row-foot']}`}>



        <div className={`${Footer1Css['column-foot']}`}>
        <div className={`${Footer1Css.span}`}></div>
        <h2 id={`${Footer1Css.hh1}`}><b>Citrix</b></h2>
        <h1 id={`${Footer1Css.hh2}`} >Consultancy</h1>
        <p className={`${Footer1Css['main-para']}`}>Visualize quality intellectual capital without superior collaboration and idea sharing installed base portals.</p>
        <p><i className={`${Footer1Css['fas fa-map-marker-alt i1']}`}></i> Address: 4010 Feeney Way</p>

        <p> <i style={{color:`white`}} className={`${Footer1Css['fas fa-phone-alt i1']}`}></i>020 7946 0020  </p>

        <p><i className={`${Footer1Css['fas fa-envelope i1']}`}></i>critrixconsultancy @gmail.com</p>

        </div>
        <div className={`${Footer1Css['column-foot']}`} >
        <div className={`${Footer1Css.span}`}></div>
        <h2 id={`${Footer1Css.hh1}`}><b>Our Locations</b></h2>
        <h1 id={`${Footer1Css.hh2}`} >Where to find us?</h1>
        <img style={{height:`200px`}} src="https://i.ibb.co/L0HJLvC/img-footer-map.png" alt="img-footer-map" border="0" />

        </div>

        <div   className={`${Footer1Css['column-foot']}`}>
        <div className={`${Footer1Css.col}`}>
        <p><i style={{color:`#00D4FF`}} className='fas fa-map-marker-alt i1 p-5 text-3xl'></i> San Diego: 619 270 8578  </p>

        <p><i style={{color:`#00D4FF`}} className='fas fa-map-marker-alt i1 p-5 text-3xl'></i> Ontario: 613 285 5534</p>
        <p><i style={{color:`#00D4FF`}} className='fas fa-map-marker-alt i1 p-5 text-3xl'></i>London: 020 7946 0020 </p>




        </div>



        </div>

        <div>
        <div className={`${Footer1Css['column-foot']}`}>
        <div className={`${Footer1Css.span}`}></div>
        <h2 id={`${Footer1Css.hh1}`}><b>Get in touch</b></h2>
        <h1 id={`${Footer1Css.hh2}`} >Citrix Social links</h1>
        <p className={`${Footer1Css['main-para']}`}>Taking seamless key performance indicators offline to maximise the long tail</p>
        <p>
        <i  className="fab fa-facebook text-white p-1 text-4xl text-center"></i>
        <i className="fab fa-twitter text-white p-1 text-4xl text-center"></i>
        <i className="fab fa-pinterest text-white p-1 text-4xl text-center"></i>
        <i className="fab fa-linkedin text-white p-1 text-4xl text-center"></i>
        </p>
        </div>
        </div>



        </div>


        <div className={`${Footer1Css['bottom-foot']}`}>
        <div className={`${Footer1Css.copyright}`}>
        <p>Copyright © 2021 CITRIX CONSULTANCY.All Rights Reserved.</p>
        </div>


        </div>
        </div>
      </footer>

    </>
  );
}