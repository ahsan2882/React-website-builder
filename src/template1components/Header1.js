import React from 'react'
import Header1Css from './Header1.module.css'
import bgcover from '../assets/template1images/bghero.png'



export const Header1 = () => {

  return (
      <>
       
    <header className={`${Header1Css.template1Header}`}>
    <nav>
      <div className={`${Header1Css.navbar}`}>
    
        <div className={`${Header1Css['logo']}`}><a href="index.html">Security</a></div>
        <div className={`${Header1Css['nav-links']}`}>
          <div className={`${Header1Css['sidebar-logo']}`}>
            <i className={`${Header1Css['fas fa-times']}`}></i>
          </div>
          <ul className={`${Header1Css.menus}`}>
            <li><a className={`${Header1Css.line}`} href="index.html">home</a></li>
            <li><a className={`${Header1Css.line}`} href="about.html">about</a>
              <ul className={`${Header1Css['sub-menu']}`}>
          <li><a className={`${Header1Css.pnt}`} href="about.html#OurVision">Our Vision</a></li>
               <li><a className={`${Header1Css.pnt}`} href="about.html#OurExperience">Our Experience</a></li>
                <li><a className={`${Header1Css.pnt}`} href="about.html#OurAdvantages">Our Policies</a></li>
                <li><a className={`${Header1Css.pnt}`} href="about.html#OurPricing">Our Prices</a></li>
                <li><a className={`${Header1Css.pnt}`} href="about.html#OurPricing">Our Accreditations</a></li>
                 <li><a className={`${Header1Css.pnt}`} href="about.html#OurTeam">Our Team</a></li>
                <li><a className={`${Header1Css.pnt}`} href="about.html#OurPartners">Our Partners</a></li>

              </ul>
  
            </li>
            <li><a className={`${Header1Css.line}`} href={2}>services</a>
              <ul className={`${Header1Css['sub-menu']}`}>
                <li><a className={`${Header1Css.pnt}`} href="static.html">Static Security</a></li>
                <li><a className={`${Header1Css.pnt}`} href="mobile-patrolling.html">Mobile Patrolling</a></li>
                <li><a className={`${Header1Css.pnt}`} href="cctv-monitoring.html">CCTV Monitoring</a></li>
                <li><a className={`${Header1Css.pnt}`} href="lockandunlock.html">Lock & unlock</a></li>
                <li><a className={`${Header1Css.pnt}`} href="vacant-unit-check.html">Vacant Unit Checks</a></li>
                <li><a className={`${Header1Css.pnt}`} href="technology-product.html">Technology Product</a></li>
                <li><a className={`${Header1Css.pnt}`} href="manned-guarding.html">Manned Guarding</a></li>
                <li><a className={`${Header1Css.pnt}`} href="support-and-management.html">Support & Management</a></li>
                <li><a className={`${Header1Css.pnt}`} href="event-security.html">Event Security</a></li>
              </ul>
            </li>
  
            <li><a className={`${Header1Css.line}`} href="contact.html">contact us</a></li>
      
         
            <li><a className={`${Header1Css['contact-btn']}`} href={2}><span><i className="fas fa-phone-alt"></i></span> 020 7946 0020</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

    
    <section className={`${Header1Css.section}`}>
      <div className={`${Header1Css['section-details']}`}>
        <div className={`${Header1Css.left}`}>
          <span className={`${Header1Css['headline_content']}`}
            ><span
              ><b>Security</b> is not a product, it is a process.</span
            ></span
          >
          <div className={`${Header1Css['headline-para']}`}>
            <p>
              To prevent tampering and unauthorized entry into the premises by
              our engineers developed a burglar alarm system in the house.
            </p>
          </div>

          <a className={`${Header1Css.btna}`} href={2}>DISCOVER MORE</a>
        </div>
        <span className={`${Header1Css.right}`}>
          <img src={bgcover} alt="bg-cover" />
        </span>
      </div>
    </section>
    
  
</>
  );
}