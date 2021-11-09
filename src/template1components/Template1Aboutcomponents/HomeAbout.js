import React from 'react'
import Navbar1 from '../Navbar1'
import HomeAboutmoduleCss from './HomeAbout.module.css'
// import Service from './head2.jpg'
export default function HomeAbout({displayDevice, linksfunc}) {
    return (
   <>
   <Navbar1 displayDevice={displayDevice} linksfunc={linksfunc}/>
    <section  className={`${HomeAboutmoduleCss['services-sec']}`}>
    <div className={`${HomeAboutmoduleCss.contentserv}`}>
              <h1 className={`${HomeAboutmoduleCss.headings}`}>About US</h1>
  
  </div>
        </section>

   </>
    )
}
