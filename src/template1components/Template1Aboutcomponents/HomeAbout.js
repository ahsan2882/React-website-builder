import React from 'react'
import HomeAboutmoduleCss from './HomeAbout.module.css'
// import Service from './head2.jpg'
export default function HomeAbout() {
    return (
   <>
    <section  className={`${HomeAboutmoduleCss['services-sec']}`}>
    <div className={`${HomeAboutmoduleCss.contentserv}`}>
              <h1 className={`${HomeAboutmoduleCss.headings}`}>About US</h1>
  
  </div>
        </section>

   </>
    )
}
