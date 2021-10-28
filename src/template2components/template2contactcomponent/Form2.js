import React from 'react'
import Form2Css from  './Form2.module.css'
import Dot from '../template2contactcomponent/dot.png'
export default function Form2() {
    return (
        <>
           <section>
  <div className={Form2Css['section-form']}>
    <div className={Form2Css['box2']}>
      <div className={Form2Css['addresses']}>
      <h1><lord-icon src="https://cdn.lordicon.com/burmxlrn.json" trigger="loop" colors={{"primary":"#121331","secondary":"#c0272d"}}
        style={{ "width": "70px;", "height": "70px" }}>
      </lord-icon><span className={Form2Css['hd']}></span>Address</h1>
      <p>London Office<br/>
     
      418-426 Lewisham High Street, SE13 6LJ</p>
      <p>Birmingham Office<br/>
      
        3 Brindley Place, B1 2JB</p>
        <p>Manchester Office<br/>
        
          Chancery Place, 50 Brown Street, M2 2JG</p>
    </div>
    <div className={Form2Css['number-site']}>
      <h1>
        <lord-icon src="https://cdn.lordicon.com/ltxkhbfa.json" trigger="loop"
          colors={{"primary":"#121331","secondary":"#c0272d"}} style={{ "width": "70px;", "height": "70px" }}>
        </lord-icon><span className={Form2Css['hd']}></span>Phone
      </h1>
      <p>London: 020 8690 1903</p>
      <p>Birmingham: 0121 824 1075</p>
      <p>Birmingham: 0121 824 1076</p>
      <p>Manchester: 0161 511 3397</p>
      <p>Manchester: 0161 511 3398</p>
    </div>
    <div className={Form2Css['email-site']}>
      <h1>
        <lord-icon src="https://cdn.lordicon.com/jshbewmb.json" trigger="loop"
          colors={{"primary":"#121331","secondary":"#c0272d"}} style={{ "width": "70px;", "height": "70px" }}>
        </lord-icon><span className={Form2Css['hd']}></span>Email
      </h1>
      <p>info@critrixconsultancy.com</p>
    </div>
    </div>
    <div className={Form2Css['box1']}>
      <section className={Form2Css['head-main']}>
        <div className={Form2Css['MainHeading']}><span className="SpanColor">We'd love to hear from </span>you</div>
        <div className={Form2Css['spanDesc']}>
          <p>Call, email or complete the form below and one of our team members will contact you to discuss your requirements.</p>
        </div>
        <div className={Form2Css['divMainHeading']}>
          <div className={Form2Css['divMainHeadingSubDiv']} data-aos="fade-left"></div> <img className={Form2Css.dot} src={Dot} data-aos="fade" alt="form2Im"/>
          <div className={Form2Css['divMainHeadingSubDiv']} data-aos="fade-right"> </div>
        </div>
      </section>
  
      <form action="Contact.html">
        <div className={Form2Css['input-container']}>
          <input className={Form2Css['input-field']} type="text" placeholder="Full Name*" name="Name" required/>
          <input className={Form2Css['input-field']} type="text" placeholder="Company Name*" name="Company Name" required/>
        </div>
        <div className={Form2Css['input-container']}>
        </div>
        <div className={Form2Css['input-container']}>
          <input className={Form2Css['input-field']} type="email" placeholder="Email*" name="email" required/>
          <input className={Form2Css['input-field']} type="text" placeholder="Number" name="number"/>
        </div>
        <div className={Form2Css['input-container']}>
          <textarea className={Form2Css['input-field']} type="text" placeholder="Your Message for Enquiry*" name="message"></textarea>
         
        </div>
        <div className={Form2Css['form-post']}>
          <button className={Form2Css.btnb} href="#">SEND</button>
      </div>
      </form>
    </div>
  </div>
  </section>
        </>
    )
}
