/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React from "react";
import testimonal1 from '../assets/landingPageAssets/testimonial-img-1.png'
import testimonal2 from '../assets/landingPageAssets/testimonial-img-2.png'
const Slider = () => {

  return (

    <section className="client">
    <div className="client__bg">
      <div className="circle-1"></div>
      <div className="circle-4"></div>
    </div>
    <div className="container">
      <div className="client__bg--inside">
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
      <div className="projects__info heading-margin">
        <h2 className="h2-heading">Happy Clients</h2>
        <div>
          <i className="testimonial-nav-left fas fa-angle-left"></i>
          <i className="testimonial-nav-right fas fa-angle-right"></i>
        </div>
      </div>
      <div className="row">
        <div className="swiper-container testimonial-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide single-testimonial">
              <p className="paragraph large light">"Sed est quam facilisis vel quam id suscipite tempus justo. Nam nonllus
                ac neque etra
                commodo in ac sem enterdum et alesuada fames acnte ipsum primis in faucibus"</p>
              <div className="testimonial-client">
                  <img src={testimonal1} alt="image"/>
                <div>
                  <h4 className="h4-heading">Michael Williamson</h4>
                  <p className="paragraph light small">CEO - GFXPARTNER</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide single-testimonial">
              <p className="paragraph large light">"Sed est quam facilisis vel quam id suscipite tempus justo. Nam nonllus
                ac neque etra
                commodo in ac sem enterdum et alesuada fames acnte ipsum primis in faucibus"</p>
              <div className="testimonial-client">
                <img src={testimonal2} alt="image"/>
                <div>
                  <h4 className="h4-heading">Dave Edwards</h4>
                  <p className="paragraph light small">CEO - GFXPARTNER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="swiper-container client-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="single-client">
                {/* <a href="#"><img src="assets/images/client-img.png" alt="image"/></a> */}
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-client">
                {/* <a href="#"><img src="assets/images/client-img.png" alt="image"/></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
       

  );
};

export default Slider;