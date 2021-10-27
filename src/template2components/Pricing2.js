import React from 'react'
import Pricing2Css from './Pricing2.module.css'
export const Pricing2 = () => {
    return (
      <>
               <section className={Pricing2Css['head-main']}>
    <div className={Pricing2Css['MainHeading']}><span className={Pricing2Css['SpanColor']}> OUR </span> pricing table</div>
    <div className={Pricing2Css['spanDesc']}>
      <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
    </div>
  
  </section>
  <section className={Pricing2Css['price-cards']} data-aos="fade">
    
    <div className={Pricing2Css['container']}>

      <div className={Pricing2Css['row']}>
        <div className={Pricing2Css['card']}>
          <div className={Pricing2Css['card-header']}>
            <h1 className={Pricing2Css['card-main']}>Starter</h1>
            <div className={Pricing2Css['card-child']}>For small business</div>
          </div>
          <div className={Pricing2Css['card-body']}>
            <p className={Pricing2Css['price1']}>

              <span className={Pricing2Css['nb1']}>$29</span> 
               <small className={Pricing2Css['year1']}>/yr</small> 
            </p>
            <ul className={Pricing2Css['price-ser']}>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>01 Security With Dogs</li>
              <li>No Change on Complain</li>
            </ul>
            <button className={Pricing2Css['btnb-3']} href="#">Get quote <i className="fas fa-long-arrow-alt-right"></i></button>
          </div>
        </div>
        <div className={Pricing2Css['card mid']}>
          <div className={Pricing2Css['card-header']}>
            <h1 className={Pricing2Css['card-main']}>INTERMEDIATE</h1>
            <div className={Pricing2Css['card-child']}>For INTERMEDIATE business</div>
          </div>
          <div className={Pricing2Css['card-body']}>
            <p className={Pricing2Css['price1']}>

              <span className={Pricing2Css['nb1']}>$29</span> 
               <small className={Pricing2Css['year1']}>/yr</small> 
            </p>
            <ul className={Pricing2Css['price-ser']}>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>01 Security With Dogs</li>
              <li>No Change on Complain</li>
            </ul>
            <button className={Pricing2Css['btnb-2']} href="#">Get quote <i className="fas fa-long-arrow-alt-right"></i></button>
          </div>
        </div>
        <div className={Pricing2Css['card']}>
          <div className={Pricing2Css['card-header']}>
            <h1 className={Pricing2Css['card-main']}>Professional</h1>
            <div className={Pricing2Css['card-child']}>For Large scale business</div>
          </div>
          <div className={Pricing2Css['card-body']}>
            <p className={Pricing2Css['price1']}>

               <span className={Pricing2Css['nb1']}>$29</span> 
              <small className={Pricing2Css['year1']}>/yr</small> 
            </p>




            <ul className={Pricing2Css['price-ser']}>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>01 Security With Dogs</li>
              <li>No Change on Complain</li>




            </ul>
            <button className={Pricing2Css['btnb-3']} href="#">Get quote <i className="fas fa-long-arrow-alt-right"></i></button>
          </div>
        </div>


      </div>
    </div>
  </section>
      </>
    )
}
