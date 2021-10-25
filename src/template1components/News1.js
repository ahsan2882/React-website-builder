import React from 'react'
import News1Css from './News1.module.css'
import news1 from '../assets/template1images/news1.png'
import news2 from '../assets/template1images/news2.png'

import news3 from '../assets/template1images/news3.png'

export const News1 = () => {
    return (
       <>
   <div className={`${News1Css['cards-contain']}`}>
        <h1 className={`${News1Css.headings}`}>Latest News</h1>
        <div className={`${News1Css.subhead}`}>
          <p>Stay upto date with our latest news</p>
        </div>
        <div className={`${News1Css.wrapper2}`}>
          <div className={`${News1Css.blog2}`}>
            <div className={`${News1Css['single-blog']}`}>
              <div className={`${News1Css['blog-img']}`}>
                <img src={news1} alt="news" />
           
              </div>

              <div className={`${News1Css['blog-content']}`}>
                <h4>CCTV Installation Tricks</h4>
                <p>
                  If you are able to install a camera, there is still a few
                  tricks to pay extra attention.
                </p>
                <div className={`${News1Css['btn-center']}`}>
                  <a className={`${News1Css.btna}`} href={2}>read more </a>
                </div>
              </div>
            </div>
            <div className={`${News1Css['single-blog']}`}>
              <div className={`${News1Css['blog-img']}`}>
                <img src={news2} alt="news" />
              
              </div>

              <div className={`${News1Css['blog-content']}`}>
                <h4>How to Monitor Your Facility</h4>
                <p>
                  Hire a special man who knows how to deal with this. Or read
                  this post.
                </p>
                <div className={`${News1Css['btn-center']}`}>
                  <a className={`${News1Css.btna}`} href={2}>read more </a>
                </div>
              </div>
            </div>
            <div className={`${News1Css['single-blog']}`}>
              <div className={`${News1Css['blog-img']}`}>
                <img src={news3} alt="news" />
              
              </div>

              <div className={`${News1Css['blog-content']}`}>
                <h4>Outdoor Security Process</h4>
                <p>
                  Working with different clients, we collected rich experience
                  and want to share it with you..
                </p>
                <div className={`${News1Css['btn-center']}`}>
                  <a className={`${News1Css.btna}`} href={2}>read more </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       </>
    )
}