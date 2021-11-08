import React, { useRef } from 'react'
import visionAboutmoduleCss from './visionAbout.module.css'
// import visi from './manned.jpg'
export default function VisionAbout() {
    // const editorRef = useRef(null);
    return (

        <>

            <section className={`${visionAboutmoduleCss.visionwrap}`}>
                <div className={`${visionAboutmoduleCss.row1}`}>
                    <div className={`${visionAboutmoduleCss.col1}`}>
                        {/* <img src="https://i.ibb.co/NpVp24j/manned.jpg" alt="manned" border="0"> */}
                        <img src="https://i.ibb.co/NpVp24j/manned.jpg" alt="manned" />
                    </div>
                    <div className={`${visionAboutmoduleCss['col-2']}`}>
                        <h5> who we are </h5>
                        <h1>  Our Vision</h1>
                        <p>We are a residential and commercial security provider and introducing all types of the most easiest security systems for give smart security. Latest technology with security solutions to provide you the high level of protection security in your home and business also
                        </p>

                    </div>
                </div>

            </section>
        </>

    );
}