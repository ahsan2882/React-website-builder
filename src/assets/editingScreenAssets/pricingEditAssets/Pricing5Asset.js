import React from 'react'
import Pricing5AssetCss from './Pricing5Asset.module.css'
export default function Pricing5Asset() {
    return (
        <>
         <section className={Pricing5AssetCss['head-main']}>
    <div className={Pricing5AssetCss['MainHeading']}><span className={Pricing5AssetCss['SpanColor']}> OUR </span> pricing table</div>
    <div className={Pricing5AssetCss['spanDesc']}>
      <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
    </div>
  
  </section>
  <section className={Pricing5AssetCss['price-cards']} data-aos="fade">
    
    <div className={Pricing5AssetCss['container']}>

      <div className={Pricing5AssetCss['row']}>
        <div className={Pricing5AssetCss['card']}>
          <div className={Pricing5AssetCss['card-header']}>
            <h1 className={Pricing5AssetCss['card-main']}>Starter</h1>
            <div className={Pricing5AssetCss['card-child']}>For small business</div>
          </div>
          <div className={Pricing5AssetCss['card-body']}>
            <p className={Pricing5AssetCss['price1']}>

              <span className={Pricing5AssetCss['nb1']}>$29</span> 
               <small className={Pricing5AssetCss['year1']}>/yr</small> 
            </p>
            <ul className={Pricing5AssetCss['price-ser']}>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>01 Security With Dogs</li>
              <li>No Change on Complain</li>
            </ul>
            <button className={Pricing5AssetCss['btnb-3']} href="#">Get quote <i className="fas fa-long-arrow-alt-right"></i></button>
          </div>
        </div>
        <div className={Pricing5AssetCss['card mid']}>
          <div className={Pricing5AssetCss['card-header']}>
            <h1 className={Pricing5AssetCss['card-main']}>INTERMEDIATE</h1>
            <div className={Pricing5AssetCss['card-child']}>For INTERMEDIATE business</div>
          </div>
          <div className={Pricing5AssetCss['card-body']}>
            <p className={Pricing5AssetCss['price1']}>

              <span className={Pricing5AssetCss['nb1']}>$29</span> 
               <small className={Pricing5AssetCss['year1']}>/yr</small> 
            </p>
            <ul className={Pricing5AssetCss['price-ser']}>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>01 Security With Dogs</li>
              <li>No Change on Complain</li>
            </ul>
            <button className={Pricing5AssetCss['btnb-2']} href="#">Get quote <i className="fas fa-long-arrow-alt-right"></i></button>
          </div>
        </div>
        <div className={Pricing5AssetCss['card']}>
          <div className={Pricing5AssetCss['card-header']}>
            <h1 className={Pricing5AssetCss['card-main']}>Professional</h1>
            <div className={Pricing5AssetCss['card-child']}>For Large scale business</div>
          </div>
          <div className={Pricing5AssetCss['card-body']}>
            <p className={Pricing5AssetCss['price1']}>

               <span className={Pricing5AssetCss['nb1']}>$29</span> 
              <small className={Pricing5AssetCss['year1']}>/yr</small> 
            </p>




            <ul className={Pricing5AssetCss['price-ser']}>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>10 CCTV Cameras</li>
              <li>02 Security Guard</li>
              <li>No Physical Protections</li>
              <li>01 Security With Dogs</li>
              <li>No Change on Complain</li>




            </ul>
            <button className={Pricing5AssetCss['btnb-3']} href="#">Get quote <i className="fas fa-long-arrow-alt-right"></i></button>
          </div>
        </div>


      </div>
    </div>
  </section>

        </>
    )
}
