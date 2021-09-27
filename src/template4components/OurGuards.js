import React from 'react'
import guard1 from '../assets/template4images/guard1.jpg'
import guard2 from '../assets/template4images/guard2.jpg'
import guard3 from '../assets/template4images/guard3.jpg'
import guard4 from '../assets/template4images/guard4.jpg'
import Guards4Css from './OurGuards.module.css'

export default function OurGuards() {
    return (
        <section className="bg-white">
            <div className={`${Guards4Css.container1} ${Guards4Css.teamSection}`}>
                <h1 className={`text-5xl m-0 ${Guards4Css.teamH1}`}>Our Guards</h1>
                <p className="text-xl text-center mb-12 text-black">
                    Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
                    euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
                    ligula.
                </p>
                <div className={`${Guards4Css.container1} ${Guards4Css.guardsList}`}>
                    <div className={Guards4Css.guards}>
                        <img src={guard1} className={Guards4Css.guardImage} alt="guard 1"/>
                        <h2 className={`m-0 mt-8 ${Guards4Css.guardName}`}>John Richards</h2>
                        <h4 className="m-0 mt-8 text-black">Lorem ipsum</h4>
                        <div className={Guards4Css.guardSocial}>
                            <i className="fab fa-twitter"></i
                            ><i className="fab fa-facebook-square"></i
                            ><i className="fab fa-google-plus-g"></i
                            ><i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className={Guards4Css.guards}>
                        <img src={guard2} className={Guards4Css.guardImage} alt="guard 2"/>
                        <h2 className={`m-0 mt-8 ${Guards4Css.guardName}`}>Kelley Miles</h2>
                        <h4 className="m-0 mt-8 text-black">Lorem ipsum</h4>
                        <div className={Guards4Css.guardSocial}>
                            <i className="fab fa-twitter"></i
                            ><i className="fab fa-facebook-square"></i
                            ><i className="fab fa-google-plus-g"></i
                            ><i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className={Guards4Css.guards}>
                        <img src={guard3} className={Guards4Css.guardImage} alt="guard 3"/>
                        <h2 className={`m-0 mt-8 ${Guards4Css.guardName}`}>Sherman Warner</h2>
                        <h4 className="m-0 mt-8 text-black">Lorem ipsum</h4>
                        <div className={Guards4Css.guardSocial}>
                            <i className="fab fa-twitter"></i
                            ><i className="fab fa-facebook-square"></i
                            ><i className="fab fa-google-plus-g"></i
                            ><i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className={Guards4Css.guards}>
                        <img src={guard4} className={Guards4Css.guardImage} alt="guard 4"/>
                        <h2 className={`m-0 mt-8 ${Guards4Css.guardName}`}>Denis Green</h2>
                        <h4 className="m-0 mt-8 text-black">Lorem ipsum</h4>
                        <div className={Guards4Css.guardSocial}>
                            <i className="fab fa-twitter"></i
                            ><i className="fab fa-facebook-square"></i
                            ><i className="fab fa-google-plus-g"></i
                            ><i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <a href="#" className="flex no-underline py-3 px-6 text-black border-rad1-5r justify-center items-center">
                    <div>View all&emsp;</div>
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </section>
    );
}
