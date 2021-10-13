import React from 'react'
import Test from '../assets/template1images/testiEdit.webp'
import TestimonialsCss from './Testimonials.module.css'
export const Testimonials = () => {
    return (
        <>
            <div className={`${TestimonialsCss['text-main-text']}`}>
        <h1 style={{color:`black`}} className={`${TestimonialsCss.headings}`}>What Our Clients Says</h1>
        <div className={`${TestimonialsCss.subhead}`}>
          Read honest testimonials of our clients who got secured thanks to our
          services.
        </div>
      </div>

      <div className={`${TestimonialsCss.container8}`}>
        <div className={`${Testimonials['container8-content']}`}>
          <div className={`${TestimonialsCss['testimonial-heading']}`}>What Our Clients Say</div>
          <p style={{fontSize:`2rem`,width:`1000px`}} className={`${TestimonialsCss['testimonial-text']}`}>
            When I saw how these guys prepare themselves to any operation, I
            realized that it was it! I must hire them! I was scared. Now I am
            feeling safe because there is always the strongmen team with me and
            my folks.
          </p>
          <div className={`${TestimonialsCss.author}`}>
            <p className={`${Testimonials['testimonial-author']}`}>– Alicia McKanzey</p>
          </div>
        </div>

        <div className={`${TestimonialsCss['container10-image']}`}>
          <img src={Test} alt="testimonials" />
        </div>
      </div>      
        </>
    )
}
