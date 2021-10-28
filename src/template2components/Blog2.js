import React from 'react'
import Blog2moduleCss from './Blog2.module.css'
import news1 from '../assets/template2images/news1.jpg'
import news2 from '../assets/template2images/news2.jpg'
import news3 from '../assets/template2images/news3.jpg'
import dot from '../assets/template2images/dot.png'

export const Blog2 = () => {
    return (
<>
<section className={`${Blog2moduleCss['head-main']}`}>
    <div className={`${Blog2moduleCss.MainHeading}`}><span className={`${Blog2moduleCss.SpanColor}`}> latest </span> News</div>
    <div className={`${Blog2moduleCss.spanDesc}`}>
      <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
    </div>
    <div className={`${Blog2moduleCss.divMainHeading}`}>
      <div className={`${Blog2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div> <img className={`${Blog2moduleCss.dot}`} src={dot} data-aos="fade" alt="dot"/>
      <div className={`${Blog2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
    </div>
  </section>
  <div className={`${Blog2moduleCss.wrapper2}`}>
    <div className={`${Blog2moduleCss.blog2}`}>
      <div className={`${Blog2moduleCss['single-blog']}`} data-aos="fade-right">
        <div className={`${Blog2moduleCss['blog-img']}`}>
          <img src={news1} alt="news1"/>

        </div>

        <div className={`${Blog2moduleCss['blog-content']}`} >
          <h4>Mobilies UX Treend</h4>
          <p className={`${Blog2moduleCss['post-para']}`}>Athena was regarded as the patron and protectress of various cities across Greece,
            particularly the city of Athens, from which she most likely received her name.</p>
          <div className={`${Blog2moduleCss['btn-post']}`}>
            <a className={`${Blog2moduleCss['btnb-2']}`} href={2}>learn more <i className="fas fa-long-arrow-alt-right"></i></a>
          </div>
        </div>
      </div>
      <div className={`${Blog2moduleCss['single-blog']}`} data-aos="zoom-in">

        <div className={`${Blog2moduleCss['blog-img']}`}>
          <img src={news2} alt="news2"/>

        </div>

        <div className={`${Blog2moduleCss['blog-content']}`}>
          <h4>Mobilies UX Treend</h4>
          <p className={`${Blog2moduleCss['post-para']}`}>Athena was regarded as the patron and protectress of various cities across Greece,
            particularly the city of Athens, from which she most likely received her name.</p>
          <div className={`${Blog2moduleCss['btn-post']}`}>
            <a className={`${Blog2moduleCss['btnb-2']}`} href={2}>learn more <i className="fas fa-long-arrow-alt-right"></i></a>
          </div>
        </div>
      </div>
      <div className={`${Blog2moduleCss['single-blog']}`} data-aos="fade-left">
        <div className={`${Blog2moduleCss['blog-img']}`}>
          <img src={news3} alt="news"/>

        </div>

        <div className={`${Blog2moduleCss['blog-content']}`}>
          <h4>Mobilies UX Treend</h4>
          <p className={`${Blog2moduleCss['post-para']}`}>Athena was regarded as the patron and protectress of various cities across Greece,
            particularly the city of Athens, from which she most likely received her name.</p>
          <div className={`${Blog2moduleCss['btn-post']}`}>
            <a className={`${Blog2moduleCss['btnb-2']}`} href={2}>learn more <i className="fas fa-long-arrow-alt-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

</>
    )
}

