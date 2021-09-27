import React from 'react'
import aboutimg from '../assets/template4images/news3.jpg'
import About4Css from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <div className={`${About4Css.container02} py-28 px-12 flex items-center justify-center bg-black`}>
            <div className={`${About4Css.box1} flex flex-col max-w-lg`}>
                <img className={`${About4Css.aboutImg} w-11/12`} src={aboutimg} alt="about"/>
            </div>
            <div className={`${About4Css.box1} flex flex-col max-w-lg`}>
                <section>
                    <article>
                        <h1 className={`${About4Css.artH1} w-full`}>About us</h1>
                        <h3 className="text-white text-3xl w-full mb-6">CCTV for your Safety</h3>
                        <p className="text-white text-xl py-3 px-0">
                            Nunc pretium nibh non aliquam scelerisque. Integer porttitor
                            dolor sit amet leo malesuada scelerisque. Sed sed tortor
                            lobortis, dictum lacus sed, mollis enim. Aenean ullamcorper
                            accumsan sem sit amet aliquam. Cras euismod mauris felis, eget
                            bibendum nibh facilisis ac.
                        </p>
                        <div className="py-5">
                            <button className={`${About4Css.btnReadMore} text-white border border-solid py-2 px-8 hover:text-black hover:bg-white`}>
                                Read More
                                <i className="fas fa-arrow-right" aria-hidden="true"></i>
                            </button>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    );
}
