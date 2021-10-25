import React from 'react'
import Prizing1Css from './Prizing1.module.css'
export const Prizing1 = () => {
    return (
       <>
         <h1 className={`${Prizing1Css.headings}`}>Our Pricing Table</h1>
      <div className={`${Prizing1Css.subhead}`}>
        <p>
          Our prices can let you secure your business or life with no large
          expenses.
        </p>
      </div>
      <div className={`${Prizing1Css['container-1']}`}>
        <div className={`${Prizing1Css.box1}`}>
          <header className={`${Prizing1Css['heading-price']}`}>
            <h2 className={`${Prizing1Css.title1}`}>Starter</h2>
            <p className={`${Prizing1Css.subtitle1}`}>For small business</p>
          </header>
          <p className={`${Prizing1Css.price1}`}>
            <span className={`${Prizing1Css.nb1}`}>$29</span>
            <small className={`${Prizing1Css.year1}`}>/yr</small>
          </p>

          <ul>
            <li>02 CCTV Cameras</li>
            <li>01 Security Guard</li>
            <li>No Physical Protections</li>
            <li>No Security With Dogs</li>
            <li>No Change on Complain</li>
          </ul>
          <div className={`${Prizing1Css['btn-center']}`}>
            <a className={`${Prizing1Css.btna}`} href={2}
              >Sign Up <i className={`${Prizing1Css['fas fa-long-arrow-alt-right']}`}></i
            ></a>
          </div>
        </div>
        <div className={`${Prizing1Css.box2}`}>
          <header className={`${Prizing1Css['heading-price']}`}>
            <h2 className={`${Prizing1Css.title2}`}>Professional</h2>
            <p className={`${Prizing1Css.subtitle2}`}>For small business</p>
          </header>
          <p className={`${Prizing1Css.price2}`}>
            <span className={`${Prizing1Css.nb2}`}>$59</span>
            <small className={`${Prizing1Css.year2}`}>/yr</small>
          </p>

          <ul className={`${Prizing1Css['price-text']}`}>
            <li>20 CCTV Cameras</li>
            <li>08 Security Guard</li>
            <li>Yes Physical Protections</li>
            <li>04 Security With Dogs</li>
            <li>Yes Change on Complain</li>
          </ul>

          <div className={`${Prizing1Css['btn-center']}`}>
            <a className={`${Prizing1Css.btna2}`} href={2}
              >Sign Up <i className={`${Prizing1Css['fas fa-long-arrow-alt-right']}`}></i
            ></a>
          </div>
        </div>
        <div className={`${Prizing1Css.box1}`}>
          <header className={`${Prizing1Css['heading-price']}`}>
            <h2 className={`${Prizing1Css.title1}`}>Advance</h2>
            <p className={`${Prizing1Css.subtitle1}`}>For small business</p>
          </header>
          <p className={`${Prizing1Css.price1}`}>
            <span className={`${Prizing1Css.nb1}`}>$29</span>
            <small className={`${Prizing1Css.year1}`}>/yr</small>
          </p>

          <ul>
            <li>10 CCTV Cameras</li>
            <li>02 Security Guard</li>
            <li>No Physical Protections</li>
            <li>01 Security With Dogs</li>
            <li>No Change on Complain</li>
          </ul>

          <div className={`${Prizing1Css['btn-center']}`}>
            <a className={`${Prizing1Css.btna}`} href={2}
              >Sign Up <i className={`${Prizing1Css['fas fa-long-arrow-alt-right']}`}></i
            ></a>
          </div>
        </div>
      </div>
       </>
    )
}
