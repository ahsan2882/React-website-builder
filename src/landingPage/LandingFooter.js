/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import LandingFooterCss from './LandingFooter.module.css'
import icon from '../assets/landingPageAssets/input_icon.png'
import  image from '../assets/landingPageAssets/ring-1.png'
import './sass/style.scss'

export const Footer = () => {
  return (
    // -- first footer
<>
    <footer className={`${LandingFooterCss.footer}`}>
      <div className={`${LandingFooterCss['footer__bg']}`}>
      <img className={`${LandingFooterCss['ring-1']}`} src={image} alt="image" />
        <div className={`${LandingFooterCss['circle-1']}`}></div>
        <div className={`${LandingFooterCss['circle-2']}`}></div>
      </div>
      <div className={`${LandingFooterCss.container}`}>
        <div className={`${LandingFooterCss['footer__wrapper']}`}>
          <div className={`${LandingFooterCss['footer__wrapper-single']}  ${LandingFooterCss['footer__wrapper-single--1']}`}>
            <h5>contact us</h5>
            <p>Building #111, Kings Street
              New York, United Kingdom</p>
            <p>+ 123 456 7890</p>
            <a href="#">hello@guardmark.com</a>
          </div>
          <div className={`${LandingFooterCss['footer__wrapper-single']}  ${LandingFooterCss['footer__wrapper-single--2']}`}>
            <ul>
              <li>About Us</li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Our Story</a></li>
            </ul>
          </div>
          <div className={`${LandingFooterCss['footer__wrapper-single']} ${LandingFooterCss['footer__wrapper-single--3']}`}>
            <ul>
              <li>Social</li>
              <li><a href="#"><i className={`${['fab fa-twitter']}`}></i><span>Twitter</span></a></li>
              <li><a href="#"><i className={`${['fab fa-facebook-f']}`}></i><span>Facebook</span></a></li>
              <li><a href="#"><i className={`${['fab fa-instagram']}`}></i><span>Instagram</span></a></li>
            </ul>
          </div>
          <div className={`${LandingFooterCss['footer__wrapper-single']}  ${LandingFooterCss['footer__wrapper-single--4']}`}>
            <h5>subscribe</h5>
            <div className={`${LandingFooterCss.input}`}>
              <input type="text" placeholder="Email"/>
              <img src={icon} alt="icon"/>
            </div>
          </div>
        </div>
        <div className={`${LandingFooterCss['footer__copy']}`}>
          <h6>&copy; 2021 GuardMark</h6>
        </div>
      </div>
    </footer>
</>
  );
}