import React from 'react'
import About2vissionCss from './About2vision.module.css'
import Img1 from '../template2aboutcomponent/campaign-creators-gMsnXqILjp4-unsplash.jpg'
export default function About2Vision() {
    return (
     
        <section className= {`${About2vissionCss['vision']} ${About2vissionCss['our-vision']}`}>
        <div className={About2vissionCss['flex-about']}>
            <div className={`${About2vissionCss['content-our-vision']} ${About2vissionCss['container-content']}`}>
                <div className={About2vissionCss['vision-top-content']}>
                    <h1>About Us</h1>
                    <h1 style={{"color": "#c0272d"}}>Our Vision</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae qui a facilis, quam non aliquid repellat ab laboriosam molestias ullam assumenda consequuntur!</p>
                </div>
                <div className={About2vissionCss['vision-bottom-content']}>
                   <div className={About2vissionCss['flex-cont']}>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut unde nulla quod, deserunt ipsam et? Cum similique, perferendis animi laborum dicta esse.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut unde nulla quod, deserunt ipsam et? Cum similique, perferendis animi laborum dicta esse.</p>
                  </div>
                  <div className={About2vissionCss['flex-cont']}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut unde nulla quod, deserunt ipsam et? Cum
                      similique, perferendis animi laborum dicta esse.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut unde nulla quod, deserunt ipsam et? Cum
                      similique, perferendis animi laborum dicta esse.</p>
                  </div>
                </div>
            </div>
            <div className={About2vissionCss['vision-img']}>
                <img src={Img1} alt="about-vision"/>
            </div>
        </div>
    </section>
    )
}
