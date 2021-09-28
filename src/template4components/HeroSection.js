import React from 'react'
import navlogo from '../assets/template4images/thefnflogo.png'
import background from '../assets/template4images/blog_15-770x545.jpg'
import Hero4Css from './HeroSection.module.css'
import {TextPara} from './CraftText';
import { Editor, Frame } from '@craftjs/core';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <div>
            <div className={Hero4Css.navWrapper}>
                <div className={`flex justify-between items-center py-6 ${Hero4Css.container1}`}>
                    <img src={navlogo} alt="nav-logo" className="w-52"/>
                    <nav>
                        <ul className={Hero4Css.navBar}>
                            <li className={`${Hero4Css.navBarLink} hover:text-black`}>
                                <Link to="index.html" className="no-underline text-white">HOME</Link>
                            </li>
                            <li className={`${Hero4Css.navBarLink} hover:text-black`}><Link to="about.html" className="no-underline text-white">ABOUT US</Link></li>
                            <li className={`${Hero4Css.navBarLink} hover:text-black ${Hero4Css.dropdownServiceListItem}`}>
                                <section className="cursor-pointer my-4">SERVICES</section>
                                <ul className={`${Hero4Css.dropdownServicesContent} list-none p-0 absolute`}>
                                    <li className={`${Hero4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>STATIC SECURITY</h4>
                                    </li>
                                    <li className={`${Hero4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>MOBILE PATROLLING</h4>
                                    </li>
                                    <li className={`${Hero4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>CCTV MONITORING</h4>
                                    </li>
                                    <li className={`${Hero4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>LOCK & UNLOCK</h4>
                                    </li>
                                    <li className={`${Hero4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>
                                            VACANT UNIT CHECKS
                                        </h4>
                                    </li>
                                    <li className={`${Hero4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>
                                            TECHNOLOGY PRODUCT
                                        </h4>
                                    </li>
                                    <li className={`${Hero4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>MANNED GUARDING</h4>
                                    </li>
                                    <li className={`${Hero4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>
                                            SUPPORT & MANAGEMENT
                                        </h4>
                                    </li>
                                    <li className={`${Hero4Css.servicesLinks} flex my-8 mx-4`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>EVENT SECURITY</h4>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${Hero4Css.navBarLink} hover:text-black ${Hero4Css.dropdownSectorsListItem}`}>
                                <section className="cursor-pointer my-4">SECTORS</section>
                                <ul className={`${Hero4Css.dropdownSectorsContent} list-none p-0 absolute`}>
                                    <li className={`${Hero4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>CONSTRUCTION</h4>
                                    </li>
                                    <li className={`${Hero4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>CORPORATE</h4>
                                    </li>
                                    <li className={`${Hero4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>INDUSTRIAL</h4>
                                    </li>
                                    <li className={`${Hero4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>RETAIL</h4>
                                    </li>
                                    <li className={`${Hero4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>LOGISTICS</h4>
                                    </li>
                                    <li className={`${Hero4Css.sectorsLink} flex my-8 mx-4`}>
                                        <h4 className={Hero4Css.navigationLinkContent}>
                                            PROPERTY MANAGEMENT
                                        </h4>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${Hero4Css.navBarLink} hover:text-black`}>
                                <Link to="contact-us.html" className="no-underline text-white">CONTACT US</Link>
                            </li>
                        </ul>
                        <section className={Hero4Css.hamburger}>
                            <span className={Hero4Css.bar}></span>
                            <span className={Hero4Css.bar}></span>
                            <span className={Hero4Css.bar}></span>
                        </section>
                    </nav>
                </div>
            </div>
            <section className={Hero4Css.sectionHero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${background})`}}>
                <div>
                    <Editor resolver={{Text}}>
                        <Frame>
                            <>
                                <h1 className={Hero4Css.secHeroH1}>Security Services</h1>
                                <TextPara text="For your personal safety" classStyle={Hero4Css.paragraphHero}/>
                                <div className={Hero4Css.secHeroBtn}>
                                    <button className={Hero4Css.secBtn}>Contact us</button>
                                </div>
                            </>
                        </Frame>
                    </Editor>
                </div>
            </section>
        </div>
    );
}
