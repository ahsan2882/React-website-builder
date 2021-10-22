import React from 'react'
import Test from '../assets/template1images/testiEdit.webp'
import Testimonial1Css from './Testimonials1.module.css'
export const Testimonials1 = () => {
    return (
        <>
            <div className={`${Testimonial1Css['text-main-text']}`}>
        <h1 style={{color:`black`}} className={`${Testimonial1Css.headings}`}>What Our Clients Says</h1>
        <div className={`${Testimonial1Css.subhead}`}>
          Read honest testimonials of our clients who got secured thanks to our
          services.
        </div>
      </div>

      <div className={`${Testimonial1Css.container8}`}>
        <div className={`${Testimonial1Css['container8-content']}`}>
          <div className={`${Testimonial1Css['testimonial-heading']}`}>What Our Clients Say</div>
          <p style={{fontSize:`2rem`,width:`1000px`}} className={`${Testimonial1Css['testimonial-text']}`}>
            When I saw how these guys prepare themselves to any operation, I
            realized that it was it! I must hire them! I was scared. Now I am
            feeling safe because there is always the strongmen team with me and
            my folks.
          </p>
          <div className={`${Testimonial1Css.author}`}>
            <p className={`${Testimonial1Css['testimonial-author']}`}>– Alicia McKanzey</p>
          </div>
        </div>

        <div className={`${Testimonial1Css['container10-image']}`}>
          <img src={Test} alt="testimonials" />
        </div>
      </div>      
        </>
    )
}
