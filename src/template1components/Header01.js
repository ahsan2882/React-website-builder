import React from 'react'
import Header01Css from './Header01.module.css'
import bgcover from '../assets/template1images/bghero.png'

export const Header01 = () => {
  return (
      <>
    <header className={`${Header01Css.template1Header}`}>
    <nav>
      <div className={`${Header01Css.navbar}`}>
    
        <div className={`${Header01Css['logo']}`}><a href="index.html">Security</a></div>
        <div className={`${Header01Css['nav-links']}`}>
          <div className={`${Header01Css['sidebar-logo']}`}>
            <i className={`${Header01Css['fas fa-times']}`}></i>
          </div>
          <ul className={`${Header01Css.menus}`}>
            <li><a className={`${Header01Css.line}`} href="index.html">home</a></li>
            <li><a className={`${Header01Css.line}`} href="about.html">about</a>
              <ul className={`${Header01Css['sub-menu']}`}>
                <li><a className={`${Header01Css.pnt}`} href="about.html#OurVision">Our Vision</a></li>
                <li><a className={`${Header01Css.pnt}`} href="about.html#OurExperience">Our Experience</a></li>
                <li><a className={`${Header01Css.pnt}`} href="about.html#OurAdvantages">Our Policies</a></li>
                <li><a className={`${Header01Css.pnt}`} href="about.html#OurPricing">Our Prices</a></li>
                <li><a className={`${Header01Css.pnt}`} href="about.html#OurPricing">Our Accreditations</a></li>
                <li><a className={`${Header01Css.pnt}`} href="about.html#OurTeam">Our Team</a></li>
                <li><a className={`${Header01Css.pnt}`} href="about.html#OurPartners">Our Partners</a></li>
  
              </ul>
  
            </li>
            <li><a className={`${Header01Css.line}`} href="#">services</a>
              <ul className={`${Header01Css['sub-menu']}`}>
                <li><a className={`${Header01Css.pnt}`} href="static.html">Static Security</a></li>
                <li><a className={`${Header01Css.pnt}`} href="mobile-patrolling.html">Mobile Patrolling</a></li>
                <li><a className={`${Header01Css.pnt}`} href="cctv-monitoring.html">CCTV Monitoring</a></li>
                <li><a className={`${Header01Css.pnt}`} href="lockandunlock.html">Lock & unlock</a></li>
                <li><a className={`${Header01Css.pnt}`} href="vacant-unit-check.html">Vacant Unit Checks</a></li>
                <li><a className={`${Header01Css.pnt}`} href="technology-product.html">Technology Product</a></li>
                <li><a className={`${Header01Css.pnt}`} href="manned-guarding.html">Manned Guarding</a></li>
                <li><a className={`${Header01Css.pnt}`} href="support-and-management.html">Support & Management</a></li>
                <li><a className={`${Header01Css.pnt}`} href="event-security.html">Event Security</a></li>
              </ul>
            </li>
  
            <li><a className={`${Header01Css.line}`} href="contact.html">contact us</a></li>
      
         
            <li><a className={`${Header01Css['contact-btn']}`} href="#"><span><i className="fas fa-phone-alt"></i></span> 020 7946 0020</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

    
    <section className={`${Header01Css.section}`}>
      <div className={`${Header01Css['section-details']}`}>
        <div className={`${Header01Css.left}`}>
          <span className={`${Header01Css['headline_content']}`}
            ><span
              ><b>Security</b> is not a product, it is a process.</span
            ></span
          >
          <div className={`${Header01Css['headline-para']}`}>
            <p>
              To prevent tampering and unauthorized entry into the premises by
              our engineers developed a burglar alarm system in the house.
            </p>
          </div>

          <a className={`${Header01Css.btna}`} href="#">DISCOVER MORE</a>
        </div>
        <span className={`${Header01Css.right}`}>
          <img src={bgcover} alt="bg-cover" />
        </span>
      </div>
    </section>

  
</>
  );
}