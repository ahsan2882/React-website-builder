import React from 'react'
import AboutpolicyCss from './About2policy.module.css'
import Img1 from '../template2aboutcomponent/news3.jpg'
export default function About2policy() {
    return (
        <>
       
        <section className= {`${AboutpolicyCss['policies']} ${AboutpolicyCss['head-main']}`}>
    <div className={AboutpolicyCss['MainHeading']}><span className={AboutpolicyCss['SpanColor']}> OUR </span> Policy</div>
    <div className={AboutpolicyCss['spanDesc']}>
      <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
    </div>
    
  </section>
  <section className={AboutpolicyCss['policy']}>
  <div className={AboutpolicyCss['section-our-policies']}>
    <div className={AboutpolicyCss['container-policies']}>
      <div className={AboutpolicyCss['parent']}>
        <div className={AboutpolicyCss['policy-top']}>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores suscipit at quos, ipsum vero magni explicabo temporibus unde quaerat?</p>
          </div>
         <div className={AboutpolicyCss['paradiv']}> 
          <div className={AboutpolicyCss['flexi-row']}>
          <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p></div>
        <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo
          saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p></div>
        </div>
        <div className={AboutpolicyCss['flexi-row']}>
          <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo
          saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p> </div>
        <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo
          saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p> </div>
        </div>
        <div className={AboutpolicyCss['flexi-row']}>
          <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo
          saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p> </div>
        <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo
          saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p></div>
        </div>
        </div>
         
      </div>
    
      <div className={`${AboutpolicyCss['div8']} ${AboutpolicyCss['container-sub-b']}`}>
      
        <img src={Img1} alt="news3"/>
      
        <div className={AboutpolicyCss['sub-content-head']}>
          <h5>Lorem, ipsum.</h5>
          <h3>spider <span style={{"color":"#c0272d"}}>woman</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore asperiores nostrum voluptates fuga
            aspernatur maiores consequatur sequi nisi veniam?</p>
        </div>
      
        <div className={AboutpolicyCss['icon-policy']}>
          <div className={AboutpolicyCss['icon-line']}>
            <i className="fas fa-map-pin fa-2x"></i>
            <div className={AboutpolicyCss['handp']}>
              <h3>Lorem, ipsum.</h3>
              <p>Lorem, ipsum.</p>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
          <div className={AboutpolicyCss['icon-line']}>
            <i className="fas fa-file-contract fa-2x"></i>
            <div className={AboutpolicyCss['handp']}>
              <h3>Lorem, ipsum.</h3>
              <p>Lorem, ipsum.</p>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
          <div className={AboutpolicyCss['icon-line']}>
            <i className="fas fa-user-friends fa-2x"></i>
            <div className={AboutpolicyCss['handp']}>
              <h3>Lorem, ipsum.</h3>
              <p>Lorem, ipsum.</p>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
        </div>
      
      </div>

    </div>
  </div>
  </section>
  </>
    )
}
