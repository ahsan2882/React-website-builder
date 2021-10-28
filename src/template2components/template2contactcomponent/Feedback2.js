import React from 'react'
import FeedbackCss from './Feedback.module.css'
import Img1 from '../template2contactcomponent/news1.jpg'
export default function Feedback2() {
    return (
      <>
        <section className={FeedbackCss.feedback}>

        <div className={FeedbackCss['feed-contain']}>
          <img className={FeedbackCss['feed-img']} src={Img1} alt="feedback"/>
          <div className={FeedbackCss['feed-content']}>
            <div className={FeedbackCss.MainHeading}><span className={FeedbackCss['SpanColor']}> YOUR </span> FEEDBACK</div>
            <div className={FeedbackCss.spanDesc}>
              <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={FeedbackCss.divMainHeading}>
              <div className={FeedbackCss.divMainHeading} data-aos="fade-left"></div> 
              <div className={FeedbackCss.divMainHeading} data-aos="fade-right"> </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at nam facere ullam. Obcaecati error sequi quaerat iure sunt? 
              Dolore suscipit sed quis ullam sint velit esse? Omnis quae dolorem rem at, porro amet quam culpa aliquam magnam voluptate saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at nam facere ullam. Obcaecati error sequi quaerat
            iure sunt?
            Dolore suscipit sed quis ullam sint velit esse? Omnis quae dolorem rem at, porro amet quam culpa aliquam magnam
            voluptate saepe?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at nam facere ullam. Obcaecati error sequi quaerat
          iure sunt?
          Dolore suscipit sed quis ullam sint velit esse? Omnis quae dolorem rem at, porro amet quam culpa aliquam magnam
          voluptate saepe?</p>
          
                <button className={FeedbackCss.btnb} href="#">Download Form</button>
          
          </div>
        </div>
      </section>
<section className={FeedbackCss.mapsec}>
<div className={FeedbackCss.map}></div>
</section>
</>
    )
}
