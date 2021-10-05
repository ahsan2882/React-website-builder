/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import ring1 from '../assets/landingPageAssets/ring-1.png'
import ring2 from '../assets/landingPageAssets/ring-2.png'


// import workicon1 from '../assets/landingPageAssets/work_icon_01.png'
// import workicon2 from '../assets/landingPageAssets/work_icon_02.png'
// import workicon3 from '../assets/landingPageAssets/work_icon_03.png'
// import workicon4 from '../assets/landingPageAssets/work_icon_04.png'
import { Link } from 'react-router-dom'

// import logo from '../assets/landingPageAssets/logo.png'


import LandingHeaderCss from './LandingHeader.module.css'
import './sass/style.scss'


export const Header = () => {
  return (

    <>
      <header className={`${LandingHeaderCss.header}`}>
        <div className={`${LandingHeaderCss.container}`}>
          <div className={`${LandingHeaderCss['header__wrapper']}`}>
            <div className={`${LandingHeaderCss['header__logo']}`}>
              <a href="index.html">
                {/* <img src={logo} alt="logo" /> */}

              </a>
              <div className={`${LandingHeaderCss['header__nav']}`}>
              <ul className={`${LandingHeaderCss['header__nav-primary']}`}>
                <li><a href="#">Security</a></li>
              </ul>
              </div>
            </div>
            <div className={`${LandingHeaderCss['header__nav']}`}>
              <ul className={`${LandingHeaderCss['header__nav-primary']}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Templates</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">about</a></li>
              </ul>
              {/* <ul className={`${LandingHeaderCss['header__nav-secondary']}`}>
            <li><a href="#">fr</a></li>
            <li><a href="#">en</a></li>
          </ul> */}
              {/* <span className="direct"><i className={`${['fas fa-times']}`}></i></span> */}
            </div>
            <div className={`${LandingHeaderCss['header__bars']}`}>
              <div className={`${LandingHeaderCss['header__bars-bar']} ${LandingHeaderCss['header__bars-bar-1']}`}>

              </div>
              <div className={`${LandingHeaderCss['header__bars-bar']} ${LandingHeaderCss['header__bars-bar-2']}`}>

              </div>
              <div className={`${LandingHeaderCss['header__bars-bar']} ${LandingHeaderCss['header__bars-bar-3']}`}>

              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header section closed */}
      {/* hero section start */}
      <section className={`${LandingHeaderCss.hero}`}>
        <div className={`${LandingHeaderCss['hero__bg']}`}>
          <div className={`${LandingHeaderCss['circle-1']}`}></div>
          <div className={`${LandingHeaderCss['circle-2']}`}></div>
          <div className={`${LandingHeaderCss['circle-3']}`}></div>
          <img className={`${LandingHeaderCss['ring-1']}`} src={ring1} alt="image" />
          <img className={`${LandingHeaderCss['ring-2']}`} src={ring2} alt="image" />
        </div>
        <div className={`${LandingHeaderCss.container}`}>
          <div className={`${LandingHeaderCss['row']}`}>
            <div className={`${LandingHeaderCss['col-lg-6']}`}>
              <div className={`${LandingHeaderCss['hero__info']}`}>
                <h1 className={`${LandingHeaderCss['h1-heading']}`}>We make it simple
                  to build a website !</h1>
                <p className={`${LandingHeaderCss.paragraph}`}>Create a website in three clicks. Unique, simple and friendly. It's that easy</p>
                <Link to="/login" className={`${LandingHeaderCss.button}`}>
                  <span>LAUNCH BUILDER</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${LandingHeaderCss.work}`}>
          <div className={`${LandingHeaderCss.container}`}>
            <div className={`${LandingHeaderCss['work__wrapper']}`}>
              <div className={`${LandingHeaderCss.container}`}>
                <div className={`${LandingHeaderCss['work__head']}`}>
                  <h2 className={`${LandingHeaderCss['h2-heading']}`}>See what we do?</h2>
                  <p className={`${LandingHeaderCss.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipiscing elitur id magna eget
                    felis
                    volutpat
                    rhoncus sed sit amet mized phasellus nunc purus sit amet consectetur.</p>
                </div>
                <div className={`${LandingHeaderCss['work__items']}`}>
                  <div className={`${LandingHeaderCss['work__items_single']} ${LandingHeaderCss['work__items_single-1']}`}>
                    <div className={`${LandingHeaderCss['work__items_single-img']} ${LandingHeaderCss['work__items_single-1-img']}`}>
                      {/* <img src={workicon1} alt="image" /> */}
                    </div>
                    <div className={`${LandingHeaderCss['work__items_single-info']}`}>
                      <h3 className={`${LandingHeaderCss['h3-heading']} ${LandingHeaderCss['dark']}`}>Simple Interface</h3>
                    </div>
                  </div>
                  <div className={`${LandingHeaderCss['work__items_single']} ${LandingHeaderCss['work__items_single-2']}`}>
                    <div className={`${LandingHeaderCss['work__items_single-img']} ${LandingHeaderCss['work__items_single-2-img']}`}>
                      {/* <img src={workicon2} alt="image" /> */}
                    </div>
                    <div className={`${LandingHeaderCss['work__items_single-info']}`}>
                      <h3 className={`${LandingHeaderCss['h3-heading']} ${LandingHeaderCss['dark']}`}>No Coding needed</h3>
                    </div>
                  </div>
                  <div className={`${LandingHeaderCss['work__items_single']} ${LandingHeaderCss['work__items_single-3']}`}>
                    <div className={`${LandingHeaderCss['work__items_single-img']} ${LandingHeaderCss['work__items_single-3-img']}`}>
                      {/* <img src={workicon3} alt="image" /> */}
                    </div>
                    <div className={`${LandingHeaderCss['work__items_single-info']}`}>
                      <h3 className={`${LandingHeaderCss['h3-heading']} ${LandingHeaderCss['dark']}`}>Default Hosting</h3>
                    </div>
                  </div>
                  <div className={`${LandingHeaderCss['work__items_single']} ${LandingHeaderCss['work__items_single-4']}`}>
                    <div className={`${LandingHeaderCss['work__items_single-img']} ${LandingHeaderCss['work__items_single-4-img']}`}>
                      {/* <img src={workicon4} alt="image" /> */}
                    </div>
                    <div className={`${LandingHeaderCss['work__items_single-info']}`}>
                      <h3 className={`${LandingHeaderCss['h3-heading']} ${LandingHeaderCss['dark']}`}>Drag & Drop</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}


// 
// Header.propTypes = {
//   title : PhotoTypes.string
// 