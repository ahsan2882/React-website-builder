import React from 'react'
import Nav4Css from './Navigation4.module.css'
import navlogo from '../assets/template4images/thefnflogo.png'

export default function Navigation4({displayDevice}) {
    return (
        <>
            <div className="w-full" style={{ backgroundColor: 'rgba(0, 193, 207, 0.75)'}}>
                <div className={`flex justify-between items-center py-6 px-6`} style={{maxWidth: '73.5rem', margin: '0 auto' }}>
                    <img src={navlogo} alt="nav-logo" className="w-52" />
                    <nav>
                        <ul className={ displayDevice ? `${Nav4Css.navBar}` : `absolute -left-full top-28 flex-col bg-white w-full rounded-xl text-center transition duration-300 shadow-xl`}>
                            <li className={`${Nav4Css.navBarLink} hover:text-black`}>
                                <button className="text-white">HOME</button>
                            </li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black`}><button className="text-white">ABOUT US</button></li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black ${Nav4Css.dropdownServiceListItem}`}>
                                <section className="cursor-pointer my-4">SERVICES</section>
                                <ul className={`${Nav4Css.dropdownServicesContent} list-none p-0 absolute`}>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>STATIC SECURITY</h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>MOBILE PATROLLING</h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>CCTV MONITORING</h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>LOCK & UNLOCK</h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>
                                            VACANT UNIT CHECKS
                                        </h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>
                                            TECHNOLOGY PRODUCT
                                        </h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>MANNED GUARDING</h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>
                                            SUPPORT & MANAGEMENT
                                        </h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex my-8 mx-4`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>EVENT SECURITY</h4>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black ${Nav4Css.dropdownSectorsListItem}`}>
                                <section className="cursor-pointer my-4">SECTORS</section>
                                <ul className={`${Nav4Css.dropdownSectorsContent} list-none p-0 absolute`}>
                                    <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>CONSTRUCTION</h4>
                                    </li>
                                    <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>CORPORATE</h4>
                                    </li>
                                    <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>INDUSTRIAL</h4>
                                    </li>
                                    <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>RETAIL</h4>
                                    </li>
                                    <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>LOGISTICS</h4>
                                    </li>
                                    <li className={`${Nav4Css.sectorsLink} flex my-8 mx-4`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>
                                            PROPERTY MANAGEMENT
                                        </h4>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black`}>
                                <button className="text-white">CONTACT US</button>
                            </li>
                        </ul>
                        <section className={displayDevice ? `${Nav4Css.hamburger}` : `${Nav4Css.hamburgerMobile}`}>
                            <span className={Nav4Css.bar}></span>
                            <span className={Nav4Css.bar}></span>
                            <span className={Nav4Css.bar}></span>
                        </section>
                    </nav>
                </div>
            </div>
        </>
    )
}
